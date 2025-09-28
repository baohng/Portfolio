You are a senior frontend engineer and brand designer. Build a fast, accessible personal developer website for {Ho Nguyen Gia Bao}.

GOAL
- Showcase 3–4 projects, a short bio, skills, and clear contact paths to attract recruiters.

TECH
- Stack: “Next.js + React + TypeScript”
- Hosting target: GitHub Pages
- Use responsive, mobile-first layout. No external UI kit unless necessary. Minimal dependencies.

STYLE
- Visual tone: {e.g., clean, modern, light theme with optional dark mode}.
- Typography: {Primary font}, system fallback.
- Color palette: {primary hex}, {accent hex}, neutral grays.
- Components with 8px spacing scale, large tap targets, and reduced motion preference respected.

PAGES/SECTIONS
1) Home (hero): headline with role + value prop, short intro (≤ 40 words), CTA buttons (“View Projects”, “Contact”).
2) Projects: cards with image/alt text, summary (problem → solution → impact), tech tags, links to GitHub/demo.
3) About: short bio, skills matrix (languages, frameworks, tools), resume link {URL or file}.
4) Contact: email link {your@email}, LinkedIn {URL}, GitHub {URL}. Optional simple contact form (client-side only).
5) (Optional) Blog: list page + post template (MD/MDX) with tags and reading time.

ACCESSIBILITY & PERFORMANCE
- Pass WCAG AA for color contrast.
- Semantic HTML, labeled controls, skip-to-content link, keyboard focus states.
- Image optimization (sizes/srcset), lazy loading, preconnect for fonts.
- Lighthouse ≥ 95 on Performance/Accessibility/Best Practices/SEO.

SEO & META
- <title>, meta description, canonical, Open Graph/Twitter cards.
- Sitemap.xml, robots.txt, favicons, manifest for PWA basics (optional).
- Structured data: Person + WebSite (JSON-LD) with {name, jobTitle, sameAs}.

CONTENT (use these placeholders)
- Name: {Ho Nguyen Gia Bao}
- Title: {Remote Full-Stack Developer}
- Location/Time zone: {Da Nang City, Viet Nam}
- Summary: {1–2 sentence pitch}
- Skills: add later
- Projects (3–4) - add later!:
  - {Project Name} — {1-sentence problem}, {your solution}, {impact metric %/ms/users}. Links: {GitHub URL}, {Demo URL}. Image: {/images/project-1.png} alt: {alt text}.
- Social: {GitHub URL}, {LinkedIn URL}, {X/Twitter URL}, {Email}

REQUIREMENTS
- Clean, documented code. Extract site config into one file (e.g., site.config.{ts|js|json}) to change name, links, colors, and projects without editing components.
- Provide sample images/placeholders and a README with setup, dev, build, and deploy steps for {chosen host}.
- Include basic analytics opt-in hook (e.g., placeholder for script, disabled by default).
- Add unit test for one core component (e.g., ProjectCard) if using React/TS.
- Add 404 page.

DELIVERABLES
- Full project folder with source code.
- README.md with:
  - How to run locally.
  - How to deploy to {Vercel/Netlify/GitHub Pages}.
  - Where to edit content (config and markdown).
- Compressed zip ready to download.

ACCEPTANCE CRITERIA (must verify)
- All internal links work; no console errors.
- Images have alt text; forms have labels; tab order logical.
- Lighthouse reports meet thresholds.
- Projects render from data (no hardcoded duplicates).
- Contact methods visible above the fold on mobile.

NOW DO THIS
1) Ask me to confirm the {placeholders} you still need.
2) Generate the codebase and README.
3) Provide a single zip download and quick start commands.