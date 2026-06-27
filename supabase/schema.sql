-- ============================================================
-- Harry Potter Portfolio — Supabase Schema + Seed Data
-- Run this entire file in Supabase → SQL Editor → Run
-- ============================================================

-- ── Tables ───────────────────────────────────────────────────

create table if not exists personal_info (
  id               serial primary key,
  name             text not null,
  title            text,
  roles            text[],
  tagline          text,
  email            text,
  phone            text,
  github           text,
  linkedin         text,
  location         text,
  years_of_experience int,
  current_role     text,
  about            text
);

create table if not exists stats (
  id         serial primary key,
  value      int    not null,
  suffix     text,
  label      text,
  sort_order int default 0
);

create table if not exists experience (
  id               serial primary key,
  company          text,
  role             text,
  duration         text,
  location         text,
  technologies     text[],
  responsibilities text[],
  achievements     text[],
  sort_order       int default 0
);

create table if not exists education (
  id          serial primary key,
  degree      text,
  institution text,
  year        text,
  grade       text,
  sort_order  int default 0
);

create table if not exists certifications (
  id         serial primary key,
  name       text,
  issuer     text,
  year       text,
  sort_order int default 0
);

create table if not exists achievements (
  id         serial primary key,
  text       text,
  sort_order int default 0
);

create table if not exists projects (
  id           serial primary key,
  name         text,
  description  text,
  tech         text[],
  features     text[],
  role         text,
  duration     text,
  status       text,
  confidential boolean default false,
  github       text,
  demo         text,
  sort_order   int default 0
);

create table if not exists skills (
  id         serial primary key,
  name       text,
  level      int,
  category   text,
  sort_order int default 0
);

-- ── Row Level Security (public read-only) ────────────────────

alter table personal_info   enable row level security;
alter table stats           enable row level security;
alter table experience      enable row level security;
alter table education       enable row level security;
alter table certifications  enable row level security;
alter table achievements    enable row level security;
alter table projects        enable row level security;
alter table skills          enable row level security;

create policy "Public read" on personal_info   for select using (true);
create policy "Public read" on stats           for select using (true);
create policy "Public read" on experience      for select using (true);
create policy "Public read" on education       for select using (true);
create policy "Public read" on certifications  for select using (true);
create policy "Public read" on achievements    for select using (true);
create policy "Public read" on projects        for select using (true);
create policy "Public read" on skills          for select using (true);

-- ── Seed Data ────────────────────────────────────────────────
-- Replace every value below with your own information.

insert into personal_info (name, title, roles, tagline, email, phone, github, linkedin, location, years_of_experience, current_role, about)
values (
  'Krishnakant Saad',
  'Software Engineer',
  array['React.js Developer', 'Frontend Engineer', 'MERN Stack Developer', 'SaaS & Enterprise Dev'],
  'I build scalable web applications with clean architecture.',
  'krishnakant.saad03@gmail.com',
  '+91-7024937405',
  'https://github.com/krishnakant-saad',
  'https://linkedin.com/in/krishnakant-saad-55307921b',
  'Indore, Madhya Pradesh, India',
  3,
  'Software Engineer at Zehntech Technology Pvt. Ltd.',
  'Software Engineer with 3+ years of experience building scalable, user-centric web applications. Strong expertise in React.js, modern JavaScript, and responsive UI development, with solid backend exposure using Node.js, Express.js, and REST APIs.'
);

insert into stats (value, suffix, label, sort_order) values
  (10, '+', 'Projects Delivered', 1),
  (3,  '+', 'Years Experience',   2),
  (12, '+', 'Technologies',       3),
  (8,  '+', 'Happy Clients',      4);

