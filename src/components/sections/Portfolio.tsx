// src/components/sections/Portfolio.tsx
import { useState, useEffect, useMemo } from "react";
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { resume } from "@/data/resume";
import type { Project } from "@/types";

function ProjectTextContent({ project }: { project: Project }) {
    return (
        <div className="space-y-6">
            <div>
                <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-3">About the Connection</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-foreground/80 uppercase tracking-wider mb-3">Monica’s Involvement</h4>
                <ul className="space-y-2">
                    {project.responsibilities.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"/> {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function Portfolio() {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const isMobile = useIsMobile();
    const projects = resume.projects;
    const selectedProject = projects.find(p => p.title === selectedId);

    // Detect Firefox to disable layoutId animations because Gecko struggles with them
    const isFirefox = useMemo(() => {
        if (typeof window === "undefined") return false;
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }, []);

    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = 'hidden';
            window.history.pushState({ modal: "open" }, "");
        } else {
            document.body.style.overflow = 'unset';
        }
        const handlePopState = () => setSelectedId(null);
        window.addEventListener("popstate", handlePopState);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener("popstate", handlePopState);
        };
    }, [selectedId]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setSelectedId(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div className="pb-8 relative">
            <header className="flex flex-col gap-2 mb-8 border-b border-[#977856]/20 pb-6 animate-fade-up">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#4A3B35] to-[#977856] bg-clip-text text-transparent">Moments &amp; Connections</h2>
                <p className="text-muted-foreground text-lg">A look at the brands, collaborations, and professional connections that are part of my journey.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                    <article key={project.title} className="glass-card rounded-[1.25rem] group flex flex-col animate-fade-up" style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="relative aspect-video overflow-hidden border-b border-[#977856]/15 bg-[#F2ECE5]/70 cursor-pointer" onClick={() => setSelectedId(project.title)}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
                            {!isMobile ? (
                                <motion.img
                                    layoutId={isFirefox ? undefined : `img-${project.title}`}
                                    src={project.images[0]}
                                    alt={project.title}
                                    className={cn("w-full h-full object-cover", selectedId === project.title ? "opacity-0" : "opacity-100")}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                />
                            ) : (
                                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                            )}
                        </div>
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex justify-between items-start gap-2 mb-2">
                                <h3 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm line-clamp-2 mb-5 leading-relaxed">{project.description}</p>
                            <div className="mt-auto flex items-center gap-3 pt-4 border-t border-[#977856]/15">
                                <Button variant="secondary" size="sm" className="w-full bg-[#977856]/10 hover:bg-[#977856]/20 text-foreground border-0" onClick={() => setSelectedId(project.title)}>Read More</Button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && selectedProject && !isMobile && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-none">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto" onClick={() => setSelectedId(null)} />
                        <motion.div className="relative w-full max-w-5xl bg-white/95 border border-[#977856]/20 rounded-2xl overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-[1.2fr,1fr] max-h-[85vh] pointer-events-auto" initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                            <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[#4A3B35]/90 text-white hover:bg-[#4A3B35] transition-colors"><X className="w-5 h-5" /></button>
                            <div className="bg-[#F2ECE5]/90 p-4 md:p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#977856]/20 h-[240px] md:h-auto relative overflow-hidden">
                                <Carousel className="w-full max-w-md relative z-10">
                                    <CarouselContent>
                                        {selectedProject.images.map((image, index) => (
                                            <CarouselItem key={index}>
                                                <div className="rounded-lg overflow-hidden shadow-2xl border border-[#977856]/20 bg-black/50">
                                                    {index === 0 ? (
                                                        <motion.img
                                                            layoutId={isFirefox ? undefined : `img-${selectedProject.title}`}
                                                            src={image}
                                                            className="w-full max-h-[52vh] object-contain"
                                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                                        />
                                                    ) : (
                                                        <img src={image} className="w-full max-h-[52vh] object-contain" alt="" />
                                                    )}
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    {selectedProject.images.length > 1 && <CarouselDots className="mt-4" />}
                                </Carousel>
                            </div>
                            <div className="min-h-0 max-h-[75vh] md:max-h-[85vh] overflow-y-auto overscroll-contain p-6 md:p-8 bg-background/20">
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                    <div className="mb-6">
                                        <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                                        <p className="flex items-center gap-2 text-primary font-medium">{selectedProject.scope}</p>
                                    </div>
                                    <ProjectTextContent project={selectedProject} />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {isMobile && (
                <Drawer open={!!selectedId} onOpenChange={(open) => !open && setSelectedId(null)}>
                    <DrawerContent className="bg-[#FAF7F2] border-t border-[#977856]/20 h-[90vh] outline-none">
                        {selectedProject && (
                            <div className="grid grid-cols-1 h-full max-h-[85vh] overflow-y-auto">
                                <div className="sr-only">
                                    <DrawerTitle>{selectedProject.title}</DrawerTitle>
                                    <DrawerDescription>{selectedProject.description}</DrawerDescription>
                                </div>
                                <div className="bg-[#F2ECE5]/90 p-6 flex items-center justify-center border-b border-[#977856]/20 shrink-0">
                                    <Carousel className="w-full max-w-md">
                                        <CarouselContent>
                                            {selectedProject.images.map((image, index) => (
                                                <CarouselItem key={index}><div className="rounded-lg overflow-hidden border border-[#977856]/20 shadow-2xl"><img src={image} alt={`${selectedProject.title} ${index + 1}`} className="w-full max-h-[52vh] object-contain" /></div></CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {selectedProject.images.length > 1 && <CarouselDots className="mt-4" />}
                                    </Carousel>
                                </div>
                                <div className="p-6 overflow-y-auto hide-scrollbar bg-background/40">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold mb-1">{selectedProject.title}</h2>
                                        <p className="text-primary font-medium text-sm">{selectedProject.scope}</p>
                                    </div>
                                    <ProjectTextContent project={selectedProject} />
                                </div>
                            </div>
                        )}
                    </DrawerContent>
                </Drawer>
            )}
        </div>
    );
}