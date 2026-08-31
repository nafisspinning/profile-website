export const profile = {
  name: "Muhammad Nafis Hibatullah",
  role: "Full-Stack Software Developer",
  tagline: "I build clean, fast, and reliable web experiences.",
  intro:
    "I'm a software developer focused on crafting modern, performant web applications. I enjoy turning complex problems into simple, elegant interfaces — from pixel-perfect frontends to robust backend systems.",
  about:
    "With a strong foundation in modern web technologies, I specialize in building responsive, accessible, and maintainable products. I care deeply about clean code, thoughtful design, and delivering real value to the people who use what I build. When I'm not coding, I'm usually exploring new tools, contributing to side projects, or refining my craft.",
  location: "Jakarta, Indonesia",
  email: "muhammadnafishibatullah@gmail.com",
  resumeUrl: "#",
  socials: {
    github: "https://github.com/nafisspinning",
    linkedin: "https://id.linkedin.com/in/muhammadnafishibatullah-",
    instagram: "https://instagram.com/nafisspinning",
  },
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Vercel", "Figma", "CI/CD"],
  },
];

const galleryImages = [
  "/projects/gallery-1.svg",
  "/projects/gallery-2.svg",
  "/projects/gallery-3.svg",
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  category: string;
  year: string;
  role: string;
  challenge: string;
  solution: string;
  process: string[];
  result: string;
  tags: string[];
  image: string;
  gallery: string[];
  demoUrl: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    slug: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A modern admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    overview:
      "A centralized admin dashboard that gives store operators full visibility into products, orders, and customer behavior through real-time analytics and reporting.",
    category: "Web Application",
    year: "2024",
    role: "Lead Frontend Developer",
    challenge:
      "The client's existing spreadsheet-based workflow made it slow and error-prone to track inventory and sales performance across multiple channels, causing delayed decision-making.",
    solution:
      "Designed and built a single-page dashboard that consolidates product, order, and analytics data into a clear, role-based interface, with real-time charts highlighting the metrics that matter most.",
    process: [
      "Audited existing spreadsheets and interviewed store operators to map core workflows.",
      "Designed a modular component system and information hierarchy in Figma.",
      "Built the dashboard with React and TypeScript, integrating chart and table components.",
      "Ran usability testing with the operations team and refined navigation and filters.",
    ],
    result:
      "Reduced time spent reconciling sales reports by an estimated 60% and gave the operations team a single source of truth for daily decision-making.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/project-1.svg",
    gallery: galleryImages,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task manager with drag-and-drop boards, deadlines, and team notifications.",
    overview:
      "A Kanban-style collaboration tool that helps small teams plan sprints, track progress, and stay aligned without switching between multiple tools.",
    category: "Product Design & Development",
    year: "2023",
    role: "Full-Stack Developer",
    challenge:
      "Distributed teams struggled to keep task status, deadlines, and ownership in sync, leading to missed handoffs and duplicated work.",
    solution:
      "Built a drag-and-drop board with real-time status updates, deadline reminders, and per-user notifications so every team member always knows what's next.",
    process: [
      "Mapped team workflows and defined the core data model for boards, tasks, and members.",
      "Prototyped drag-and-drop interactions and validated them with target users.",
      "Implemented the board, notifications, and deadline logic end-to-end.",
      "Iterated on performance for boards with hundreds of cards.",
    ],
    result:
      "Teams using the tool reported clearer ownership and a noticeable drop in status-update meetings.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    image: "/projects/project-2.svg",
    gallery: galleryImages,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    description:
      "A budgeting app that visualizes spending habits and helps users set and track financial goals.",
    overview:
      "A personal finance companion that turns raw transaction data into clear visual insights, helping users build better saving habits.",
    category: "Mobile-First Web App",
    year: "2023",
    role: "Frontend Developer",
    challenge:
      "Users found existing budgeting apps overwhelming, with too many manual categories and no clear feedback on progress toward their goals.",
    solution:
      "Created a simplified tracker with automatic spending categorization, goal progress bars, and clean charts that surface trends at a glance.",
    process: [
      "Researched common budgeting pain points through user interviews.",
      "Designed a minimal, chart-first interface with clear visual hierarchy.",
      "Built interactive charts and goal-tracking components with React and Chart.js.",
      "Tested on mobile devices to ensure a smooth touch experience.",
    ],
    result:
      "Early testers reported a clearer understanding of their spending patterns within the first week of use.",
    tags: ["React", "Chart.js", "MongoDB"],
    image: "/projects/project-3.svg",
    gallery: galleryImages,
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "recipe-discovery-platform",
    title: "Recipe Discovery Platform",
    description:
      "A recipe search and sharing platform with saved collections and step-by-step cooking guides.",
    overview:
      "A community-driven recipe platform where home cooks can discover, save, and follow step-by-step cooking guides tailored to their preferences.",
    category: "Content Platform",
    year: "2022",
    role: "Full-Stack Developer",
    challenge:
      "Recipe content across the web is scattered and inconsistent, making it hard for users to find recipes that match their dietary needs and skill level.",
    solution:
      "Built a searchable platform with structured recipe data, saved collections, and a guided step-by-step cooking mode designed for use in the kitchen.",
    process: [
      "Defined a structured recipe schema covering ingredients, steps, and dietary tags.",
      "Built search and filtering with Express and a REST API.",
      "Designed a distraction-free, step-by-step cooking mode for mobile screens.",
      "Added saved collections and sharing features based on early user feedback.",
    ],
    result:
      "Grew to an actively used collection of community-submitted recipes within the first few months of launch.",
    tags: ["Next.js", "Express", "REST API"],
    image: "/projects/project-4.svg",
    gallery: galleryImages,
    demoUrl: "#",
    repoUrl: "#",
  },
];

export const experience = [
  {
    role: "Software Developer",
    org: "Tech Company Inc.",
    period: "2023 — Present",
    description:
      "Building and maintaining web applications, collaborating with cross-functional teams to ship features from design to production.",
  },
  {
    role: "Frontend Developer Intern",
    org: "Digital Agency Studio",
    period: "2022 — 2023",
    description:
      "Developed responsive client websites and internal tools, improving load performance and accessibility.",
  },
  {
    role: "Computer Science",
    org: "University Name",
    period: "2019 — 2023",
    description:
      "Studied software engineering fundamentals, data structures, and web development.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
