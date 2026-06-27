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

### 3. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your Supabase credentials (see [Supabase Setup](#supabase-setup) below).  
**Skip this step** if you just want to run locally with the built-in static data — it works without Supabase.

### 4. Start the development server

```bash
npm run dev
```

The app runs at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

---

## Supabase Setup

Supabase is optional. Without it the portfolio shows the static data from `src/data/portfolio.js`. With it, all content is fetched from the cloud and editable from the Supabase dashboard — no code changes needed.

### Step 1 — Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up (free)
2. Click **New Project**, give it a name, choose a region

### Step 2 — Run the schema

1. In your Supabase project, go to **SQL Editor**
2. Open the file `supabase/schema.sql` from this repo
3. Paste the entire contents and click **Run**

This creates all tables, enables public read access (RLS), and inserts the default seed data.

### Step 3 — Add credentials to `.env`

1. In Supabase, go to **Settings → API**
2. Copy **Project URL** and **anon / public** key
3. Paste them into your `.env`:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key-here
```

### Step 4 — Edit your data in Supabase

Open **Table Editor** in the Supabase dashboard and update any row:

| Table | What it controls |
|-------|-----------------|
| `personal_info` | Name, title, email, phone, GitHub, LinkedIn, bio |
| `stats` | Counter numbers on the About page |
| `experience` | Work history entries |
| `education` | Degree details |
| `certifications` | Certifications list |
| `achievements` | Bullet points on About & Resume |
| `projects` | Project cards |
| `skills` | Skill bars per category |

Changes appear on the live site instantly on next page load — no rebuild needed.

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
