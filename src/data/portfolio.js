
export const personal = {
  name: "Anthonipillai Sukethan",
  shortName: "Sukethan",
  degree: "BSc Hons (Computer Science)",
  university: "University of Jaffna",
  year: "Fourth-Year Undergraduate",
  location: "Jaffna, Sri Lanka",

  roles: [
    "Computer Science Undergraduate",
    "Software Development Enthusiast",
    "Deep Learning Researcher",
    "Passionate Problem Solver",
  ],

  github: "https://github.com/Sukethan2002",
  linkedin:
    "https://www.linkedin.com/in/sukethan-anthonipillai-573086343",

  email: "anthonipillaisukethan@gmail.com",

  cv: `${import.meta.env.BASE_URL}CV.pdf`,
  photo: `${import.meta.env.BASE_URL}images/profile.jpg`,

  about:
    "I am a fourth-year BSc Hons (Computer Science) undergraduate at the University of Jaffna, interested in software development, artificial intelligence and innovative technologies.",
};

export const skills = {
  "Programming Languages": [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Dart",
  ],

  "Frontend & Mobile": [
    "HTML",
    "CSS",
    "React",
    "Flutter",
  ],

  Backend: [
    "Node.js",
    "Laravel",
    "NestJS",
  ],

  Databases: [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SQLite",
  ],

  "Development Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Linux",
  ],

  "AI-Assisted Development": [
    "ChatGPT",
    "OpenAI Codex",
    "Claude",
    "Google Gemini",
    "Google Antigravity",
    "Perplexity",
    "Grok",
  ],
};


export const projects = [
  {
    id: 1,
    title: "Gym Management System",
    category: "Collaborative Project",
    type: "collaborative",
    year: "Third-Year Project",
    description:
      "A mobile application developed as a group project for gym management.",
    technologies: ["Flutter", "NestJS", "PostgreSQL"],
    image: null,
    repository: null,
    demo: null,
    contribution: null,
    status: "Academic Project",
  },

  {
    id: 2,
    title: "Student Management System",
    category: "Collaborative Project",
    type: "collaborative",
    year: "Second-Year Project",
    description:
      "A web-based student management system developed as a group project.",
    technologies: ["PHP", "JavaScript", "MySQL"],
    image: null,
    repository: null,
    demo: null,
    contribution: null,
    status: "Academic Project",
  },

  {
    id: 3,
    title: "IoT-Based Wheelchair Balancing",
    category: "Collaborative Project",
    type: "collaborative",
    year: "Second-Year Project",
    description:
      "An IoT-based wheelchair balancing system developed as a group project.",
    technologies: ["IoT", "Hardware"],
    image: null,
    repository: null,
    demo: null,
    contribution: null,
    status: "Academic Project",
  },

  {
    id: 4,
    title: "Personal Developer Portfolio",
    category: "Personal Project",
    type: "personal",
    year: "2026",
    description:
      "A modern, responsive personal portfolio featuring interactive animations, project showcases and a professional dark theme.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Motion",
      "CSS",
    ],
    image: null,
    repository:
      "https://github.com/Sukethan2002/github-portfolio",
    demo: null,
    contribution:
      "Portfolio development, UI design and animation implementation with AI-assisted development tools.",
    status: "In Development",
  },
];



export const research = {
  title:
    "Image Based Wild Elephant Detection at Village Perimeters Using Deep Learning",

  type: "Undergraduate Research",

  university: "University of Jaffna",

  status: "Ongoing",

  description:
    "This research explores image-based wild elephant detection at village perimeters using deep learning techniques, with the aim of contributing to human-elephant conflict mitigation.",

  objective:
    "To investigate the application of deep learning-based object detection techniques for identifying wild elephants near village perimeters.",

  areas: [
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "Object Detection",
  ],

  technologies: [
    "Python",
    "YOLO",
    "Deep Learning",
    "Computer Vision",
  ],

  image: null,
  publication: null,
  repository: null,
};



export const achievements = [
  {
    id: 1,
    title: "UoJ Coders V5.0",
    category: "Inter-University Coding Competition",
    rank: "6th",
    description:
      "Secured 6th Place in the Inter-University Coding Competition.",
    image: null,
  },
];

export const certificates = [
  {
    id: 1,
    title: "Frontend Development Workshop Series",
    organization: null,
    description:
      "Completed a series of seven frontend development workshop sessions.",
    date: null,
    image: null,
    credentialUrl: null,
  },

  {
    id: 2,
    title: "Python for Beginners",
    organization: "University of Moratuwa",
    description:
      "Completed the Python for Beginners course.",
    date: "December 2025",
    image: null,
    credentialUrl: null,
  },
];



export const volunteering = [
  {
    id: 5,
    role: "Athletics Vice-Captain",
    organization: "School",
    category: "Sports Leadership",
    period: null,
    description: null,
    image: null,
  },

  {
    id: 1,
    role: "Treasurer",
    organization: "Computer Society, University of Jaffna",
    category: "Leadership",
    period: null,
    description: null,
    image: null,
  },

  {
    id: 2,
    role: "Treasurer",
    organization: "Ariyalai Thirumahal Community Center",
    category: "Community Service",
    period: null,
    description: null,
    image: null,
  },

  {
    id: 3,
    role: "Finance Team Lead",
    organization: "UoJ Coders V4.0",
    category: "Event Management",
    period: null,
    description: null,
    image: null,
  },

  {
    id: 4,
    role: "Volunteer",
    organization: "UoJ Coders V3.0",
    category: "Volunteering",
    period: null,
    description: null,
    image: null,
  },
];

export const sports = [
  {
    id: 1,
    title: "University Cricket",
    organization: "University of Jaffna",
    achievement: "1st XI Cricket Team",
    icon: "🏏",
    image: null,
  },

  {
    id: 2,
    title: "School Cricket",
    organization: null,
    achievement: "1st XI Cricket Team",
    icon: "🏏",
    image: null,
  },

  {
    id: 3,
    title: "Athletics",
    organization: null,
    achievement: "School Athletics Vice-Captain & Athletics Colours",
    icon: "🏃",
    image: null,
  },

  {
    id: 4,
    title: "Volleyball",
    organization: "Ariyalai United Club",
    achievement: "Volleyball Team Member",
    icon: "🏐",
    image: null,
  },
];
