export const siteConfig = {
  name: "Abhishek Singh",
  title: "Full Stack Developer",
  heroLabel: "Mobile Application Developer • Full Stack Web Developer",
  tagline: "I design and ship mobile apps, full-stack web products, and real-time systems that feel polished from the first tap.",
  about:
    "Mobile application developer and full-stack web developer focused on building clean, scalable, and impactful products across iOS, Android, and the web.",
  email: "abhishek12439525@gmail.com",
  phone: "+91 7046833865",
  github: "https://github.com/Abhishek-dev69",
  linkedin: "https://www.linkedin.com/in/abhishek-singh-3014-/",
  location: "Available worldwide",
  resumeHref: "/resume.pdf",
  domain: "https://personal-portfolio-px7hurph2-abhishek-singhs-projects-0879fed9.vercel.app",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { label: "Apps on App Store + Play Store", value: "3+" },
  { label: "Core mobile stack", value: "Swift + React Native" },
  { label: "Live web launches", value: "5+" },
  { label: "Training program", value: "Apple x Infosys" },
];

export const proofPoints = [
  "Published mobile apps across App Store and Play Store",
  "Built the UTSAV planner, vendor, and web ecosystem",
  "Ships live web products with polished UX and performance",
  "Combines native iOS, React Native, Supabase, and full-stack web",
];

export const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "React Native",
  "Swift",
  "UIKit",
  "SwiftUI",
  "Expo",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "MongoDB",
  "Accessibility",
  "Performance",
];

export type ExperienceItem = {
  organization: string;
  headlineRole?: string;
  role: string;
  period: string;
  location?: string;
  workMode?: string;
  bullets: string[];
};

export const experience = [
  {
    organization: "Infosys Limited",
    headlineRole: "Intern (Training Program)",
    role: "iOS App Developer",
    period: "Mar 2026 - Mar 2026",
    location: "Mysore, India",
    bullets: [
      "Participated in a 4-week internship program focused on software development and enterprise technologies.",
      "Worked on assigned technical projects involving software development concepts and problem solving.",
      "Collaborated with mentors and peers to design and implement solutions for assigned tasks.",
      "Presented project outcomes and technical learnings as part of the final evaluation.",
    ],
  },
  {
    organization: "iOS Development Center (Powered by Apple & Infosys), SRMIST, Chennai",
    role: "iOS App Developer",
    period: "Aug 2025 - Present",
    workMode: "On-site",
    bullets: [
      "Developed iOS applications using Swift, SwiftUI, and UIKit, following industry-standard iOS development practices.",
      "Designed and implemented responsive and scalable UI components for real-world mobile applications.",
      "Integrated Supabase for backend services including authentication, database management, and real-time data handling.",
      "Collaborated in a professional development environment aligned with Apple and Infosys-supported training and standards.",
    ],
  },
  {
    organization: "Suresh Dani’s Classes",
    headlineRole: "AI Agent Development Intern",
    role: "Mobile App Developer",
    period: "Mar 2026 - Present",
    workMode: "Remote",
    bullets: [
      "Developing a cross-platform mobile application using React Native for both Android and iOS platforms.",
      "Implementing scalable UI components and navigation flows using React Native, JavaScript, and REST APIs.",
      "Integrating backend services to support real-time data processing and AI-driven application features.",
      "Collaborating with the development team to design and optimize features for an educational learning platform.",
    ],
  },
 ] satisfies ExperienceItem[];

export const highlights = [
  "Designs mobile-first interfaces with clear hierarchy, polished interactions, and recruiter-friendly product storytelling.",
  "Builds reliable app and web systems with strong attention to maintainability, real-time data, and developer experience.",
  "Balances speed and craft, shipping thoughtful products without sacrificing accessibility, performance, or quality.",
];

export const focusAreas = [
  {
    title: "Mobile Applications",
    description:
      "Native iOS and cross-platform apps with clean navigation, store-ready polish, and practical backend integration.",
    tools: ["Swift", "UIKit", "SwiftUI", "React Native", "Expo"],
  },
  {
    title: "Full Stack Web",
    description:
      "Responsive web products, dashboards, and marketing sites with strong UX, fast builds, and maintainable architecture.",
    tools: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Realtime + AI Features",
    description:
      "Product workflows powered by Supabase, REST APIs, push notifications, analytics, and AI-assisted experiences.",
    tools: ["Supabase", "FastAPI", "scikit-learn", "REST APIs", "Realtime"],
  },
];

export type Project = {
  title: string;
  description: string;
  category: string;
  stack: string[];
  impact?: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
  githubLabel?: string;
  imageLabel: string;
};

