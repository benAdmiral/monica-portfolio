// src/components/sections/Experience.tsx
import { useState } from "react";
import { HeartPulse, Megaphone, CarFront, Store, CalendarDays } from "lucide-react";

// Edit the career entries here; this page does not change src/data/resume.tsx.
const career = [
  {
    category: "business" as const,
    company: "Tegrity Bros",
    title: "Marketing Director & Sales President",
    period: "May 2026 – Present",
    icon: Megaphone,
    highlights: [
      "Lead marketing and sales initiatives for a bourbon brand operating as a non-distiller producer (NDP).",
      "Manage the brand's barrel-pick program and support the coordination and promotion of barrel-pick experiences.",
      "Create and support social media content and promotional messaging that tells the brand's story.",
    ],
  },
  {
    category: "business" as const,
    company: "Old Steelhouse Distillery",
    title: "Promoter & Consultant",
    period: "May 2026 – Present",
    icon: Megaphone,
    highlights: [
      "Promote the tasting room and help attract visitors to the Bardstown location.",
      "Support the planning and promotion of barrel-pick experiences and related visitor engagement.",
    ],
  },
  {
    category: "business" as const,
    company: "Bob Swope Ford",
    title: "Office Manager",
    period: "Jan 2025 – Dec 2025",
    icon: Store,
    highlights: [
      "Supported front-of-house operations, Square POS, register reports, cash-drawer counts, and scheduling.",
      "Operated a forklift and supported inventory organization, stocking, pricing, and general store operations.",
      "Managed day-to-day activity for the in-store Ashley Furniture area, including orders and customer assistance.",
    ],
  },
  {
    category: "business" as const,
    company: "Striker / Strike a Bargain Liquidation",
    title: "Automotive Sales Professional",
    period: "Feb 2021 – Feb 2025",
    icon: CarFront,
    highlights: [
      "Guided customers through vehicle purchases with attentive follow-through and clear communication.",
      "Created social media marketing videos and supported dealership visibility through promotion and networking.",
      "Helped customers navigate service and maintenance follow-up throughout the process.",
    ],
  },
  {
    category: "healthcare" as const,
    company: "Signature Healthcare Center of Spencer County",
    title: "Licensed Practical Nurse (LPN) — PRN",
    period: "Jun 2006 – Sep 2025",
    icon: HeartPulse,
    highlights: [
      "Provided nursing care and monitored patients' health conditions and daily needs.",
      "Administered medications and treatments according to physician orders and care plans.",
      "Documented patient conditions, health changes, and nursing interventions.",
    ],
  },
  {
    category: "healthcare" as const,
    company: "Harborside — Geriatrics, Alzheimer's Unit",
    title: "Geriatric & Dementia Care",
    period: "2013 – 2019",
    icon: HeartPulse,
    highlights: [
      "Delivered compassionate care to elderly patients with Alzheimer's disease and dementia.",
      "Assisted residents with daily living activities while maintaining dignity and comfort.",
      "Monitored behavioral and cognitive changes and communicated concerns to the care team.",
    ],
  },
  {
    category: "healthcare" as const,
    company: "Taylor's Ville Healthcare Center",
    title: "Certified Nursing Assistant (CNA) / Certified Medication Technician (CMT)",
    period: "Jan 1999 – Jun 2006",
    icon: HeartPulse,
    highlights: [
      "Assisted residents with personal care, hygiene, mobility, and daily living activities.",
      "Administered medications within the scope of CMT certification and facility protocols.",
      "Maintained care documentation and supported nursing staff in daily operations.",
    ],
  },
  {
    category: "healthcare" as const,
    company: "Federal Hill Manor",
    title: "Certified Nursing Assistant (CNA)",
    period: "May 1997 – Dec 1999",
    icon: HeartPulse,
    highlights: [
      "Provided hands-on assistance with bathing, dressing, grooming, and personal hygiene.",
      "Helped residents with mobility, transfers, and daily activities.",
      "Observed and reported patient needs and changes in condition to nursing staff.",
    ],
  },
];

type CareerFilter = "all" | "business" | "healthcare";
const filters: { label: string; value: CareerFilter }[] = [
  { label: "All Experience", value: "all" },
  { label: "Business", value: "business" },
  { label: "Healthcare", value: "healthcare" },
];

export function Experience() {
  const [filter, setFilter] = useState<CareerFilter>("all");
  const visibleJobs = career.filter((job) => filter === "all" || job.category === filter);

  return (
    <div className="mx-auto max-w-4xl pb-12">
      <header className="mb-8 animate-fade-up">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#806448]">
          Monica Adkins · Career Journey
        </p>
        <h1 className="mb-4 bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
          Professional Experience
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-[#625249] md:text-lg">
          A career built on caring for people, building relationships, and connecting brands with opportunities.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter professional experience">
        {filters.map(({ label, value }) => {
          const selected = filter === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(value)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806448] ${
                selected
                  ? "border-[#6F543D] bg-[#6F543D] text-white shadow-sm"
                  : "border-[#D9CABB] bg-white/80 text-[#4A3B35] hover:border-[#977856] hover:bg-[#EFE8DF]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="relative pl-7 sm:pl-9 before:absolute before:bottom-4 before:left-[9px] sm:before:left-[11px] before:top-4 before:w-px before:bg-[#D9CABB]">
        <div className="space-y-5">
          {visibleJobs.map((job, index) => {
            const Icon = job.icon;
            const isCurrent = job.period.includes("Present");
            return (
              <article
                key={job.company}
                className="relative animate-fade-up rounded-2xl border border-[#E5DAD0] bg-white/90 p-5 shadow-[0_8px_28px_rgba(74,59,53,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#BAA18A] hover:shadow-[0_14px_32px_rgba(74,59,53,0.10)] sm:p-7"
                style={{ animationDelay: `${Math.min(index, 6) * 80}ms` }}
              >
                <span className="absolute -left-[27px] top-7 flex h-[19px] w-[19px] items-center justify-center rounded-full border-[4px] border-[#FAF7F2] bg-[#94785E] sm:-left-[35px] sm:h-[23px] sm:w-[23px]" aria-hidden="true" />
                <div className="mb-4 flex items-start gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#E3D5C8] bg-[#F3EEE8] text-[#806448]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
                      <h2 className="text-lg font-bold leading-snug text-[#4A3B35] sm:text-xl">{job.company}</h2>
                      {isCurrent && (
                        <span className="rounded-full border border-[#D3C0AC] bg-[#EFE5DA] px-2.5 py-0.5 text-xs font-semibold text-[#594532]">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-semibold leading-relaxed text-[#735638] sm:text-base">{job.title}</p>
                  </div>
                </div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[#F3EEE8] px-3 py-1.5 text-xs font-semibold text-[#594A40] sm:text-sm">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  <span>{job.period}</span>
                </div>
                <ul className="space-y-2 border-t border-[#ECE3D9] pt-4">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[#5B5049] sm:text-base">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A88A6B]" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
