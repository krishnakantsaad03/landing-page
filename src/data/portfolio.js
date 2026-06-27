export const personalInfo = {
  name: "Krishnakant Saad",
  title: "Software Engineer",
  roles: ["React.js Developer", "Frontend Engineer", "MERN Stack Developer", "SaaS & Enterprise Dev"],
  tagline: "I build scalable web applications with clean architecture.",
  email: "krishnakant.saad03@gmail.com",
  phone: "+91-7024937405",
  github: "https://github.com/krishnakant-saad",
  linkedin: "https://linkedin.com/in/krishnakant-saad-55307921b",
  location: "Indore, Madhya Pradesh, India",
  yearsOfExperience: 3,
  currentRole: "Software Engineer at Zehntech Technology Pvt. Ltd.",
  about:
    "Software Engineer with 3+ years of experience building scalable, user-centric web applications. Strong expertise in React.js, modern JavaScript, and responsive UI development, with solid backend exposure using Node.js, Express.js, and REST APIs. Experienced in collaborating with cross-functional teams to deliver high-quality SaaS and enterprise solutions with clean architecture and performance-driven design.",
};

export const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 12, suffix: "+", label: "Technologies" },
  { value: 8, suffix: "+", label: "Happy Clients" },
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 92 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Angular", level: 62 },
    { name: "Responsive Design", level: 90 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 73 },
    { name: "REST APIs", level: 85 },
    { name: "Laravel (PHP)", level: 60 },
  ],
  Database: [
    { name: "PostgreSQL", level: 75 },
    { name: "MySQL", level: 72 },
    { name: "MongoDB", level: 68 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "AWS (EC2, S3)", level: 55 },
    { name: "CI/CD Basics", level: 58 },
    { name: "Agile / Scrum", level: 82 },
  ],
};

export const experience = [
  {
    id: 1,
    company: "Zehntech Technology Pvt. Ltd.",
    role: "Software Engineer",
    duration: "June 2022 – Present",
    location: "Indore, India",
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    responsibilities: [
      "Developed and maintained modern, scalable front-end applications using React.js for SaaS and enterprise products",
      "Built reusable, modular React components and optimized rendering performance for improved user experience",
      "Worked closely with backend teams to integrate REST APIs, handle authentication flows, and manage application state",
      "Implemented responsive layouts using Tailwind CSS, ensuring cross-browser and cross-device compatibility",
      "Contributed to backend development using Node.js and Express.js for API enhancements and data handling",
      "Participated in code reviews, sprint planning, and Agile ceremonies to ensure timely, high-quality deliveries",
    ],
    achievements: [
      "Delivered multiple production-grade React applications used by real-world clients and enterprise teams",
      "Successfully collaborated across frontend and backend teams to deliver features on tight deadlines",
      "Actively contributed to improving code quality through reviews, refactoring, and best practices",
    ],
  },
  {
    id: 2,
    company: "Zehntech Technology Pvt. Ltd.",
    role: "Intern Software Engineer",
    duration: "November 2021 – June 2022",
    location: "Indore, India",
    technologies: ["React.js", "JavaScript", "Git", "REST APIs"],
    responsibilities: [
      "Assisted in developing front-end features using React.js and JavaScript",
      "Integrated UI components with backend APIs and supported bug fixing and feature enhancements",
      "Gained hands-on experience with databases, Git-based workflows, and deployment processes",
    ],
    achievements: [
      "Transitioned to full-time Software Engineer within 7 months of joining as intern",
      "Contributed to 3+ live client features during the internship period",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Kopyst – SOP & Process Documentation Platform",
    description:
      "A SaaS platform for creating, managing, and sharing Standard Operating Procedures and process documentation with role-based access and dynamic form rendering.",
    tech: ["React.js", "Tailwind CSS", "Node.js", "REST APIs"],
    role: "Frontend Developer",
    duration: "4 months",
    status: "Production",
    confidential: false,
    features: [
      "Dashboard and editor interfaces with reusable React components",
      "Dynamic form rendering with role-based access on the UI layer",
      "API integration with backend services for optimized application flow",
      "Responsive design across all devices",
    ],
    github: null,
    demo: null,
  },
  {
    id: 2,
    name: "Online Gaming / Casino Platform",
    description:
      "A freelance full-stack gaming platform with game launch, betting flow, wallet balance management, and third-party game provider integrations.",
    tech: ["Laravel (PHP)", "Angular", "PostgreSQL", "REST APIs"],
    role: "Full Stack Developer",
    duration: "3 months",
    status: "Production",
    confidential: true,
    features: [
      "Backend APIs for game launch, betting flow, and wallet balance updates",
      "Angular frontend integrated with backend APIs for game session management",
      "Bet deduction and win/loss credit updates based on provider responses",
      "Third-party game providers, payment gateways, and webhook/callback handling",
    ],
    github: null,
    demo: null,
  },
  {
    id: 3,
    name: "MyLiveCart – eCommerce to WhatsApp Sync",
    description:
      "A full-featured eCommerce platform that synchronizes product catalogues and orders to WhatsApp, enabling merchants to sell directly via messaging.",
    tech: ["React.js", "Node.js", "MySQL", "REST APIs"],
    role: "Full Stack Developer",
    duration: "2 months",
    status: "Production",
    confidential: false,
    features: [
      "User and admin dashboards with real-time data updates",
      "Product sync and order management between platform and WhatsApp",
      "Responsive UI for both merchants and end customers",
      "Real-time order notifications and status tracking",
    ],
    github: null,
    demo: null,
  },
  {
    id: 4,
    name: "Developer Portfolio",
    description:
      "This very portfolio — a Harry Potter-themed, fully responsive React.js developer portfolio with Framer Motion animations, theme switcher, and contact form.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "Vite"],
    role: "Solo Developer",
    duration: "1 week",
    status: "Live",
    confidential: false,
    features: [
      "4 theme variants with live switcher (Dark / Light / Gold / Minimal)",
      "Particle canvas background, floating candle animations",
      "Typewriter role animation, scroll-triggered counters",
      "Fully responsive across all devices",
    ],
    github: "https://github.com/krishnakant-saad",
    demo: "#",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    institution: "Jawaharlal Institute of Technology, Borawan, Madhya Pradesh",
    year: "2018 – 2022",
    grade: "B.Tech CSE",
  },
];

export const certifications = [
  { name: "Agile / Scrum Practitioner", issuer: "Self-practised via enterprise projects", year: "2022" },
  { name: "AWS Essentials (EC2, S3)", issuer: "Amazon Web Services", year: "2023" },
  { name: "CI/CD Fundamentals", issuer: "GitHub Actions / Internal Training", year: "2023" },
];

export const achievements = [
  "Delivered multiple production-grade React applications used by real-world clients and enterprise teams",
  "Successfully collaborated across frontend and backend teams to deliver features on tight deadlines",
  "Actively contributed to improving code quality through reviews, refactoring, and best practices",
  "Transitioned from intern to full-time Software Engineer within 7 months",
];
