// src/components/sections/Portfolio.tsx
// Monica's Brands & Network: responsive photo cards, expandable brand details,
// thumbnail gallery, and full-screen photo viewer.
// Temporary images are from Unsplash. Replace each `src` with your own file in /public.
import { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness,
  Camera, Handshake, Images, Wine, X,
} from "lucide-react";

type Photo = { src: string; alt: string; caption: string };
type Brand = {
  id: string;
  name: string;
  relationship: string;
  category: string;
  description: string;
  highlights: string[];
  icon: typeof Wine;
  photos: Photo[];
};

// SAMPLE PHOTOS: these illustrate the industries, NOT Monica's actual brand work.
// To swap later, put an image in public/portfolio/ and use e.g.
// { src: "/portfolio/tegrity-bros-1.webp", alt: "...", caption: "..." }
const brands: Brand[] = [
  {
    id: "tegrity-bros", name: "Tegrity Bros",
    relationship: "Marketing Director & Sales President", category: "Brand Leadership",
    description: "Supporting the growth and visibility of a bourbon brand through marketing, sales, and relationship-building.",
    highlights: [
      "Lead marketing and sales-related initiatives for a non-distiller producer (NDP).",
      "Manage the barrel-pick program and support the coordination and promotion of barrel-pick experiences.",
      "Create and support social media content and promotional messaging that tells the brand's story.",
    ],
    icon: Wine,
    photos: [
      { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80", alt: "Wine glasses in warm light", caption: "Sample beverage photography" },
      { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80", alt: "Warm bar and drinks setting", caption: "Sample hospitality atmosphere" },
      { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80", alt: "Warm natural scenery", caption: "Sample lifestyle photography" },
    ],
  },
  {
    id: "old-steelhouse", name: "Old Steelhouse Distillery",
    relationship: "Promoter & Consultant", category: "Hospitality & Promotion",
    description: "Connecting visitors with tasting-room experiences in Bardstown through promotion and guest engagement.",
    highlights: [
      "Promote the tasting room and help attract visitors to the Bardstown location.",
      "Support the planning and promotion of barrel-pick experiences and related visitor engagement.",
    ],
    icon: BriefcaseBusiness,
    photos: [
      { src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80", alt: "Bar interior with drinks", caption: "Sample tasting-room atmosphere" },
      { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&q=80", alt: "Glasses photographed on a table", caption: "Sample beverage photography" },
      { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=80", alt: "Gathering in an event venue", caption: "Sample event photography" },
    ],
  },
  {
    id: "majestic-memories", name: "Majestic Memories",
    relationship: "Professional Network Connection", category: "Creative Network",
    description: "Part of Monica's wider professional and creative network, built around meaningful connections.",
    highlights: ["Included as a network connection; specific collaboration details can be added once confirmed."],
    icon: Camera,
    photos: [
      { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80", alt: "Elegant indoor celebration setting", caption: "Sample event photography" },
      { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80", alt: "Styled wedding reception", caption: "Sample celebration photography" },
      { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1200&q=80", alt: "Guests gathered at an event", caption: "Sample gathering photography" },
    ],
  },
];

const focusClass = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#806143]";

export function Portfolio() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightbox, setLightbox] = useState<{ brandId: string; index: number } | null>(null);
  const activeBrand = lightbox ? brands.find((brand) => brand.id === lightbox.brandId) : undefined;

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (!activeBrand) return;
      if (e.key === "ArrowRight") setLightbox((p) => p && ({ ...p, index: (p.index + 1) % activeBrand.photos.length }));
      if (e.key === "ArrowLeft") setLightbox((p) => p && ({ ...p, index: (p.index - 1 + activeBrand.photos.length) % activeBrand.photos.length }));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, activeBrand]);

  function toggleBrand(id: string) {
    setExpanded((old) => old === id ? null : id);
    setActiveIndex(0);
  }

  return (
    <section className="max-w-5xl mx-auto pb-12 text-[#4A3B35]">
      <header className="mb-8 border-b border-[#D9CAB9] pb-7 animate-fade-up">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#806143] mb-3">
          <Handshake className="w-4 h-4" aria-hidden="true" /> Monica Adkins · Professional Network
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-transparent">
          Moments &amp; Connections
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#64554B]">
          Explore the brands, business relationships, and experiences that are part of my professional journey.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand, index) => {
          const Icon = brand.icon;
          const isExpanded = expanded === brand.id;
          return (
            <article key={brand.id}
              className={`glass-card rounded-[1.5rem] overflow-hidden flex flex-col animate-fade-up ${index === 0 ? "md:col-span-2" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}>
              <button type="button" onClick={() => toggleBrand(brand.id)}
                aria-label={`Explore ${brand.name}`} aria-expanded={isExpanded}
                className={`group relative block w-full overflow-hidden text-left ${focusClass}`}>
                <img src={brand.photos[0].src} alt={brand.photos[0].alt} loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] ${index === 0 ? "h-56 md:h-72" : "h-52"}`} />
                <span className="absolute inset-0 bg-gradient-to-t from-[#25170F]/55 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-5 text-white text-xs font-semibold uppercase tracking-widest drop-shadow-sm">{brand.category}</span>
                <span className="absolute bottom-4 right-5 rounded-full bg-white/90 p-2 text-[#4A3B35] group-hover:bg-white"><ArrowUpRight className="h-4 w-4"/></span>
              </button>
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex gap-3 items-start mb-3">
                  <div className="rounded-xl bg-[#EEE5DB] border border-[#D9CAB9] p-2.5 text-[#725338] shrink-0"><Icon className="h-5 w-5"/></div>
                  <div className="min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">{brand.name}</h2>
                    <p className="mt-1 text-sm font-medium text-[#765B43]">{brand.relationship}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#64554B] leading-relaxed mb-5 flex-1">{brand.description}</p>
                <button type="button" onClick={() => toggleBrand(brand.id)} aria-expanded={isExpanded}
                  aria-controls={`details-${brand.id}`}
                  className={`w-full rounded-xl border border-[#CEB9A3] bg-[#F2ECE5] hover:bg-[#E9DFD2] px-4 py-3 font-semibold text-sm text-[#4A3B35] flex items-center justify-between transition-colors ${focusClass}`}>
                  {isExpanded ? "Close gallery & details" : "View gallery & details"}
                  <span aria-hidden="true">{isExpanded ? "−" : "+"}</span>
                </button>
                {isExpanded && (
                  <div id={`details-${brand.id}`} className="mt-6 border-t border-[#E2D6CA] pt-5 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 mb-3"><Images className="w-4 h-4 text-[#806143]"/><h3 className="font-bold">Photo gallery</h3></div>
                      <button type="button" onClick={() => setLightbox({ brandId: brand.id, index: activeIndex })}
                        className={`relative group block rounded-xl overflow-hidden w-full ${focusClass}`} aria-label={`Enlarge ${brand.photos[activeIndex].alt}`}>
                        <img src={brand.photos[activeIndex].src} alt={brand.photos[activeIndex].alt} loading="lazy" className="w-full h-44 md:h-60 object-cover transition-transform group-hover:scale-[1.02]"/>
                        <span className="absolute right-3 bottom-3 text-xs rounded-lg bg-white/95 text-[#4A3B35] py-1.5 px-3 font-medium">View larger</span>
                      </button>
                      <div className="flex items-center justify-between gap-3 mt-3">
                        <button type="button" onClick={() => setActiveIndex((activeIndex - 1 + brand.photos.length) % brand.photos.length)} className={`p-2 rounded-full border border-[#D9CAB9] hover:bg-[#E9DFD2] ${focusClass}`} aria-label="Previous photo"><ArrowLeft className="w-4 h-4"/></button>
                        <p className="text-xs text-center text-[#64554B]">{brand.photos[activeIndex].caption} · {activeIndex + 1} of {brand.photos.length}</p>
                        <button type="button" onClick={() => setActiveIndex((activeIndex + 1) % brand.photos.length)} className={`p-2 rounded-full border border-[#D9CAB9] hover:bg-[#E9DFD2] ${focusClass}`} aria-label="Next photo"><ArrowRight className="w-4 h-4"/></button>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        {brand.photos.map((photo, i) => (
                          <button type="button" key={photo.src + i} onClick={() => setActiveIndex(i)}
                            className={`overflow-hidden rounded-lg border-2 ${activeIndex === i ? "border-[#806143]" : "border-transparent"} ${focusClass}`} aria-label={`Show photo ${i + 1}`} aria-pressed={activeIndex === i}>
                            <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-16 object-cover"/>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-3">{brand.id === "majestic-memories" ? "Connection notes" : "Key contributions"}</h3>
                      <ul className="space-y-2">
                        {brand.highlights.map((item) => <li key={item} className="flex gap-2 items-start text-sm leading-relaxed text-[#64554B]"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#977856] shrink-0"/>{item}</li>)}
                      </ul>
                    </div>
                    <p className="text-xs italic text-[#806143]">Photos are temporary illustrative stock images, not documentation of Monica's actual work.</p>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <aside className="mt-8 rounded-2xl border border-[#D9CAB9] bg-[#F2ECE5]/70 p-5 md:p-6 flex items-start gap-3">
        <ArrowUpRight className="w-5 h-5 text-[#806143] shrink-0 mt-0.5" aria-hidden="true" />
        <div><h2 className="font-semibold">More connections to come</h2><p className="text-sm leading-relaxed text-[#64554B] mt-1">This network will continue to grow as new collaborations, partnerships, and projects take shape.</p></div>
      </aside>

      {lightbox && activeBrand && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true" aria-label={`${activeBrand.name} photo viewer`} onClick={() => setLightbox(null)}>
          <button type="button" onClick={() => setLightbox(null)} className={`absolute top-4 right-4 z-10 rounded-full bg-white text-[#4A3B35] p-3 ${focusClass}`} aria-label="Close photo viewer"><X className="w-5 h-5"/></button>
          <div className="flex flex-col items-center gap-4 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={activeBrand.photos[lightbox.index].src} alt={activeBrand.photos[lightbox.index].alt} className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"/>
            <p className="text-white text-sm text-center">{activeBrand.photos[lightbox.index].caption} · {lightbox.index + 1} / {activeBrand.photos.length}</p>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => setLightbox({ ...lightbox, index: (lightbox.index - 1 + activeBrand.photos.length) % activeBrand.photos.length })} className={`rounded-full bg-white/15 hover:bg-white/25 text-white p-3 ${focusClass}`} aria-label="Previous full-size photo"><ArrowLeft className="h-5 w-5" /></button>
              <button type="button" onClick={() => setLightbox({ ...lightbox, index: (lightbox.index + 1) % activeBrand.photos.length })} className={`rounded-full bg-white/15 hover:bg-white/25 text-white p-3 ${focusClass}`} aria-label="Next full-size photo"><ArrowRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