export const projects: Project[] = [
  {
    title: "UTSAV Web Platform",
    description:
      "A multi-tenant event management platform for planners, vendors, and admins with dashboards, service coordination, inventory tracking, payment flows, and PDF quotation generation.",
    category: "Event Platform",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
    ],
    impact: "Multi-role event operations platform",
    imageLabel: "Premium multi-tenant event management web platform",
    githubLabel: "Private build",
  },
  {
    title: "UTSAV Planner iOS",
    description:
      "A native iOS event planner app built with UIKit for managing events, budgets, inventory, vendor proposals, payments, and in-app team communication through Supabase-backed workflows.",
    category: "iOS",
    stack: ["Swift", "UIKit", "Storyboard", "Supabase", "Native iOS Architecture"],
    impact: "Published planner app for event teams",
    liveUrl: "https://apps.apple.com/in/app/utsaveventplanner/id6759706059",
    liveLabel: "App Store",
    imageLabel: "Native iOS planner app for event operations and coordination",
    githubLabel: "Local project",
  },
  {
    title: "UTSAV Planner Android",
    description:
      "A cross-platform planner app using Expo and React Native with event dashboards, services, vendor selection, payment tracking, budgets, push notifications, and venue-aware workflows.",
    category: "Mobile App",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "React Query",
      "NativeWind",
    ],
    impact: "Published Android planner workflow",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.utsavplanner.app&pcampaignid=web_share",
    liveLabel: "Play Store",
    imageLabel: "Planner mobile workspace with services, budgets, and payments",
    githubLabel: "Local project",
  },
  {
    title: "UTSAV Vendor iOS",
    description:
      "A vendor-facing iOS application for handling leads, event summaries, inventory, payments, portfolio management, and chat, designed for smooth day-to-day event execution.",
    category: "iOS",
    stack: ["Swift", "UIKit", "Supabase", "Storyboard", "Vendor Operations"],
    impact: "Published vendor operations app",
    liveUrl: "https://apps.apple.com/in/app/utsavvendor/id6759786273",
    liveLabel: "App Store",
    imageLabel: "Native iOS vendor app for leads, payments, and portfolio management",
    githubLabel: "Local project",
  },
  {
    title: "UTSAV Vendor Android",
    description:
      "A vendor operations app built with Expo and React Native featuring lead management, venue dashboards, event requests, inventory, payments, portfolio editing, and real-time chat.",
    category: "Mobile App",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "React Navigation",
      "Expo Notifications",
    ],
    impact: "Vendor-side app for leads and payments",
    imageLabel: "Vendor mobile app for leads, venue workflows, and client communication",
    githubLabel: "Local project",
  },
  {
    title: "NextFramee 3D",
    description:
      "A premium marketing website for an immersive VR and architectural visualization studio, built around scroll-driven storytelling, glassmorphism, image-sequence canvas animation, and ultra-smooth motion design.",
    category: "3D / Marketing Site",
    stack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "TypeScript",
    ],
    impact: "Immersive live marketing website",
    liveUrl: "https://next-frame-3-d.vercel.app",
    liveLabel: "Live demo",
    githubUrl: "https://github.com/Abhishek-dev69/NextFrame_3D",
    imageLabel: "Immersive 3D studio website with cinematic scroll interactions",
  },
  {
    title: "Expense Tracker AI",
    description:
      "A full-stack personal finance platform with dashboards for transactions, budgets, goals, reports, recurring payments, split requests, and AI-assisted insights powered by a separate FastAPI + scikit-learn prediction service.",
    category: "Fintech / Full Stack",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "FastAPI",
      "scikit-learn",
    ],
    impact: "AI-assisted finance dashboard",
    liveUrl: "https://expense-tracker-beryl-delta.vercel.app",
    liveLabel: "Live demo",
    githubUrl: "https://github.com/Abhishek-dev69/Expense-Tracker",
    imageLabel: "Finance dashboard with analytics, reports, and AI-driven categorization",
  },
  {
    title: "HR Workflow Designer",
    description:
      "A browser-based workflow builder for HR operations with a drag-and-drop canvas, typed node configuration, validation, simulation, autosave, and JSON import/export.",
    category: "Frontend Tooling",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "React Flow"],
    impact: "Visual workflow builder with simulation",
    liveUrl: "https://tredence-omega.vercel.app/",
    liveLabel: "Live demo",
    githubUrl: "https://github.com/Abhishek-dev69/Tredence",
    imageLabel: "Visual workflow editor with simulation sandbox",
  },
  {
    title: "Car Rental Fullstack",
    description:
      "A MERN-based car rental marketplace where users can browse and book cars while owners manage listings through a responsive full stack web experience.",
    category: "Full Stack",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "REST API"],
    impact: "Live MERN marketplace",
    liveUrl: "https://car-rental-website-eta-eight.vercel.app/",
    liveLabel: "Live demo",
    githubUrl: "https://github.com/Abhishek-dev69/CarRental-fullstack",
    imageLabel: "Car rental marketplace with booking and owner flows",
  },
  {
    title: "Unauthorized Drone Detection",
    description:
      "A computer vision project using trained YOLOv8 assets and labeled drone imagery to detect unauthorized drones, with reusable dataset metadata and inference-ready weights.",
    category: "AI / Computer Vision",
    stack: ["Python", "YOLOv8", "Roboflow", "Computer Vision", "Model Inference"],
    impact: "Computer vision model assets",
    githubUrl: "https://github.com/Abhishek-dev69/Unauthorized-Drone-Detection",
    imageLabel: "Drone detection model assets and test inference setup",
  },
  {
    title: "Productivity Dashboard UI",
    description:
      "A polished UIKit productivity dashboard for iOS with dynamic dark and light mode support, reusable components, premium cards, and clean programmatic layout work.",
    category: "iOS",
    stack: ["Swift", "UIKit", "Auto Layout", "Core Animation", "Dynamic UIColor"],
    impact: "Polished native UI system",
    githubUrl:
      "https://github.com/Abhishek-dev69/UIKIT-Learning-Dark-Mode-and-Light-Mode-",
    imageLabel: "iOS productivity dashboard with premium visual system",
  },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "Phone", href: "tel:+917046833865" },
  { label: "GitHub", href: siteConfig.github },
  { label: "LinkedIn", href: siteConfig.linkedin },
  { label: "Resume", href: siteConfig.resumeHref },
];
