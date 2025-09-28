export const siteConfig = {
  // Personal Information
  name: "Ho Nguyen Gia Bao",
  title: "Remote Full-Stack Developer",
  location: "Da Nang City, Viet Nam",
  timezone: "UTC+7",

  // Professional Summary
  headline: "Building scalable web applications with modern technologies",
  summary: "Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. I create efficient, user-friendly solutions that drive business value.",

  // Contact Information
  email: "your.email@example.com", // Replace with actual email
  social: {
    github: "https://github.com/yourusername", // Replace with actual GitHub
    linkedin: "https://linkedin.com/in/yourprofile", // Replace with actual LinkedIn
    twitter: "https://twitter.com/yourusername", // Replace with actual Twitter (optional)
  },

  // Resume
  resumeUrl: "/resume.pdf", // Add your resume file to public folder

  // Design & Theme
  theme: {
    primaryColor: "#2563eb", // Blue-600
    accentColor: "#06b6d4", // Cyan-500
    fontFamily: "Inter, system-ui, sans-serif",
  },

  // Skills
  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "Go"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "Vue.js", "Django"],
    tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Redis"],
    categories: [
      {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL"]
      },
      {
        name: "DevOps",
        skills: ["Docker", "AWS", "CI/CD", "Git", "Linux"]
      }
    ]
  },

  // Projects
  projects: [
    {
      id: "project-1",
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      problem: "Small businesses needed an affordable, scalable online store solution",
      solution: "Built a modern React/Node.js platform with payment integration and analytics",
      impact: "Increased client sales by 150% and reduced checkout time by 40%",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      demoUrl: "https://demo-ecommerce.vercel.app",
      imageUrl: "/images/project-1.svg",
      imageAlt: "E-commerce platform dashboard showing sales analytics and product management"
    },
    {
      id: "project-2",
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      problem: "Teams struggled with scattered communication and unclear task ownership",
      solution: "Created an intuitive drag-and-drop interface with live collaboration features",
      impact: "Improved team productivity by 60% and reduced project delays by 35%",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket", "Vercel"],
      githubUrl: "https://github.com/yourusername/task-manager",
      demoUrl: "https://task-manager-demo.vercel.app",
      imageUrl: "/images/project-2.svg",
      imageAlt: "Task management interface with kanban board and team collaboration features"
    },
    {
      id: "project-3",
      name: "Weather Analytics Dashboard",
      description: "Real-time weather data visualization with predictive insights",
      problem: "Agricultural businesses needed accurate weather forecasting for crop planning",
      solution: "Developed a dashboard combining multiple weather APIs with ML predictions",
      impact: "Helped farmers optimize planting schedules, reducing crop losses by 25%",
      technologies: ["Vue.js", "Python", "FastAPI", "D3.js", "TensorFlow"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      demoUrl: "https://weather-analytics.netlify.app",
      imageUrl: "/images/project-3.svg",
      imageAlt: "Weather dashboard showing temperature trends, precipitation forecasts, and agricultural insights"
    },
    {
      id: "project-4",
      name: "Learning Management System",
      description: "Interactive online learning platform with progress tracking",
      problem: "Educational institutions needed engaging remote learning solutions",
      solution: "Built an LMS with video streaming, quizzes, and student progress analytics",
      impact: "Increased student engagement by 80% and completion rates by 45%",
      technologies: ["React", "Express", "PostgreSQL", "Socket.io", "AWS S3"],
      githubUrl: "https://github.com/yourusername/lms-platform",
      demoUrl: "https://lms-demo.herokuapp.com",
      imageUrl: "/images/project-4.svg",
      imageAlt: "Learning management system showing course catalog, video player, and student progress tracking"
    }
  ],

  // SEO & Meta
  seo: {
    title: "Ho Nguyen Gia Bao - Remote Full-Stack Developer",
    description: "Experienced full-stack developer from Da Nang, Vietnam. Specializing in React, Node.js, and cloud technologies. Available for remote work opportunities.",
    keywords: ["full-stack developer", "react developer", "node.js", "remote developer", "vietnam developer"] as string[],
    canonicalUrl: "https://yourdomain.com", // Replace with actual domain
    ogImage: "/images/og-image.png",
  },

  // Analytics
  analytics: {
    enabled: false, // Set to true when ready to track
    googleAnalyticsId: "", // Add your GA4 ID when ready
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],

  // Features
  features: {
    darkMode: true,
    contactForm: true,
    blog: false, // Set to true if you want to add a blog section later
    analytics: false, // Set to true when ready
  }
} as const;

export type SiteConfig = typeof siteConfig;