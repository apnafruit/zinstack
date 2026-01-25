import React from "react";
import {
  HeartPulse,
  ShoppingCart,
  Landmark,
  GraduationCap,
  Home,
  Truck,
  Utensils,
  Radio,
  ShieldCheck,
  Globe,
  Cpu,
} from "lucide-react";

type Industry = {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  solutions?: string[];
  benefits?: string[];
  useCases?: string[];
  technologies?: string[];
};

const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Healthcare Industry Solutions",
    icon: <HeartPulse className="w-10 h-10 text-blue-400" />,
    solutions: [
      "Hospital Management Systems",
      "Electronic Health Records (EHR)",
      "Telemedicine platforms",
      "Patient appointment scheduling",
    ],
    benefits: [
      "Improve patient care quality",
      "Streamline hospital operations",
      "Ensure HIPAA compliance",
    ],
    technologies: ["HL7 FHIR", "DICOM", "AI Diagnostics"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    subtitle: "E-Commerce Industry Solutions",
    icon: <ShoppingCart className="w-10 h-10 text-indigo-400" />,
    solutions: [
      "B2C and B2B platforms",
      "Marketplace development",
      "Payment gateway integration",
    ],
    benefits: [
      "Increase online sales",
      "Personalized shopping experience",
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe"],
  },
  {
    id: "finance",
    title: "Finance & Banking",
    subtitle: "Finance & Banking Industry Solutions",
    icon: <Landmark className="w-10 h-10 text-emerald-400" />,
    solutions: [
      "Mobile banking apps",
      "Payment processing",
      "Loan management systems",
    ],
    benefits: [
      "Enhanced security",
      "Fraud detection",
    ],
    technologies: ["Blockchain", "AI/ML", "Cloud Banking"],
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Education Industry Solutions",
    icon: <GraduationCap className="w-10 h-10 text-yellow-400" />,
    solutions: [
      "Learning Management Systems",
      "Virtual classrooms",
      "Online examinations",
    ],
    benefits: [
      "Enable remote learning",
      "Track student performance",
    ],
    technologies: ["Cloud LMS", "Video Streaming"],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Real Estate Industry Solutions",
    icon: <Home className="w-10 h-10 text-pink-400" />,
    solutions: [
      "Property listing portals",
      "CRM for agents",
      "Virtual property tours",
    ],
    benefits: [
      "Faster transactions",
      "Better lead management",
    ],
    technologies: ["VR/AR", "Cloud CRM"],
  },
  {
    id: "logistics",
    title: "Logistics",
    subtitle: "Logistics Industry Solutions",
    icon: <Truck className="w-10 h-10 text-orange-400" />,
    solutions: [
      "Fleet management",
      "Route optimization",
      "Real-time tracking",
    ],
    benefits: [
      "Reduce operational costs",
      "Improve delivery times",
    ],
    technologies: ["GPS", "IoT", "AI Optimization"],
  },
  {
    id: "food-beverage",
    title: "Food & Beverage",
    subtitle: "Food & Beverage Industry Solutions",
    icon: <Utensils className="w-10 h-10 text-red-400" />,
    solutions: [
      "Restaurant POS",
      "Online ordering",
      "Kitchen display systems",
    ],
    benefits: [
      "Faster order processing",
      "Reduce kitchen errors",
    ],
    technologies: ["Cloud POS", "Payment Integration"],
  },
  {
    id: "mass-media",
    title: "Mass Media",
    subtitle: "Mass Media Industry Solutions",
    icon: <Radio className="w-10 h-10 text-purple-400" />,
    solutions: [
      "Streaming platforms",
      "Content management",
      "Ad-tech integrations",
    ],
    benefits: [
      "Reach large audiences",
      "Monetize content",
    ],
    technologies: ["CDN", "Streaming Protocols"],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-10 lg:py-10 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-14">
          <p className="mt-4 text-2xl text-white max-w-5xl mx-auto">
            Tailored digital systems designed for industry-specific challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind) => (
            <article
              key={ind.id}
              className="p-6 bg-[#0E1320] border border-white/6 rounded-2xl hover:border-white/10 transition"
            >
              {/* Icon */}
              <div className="mb-4">{ind.icon}</div>

              <h3 className="font-bold text-xl mb-1">{ind.title}</h3>
              {ind.subtitle && (
                <div className="text-sm text-[#9AA4B2] mb-4">
                  {ind.subtitle}
                </div>
              )}

              {ind.solutions && (
                <div className="mb-4">
                  <div className="text-sm font-semibold mb-2">Solutions</div>
                  <ul className="list-disc list-inside text-sm text-white/70 space-y-1">
                    {ind.solutions.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {ind.technologies && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {ind.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
