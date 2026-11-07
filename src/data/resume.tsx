import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "JEONG UIHEON",
  initials: "JU",
  url: "https://jeonglab.net/about",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/Tokyo",
  description: "Software Engineer & AI Researcher | Building AI-powered solutions for real-world problems.",
  summary:
    "I'm **JEONG UIHEON (ジョンウーホン)**, also known as **Yoshimasa Tanaka (田中義正)**. I study Information Engineering at **Tokyo University of Science**, where I work on machine learning and privacy research. I also run **[じょん総合研究所 (JEONG LAB)](https://jeonglab.net/about)**, developing software and AI solutions for real-world users. I'm interested in **Forward Deployed Engineering**: collaborating closely with people to translate difficult problems into effective, production-ready systems.",
  avatarUrl: "/jeong-placeholder.svg",
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/yoshimasatech", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "#", icon: Icons.linkedin, navbar: false },
      X: { name: "X", url: "#", icon: Icons.x, navbar: false },
      email: { name: "Email", url: "#", icon: Icons.email, navbar: false },
    },
  },
  work: [
    {
      company: "じょん総合研究所 / JEONG LAB",
      href: "https://jeonglab.net/about",
      badges: ["Founder"],
      location: "Tokyo, Japan",
      title: "Founder & Software Engineer",
      logoUrl: "/jeong-lab.svg",
      start: "2025",
      end: "Present",
      description: "I work with clients to understand operational challenges and design and deliver AI-enabled applications, web platforms, and custom software. My work covers discovery, UX, implementation, and delivery. See the company website for representative projects; specific outcomes will be added after verification.",
    },
    {
      company: "The University of Tokyo — Matsuo-Iwasawa Laboratory",
      href: "https://weblab.t.u-tokyo.ac.jp/",
      badges: ["Internship"],
      location: "Tokyo, Japan",
      title: "AI Education / Marketing Intern",
      logoUrl: "/research.svg",
      start: "Internship",
      end: "Dates to confirm",
      description: "Contributed to an AI education platform marketing team. Exact dates, scope, and quantitative contributions are being verified before publication.",
    },
  ],
  education: [
    {
      school: "Tokyo University of Science",
      href: "https://www.tus.ac.jp/",
      degree: "Information Engineering · Undergraduate studies; M.Eng. expected March 2029 (planned)",
      logoUrl: "/education.svg",
      start: "Undergraduate",
      end: "2029 (planned M.Eng.)",
    },
  ],
  projects: [
    {
      title: "Northbound — Fleet Management Dashboard",
      href: "https://jeonglab.net/",
      dates: "Featured project",
      active: true,
      description: "A vehicle operations management dashboard built with Next.js and React Three Fiber, featuring 3D vehicle visualization, a live map experience, and Japanese/English interfaces. Highlights: translating an operational workflow into a usable system.",
      technologies: ["Next.js", "React", "React Three Fiber", "TypeScript"],
      links: [{ type: "Company", href: "https://jeonglab.net/", icon: <Icons.globe className="size-3" /> }],
      image: "/northbound.svg",
      video: "",
    },
    {
      title: "yadoAI — AI Concierge for Hospitality",
      href: "https://jeonglab.net/",
      dates: "Featured project",
      active: true,
      description: "AI concierge software designed around hospitality questions and workflows. Highlights: applied AI, product architecture, and adapting software to domain-specific needs. Implementation details and impact metrics are to be verified.",
      technologies: ["AI", "LLM", "SaaS", "Web"],
      links: [{ type: "Company", href: "https://jeonglab.net/", icon: <Icons.globe className="size-3" /> }],
      image: "/yadoai.svg",
      video: "",
    },
    {
      title: "Face Template Privacy & Reconstruction Research",
      href: "https://github.com/yoshimasatech",
      dates: "2026 — Ongoing",
      active: true,
      description: "Research into privacy threats involving facial templates, reconstruction, and membership inference. Exploring PCA and similarity-aware estimation with controlled experiments and quantitative evaluation.",
      technologies: ["Python", "PyTorch", "Privacy", "Machine Learning"],
      links: [{ type: "GitHub", href: "https://github.com/yoshimasatech", icon: <Icons.github className="size-3" /> }],
      image: "/research.svg",
      video: "",
    },
    {
      title: "MYTAP — NFC Product Experience",
      href: "https://mytap.co.jp/lp",
      dates: "Featured project",
      active: true,
      description: "A customer-facing digital experience for an NFC product. Highlights: interface design and implementing a clear product experience. Technical scope and outcomes will be documented in a future case study.",
      technologies: ["Web", "UX", "Product"],
      links: [{ type: "Website", href: "https://mytap.co.jp/lp", icon: <Icons.globe className="size-3" /> }],
      image: "/mytap.svg",
      video: "",
    },
  ],
  hackathons: [],
} as const;
