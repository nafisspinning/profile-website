const basePath = process.env.PAGES_BASE_PATH ?? "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}

export const profile = {
  name: "Muhammad Nafis Hibatullah",
  displayName: "Nafis",
  role: "Software Engineer",
  tagline: "I build clean, fast, and reliable web experiences.",
  intro:
    "I’m a software engineer passionate about building clean, fast, and reliable web experiences. I turn complex problems into simple, elegant, and scalable software with a strong focus on performance, usability, and thoughtful design.",
  about:
    "I'm a fresh Information Systems graduate with a passion for building fullstack web and mobile applications. I enjoy turning ideas into clean, scalable and functional software. I'm currently looking for opportunities to contribute to meaningful projects, and learn alongside on a real software engineer team.",
  location: "Jakarta, Indonesia",
  email: "muhammadnafishibatullah@gmail.com",
  resumeUrl: "#",
  photo: withBasePath("/images/profile.jpg"),
  socials: {
    github: "https://github.com/nafisspinning",
    linkedin: "https://id.linkedin.com/in/muhammadnafishibatullah-",
    instagram: "https://instagram.com/nafisspinning",
  },
};

export const skills = [
  {
    category: "Programming Languages",
    items: ["HTML", "CSS", "SQL", "Java", "JavaScript", "Python", "Dart"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Spring Boot", "Flutter", "Next", "Vite", "Django", "React", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    category: "Dev Tools & CI/CD",
    items: ["Vs Code","Postman", "Dbeaver", "Docker", "Nginx", "GitHub Actions", "GitLab CI/CD"],
  },
  {
    category: "Management & Design Tools",
    items: ["Figma", "Odoo" , "Microsoft Office", "Google Workspace"],
  },
  {
    category: "Ways of Working",
    items: ["Agile (Scrum)", "Waterfall"],
  },
];

export const languages = [
  { name: "Bahasa Indonesia", level: "Native" },
  { name: "English", level: "Fluent" },
];

function projectImages(paths: string[]) {
  return paths.map((path) => withBasePath(`/projects/${path}`));
}

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
  backendRepoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "bacaspring",
    title: "BacaSpring - Book Catalog Manager",
    description:
      "A fullstack book catalog manager for tracking books, publishers, and authors, backed by a documented REST API.",
    overview:
      "BacaSpring is a CRUD admin tool for managing a library-style book catalog - books, publishers, and authors - with search, pagination, and a live backend connection indicator.",
    category: "Web Application",
    year: "2024",
    role: "Fullstack Developer",
    challenge:
      "Needed a straightforward way to manage a growing book catalog with relational data - books linked to publishers and multiple authors - without reaching for a bloated admin framework.",
    solution:
      "Built a lightweight catalog manager with searchable, paginated tables for books, publishers, and authors, backed by a Spring Boot REST API fully documented with Swagger/OpenAPI.",
    process: [
      "Designed the data model for books, publishers, and authors, including many-to-many author relationships.",
      "Built REST endpoints for full CRUD operations across all three resources.",
      "Documented every endpoint with Swagger/OpenAPI for easy testing and reference.",
      "Implemented a searchable, paginated frontend with a live backend connection status indicator.",
    ],
    result:
      "A working catalog currently tracking a growing set of books, ready to extend with more admin features.",
    tags: ["Spring Boot", "Java", "REST API", "Swagger"],
    image: projectImages(["bacaspring-1.png"])[0],
    gallery: projectImages([
      "bacaspring-1.png",
      "bacaspring-2.png",
      "bacaspring-3.png",
    ]),
    demoUrl: "#",
    repoUrl: "https://github.com/nafisspinning/bacabaca",
  },
  {
    slug: "presence-app",
    title: "Presence - Employee Attendance App",
    description:
      "A mobile attendance app with GPS-based check-in/out, attendance history, and admin tools for managing employees.",
    overview:
      "Presence is a mobile app for employee check-in/check-out, giving admins visibility into attendance history, in/out-of-area presence, and distance-based attendance statistics.",
    category: "Mobile Application",
    year: "2023",
    role: "Mobile Developer",
    challenge:
      "Manual attendance tracking made it hard to verify whether employees were actually checking in from the office, and gave admins no easy way to review attendance trends.",
    solution:
      "Built a mobile app that records check-in/check-out with location data, flags whether each entry was inside or outside the designated area, and visualizes attendance distance trends over time.",
    process: [
      "Designed the Home, Statistics, and Profile flows for both employees and admins.",
      "Implemented GPS-based check-in/check-out with in-area/out-of-area detection.",
      "Built an attendance statistics view charting check-in distance over the last 30 entries.",
      "Added admin-only tools for managing employee profiles.",
    ],
    result:
      "A functioning attendance system tracking real check-in/out history with distance-based statistics.",
    tags: ["Mobile App", "iOS", "Geolocation", "REST API"],
    image: projectImages(["presence-app-1.png"])[0],
    gallery: projectImages([
      "presence-app-1.png",
      "presence-app-2.png",
      "presence-app-3.png",
    ]),
    demoUrl: "#",
    repoUrl: "https://github.com/nafisspinning/presence-app",
  },
  {
    slug: "todolist-app",
    title: "Todolist - Project & Task Manager",
    description:
      "A project-based to-do list app for organizing tasks by project, complete with due dates and a documented backend API.",
    overview:
      "A simple project and task manager where users organize work into projects, each with its own due date, description, and task list.",
    category: "Web Application",
    year: "2026",
    role: "Fullstack Developer",
    challenge:
      "Needed a lightweight way to group related tasks under projects with deadlines, instead of one long, unorganized to-do list.",
    solution:
      "Built a two-panel interface - a project sidebar and a task workspace - backed by a separate REST API for managing projects and tasks, with the frontend deployed on Vercel and the backend on Railway.",
    process: [
      "Designed the data model separating projects and their tasks.",
      "Built REST endpoints for project and task CRUD operations, documented with Swagger/OpenAPI.",
      "Implemented the project sidebar and task workspace on the frontend.",
      "Deployed the frontend to Vercel and the backend to Railway as two independent repos.",
    ],
    result: "A working task manager for organizing day-to-day tasks by project, live in production.",
    tags: ["React", "Spring Boot", "REST API"],
    image: projectImages(["todolist-app-cover.png"])[0],
    gallery: projectImages(["todolist-app-1.png", "todolist-app-2.png"]),
    demoUrl: "https://frontend-todolist-ten.vercel.app/",
    repoUrl: "https://github.com/nafisspinning/frontend-todolist",
    backendRepoUrl: "https://github.com/nafisspinning/backend-todolist",
  },
];

export const experience = [
  {
    role: "Information Systems",
    org: "Universitas Indonesia - Faculty of Computer Science",
    period: "2019 - 2025",
    description:
      "Studying information systems, covering software engineering, systems analysis, databases, and how technology supports business decision-making.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
