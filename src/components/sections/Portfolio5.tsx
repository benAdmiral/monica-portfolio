// src/components/sections/Portfolio.tsx
// Monica Adkins — image-led Brands & Network portfolio.
// Replace the photo URLs below with files in /public/portfolio/ whenever ready.
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Image as ImageIcon,
  Wine,
  X,
} from "lucide-react";

type Photo = { src: string; alt: string; caption: string };
type Brand = {
  id: string;
  name: string;
  role: string;
  category: string;
  summary: string;
  description: string;
  highlights: string[];
  photos: Photo[];
};

// TEMPORARY illustrative Unsplash photos, not Monica's real brand/event photos.
// To replace: add photos under public/portfolio/ and set src to, e.g.,
// "/portfolio/tegrity-bros/photo-1.webp".
const brands: Brand[] = [
  {
    id: "tegrity-bros",
    name: "Tegrity Bros",
    role: "Marketing Director & Sales President",
    category: "Brand Leadership",
    summary: "Brand marketing, sales leadership, and bourbon experiences.",
    description:
      "Monica supports the brand's growth and visibility through marketing, sales, and relationship-building, with an emphasis on sharing the brand's story.",
    highlights: [
      "Lead marketing and sales-related initiatives for a bourbon brand operating as a non-distiller producer (NDP).",
      "Manage the barrel-pick program and support the coordination and promotion of barrel-pick experiences.",
      "Create and support social media content and promotional messaging.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative wine glasses on a table",
        caption: "Placeholder imagery — replace with Tegrity Bros brand photography.",
      },
      {
        src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative winery and vineyard setting",
        caption: "Placeholder imagery — replace with an event or barrel-pick photo.",
      },
    ],
  },
  {
    id: "old-steelhouse",
    name: "Old Steelhouse Distillery",
    role: "Promoter & Consultant",
    category: "Hospitality & Promotion",
    summary: "Tasting-room promotion and guest experiences in Bardstown.",
    description:
      "Monica promotes Old Steelhouse Distillery's Bardstown tasting room and supports visitor engagement and memorable bourbon experiences.",
    highlights: [
      "Promote the tasting room and help attract visitors to the Bardstown location.",
      "Support the planning and promotion of barrel-pick experiences.",
      "Encourage guest engagement and connection through hospitality-focused promotion.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative bar and drinks setting",
        caption: "Placeholder imagery — replace with Old Steelhouse Distillery photos.",
      },
      {
        src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative hospitality venue interior",
        caption: "Placeholder imagery — replace with a tasting-room or event photo.",
      },
    ],
  },
  {
    id: "majestic-memories",
    name: "Majestic Memories",
    role: "Professional Network Connection",
    category: "Creative Network",
    summary: "A creative connection within Monica's professional network.",
    description:
      "Majestic Memories is part of Monica's wider professional and creative network. Specific joint projects can be added here when confirmed.",
    highlights: [
      "A connection within Monica's wider professional network.",
      "Details of collaborations and shared events can be added when available.",
    ],
    photos: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative wedding celebration photography",
        caption: "Placeholder imagery — replace with approved Majestic Memories photography.",
      },
      {
        src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
        alt: "Illustrative event and celebration photography",
        caption: "Placeholder imagery — replace with real photos of a relevant event.",
      },
    ],
  },
];

