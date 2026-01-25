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
};

const products: Product[] = [
  { id: "erp", title: "ERP Systems", icon: Boxes },
  { id: "crm", title: "CRM Solutions", icon: Users },
  { id: "pos", title: "POS Systems", icon: CreditCard },
  { id: "billing", title: "Billing & Inventory", icon: Package },
  { id: "hrms", title: "HRMS Platform", icon: UsersRound },
  { id: "project", title: "Project Management", icon: KanbanSquare },
  { id: "multivendor", title: "Multivendor Marketplace", icon: Store },
  { id: "lms", title: "Learning Management", icon: GraduationCap },
  { id: "ecommerce", title: "E-commerce Platform", icon: ShoppingBag },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-20 px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black">
            Affordable ERP, CRM, POS, and HRMS — built to launch fast
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const Icon = p.icon;

            return (
              <article
                key={p.id}
                className="
                  group
                  bg-[#0E1320]
                  border border-white/6
                  rounded-2xl
                  p-6
                  flex flex-col items-center justify-center
                  text-center
                  hover:border-white/12
                  transition
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-4
                    w-12 h-12
                    flex items-center justify-center
                    rounded-xl
                    bg-white/5
                    text-blue-400
                    group-hover:scale-110
                    transition
                  "
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-sm sm:text-base">
                  {p.title}
                </h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
