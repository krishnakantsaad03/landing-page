# Harry Potter Portfolio — Landing Page

A Harry Potter–themed developer portfolio built with React, Vite, Tailwind CSS v4, and Framer Motion. Features animated sections, four switchable themes, scroll-progress tracking, and a contact form.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Framer Motion 12 |
| Icons | React Icons 5 |
| Linter | Oxlint |

---

## Prerequisites

- **Node.js** v18 or higher (`node -v` to check)
- **npm** v9 or higher (bundled with Node.js)

---

## Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd landing-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app runs at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint on the source files |

---

## Project Structure

```
landing-page/
├── public/
│   └── Krishnakant_saad.pdf      ← Resume PDF (download/view button)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         ← Fixed navbar with theme switcher + scroll progress
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── SectionTitle.jsx
│   │       ├── LoadingScreen.jsx
│   │       ├── ParticleBackground.jsx
│   │       ├── FloatingCandles.jsx
│   │       └── AnimatedCounter.jsx
│   ├── context/
│   │   └── ThemeContext.jsx       ← Theme definitions + CSS variable injection
│   ├── data/
│   │   └── portfolio.js           ← All personal content (edit this to customize)
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   └── useInView.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                  ← Tailwind v4 entry + custom CSS layers
├── vite.config.js
└── package.json
```

---

## Customizing Portfolio Content

All personal data lives in **`src/data/portfolio.js`**. Edit that single file to update:

- `personalInfo` — name, title, email, phone, location, GitHub, LinkedIn
- `about` — bio paragraphs and stat counters
- `experience` — work history entries
- `education` — degree details
- `certifications` — certification list
- `achievements` — key achievement bullets
- `projects` — project cards (name, description, tech, links, status)
- `skills` — skill categories with proficiency levels

### Replacing the resume PDF

Replace `public/Krishnakant_saad.pdf` with your own PDF and update the `href` in `src/components/sections/Resume.jsx` if you rename the file.

---

## Themes

Four themes are available via the navbar switcher (top-right):

| Theme | Key | Description |
|-------|-----|-------------|
| Dark Magic | `dark` | Deep navy/black — default |
| Light Magic | `light` | Parchment cream |
| Hogwarts Gold | `gold` | Dark amber with rich gold |
| Minimal Black | `minimal` | Pure black with silver accents |

Theme tokens are defined in `src/context/ThemeContext.jsx` and pushed to `:root` CSS variables on every switch.

---

## Production Build

```bash
npm run build
```

Output goes to `dist/`. You can deploy this folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

To preview the build locally before deploying:

```bash
npm run preview
```

---

## Notes

- Tailwind CSS v4 uses `@import "tailwindcss"` in `index.css` — there is no `tailwind.config.js`; configuration is done in CSS.
- The `@tailwindcss/vite` plugin handles all Tailwind processing automatically via `vite.config.js`.
- Custom CSS is organized into `@layer base`, `@layer components`, and `@layer utilities` to avoid cascade conflicts with Tailwind utility classes.