function PortfolioImage({
  photo,
  className = "",
}: {
  photo: Photo;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [photo.src]);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-[#EEE5DB] via-[#F8F4EF] to-[#DFD1C2] text-[#977856] ${className}`}>
        <ImageIcon className="h-12 w-12" aria-label="Photo unavailable" />
      </div>
    );
  }
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const selected = brands.find((brand) => brand.id === selectedId);

  const openBrand = (id: string) => {
    setPhotoIndex(0);
    setSelectedId(id);
  };
  const closeBrand = () => setSelectedId(null);
  const changePhoto = (direction: -1 | 1) => {
    if (!selected) return;
    setPhotoIndex((current) => (current + direction + selected.photos.length) % selected.photos.length);
  };

  useEffect(() => {
    if (!selectedId) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
      if (event.key === "ArrowRight") setPhotoIndex((i) => (i + 1) % (brands.find((b) => b.id === selectedId)?.photos.length || 1));
      if (event.key === "ArrowLeft") setPhotoIndex((i) => (i - 1 + (brands.find((b) => b.id === selectedId)?.photos.length || 1)) % (brands.find((b) => b.id === selectedId)?.photos.length || 1));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedId]);

  return (
    <section className="max-w-5xl mx-auto pb-10 text-[#4A3B35]">
      <header className="mb-8 border-b border-[#D9CAB9] pb-6 animate-fade-up">
        <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[#866A50] mb-3">
          Monica Adkins · Professional Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-transparent">
          Moments &amp; Connections
        </h1>
        <p className="text-base md:text-lg text-[#64554B] leading-relaxed mt-3 max-w-2xl">
          Explore the brands, people, and professional experiences that are part of my journey.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {brands.map((brand, idx) => (
          <article key={brand.id} className="glass-card rounded-[1.25rem] overflow-hidden group flex flex-col animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
            <button type="button" aria-label={`Read more about ${brand.name}`} onClick={() => openBrand(brand.id)} className="relative block w-full aspect-video overflow-hidden bg-[#F2ECE5] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#866A50]">
              <PortfolioImage photo={brand.photos[0]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-[#241B17]/35 via-transparent to-transparent pointer-events-none" />
              <span className="absolute left-4 bottom-4 rounded-md bg-[#FAF7F2]/95 px-3 py-1 text-xs font-semibold text-[#4A3B35] shadow-sm">
                {brand.category}
              </span>
            </button>
            <div className="p-5 md:p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-[#4A3B35] mb-1">{brand.name}</h2>
              <p className="text-sm font-medium text-[#806143] mb-3">{brand.role}</p>
              <p className="text-sm md:text-base text-[#64554B] leading-relaxed mb-5 flex-1">{brand.summary}</p>
              <div className="pt-4 border-t border-[#E2D6CA]">
                <button type="button" onClick={() => openBrand(brand.id)} className="w-full rounded-xl bg-[#E9DFD2] hover:bg-[#D9C9B5] border border-[#D9CAB9] px-4 py-3 text-sm font-semibold text-[#4A3B35] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#866A50]">
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="text-xs text-[#806F60] mt-6 leading-relaxed">
        Photos shown are temporary illustrative images; they do not depict Monica's actual brand work or events.
      </p>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.button type="button" aria-label="Close brand details" onClick={closeBrand} className="absolute inset-0 bg-[#251C17]/65 backdrop-blur-sm cursor-default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            <motion.div role="dialog" aria-modal="true" aria-label={`${selected.name} details`} className="relative w-full max-w-5xl max-h-[90dvh] overflow-y-auto md:overflow-hidden rounded-2xl bg-[#FAF7F2] shadow-2xl border border-[#D9CAB9] grid grid-cols-1 md:grid-cols-[1.12fr,1fr]" initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.98 }} transition={{ duration: 0.22 }}>
              <button type="button" onClick={closeBrand} aria-label="Close" className="absolute right-3 top-3 z-30 rounded-full bg-[#4A3B35] text-white p-2.5 hover:bg-[#755C4B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A88A6B]">
                <X className="w-5 h-5" />
              </button>

              <div className="bg-[#F2ECE5] p-4 sm:p-6 md:p-7 flex flex-col justify-center gap-3 border-b md:border-b-0 md:border-r border-[#D9CAB9] min-w-0">
                <div className="relative rounded-xl overflow-hidden bg-[#E7DCCF] aspect-[4/3] shadow-md">
                  <PortfolioImage key={`${selected.id}-${photoIndex}`} photo={selected.photos[photoIndex]} className="w-full h-full object-cover" />
                  {selected.photos.length > 1 && (
                    <div className="absolute inset-x-3 bottom-3 flex justify-between pointer-events-none">
                      <button type="button" aria-label="Previous photo" onClick={() => changePhoto(-1)} className="pointer-events-auto rounded-full bg-[#FAF7F2]/95 text-[#4A3B35] p-2 shadow-md hover:bg-white"><ArrowLeft className="w-5 h-5" /></button>
                      <button type="button" aria-label="Next photo" onClick={() => changePhoto(1)} className="pointer-events-auto rounded-full bg-[#FAF7F2]/95 text-[#4A3B35] p-2 shadow-md hover:bg-white"><ArrowRight className="w-5 h-5" /></button>
                    </div>
                  )}
                </div>
                <p className="text-xs text-[#75665A] leading-relaxed min-h-8">{selected.photos[photoIndex].caption}</p>
                {selected.photos.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {selected.photos.map((photo, idx) => (
                      <button key={photo.src} type="button" onClick={() => setPhotoIndex(idx)} aria-label={`View photo ${idx + 1}`} aria-pressed={photoIndex === idx} className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${photoIndex === idx ? "border-[#806143]" : "border-transparent hover:border-[#CAB49B]"}`}>
                        <PortfolioImage photo={photo} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8 md:p-9 md:overflow-y-auto hide-scrollbar text-[#4A3B35]">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#866A50] mb-2">{selected.category}</p>
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight pr-8">{selected.name}</h2>
                <p className="font-semibold text-[#806143] mt-2 mb-7">{selected.role}</p>

                <h3 className="text-xs uppercase tracking-widest font-bold mb-3">About the Connection</h3>
                <p className="text-sm sm:text-base text-[#64554B] leading-relaxed mb-7">{selected.description}</p>

                <h3 className="text-xs uppercase tracking-widest font-bold mb-3">{selected.id === "majestic-memories" ? "Connection Notes" : "Key Contributions"}</h3>
                <ul className="space-y-3">
                  {selected.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#64554B]">
                      <span className="w-1.5 h-1.5 mt-2 shrink-0 rounded-full bg-[#977856]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-5 border-t border-[#D9CAB9] flex items-center gap-2 text-xs text-[#806F60]">
                  {selected.id === "tegrity-bros" ? <Wine className="w-4 h-4" /> : selected.id === "majestic-memories" ? <Camera className="w-4 h-4" /> : <BriefcaseBusiness className="w-4 h-4" />}
                  A part of Monica's professional journey
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
