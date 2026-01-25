import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Mobile App Development",
      description: "Native iOS, Android and cross-platform apps with exceptional UX.",
      outcomes: ["iOS & Android", "React Native / Flutter", "App Store deployment"]
    },
    {
      icon: Code2,
      title: "Website Development",
      description: "Modern responsive websites and progressive web apps built with React and Next.js.",
      outcomes: ["React & Next.js", "PWA-ready", "Responsive & accessible"]
    },
    {
      icon: Code2,
      title: "DevOps Services",
      description: "CI/CD pipelines, infrastructure automation, and deployment solutions.",
      outcomes: ["CI/CD pipelines", "Infrastructure as Code", "Automated deployments"]
    },
    {
      icon: Code2,
      title: "Cloud Services",
      description: "AWS, Azure and GCP cloud infrastructure, migration and enterprise management.",
      outcomes: ["Cloud migration", "Multi-cloud architecture", "Cost & security optimizations"]
    },
    {
      icon: Code2,
      title: "AI & ML Solutions",
      description: "Intelligent automation, predictive analytics, NLP and computer vision solutions.",
      outcomes: ["Predictive models", "NLP & chatbots", "Computer vision"]
    },
    {
      icon: Code2,
      title: "E-commerce Development",
      description: "Complete online store solutions with payments and inventory management.",
      outcomes: ["Payment integration", "Inventory & catalog", "Checkout optimization"]
    },
    {
      icon: Code2,
      title: "Custom Software",
      description: "Tailored enterprise applications and bespoke solutions for unique requirements.",
      outcomes: ["Enterprise apps", "Custom integrations", "Scalable architecture"]
    },
    {
      icon: Code2,
      title: "Testing & QA",
      description: "Comprehensive testing including automation, performance and security QA.",
      outcomes: ["Test automation", "Performance testing", "Security audits"]
    },
    {
      icon: Code2,
      title: "UI/UX Design",
      description: "User-centered design, wireframing, prototyping and visual interfaces.",
      outcomes: ["Wireframes & flows", "Interactive prototypes", "User research"]
    },
    {
      icon: Code2,
      title: "ERP & CRM Solutions",
      description: "Enterprise resource planning and customer relationship management systems.",
      outcomes: ["ERP integrations", "CRM customization", "Operational automation"]
    },
    {
      icon: Code2,
      title: "Web3 Development",
      description: "Decentralized applications, smart contracts and Web3 solutions.",
      outcomes: ["dApp development", "Wallet integrations", "Tokenomics"]
    },
    {
      icon: Code2,
      title: "Blockchain & Dapp",
      description: "Secure blockchain implementations and decentralized application development.",
      outcomes: ["Smart contracts", "Audit-ready code", "Decentralized storage"]
    },
    {
      icon: Code2,
      title: "Game Development",
      description: "Engaging mobile and web games with stunning graphics and multiplayer features.",
      outcomes: ["2D & 3D games", "Multiplayer backend", "Performance & optimization"]
    },
    {
      icon: Code2,
      title: "SaaS Applications",
      description: "Scalable cloud-based SaaS platforms with multi-tenant and billing systems.",
      outcomes: ["Multi-tenant design", "Automated billing", "Scalable infra"]
    },
    {
      icon: Code2,
      title: "Graphic Design",
      description: "Brand identity, logos and marketing materials for strong visual presence.",
      outcomes: ["Brand identity", "Logo design", "Marketing collateral"]
    },
    {
      icon: Code2,
      title: "Video & Animation",
      description: "Professional video production, motion graphics and animated content.",
      outcomes: ["Explainers & promos", "Motion graphics", "Post-production"]
    },
    {
      icon: Code2,
      title: "Digital Marketing",
      description: "Comprehensive digital strategies to grow online presence and revenue.",
      outcomes: ["SEO & content", "Growth strategy", "Analytics & reporting"]
    },
    {
      icon: Code2,
      title: "Social Media Marketing",
      description: "Audience engagement and brand awareness across social platforms.",
      outcomes: ["Content strategy", "Community growth", "Ad creative"]
    },
    {
      icon: Code2,
      title: "Ads Management",
      description: "Google Ads, Facebook Ads and multi-channel advertising campaign management.",
      outcomes: ["Campaign strategy", "A/B testing", "Conversion optimization"]
    },
    {
      icon: Code2,
      title: "Email Marketing",
      description: "Targeted email campaigns, automation workflows and newsletters.",
      outcomes: ["Drip campaigns", "Automation workflows", "Segmentation"]
    },
    {
      icon: Code2,
      title: "Content Writing",
      description: "SEO-optimized content, blogs, copywriting and technical documentation.",
      outcomes: ["SEO content", "Technical docs", "Marketing copy"]
    },
    {
      icon: Code2,
      title: "IT Consulting",
      description: "Strategic technology consulting and digital transformation guidance.",
      outcomes: ["Technology strategy", "Roadmapping", "Cost & risk analysis"]
    },
    {
      icon: Code2,
      title: "POS & Billing Systems",
      description: "Point of sale solutions with inventory, billing and real-time analytics.",
      outcomes: ["POS integrations", "Inventory sync", "Real-time reports"]
    },
    {
      icon: Code2,
      title: "HRMS Development",
      description: "Human resource management systems for payroll, attendance and employee management.",
      outcomes: ["Payroll & benefits", "Attendance tracking", "Employee self-service"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden bg-black">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p 
            className="text-2xl sm:text-3xl text-white font-semibold"
            style={{ fontFamily: "'sora', sans-serif" }}
          >
            End-to-end solutions for modern web experiences
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1A1F2C]/50 border border-[#9AA4B2]/10 rounded-xl p-6 sm:p-6 md:p-8 space-y-5 transition-all hover:border-[#3B82F6]/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] cursor-pointer min-h-[140px]"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#3B82F6]" />
                </div>
                
                <div className="space-y-3">
                  <h3 
                    className="text-lg sm:text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-[#9AA4B2] text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {service.outcomes.map((outcome, i) => (
                    <li 
                      key={i}
                      className="text-sm text-[#9AA4B2] flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