insert into experience (company, role, duration, location, technologies, responsibilities, achievements, sort_order) values
(
  'Zehntech Technology Pvt. Ltd.',
  'Software Engineer',
  'June 2022 – Present',
  'Indore, India',
  array['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'REST APIs'],
  array[
    'Developed and maintained modern, scalable front-end applications using React.js for SaaS and enterprise products',
    'Built reusable, modular React components and optimized rendering performance',
    'Worked closely with backend teams to integrate REST APIs and manage application state',
    'Implemented responsive layouts using Tailwind CSS ensuring cross-browser compatibility',
    'Contributed to backend development using Node.js and Express.js',
    'Participated in code reviews, sprint planning, and Agile ceremonies'
  ],
  array[
    'Delivered multiple production-grade React applications used by real-world clients',
    'Successfully collaborated across teams to deliver features on tight deadlines',
    'Actively contributed to improving code quality through reviews and refactoring'
  ],
  1
),
(
  'Zehntech Technology Pvt. Ltd.',
  'Intern Software Engineer',
  'November 2021 – June 2022',
  'Indore, India',
  array['React.js', 'JavaScript', 'Git', 'REST APIs'],
  array[
    'Assisted in developing front-end features using React.js and JavaScript',
    'Integrated UI components with backend APIs and supported bug fixing',
    'Gained hands-on experience with databases, Git workflows, and deployment'
  ],
  array[
    'Transitioned to full-time Software Engineer within 7 months',
    'Contributed to 3+ live client features during the internship period'
  ],
  2
);

insert into education (degree, institution, year, grade, sort_order) values
(
  'Bachelor of Technology — Computer Science Engineering',
  'Jawaharlal Institute of Technology, Borawan, Madhya Pradesh',
  '2018 – 2022',
  'B.Tech CSE',
  1
);

insert into certifications (name, issuer, year, sort_order) values
  ('Agile / Scrum Practitioner',  'Self-practised via enterprise projects', '2022', 1),
  ('AWS Essentials (EC2, S3)',     'Amazon Web Services',                   '2023', 2),
  ('CI/CD Fundamentals',           'GitHub Actions / Internal Training',    '2023', 3);

insert into achievements (text, sort_order) values
  ('Delivered multiple production-grade React applications used by real-world clients and enterprise teams', 1),
  ('Successfully collaborated across frontend and backend teams to deliver features on tight deadlines',     2),
  ('Actively contributed to improving code quality through reviews, refactoring, and best practices',       3),
  ('Transitioned from intern to full-time Software Engineer within 7 months',                              4);

insert into projects (name, description, tech, features, role, duration, status, confidential, github, demo, sort_order) values
(
  'Kopyst – SOP & Process Documentation Platform',
  'A SaaS platform for creating, managing, and sharing Standard Operating Procedures with role-based access and dynamic form rendering.',
  array['React.js', 'Tailwind CSS', 'Node.js', 'REST APIs'],
  array[
    'Dashboard and editor interfaces with reusable React components',
    'Dynamic form rendering with role-based access on the UI layer',
    'API integration with backend services for optimized application flow',
    'Responsive design across all devices'
  ],
  'Frontend Developer', '4 months', 'Production', false, null, null, 1
),
(
  'Online Gaming / Casino Platform',
  'A freelance full-stack gaming platform with game launch, betting flow, wallet balance management, and third-party game provider integrations.',
  array['Laravel (PHP)', 'Angular', 'PostgreSQL', 'REST APIs'],
  array[
    'Backend APIs for game launch, betting flow, and wallet balance updates',
    'Angular frontend integrated with backend APIs for game session management',
    'Bet deduction and win/loss credit updates based on provider responses',
    'Third-party game providers, payment gateways, and webhook handling'
  ],
  'Full Stack Developer', '3 months', 'Production', true, null, null, 2
),
(
  'MyLiveCart – eCommerce to WhatsApp Sync',
  'A full-featured eCommerce platform that synchronizes product catalogues and orders to WhatsApp, enabling merchants to sell directly via messaging.',
  array['React.js', 'Node.js', 'MySQL', 'REST APIs'],
  array[
    'User and admin dashboards with real-time data updates',
    'Product sync and order management between platform and WhatsApp',
    'Responsive UI for both merchants and end customers',
    'Real-time order notifications and status tracking'
  ],
  'Full Stack Developer', '2 months', 'Production', false, null, null, 3
),
(
  'Developer Portfolio',
  'A Harry Potter-themed, fully responsive React.js developer portfolio with Framer Motion animations, theme switcher, and contact form.',
  array['React.js', 'Framer Motion', 'Tailwind CSS', 'Vite'],
  array[
    '4 theme variants with live switcher (Dark / Light / Gold / Minimal)',
    'Particle canvas background, floating candle animations',
    'Typewriter role animation, scroll-triggered counters',
    'Fully responsive across all devices'
  ],
  'Solo Developer', '1 week', 'Live', false, 'https://github.com/krishnakant-saad', '#', 4
);

insert into skills (name, level, category, sort_order) values
  ('React.js',             92, 'Frontend', 1),
  ('JavaScript (ES6+)',    90, 'Frontend', 2),
  ('HTML5 & CSS3',         95, 'Frontend', 3),
  ('Tailwind CSS',         88, 'Frontend', 4),
  ('Angular',              62, 'Frontend', 5),
  ('Responsive Design',    90, 'Frontend', 6),
  ('Node.js',              75, 'Backend',  1),
  ('Express.js',           73, 'Backend',  2),
  ('REST APIs',            85, 'Backend',  3),
  ('Laravel (PHP)',        60, 'Backend',  4),
  ('PostgreSQL',           75, 'Database', 1),
  ('MySQL',                72, 'Database', 2),
  ('MongoDB',              68, 'Database', 3),
  ('Git & GitHub',         90, 'Tools',    1),
  ('AWS (EC2, S3)',         55, 'Tools',    2),
  ('CI/CD Basics',         58, 'Tools',    3),
  ('Agile / Scrum',        82, 'Tools',    4);
