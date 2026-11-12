// src/components/sections/Testimonials.tsx
// Public recognition is distinguished from third-party venue feedback.
// The two venue feedback summaries are NOT direct endorsements of Monica.
import { Award, ArrowUpRight, HeartHandshake, MessageSquareQuote, Quote } from "lucide-react";

const chamberSource =
  "https://myemail.constantcontact.com/February-E-News--The-Latest-Chamber-News-.html?aid=ujMXHJkdjOA&soid=1131943876042";
const venueWebsite = "https://www.majesticmemoriesvenue.com/";

const venueFeedback = [
  {
    title: "Going Above & Beyond",
    summary:
      "A wedding industry professional reportedly appreciated the venue owner's hands-on help with setup and decorations.",
  },
  {
    title: "There When It Matters",
    summary:
      "A wedding couple reportedly appreciated the venue owners' responsiveness and help finding a replacement bartender.",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-5xl pb-12 text-[#4A3B35] animate-fade-up">
      <header className="mb-9 border-b border-[#D9CAB9] pb-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#806143]">
          Recognition · Community · Connections
        </p>
        <h1 className="bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent md:text-5xl">
          Kind Words &amp; Connections
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64554B] md:text-lg">
          Meaningful relationships, community recognition, and experiences that make a difference.
        </p>
      </header>

      <article className="glass-card rounded-[1.75rem] border border-[#E5D9CC] bg-white/90 px-6 py-9 shadow-sm sm:px-10 sm:py-12 md:px-14">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-[#E5D9CC] bg-[#F2ECE5] p-3 text-[#806143]">
              <Award className="h-7 w-7" aria-hidden="true" />
            </div>
            <span className="rounded-full border border-[#D9CAB9] bg-[#F2ECE5] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#71573E]">
              Official recognition
            </span>
          </div>
          <span className="text-sm text-[#715D4B]">February 2025</span>
        </div>
        <h2 className="mb-5 text-2xl font-bold tracking-tight md:text-3xl">Ambassador of the Month</h2>
        <Quote className="mb-4 h-9 w-9 text-[#A88A6B]" aria-hidden="true" />
        <blockquote className="max-w-3xl text-lg font-medium italic leading-relaxed text-[#4A3B35] sm:text-xl md:text-2xl md:leading-[1.55]">
          “Monica Adkins continues to show her support for the Chamber. She is a faithful Ambassador and continues to help promote the Chamber.”
        </blockquote>
        <div className="my-8 h-px bg-[#E9DFD2]" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#4A3B35]">Bardstown-Nelson County Chamber of Commerce</p>
            <p className="mt-1 text-sm text-[#715D4B]">February 2025 newsletter · Community recognition</p>
          </div>
          <a
            href={chamberSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#CBB9A5] bg-[#F2ECE5] px-4 py-2.5 text-sm font-semibold text-[#4A3B35] transition-colors hover:bg-[#E9DFD2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806143]"
          >
            Original recognition <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </article>

      <div className="mt-24 mb-5">
        <div className="mb-3 flex items-center gap-3 text-[#806143]">
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.16em]">Venue experiences</span>
        </div>
        <h2 className="text-2xl font-bold text-[#4A3B35] md:text-3xl">Majestic Memories — Customer Feedback</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#64554B] md:text-base">
          These summaries describe reported customer experiences at Majestic Memories. They are not direct testimonials about Monica. The original individual reviews have not yet been independently verified.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {venueFeedback.map((item) => (
          <article key={item.title} className="glass-card flex flex-col rounded-[1.5rem] border border-[#E5D9CC] bg-white/90 p-6 shadow-sm md:p-8">
            <MessageSquareQuote className="mb-5 h-7 w-7 text-[#977856]" aria-hidden="true" />
            <h3 className="mb-3 text-xl font-semibold text-[#4A3B35]">{item.title}</h3>
            <p className="flex-1 text-sm leading-relaxed text-[#64554B] md:text-base">{item.summary}</p>
            <p className="mt-5 border-t border-[#E9DFD2] pt-4 text-xs text-[#715D4B]">
              Venue feedback summary · Original review pending verification
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-[#D9CAB9] bg-[#F2ECE5]/70 p-5 text-sm text-[#64554B]">
        <p>
          <strong className="text-[#4A3B35]">About the venue:</strong> Learn more about Majestic Memories on its official website. This link provides venue information, not the original text of either review.
        </p>
        <a href={venueWebsite} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 font-semibold text-[#71573E] underline underline-offset-4 hover:text-[#4A3B35]">
          Visit Majestic Memories <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
