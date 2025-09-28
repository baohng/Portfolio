# 🚀 Ho Nguyen Gia Bao - Portfolio Website

A modern, responsive portfolio website showcasing my skills and projects as a Full-Stack Developer. Built with Next.js, TypeScript, and Tailwind CSS with a focus on performance, accessibility, and user experience.

## 🌐 Live Demo

**Visit the live site:** [https://baohng.github.io/Portfolio/](https://baohng.github.io/Portfolio/)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with dark/light theme toggle
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **⚡ Fast Performance**: Static site generation with optimized loading
- **♿ Accessible**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **🔍 SEO Optimized**: Meta tags, OpenGraph, and structured data
- **🌙 Theme Support**: Dark and light mode with system preference detection
- **🎭 Smooth Animations**: Framer Motion powered interactions
- **📧 Contact Form**: Functional contact form with email integration

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/) with GitHub Actions

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── not-found.tsx      # 404 page
├── components/            # Reusable React components
│   ├── sections/          # Page sections
│   │   ├── hero.tsx       # Landing section
│   │   ├── projects.tsx   # Projects showcase
│   │   ├── about.tsx      # About me section
│   │   └── contact.tsx    # Contact form
│   └── ui/                # UI components
│       ├── button.tsx     # Button component
│       ├── navigation.tsx # Header navigation
│       └── theme-toggle.tsx # Dark/light mode toggle
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── site.config.ts         # Site configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/baohng/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## ⚙️ Configuration

The site configuration is centralized in `site.config.ts`. Update this file to customize:

- Personal information and contact details
- Skills and technologies
- Project portfolio
- Social media links
- SEO metadata

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more configuration
}
```

## 🎨 Customization

### Theme Colors
Modify the color scheme in `site.config.ts`:
```typescript
theme: {
  primaryColor: "#2563eb",
  accentColor: "#06b6d4",
}
```

### Adding Projects
Update the projects array in `site.config.ts`:
```typescript
projects: [
  {
    id: "unique-id",
    name: "Project Name",
    description: "Brief description",
    problem: "Problem it solves",
    solution: "Your solution approach",
    impact: "Results achieved",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.com",
    imageUrl: "/images/project.svg",
    imageAlt: "Project screenshot"
  }
]
```

## 🔧 Development

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with custom rules
- **Prettier**: Code formatting (recommended)

### Testing
Run the test suite:
```bash
npm run test
```

Tests cover:
- Component rendering
- User interactions
- Accessibility compliance
- Theme functionality

## 🚀 Deployment

### GitHub Pages (Current)
The site is automatically deployed to GitHub Pages using GitHub Actions. The workflow:
1. Builds the static site
2. Uploads to GitHub Pages
3. Deploys on every push to `main`

### Alternative Deployments
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `out/` folder
- **Custom Server**: Use `npm run build && npm run start`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized and properly sized

## ♿ Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast theme support
- Semantic HTML structure

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

**Ho Nguyen Gia Bao**
- 🌐 Website: [https://baohng.github.io/Portfolio/](https://baohng.github.io/Portfolio/)
- 💼 LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@baohng](https://github.com/baohng)
- 📧 Email: your.email@example.com

---

⭐ If you found this portfolio inspiring, please consider giving it a star!
