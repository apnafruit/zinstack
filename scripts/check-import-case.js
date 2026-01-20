const fs = require('fs');
const path = require('path');

function walk(dir, cb) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

function findActualPath(resolved) {
  const parts = path.normalize(resolved).split(path.sep);
  let cur = parts[0] === '' ? path.sep : parts[0];
  if (parts[0] === '') parts.shift();
  // start from root or drive
  cur = parts.shift() || '';
  if (!cur) cur = path.sep;
  let acc = cur;
  for (const p of parts) {
    try {
      const entries = fs.readdirSync(acc);
      const match = entries.find(e => e === p || e.toLowerCase() === p.toLowerCase());
      if (!match) return null;
      acc = path.join(acc, match);
    } catch (e) {
      return null;
    }
  }
  return acc;
}

function checkImportCase(file) {
  const content = fs.readFileSync(file, 'utf8');
  const re = /(?:import|export)\s+(?:[^'"{}*]+from\s+)?["']([^"']+)["']/g;
  let m;
  const dir = path.dirname(file);
  const errors = [];
  while ((m = re.exec(content))) {
    const spec = m[1];
    if (!spec.startsWith('.') && !spec.startsWith('/')) continue;
    const candidates = [];
    const base = path.resolve(dir, spec);
    const exts = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.tsx', '/index.js', '/index.jsx'];
    for (const e of exts) candidates.push(base + e);
    const found = candidates.find(p => {
      try { return fs.existsSync(p); } catch (e) { return false; }
    });
    if (!found) continue;
    const actual = findActualPath(found);
    if (!actual) continue;
    const normFound = path.normalize(found);
    const normActual = path.normalize(actual);
    if (normFound !== normActual) {
      errors.push({file, spec, resolved: found, actual});
    }
  }
  return errors;
}

const root = path.resolve(__dirname, '..', 'src');
const allErrors = [];
walk(root, f => {
  if (!/\.(ts|tsx|js|jsx)$/.test(f)) return;
  try {
    const errs = checkImportCase(f);
    for (const e of errs) allErrors.push(e);
  } catch (err) {
    // ignore parse errors
  }
});

if (allErrors.length === 0) {
  console.log('No case-mismatch import issues found.');
  process.exit(0);
}
console.log('Case-mismatch import issues found:');
for (const e of allErrors) {
  console.log(`- In ${e.file}: import '${e.spec}' resolved to '${e.resolved}' but actual path is '${e.actual}'`);
}
process.exit(1);
