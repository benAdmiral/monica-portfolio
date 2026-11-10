// src/components/sections/Experience.tsx
import { Briefcase, HeartPulse, Megaphone, CarFront, Store } from "lucide-react";

// Monica's professional history, based on her supplied resumes.
// Edit the entries below to update this page without changing src/data/resume.tsx.
const career = [
  {
    company: "Tegrity Bros",
    title: "Marketing Director & Sales President",
    period: "May 2026 – Present",
    icon: Megaphone,
    highlights: [
      "Led marketing and sales initiatives for a bourbon brand operating as a non-distiller producer (NDP).",
      "Managed the brand's barrel-pick program and supported the coordination and promotion of barrel-pick experiences.",
      "Created and supported social media content and promotional messaging that tells the brand's story.",
    ],
  },
  {
    company: "Old Steelhouse Distillery",
    title: "Promoter & Consultant",
    period: "May 2026 – Present",
    icon: Megaphone,
    highlights: [
      "Promoted the tasting room and help attract visitors to the Bardstown location.",
      "Supported the planning and promotion of barrel-pick experiences and related visitor engagement.",
    ],
  },
  {
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

export function Experience() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      <header className="mb-12 animate-fade-up">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-muted-foreground text-lg">
          A career built on caring for people, building relationships, and connecting brands with opportunities.
        </p>
      </header>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#4A3B35]/15 before:to-transparent">
        {career.map((job, index) => {
          const Icon = job.icon;
          return (
            <div
              key={`${job.company}-${index}`}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border border-[#977856]/25 bg-[#FAF7F2] flex items-center justify-center shadow-[0_0_0_4px_rgba(250,247,242,0.92)] z-10 -translate-x-1/2">
                <Icon className="w-4 h-4 text-[#806448]" aria-hidden="true" />
              </div>
              <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0">
                <article className="glass-card p-6 rounded-2xl transition-transform duration-300 group-hover:-translate-y-1 border border-[#977856]/15 hover:border-[#977856]/30">
                  <h3 className="font-bold text-lg leading-snug mb-1 text-[#4A3B35]">{job.company}</h3>
                  <p className="text-[#795B3D] text-sm font-semibold mb-3">{job.title}</p>
                  <p className="text-xs font-medium text-[#66564C] mb-4 uppercase tracking-wide bg-[#E9DFD2]/65 inline-block px-2 py-1 rounded">
                    {job.period}
                  </p>
                  <ul className="space-y-2">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-[#625249] leading-relaxed flex items-start gap-2">
                        <span className="block w-1.5 h-1.5 rounded-full bg-[#A88A6B] mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
