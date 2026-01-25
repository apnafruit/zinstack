import React from "react";
import {
  Boxes,
  Users,
  CreditCard,
  Package,
  UsersRound,
  KanbanSquare,
  Store,
  GraduationCap,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";

type Product = {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  solutions: string[];
  benefits: string[];
  bestFor: string[];
};

const products: Product[] = [
  {
    id: "erp",
    title: "ERP Systems",
    icon: Boxes,
    color: "text-blue-400",
    description:
      "End-to-end platform to manage core business operations from a single system.",
    solutions: ["Finance", "Inventory", "HR", "Procurement"],
    benefits: ["Operational efficiency", "Centralized data", "Scalable growth"],
    bestFor: ["Enterprises", "Manufacturing", "SMEs"],
  },
  {
    id: "crm",
    title: "CRM Solutions",
    icon: Users,
    color: "text-indigo-400",
    description:
      "Track leads, manage customers, and improve sales performance.",
    solutions: ["Lead tracking", "Sales automation", "Analytics"],
    benefits: ["Higher conversions", "Customer retention", "Sales visibility"],
    bestFor: ["Sales teams", "Agencies", "Service businesses"],
  },
  {
    id: "pos",
    title: "POS Systems",
    icon: CreditCard,
    color: "text-emerald-400",
    description:
      "Fast billing with real-time inventory and payment support.",
    solutions: ["Billing", "Inventory sync", "Payments"],
    benefits: ["Faster checkout", "Stock accuracy", "Multi-location support"],
    bestFor: ["Retail", "Restaurants"],
  },
  {
    id: "billing",
    title: "Billing & Inventory",
    icon: Package,
    color: "text-orange-400",
    description: "Accurate invoicing and real-time stock control.",
    solutions: ["GST billing", "Stock alerts", "Vendor management"],
    benefits: ["Fewer errors", "Inventory optimization", "Compliance ready"],
    bestFor: ["Distributors", "Retailers"],
  },
  {
    id: "hrms",
    title: "HRMS Platform",
    icon: UsersRound,
    color: "text-pink-400",
    description:
      "Manage payroll, attendance, and the employee lifecycle.",
    solutions: ["Payroll", "Attendance", "Leave management"],
    benefits: ["Reduced HR workload", "Compliance", "Employee engagement"],
    bestFor: ["Growing teams", "Enterprises"],
  },
  {
    id: "project",
    title: "Project Management",
    icon: KanbanSquare,
    color: "text-purple-400",
    description: "Plan, track, and deliver projects with clarity.",
    solutions: ["Task tracking", "Timelines", "Collaboration"],
    benefits: ["On-time delivery", "Team alignment", "Visibility"],
    bestFor: ["Agencies", "Product teams"],
  },
  {
    id: "multivendor",
    title: "Multivendor Marketplace",
    icon: Store,
    color: "text-yellow-400",
    description:
      "Launch scalable marketplaces with vendor management.",
    solutions: ["Vendor onboarding", "Commission system", "Payments"],
    benefits: ["Fast launch", "Scalable vendors", "Automated payouts"],
    bestFor: ["Startups", "Marketplaces"],
  },
  {
    id: "lms",
    title: "Learning Management",
    icon: GraduationCap,
    color: "text-red-400",
    description:
      "Deliver courses, assessments, and certifications online.",
    solutions: ["Courses", "Assessments", "Certificates"],
    benefits: ["Scalable learning", "Progress tracking", "Mobile access"],
    bestFor: ["Institutions", "Corporate training"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    icon: ShoppingBag,
    color: "text-cyan-400",
    description:
      "Ready-to-launch online stores with payments and orders.",
    solutions: ["Storefront", "Payments", "Order management"],
    benefits: ["Quick launch", "Secure payments", "Scalable infra"],
    bestFor: ["D2C brands", "Retailers"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 lg:px-12 bg-black">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl">
            Affordable ERP, CRM, POS, and HRMS — built to launch fast
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                className="
                  relative group
                  lg:[&:nth-child(3n)]:hover:[&>.hover-box]:right-full
                  lg:[&:nth-child(3n)]:hover:[&>.hover-box]:left-auto
                  lg:[&:nth-child(3n)]:hover:[&>.hover-box]:mr-4
                  lg:[&:nth-child(3n)]:hover:[&>.hover-box]:ml-0
                "
              >
                {/* Card */}
                <article className="bg-[#0E1320] border border-white/6 rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer transition hover:border-white/12">
                  <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition">
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {p.title}
                  </h3>
                </article>

                {/* Hover Details Box */}
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
                    <Icon className={`w-6 h-6 ${p.color}`} />
                    <span className="font-semibold text-white">{p.title}</span>
                  </div>

                  <p className="text-xs text-white/70 mb-4 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-semibold mb-1">Solutions</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.solutions.map((s, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-semibold mb-1">Key Benefits</div>
                    <ul className="text-xs text-white/70 list-disc list-inside space-y-1">
                      {p.benefits.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-white/60 mt-auto">
                    <span className="font-semibold text-white">Best for:</span>{" "}
                    {p.bestFor.join(" • ")}
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
