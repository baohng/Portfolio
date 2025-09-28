# Ho Nguyen Gia Bao - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, dark/light theme toggle, and optimized performance for showcasing projects and professional information.

![Portfolio Preview](./public/images/og-image.png)

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Performance**: Optimized for speed with Lighthouse 95+ scores
- **SEO Optimized**: Complete meta tags, OpenGraph, and structured data
- **Type Safe**: Full TypeScript implementation
- **Easy Configuration**: Single config file for all content

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

## 📝 Customization

### Content Configuration

All content is managed through the `site.config.ts` file. Update the following sections:

#### Personal Information
```typescript
// site.config.ts
export const siteConfig = {
  name: "Your Name",
  title: "Your Professional Title",
  location: "Your Location",
  email: "your.email@example.com",
  // ... more fields
}
```

#### Projects
Add your projects to the `projects` array:
```typescript
projects: [
  {
    id: "unique-id",
    name: "Project Name",
    description: "Brief description",
    problem: "What problem it solves",
    solution: "Your solution",
    impact: "Measurable impact",
    technologies: ["Tech1", "Tech2"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.com",
    imageUrl: "/images/project.jpg",
    imageAlt: "Description for accessibility"
  }
]
```

#### Skills & Technologies
Update the skills categories:
```typescript
skills: {
  categories: [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript"]
    }
  ]
}
```

### Images

Place your images in the `public/images/` directory:

- **Project Images**: Add to `/public/images/` and reference in config
- **Resume**: Add `resume.pdf` to `/public/`
- **Profile Photo**: Replace the placeholder in the About section
- **Favicon**: Replace `/public/favicon.ico`

### Styling

The design system is configured in `app/globals.css`. Update CSS custom properties to change:

- Colors (primary, secondary, accent)
- Typography (font families, sizes)
- Spacing and layout

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

3. **Configure Domain** (Optional)
   - Update `siteConfig.seo.canonicalUrl` in `site.config.ts`
   - Update `next.config.ts` basePath if using custom domain

### Vercel (Alternative)

1. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure Environment**
   - Remove `basePath` and `assetPrefix` from `next.config.ts`
   - Update `site.config.ts` with your Vercel domain

### Netlify (Alternative)

1. **Build Command**: `npm run build`
2. **Publish Directory**: `out`
3. **Environment Variables**: None required

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm test -- --watch
```

## 🔧 Development

### Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles and design system
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Main page
│   └── not-found.tsx   # 404 page
├── components/         # React components
│   ├── sections/       # Page sections (Hero, Projects, etc.)
│   └── ui/            # Reusable UI components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
├── .github/           # GitHub workflows
└── site.config.ts     # Site configuration
```

### Key Components

- **Hero**: Landing section with introduction
- **Projects**: Showcase with problem/solution/impact format
- **About**: Professional background and skills
- **Contact**: Contact form and social links
- **Navigation**: Responsive header with theme toggle

### Adding New Sections

1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Update navigation in `site.config.ts`

## 📊 Performance

The site is optimized for:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent scores
- **Accessibility**: WCAG AA compliance
- **SEO**: Complete meta tags and structured data

### Performance Features

- Image optimization with `next/image`
- Lazy loading for sections
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Preconnect for external resources

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Gray shades
- **Accent**: Cyan (#06b6d4)

### Typography
- **Primary**: Inter (web font)
- **Fallback**: System UI stack

### Spacing
- **Scale**: 8px base unit
- **Breakpoints**: Mobile-first responsive design

## 🔐 Security

- No sensitive data in repository
- Contact form uses mailto (client-side only)
- HTTPS enforced in production
- No external analytics by default

## 📈 Analytics (Optional)

To enable analytics:

1. **Update Config**
   ```typescript
   // site.config.ts
   analytics: {
     enabled: true,
     googleAnalyticsId: "GA_MEASUREMENT_ID"
   }
   ```

2. **Add Analytics Component**
   Create analytics component and add to layout

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have questions or need help:

1. Check the [Issues](https://github.com/yourusername/Portfolio/issues) page
2. Create a new issue with details
3. Review the documentation above

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)

---

**Ready to showcase your work? Update the config file and make it yours!** 🚀