// src/components/sections/Portfolio.tsx
// Monica's Brands & Network page. This file is self-contained; it does not use
// the original template's developer projects from src/data/resume.tsx.
import { useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, Camera, ChevronDown, Handshake, Wine } from "lucide-react";

type Brand = {
  id: string;
  name: string;
  relationship: string;
  category: string;
  description: string;
  highlights: string[];
  icon: typeof Wine;
  initials: string;
};

const brands: Brand[] = [
  {
    id: "tegrity-bros",
    name: "Tegrity Bros",
    relationship: "Marketing Director & Sales President",
    category: "Brand Leadership",
    description:
      "Supporting the growth and visibility of a bourbon brand through marketing, sales, and relationship-building.",
    highlights: [
      "Lead marketing and sales-related initiatives for a non-distiller producer (NDP).",
      "Manage the barrel-pick program and support the coordination and promotion of barrel-pick experiences.",
      "Create and support social media content and promotional messaging that tells the brand's story.",
    ],
    icon: Wine,
    initials: "TB",
  },
  {
    id: "old-steelhouse",
    name: "Old Steelhouse Distillery",
    relationship: "Promoter & Consultant",
    category: "Hospitality & Promotion",
    description:
      "Connecting visitors with tasting-room experiences in Bardstown through promotion and guest engagement.",
    highlights: [
      "Promote the tasting room and help attract visitors to the Bardstown location.",
      "Support the planning and promotion of barrel-pick experiences and related visitor engagement.",
    ],
    icon: BriefcaseBusiness,
    initials: "OS",
  },
  {
    id: "majestic-memories",
    name: "Majestic Memories",
    relationship: "Professional Network Connection",
    category: "Creative Network",
    description:
      "Part of Monica's wider professional and creative network, built around meaningful connections.",
    highlights: [
      "Included as a network connection; specific collaboration details can be added once confirmed.",
    ],
    icon: Camera,
    initials: "MM",
  },
];

export function Portfolio() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="max-w-5xl mx-auto pb-12 text-[#4A3B35]">
      <header className="mb-9 border-b border-[#D9CAB9] pb-7 animate-fade-up">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#806143] mb-3">
          <Handshake className="w-4 h-4" aria-hidden="true" /> Monica Adkins · Professional Network
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-transparent">
          Brands &amp; Network
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#64554B]">
          A look at the brands, business relationships, and creative connections that are part of my professional journey.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {brands.map((brand, index) => {
          const Icon = brand.icon;
          const isExpanded = expanded === brand.id;
          const detailsId = `brand-details-${brand.id}`;
          return (
            <article
              key={brand.id}
              className={`glass-card rounded-[1.5rem] p-6 md:p-7 flex flex-col animate-fade-up ${index === 2 ? "lg:col-span-2" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 h-16 w-16 rounded-2xl bg-[#EEE5DB] border border-[#D9CAB9] flex flex-col items-center justify-center text-[#725338]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-widest mt-1">{brand.initials}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="uppercase tracking-wider text-[11px] font-semibold text-[#806143] mb-1">{brand.category}</p>
                  <h2 className="text-xl md:text-2xl font-bold leading-tight text-[#4A3B35]">{brand.name}</h2>
                  <p className="text-sm font-medium text-[#765B43] mt-1">{brand.relationship}</p>
                </div>
              </div>

              <p className="text-[#64554B] leading-relaxed mb-5 flex-1">{brand.description}</p>

              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={detailsId}
                onClick={() => setExpanded(isExpanded ? null : brand.id)}
                className="inline-flex w-full justify-between items-center gap-3 rounded-xl border border-[#CEB9A3] bg-[#F2ECE5] px-4 py-3 text-sm font-semibold text-[#4A3B35] hover:bg-[#E9DFD2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806143] transition-colors"
              >
                <span>{isExpanded ? "Hide details" : "Explore connection"}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>

              {isExpanded && (
                <div id={detailsId} className="mt-5 border-t border-[#E2D6CA] pt-5">
                  <h3 className="text-sm font-bold tracking-wide text-[#4A3B35] mb-3">
                    {brand.id === "majestic-memories" ? "Connection notes" : "Key contributions"}
                  </h3>
                  <ul className="space-y-3">
                    {brand.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-[#64554B]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#977856]" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <aside className="mt-8 rounded-2xl border border-[#D9CAB9] bg-[#F2ECE5]/70 p-5 md:p-6 flex items-start gap-3">
        <ArrowUpRight className="w-5 h-5 text-[#806143] shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <h2 className="font-semibold text-[#4A3B35]">More connections to come</h2>
          <p className="text-sm leading-relaxed text-[#64554B] mt-1">
            This network will continue to grow as new collaborations, partnerships, and projects take shape.
          </p>
        </div>
      </aside>
    </section>
  );
}
