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
  LucideIcon,
} from "lucide-react";

type Industry = {
  id: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  color: string;
  solutions: string[];
  benefits: string[];
  technologies: string[];
};

const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Healthcare Industry Solutions",
    icon: HeartPulse,
    color: "text-blue-400",
    solutions: [
      "Hospital Management Systems",
      "Electronic Health Records (EHR)",
      "Telemedicine platforms",
      "Patient scheduling",
    ],
    benefits: ["Improve patient care", "Streamline operations", "HIPAA compliance"],
    technologies: ["HL7 FHIR", "DICOM", "AI Diagnostics"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    subtitle: "E-Commerce Industry Solutions",
    icon: ShoppingCart,
    color: "text-indigo-400",
    solutions: ["B2C & B2B platforms", "Marketplace development", "Payment integrations"],
    benefits: ["Increase online sales", "Personalized shopping"],
    technologies: ["Shopify", "WooCommerce", "Stripe"],
  },
  {
    id: "finance",
    title: "Finance & Banking",
    subtitle: "Finance & Banking Industry Solutions",
    icon: Landmark,
    color: "text-emerald-400",
    solutions: ["Mobile banking apps", "Payment processing", "Loan systems"],
    benefits: ["Enhanced security", "Fraud detection"],
    technologies: ["Blockchain", "AI/ML", "Cloud Banking"],
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Education Industry Solutions",
    icon: GraduationCap,
    color: "text-yellow-400",
    solutions: ["Learning Management Systems", "Virtual classrooms", "Online exams"],
    benefits: ["Remote learning", "Performance tracking"],
    technologies: ["Cloud LMS", "Video Streaming"],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Real Estate Industry Solutions",
    icon: Home,
    color: "text-pink-400",
    solutions: ["Property portals", "CRM for agents", "Virtual tours"],
    benefits: ["Faster transactions", "Lead optimization"],
    technologies: ["VR/AR", "Cloud CRM"],
  },
  {
    id: "logistics",
    title: "Logistics",
    subtitle: "Logistics Industry Solutions",
    icon: Truck,
    color: "text-orange-400",
    solutions: ["Fleet management", "Route optimization", "Live tracking"],
    benefits: ["Lower costs", "Faster delivery"],
    technologies: ["GPS", "IoT", "AI Optimization"],
  },
  {
    id: "food",
    title: "Food & Beverage",
    subtitle: "Food & Beverage Industry Solutions",
    icon: Utensils,
    color: "text-red-400",
    solutions: ["Restaurant POS", "Online ordering", "Kitchen displays"],
    benefits: ["Faster orders", "Reduced errors"],
    technologies: ["Cloud POS", "Payment Integration"],
  },
  {
    id: "media",
    title: "Mass Media",
    subtitle: "Mass Media Industry Solutions",
    icon: Radio,
    color: "text-purple-400",
    solutions: ["Streaming platforms", "Content management", "Ad-tech systems"],
    benefits: ["Wider reach", "Content monetization"],
    technologies: ["CDN", "Streaming Protocols"],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-16 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-2xl text-white max-w-5xl mx-auto">
            Tailored digital systems designed for industry-specific challenges.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;

            return (
              <div
                key={ind.id}
                className="
                  relative group
                  lg:[&:nth-child(4n)]:hover:[&>.hover-box]:right-full
                  lg:[&:nth-child(4n)]:hover:[&>.hover-box]:left-auto
                  lg:[&:nth-child(4n)]:hover:[&>.hover-box]:mr-4
                  lg:[&:nth-child(4n)]:hover:[&>.hover-box]:ml-0

                  lg:[&:nth-child(4n-1)]:hover:[&>.hover-box]:right-full
                  lg:[&:nth-child(4n-1)]:hover:[&>.hover-box]:left-auto
                  lg:[&:nth-child(4n-1)]:hover:[&>.hover-box]:mr-4
                  lg:[&:nth-child(4n-1)]:hover:[&>.hover-box]:ml-0
                "
              >
                {/* Card */}
                <article className="p-6 bg-[#0E1320] border border-white/6 rounded-2xl cursor-pointer transition hover:border-white/12">
                  <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition">
                    <Icon className={`w-7 h-7 ${ind.color}`} />
                  </div>

                  <h3 className="font-bold text-lg mb-1">{ind.title}</h3>

                  {ind.subtitle && (
                    <div className="text-sm text-[#9AA4B2]">
                      {ind.subtitle}
                    </div>
                  )}
                </article>

                {/* Hover Detail Box */}
                <div
                  className="
                    hover-box
                    absolute top-1/2 left-full -translate-y-1/2 ml-4
                    w-72 min-h-[16rem] max-h-[28rem]
                    bg-[#0E1320] border border-white/10 rounded-2xl p-5
                    opacity-0 scale-95 pointer-events-none
                    transition-all duration-200 ease-out
                    group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
                    z-50 hidden lg:flex flex-col overflow-y-auto
                  "
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-6 h-6 ${ind.color}`} />
                    <span className="font-semibold text-white">{ind.title}</span>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold mb-1">Solutions</div>
                    <ul className="list-disc list-inside text-xs text-white/70 space-y-1">
                      {ind.solutions.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold mb-1">Key Benefits</div>
                    <ul className="list-disc list-inside text-xs text-white/70 space-y-1">
                      {ind.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="text-xs font-semibold mb-1">Technologies</div>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.technologies.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white/5 rounded text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
