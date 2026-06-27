# Harry Potter Portfolio

A responsive, Harry Potter-themed developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. It includes animated portfolio sections, four visual themes, scroll progress, a contact form, and optional Supabase-backed content.

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Icons | React Icons |
| Data | Static JavaScript or Supabase |
| Linting | Oxlint |

## Prerequisites

- Node.js 18 or newer
- npm 9 or newer
- A Supabase project only if you want cloud-managed portfolio content

## Local setup

1. Clone the repository and enter the project directory:

   ```bash
   git clone <repository-url>
   cd landing-page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173`.

Supabase is optional. If no Supabase environment variables are configured, the application automatically uses the content in `src/data/portfolio.js`.

## Supabase setup

Use this setup when you want portfolio content to come from Supabase instead of the local data file.

1. Create a project at [supabase.com](https://supabase.com).
2. Open the Supabase SQL Editor.
3. Copy and run the contents of `supabase/schema.sql`. The script creates the required tables, read policies, and seed data.
4. Copy the environment template:

   **PowerShell**

   ```powershell
   Copy-Item .env.example .env
   ```

   **macOS or Linux**

   ```bash
   cp .env.example .env
   ```

5. In Supabase, open **Project Settings > API** and add the project URL and anonymous key to `.env`:

   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

6. Restart the development server after changing `.env`.

The application reads the following tables:

| Table | Content |
| --- | --- |
| `personal_info` | Name, title, contact details, biography, and profile links |
| `stats` | About-section counters |
| `experience` | Employment history |
| `education` | Education entries |
| `certifications` | Professional certifications |
| `achievements` | Achievement bullets |
| `projects` | Portfolio projects |
| `skills` | Skills grouped by category |

If Supabase is not configured or a request fails, local static data remains available as the fallback.

> The anonymous key is safe to expose to the browser only when Row Level Security policies are configured correctly. Never place a Supabase service-role key in `.env`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the project with Oxlint |

## Project structure

```text
landing-page/
├── public/                     Static assets and resume PDF
├── src/
│   ├── assets/                 Images bundled by Vite
│   ├── components/
│   │   ├── layout/             Navbar and footer
│   │   ├── sections/           Portfolio page sections
│   │   └── ui/                 Shared interface components
│   ├── context/
│   │   ├── PortfolioContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   └── portfolio.js        Local fallback content
│   ├── hooks/                  Reusable React hooks
│   ├── lib/
│   │   └── supabase.js         Optional Supabase client
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── supabase/
│   └── schema.sql              Database schema and seed data
├── .env.example
├── package.json
└── vite.config.js
```

## Customization

### Portfolio content

For a setup without Supabase, edit `src/data/portfolio.js`. It contains personal information, statistics, experience, education, certifications, achievements, projects, and skills.

For a Supabase-backed setup, edit the corresponding rows in the Supabase Table Editor. Changes are loaded the next time the page is opened.

### Resume

The Resume section expects the file below:

```text
public/Krishnakant_saad.pdf
```

Add or replace that file to enable the view and download buttons. If you rename it, update both resume links in `src/components/sections/Resume.jsx`.

### Themes

The navbar theme switcher provides four themes:

| Theme | Key | Appearance |
| --- | --- | --- |
| Dark Magic | `dark` | Deep navy and black |
| Light Magic | `light` | Parchment cream |
| Hogwarts Gold | `gold` | Dark amber and gold |
| Minimal Black | `minimal` | Black and silver |

Theme definitions and CSS variable updates live in `src/context/ThemeContext.jsx`.

## Production build

Create and test a production build:

```bash
npm run build
npm run preview
```

The generated `dist/` directory can be deployed to static hosting platforms such as Vercel, Netlify, or GitHub Pages. Add the same `VITE_SUPABASE_*` environment variables to the hosting provider when using Supabase.

## Notes

- Tailwind CSS 4 is loaded through `@tailwindcss/vite`; this project does not require a `tailwind.config.js`.
- Vite environment variables must start with `VITE_` to be available in browser code.
- `.env` files are ignored by Git. Keep `.env.example` as the credential-free template.
