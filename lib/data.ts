// Central content store. Editing text/links here updates the whole site —
// no animation logic lives in this file on purpose, so design changes never
// risk breaking a motion component.

export const NAV_ITEMS = [
  { id: "hero", label: "hero.tsx", icon: "◆" },
  { id: "about", label: "about.js", icon: "◆" },
  { id: "skills", label: "skills.json", icon: "{ }" },
  { id: "projects", label: "projects.md", icon: "◆" },
  { id: "certificates", label: "certificates/", icon: "▸", badge: "7" },
  { id: "contact", label: "contact.txt", icon: "◆" },
] as const;

export const SOCIAL_LINKS = [
  { label: "github.com/mrashish10x", href: "https://github.com/mrashish10x" },
  {
    label: "linkedin.com/in/ashish",
    href: "https://www.linkedin.com/in/your-linkedin-username/",
  },
  {
    label: "leetcode.com/u/mrashish10x",
    href: "https://leetcode.com/u/mrashish10x/",
  },
  {
    label: "hackerrank.com/ashishkumar",
    href: "https://www.hackerrank.com/profile/ashishkumar28321",
  },
];

export const STATS = [
  { label: "certifications", value: 7, suffix: "" },
  { label: "projects shipped", value: 2, suffix: "+" },
  { label: "expected graduation", value: 2029, suffix: "", isYear: true },
];

export const SKILLS = {
  languages: [
    { name: "C", level: 78 },
    { name: "C++", level: 75 },
    { name: "JavaScript (basics)", level: 55 },
  ],
  web: [
    { name: "HTML", level: 82 },
    { name: "CSS", level: 76 },
  ],
  tools: [
    { name: "Git", level: 70 },
    { name: "GitHub", level: 72 },
  ],
  core: [
    { name: "Data Structures & Algorithms", level: 68 },
    { name: "Problem Solving", level: 74 },
  ],
};

export const PROJECTS = [
  {
    tag: "PERSONAL SITE",
    title: "Personal Portfolio Website",
    description:
      "A hand-built portfolio to showcase profile, skills and certifications — the predecessor to this very page.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/mrashish10x",
    linkLabel: "view on GitHub",
  },
  {
    tag: "PRACTICE LOG",
    title: "LeetCode Problem Solving",
    description:
      "Ongoing log of data structures & algorithms problems — arrays, strings, and core problem-solving patterns.",
    stack: ["DSA", "C++"],
    link: "https://leetcode.com/u/mrashish10x/",
    linkLabel: "view profile",
  },
];

export const CERTIFICATES = [
  {
    file: "google-vids.jpg",
    src: "/certificates/google-vids.jpg",
    title: "Create Engaging Video with Google Vids",
    issuer: "Google Cloud / Simplilearn SkillUp",
    date: "06 Jun 2026",
  },
  {
    file: "mern-fullstack.jpg",
    src: "/certificates/mern-fullstack.jpg",
    title: "MERN Full Stack",
    issuer: "Unstop",
    date: "2026",
  },
  {
    file: "css-ai.jpg",
    src: "/certificates/css-ai.jpg",
    title: "CSS with AI",
    issuer: "Unstop",
    date: "2026",
  },
  {
    file: "tcs-ion-ai.jpg",
    src: "/certificates/tcs-ion-ai.jpg",
    title: "AI and Cybersecurity Awareness",
    issuer: "TCS iON — MPIT CoE / TCS Foundation",
    date: "22 Apr 2026",
  },
  {
    file: "forage-tech-explorer.jpg",
    src: "/certificates/forage-tech-explorer.jpg",
    title: "Tech Explorer Job Simulation",
    issuer: "Commonwealth Bank (via Forage)",
    date: "23 Apr 2026",
  },
  {
    file: "deloitte-cyber.jpg",
    src: "/certificates/deloitte-cyber.jpg",
    title: "Cyber Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "23 Apr 2026",
  },
  {
    file: "campuscrew.jpg",
    src: "/certificates/campuscrew.jpg",
    title: "100K Milestone Honor",
    issuer: "CampusCrew",
    date: "26 Jun 2026",
  },
];

export const CONTACT = [
  { label: "email", value: "your-email@example.com", href: "mailto:your-email@example.com" },
  { label: "phone", value: "+91 XXXXXXXXXX", href: null },
  { label: "github", value: "github.com/mrashish10x", href: "https://github.com/mrashish10x" },
  {
    label: "linkedin",
    value: "linkedin.com/in/your-linkedin-username",
    href: "https://www.linkedin.com/in/your-linkedin-username/",
  },
  {
    label: "leetcode",
    value: "leetcode.com/u/mrashish10x",
    href: "https://leetcode.com/u/mrashish10x/",
  },
  {
    label: "hackerrank",
    value: "hackerrank.com/profile/ashishkumar28321",
    href: "https://www.hackerrank.com/profile/ashishkumar28321",
  },
];
