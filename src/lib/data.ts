// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit values here and they update everywhere on the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Shreya Sawarn",
  firstName: "Shreya",
  role: "Software Engineer",
  focus: "Backend & Full-Stack Development",
  location: "Karnataka, India",
  email: "shreya32916@gmail.com",
  phone: "+91 79707 21935",
  // A human, specific intro — not a generic AI blurb.
  headline: [
    "I build reliable backends",
    "and clean web experiences.",
  ],
  intro:
    "Engineering student focused on writing software that holds up in production — REST APIs, authentication flows, and the database work that quietly keeps products running. I learn fast, ship in teams, and treat clean code as a feature.",
  available: true,
};

export const socials = [
  { label: "GitHub", handle: "Shreya-Sawarn", href: "https://github.com/Shreya-Sawarn" },
  { label: "LinkedIn", handle: "shreya-sawarn", href: "https://linkedin.com/in/shreya-sawarn" },
  { label: "LeetCode", handle: "280+ solved", href: "https://leetcode.com/" },
  { label: "Email", handle: "shreya32916@gmail.com", href: "mailto:shreya32916@gmail.com" },
];

export const stats = [
  { value: "280+", label: "LeetCode problems solved" },
  { value: "8.9", label: "CGPA · VTU" },
  { value: "2", label: "Software internships" },
  { value: "6", label: "Certifications earned" },
];

export const about = {
  paragraphs: [
    "I'm a third-year Engineering student at Visvesvaraya Technological University, building toward a career in software engineering. Most of my time goes into backend development — designing REST APIs, wiring up authentication, and making database operations dependable.",
    "Through two internships I've shipped production features on real platforms: an education-technology product and a fintech web app. I'm equally comfortable debugging a multi-threaded server in C as I am modelling data in MongoDB.",
    "Outside of internships I stay sharp with competitive programming — 280+ problems on LeetCode and rated contests on CodeChef — because fundamentals make everything else easier.",
  ],
  education: {
    degree: "Bachelor of Engineering",
    school: "Visvesvaraya Technological University (VTU)",
    place: "Karnataka, India",
    period: "Expected June 2027",
    detail: "CGPA 8.9",
  },
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "C", "Python", "MySQL"],
  },
  {
    title: "Web Development",
    items: ["Node.js", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "CRUD Operations"],
  },
  {
    title: "ML & AI",
    items: ["ML Fundamentals", "Generative AI", "Gemini & Imagen", "Prompt Engineering"],
  },
  {
    title: "Tools & Data",
    items: ["Git / GitHub", "Excel Analytics", "Data Analysis", "REST APIs"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Vulcan Learning Collective",
    period: "Aug 2025 — Present",
    type: "EdTech · Backend",
    summary:
      "Building and integrating backend features for an education-technology platform.",
    points: [
      "Developed and integrated backend features, building REST APIs with Node.js and MongoDB.",
      "Implemented authentication flows and database operations, improving the reliability of core user-facing modules.",
      "Collaborated with a cross-functional team in an agile workflow to ship, test, and debug production-ready features.",
    ],
    stack: ["Node.js", "MongoDB", "REST APIs", "Auth", "Agile"],
  },
  {
    role: "Software Developer Intern",
    company: "Bluestock Fintech",
    period: "May 2025 — July 2025",
    type: "Fintech · Full-Stack",
    summary:
      "Built and maintained features for a fintech web platform with a focus on performance.",
    points: [
      "Built and maintained features for a fintech web platform, improving user dashboard performance.",
      "Worked on API integrations, authentication flows, and database queries for smoother transactions.",
      "Collaborated with the product team in debugging and optimizing code, ensuring production-ready deployments.",
    ],
    stack: ["API Integration", "Auth", "Databases", "Optimization"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  points: string[];
  stack: string[];
  kind: string;
};

export const projects: Project[] = [
  {
    title: "Multi-threaded Proxy Web Server",
    kind: "Systems",
    blurb:
      "A concurrent proxy server in C that handles many client requests at once using POSIX threads.",
    points: [
      "Handles concurrent client requests with a POSIX thread pool.",
      "Implements request forwarding, response caching, and connection management for higher throughput.",
    ],
    stack: ["C", "POSIX Threads", "Socket Programming"],
  },
  {
    title: "Instagram Automation Bot",
    kind: "Automation",
    blurb:
      "A Python automation tool that performs scheduled Instagram actions reliably and unattended.",
    points: [
      "Automates scheduled actions using Python and Selenium.",
      "Manages browser sessions, element detection, and error handling for robust execution.",
    ],
    stack: ["Python", "Selenium", "Web Scraping"],
  },
];

export type Cert = {
  name: string;
  issuer: string;
  detail: string;
};

export const certifications: Cert[] = [
  { name: "Data Analyst Simulation", issuer: "Accenture", detail: "Data Modeling · Cleaning · Business Insights" },
  { name: "Software Engineering Simulation", issuer: "JP Morgan", detail: "Testing · APIs · Agile Development" },
  { name: "Solutions Architect", issuer: "AWS APAC", detail: "Cloud Computing · Infrastructure Optimization" },
  { name: "Database Management & CRUD", issuer: "MongoDB", detail: "Data Modeling · CRUD Operations" },
  { name: "AI Applications with Gemini & Imagen", issuer: "Google Cloud", detail: "Generative AI · Badge" },
  { name: "Developer & Technology Simulation", issuer: "Accenture UK", detail: "Software Development" },
];

export const sections = [
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "work", label: "Projects", index: "04" },
  { id: "certifications", label: "Credentials", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];
