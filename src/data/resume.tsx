// src/data/resume.tsx
import {
    Github,
    Linkedin,
    Mail,
    Zap,
    Accessibility,
    MessageSquareText,
} from "lucide-react";
import { SiteConfig } from "@/types";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const resume: SiteConfig = {
    name: "Monica Adkins",
    role: "Businesswoman",
    location: "Bardstown, Kentucky",
    email: "offprofilepicks@gmail.com",

    typewriterWords: ["connections.", "experiences.", "partnerships."],

    bio: [
        "I believe successful business starts with meaningful", // Note: Typewriter effect follows this line
        "With experience spanning sales, marketing, hospitality, healthcare, and business development, I've built a professional network grounded in relationships, collaboration, and opportunity.",
        "From bourbon and hospitality to weddings, events, and business partnerships, every connection has opened the door to something new.",
        "For me, business is about more than transactions. It's about people, trust, collaboration, and creating something valuable together."
    ],

    contact: {
        socials: [
            {name: "LinkedIn", url: "https://www.linkedin.com/in/ahmed-arat-34a472a3/", icon: Linkedin},
            {
                name: "Instagram",
                url: "https://instagram.com/_medy__/",
                icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" {...props}>
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                )
            },
            { name: "Email", url: "mailto:aratahmed@gmail.com", icon: Mail },
        ]
    },

    skills: [
        "Python", "Java", "HTML", "CSS", "JavaScript", "TypeScript",
        "Astro", "React", "Git", "SQL", "Node.js"
    ],

    attributes: [
        {
            label: "Accessibility Focused",
            description: "I build for everyone.",
            icon: Accessibility,
            color: "text-blue-400"
        },
        {
            label: "Performance First",
            description: "I optimise for speed and efficiency.",
            icon: Zap,
            color: "text-amber-400"
        },
        {
            label: "Clear Communication",
            description: "I'll give you jargon or plain English. Whichever you prefer.",
            icon: MessageSquareText,
            color: "text-emerald-400"
        },
    ],

    experience: [
        {
            type: "work",
            company: "Umahmed Cakes",
            logo: "/experience/umahmed.webp",
            icon: "UC",
            containerClass: "bg-[#E9DFD2]/65 border-[#A88A6B]/35",
            textClass: "text-[#806044]",
            title: "Graphic Designer",
            period: "Jan 2020 – Present",
            highlights: [
                "Designed branding and marketing materials.",
                "Designed and edited photographs and vector illustrations for social media and print.",
                "Integrating fulfilment and payment apps.",
            ],
        },
        {
            type: "education",
            company: "Taylor's University",
            logo: "/experience/taylors.webp",
            icon: "TU",
            containerClass: "bg-red-500/10 border-red-500/20",
            textClass: "text-red-400",
            title: "BSc Computer Science",
            period: "Sep 2023 - Present",
            highlights: [
                "BSC Computer Science with a specialisation in Data Science.",
                "Dean's List for academic excellence.",
                "Active member of multiple Hackathon teams and competitions.",
            ],
        },
        {
            type: "education",
            company: "Multimedia University",
            icon: "MMU",
            containerClass: "bg-blue-500/10 border-blue-500/20",
            textClass: "text-blue-400",
            title: "Foundation in IT",
            period: "Jan 2022 - Dec 2022",
            highlights: [
                "Foundation in Information Technology.",
                "Graduated with High Distinction.",
                "Focus on programming fundamentals and mathematics.",
            ],
        },
    ],

    projects: [
        {
            title: "Tegrity Bros",
            client: "Brand Leadership",
            timeline: "May 2026 – Present",
            techStack: [],
            images: [
                "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85"
            ],
            description: "Brand marketing, sales leadership, and relationship-building for Tegrity Bros, a bourbon brand operating as a non-distiller producer.",
            scope: "Marketing Director & Sales President",
            responsibilities: [
                "Lead marketing and sales-related initiatives.",
                "Managed the barrel-pick program and support the coordination and promotion of barrel-pick experiences.",
                "Created and support social media content and promotional messaging that communicates the brand's story."
            ],
            languages: []
        },
        {
            title: "Old Steelhouse Distillery",
            client: "Promotion & Consulting",
            timeline: "May 2026 – Present",
            techStack: [],
            images: [
                "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85"
            ],
            description: "Promotion and visitor engagement for the Bardstown tasting room, including support for barrel-pick experiences.",
            scope: "Promoter & Consultant",
            responsibilities: [
                "Promote the tasting room and help attract visitors to the Bardstown location.",
                "Support planning and promotion of barrel-pick experiences and related guest engagement."
            ],
            languages: []
        },
        {
            title: "Majestic Memories",
            client: "Professional Network",
            timeline: "Connection",
            techStack: [],
            images: [
                "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
                "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85"
            ],
            description: "A creative connection within Monica's professional network. Specific collaboration details can be added when confirmed.",
            scope: "Professional Network Connection",
            responsibilities: [
                "Part of Monica's wider professional and creative network.",
                "Future event or project collaborations can be featured here when confirmed."
            ],
            languages: []
        },
    ],
};