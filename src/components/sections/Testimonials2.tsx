// src/components/sections/Testimonials.tsx
import { useState } from "react";
import { ArrowLeft, ArrowRight, MessageSquareQuote, Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  image?: string; // Place an image in public/ and use a path like "/reviewers/person.webp"
};

// Add ONLY genuine, approved testimonials here. Leave [] until Monica has one.
// Example format (do not publish invented testimonials):
// { quote: "Exact approved words from a real person.", name: "Jane Doe", role: "Client", company: "Company" }
const testimonials: Testimonial[] = [];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = testimonials.length;
  const current = count > 0 ? testimonials[activeIndex % count] : null;

  return (
    <section className="mx-auto max-w-5xl pb-12 text-[#4A3B35] animate-fade-up">
      <header className="mb-9 border-b border-[#D9CAB9] pb-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#806143]">
          Real people · Meaningful connections
        </p>
        <h1 className="text-4xl font-bold tracking-tight leading-tight md:text-5xl bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-transparent">
          Kind Words &amp; Connections
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64554B] md:text-lg">
          Experiences shared by the people I've had the pleasure of working with.
        </p>
      </header>

      {current ? (
        <div className="glass-card rounded-[1.75rem] border border-[#E5D9CC] bg-white/90 px-6 py-9 shadow-sm sm:px-10 sm:py-12 md:px-14">
          <Quote className="mb-5 h-10 w-10 text-[#A88A6B]" aria-hidden="true" />
          <blockquote className="max-w-3xl text-xl font-medium italic leading-relaxed text-[#4A3B35] sm:text-2xl md:text-[1.75rem] md:leading-[1.5]">
            “{current.quote}”
          </blockquote>
          <div className="my-8 h-px bg-[#E9DFD2]" />
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              {current.image ? (
                <img src={current.image} alt="" className="h-14 w-14 rounded-full border border-[#E5D9CC] object-cover" />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E9DFD2] text-lg font-bold text-[#4A3B35]" aria-hidden="true">
                  {current.name.trim().charAt(0)}
                </div>
              )}
              <div>
                <p className="font-semibold text-[#4A3B35]">{current.name}</p>
                <p className="text-sm text-[#715D4B]">
                  {[current.role, current.company].filter(Boolean).join(" · ")}
                </p>
              </div>
            </div>
            {count > 1 && (
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#715D4B]">{activeIndex + 1} / {count}</span>
                <button type="button" aria-label="Previous testimonial" onClick={() => setActiveIndex((i) => (i - 1 + count) % count)} className="rounded-full border border-[#D9CAB9] bg-[#FAF7F2] p-3 hover:bg-[#E9DFD2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806143]">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button type="button" aria-label="Next testimonial" onClick={() => setActiveIndex((i) => (i + 1) % count)} className="rounded-full border border-[#D9CAB9] bg-[#FAF7F2] p-3 hover:bg-[#E9DFD2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806143]">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="glass-card flex min-h-[330px] flex-col items-center justify-center rounded-[1.75rem] border border-[#E5D9CC] bg-white/90 px-7 py-12 text-center shadow-sm">
          <div className="mb-5 rounded-2xl border border-[#E5D9CC] bg-[#F2ECE5] p-4">
            <MessageSquareQuote className="h-9 w-9 text-[#806143]" aria-hidden="true" />
          </div>
          <h2 className="text-2xl font-bold text-[#4A3B35]">Kind words coming soon</h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-[#64554B]">
            This space will feature genuine reflections from colleagues, clients, and professional partners.
          </p>
        </div>
      )}
    </section>
  );
}
