import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiLock, FiSearch } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { projects } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

const PROJECT_EMOJIS = { 0: '⚗️', 1: '🎮', 2: '🛒', 3: '🧙‍♂️' };

function ProjectCard({ project, index }) {
  const { t } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-xl overflow-hidden flex flex-col relative group"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${hovered ? t.gold + '55' : t.gold + '18'}`,
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${t.gold}10` : '0 4px 20px rgba(0,0,0,0.2)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Top glow line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${t.gold}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Header */}
      <div
        className="px-7 py-5 flex items-center justify-between"
        style={{
          background: project.confidential
            ? `linear-gradient(90deg, rgba(201,168,76,0.08), rgba(201,168,76,0.03))`
            : `linear-gradient(90deg, rgba(255,255,255,0.04), transparent)`,
          borderBottom: `1px solid ${t.gold}15`,
        }}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{PROJECT_EMOJIS[index] || '💼'}</span>
          {project.confidential && (
            <span
              className="flex items-center gap-1 text-xs font-cinzel"
              style={{ color: t.gold }}
            >
              <FiLock size={10} /> NDA
            </span>
          )}
        </div>
        <span
          className="text-xs font-cinzel px-2.5 py-1 rounded-full"
          style={{
            background: project.status === 'Live'
              ? 'rgba(74,222,128,0.1)'
              : project.status === 'Production'
              ? 'rgba(96,165,250,0.1)'
              : `${t.gold}10`,
            color: project.status === 'Live' ? '#4ade80'
              : project.status === 'Production' ? '#60a5fa'
              : t.gold,
            border: `1px solid ${project.status === 'Live' ? '#4ade8030' : project.status === 'Production' ? '#60a5fa30' : t.gold + '30'}`,
          }}
        >
          {project.status}
        </span>
      </div>

      <div className="p-8 flex flex-col flex-1">
        {/* Name */}
        <h3 className="font-cinzel font-bold mb-4 leading-tight" style={{ fontSize: '1rem', color: t.text }}>
          {project.name}
        </h3>

        {/* Description */}
        <p
          className="font-garamond leading-relaxed mb-6 flex-1"
          style={{ fontSize: '0.95rem', color: t.textMuted, lineHeight: 1.85 }}
        >
          {project.confidential
            ? 'Developed under NDA. Project-specific details, source code, and client information cannot be shared publicly.'
            : project.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {project.features.slice(0, 3).map((f, i) => (
            <li
              key={i}
              className="flex gap-2.5 font-garamond leading-snug"
              style={{ fontSize: '0.88rem', color: t.textMuted }}
            >
              <span style={{ color: t.gold, marginTop: 3, flexShrink: 0, fontSize: '0.5rem' }}>◆</span>
              {f}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-cinzel px-2 py-0.5 rounded-full"
              style={{
                background: `${t.gold}0a`,
                border: `1px solid ${t.gold}25`,
                color: t.gold,
                fontSize: '0.68rem',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div
          className="flex items-center justify-between text-xs font-garamond mb-6 py-3.5 border-t border-b"
          style={{ borderColor: `${t.gold}12`, color: t.textMuted }}
        >
          <span>{project.role}</span>
          <span>{project.duration}</span>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github ? (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-1.5 text-xs font-cinzel px-3 py-2 rounded-lg border transition-all"
              style={{ borderColor: `${t.gold}35`, color: t.textMuted }}
              onMouseEnter={(e) => { e.currentTarget.style.color = t.gold; e.currentTarget.style.borderColor = t.gold + '66'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = t.textMuted; e.currentTarget.style.borderColor = `${t.gold}35`; }}
            >
              <FiGithub size={13} /> GitHub
            </motion.a>
          ) : (
            <span
              className="flex items-center gap-1.5 text-xs font-cinzel px-3 py-2 rounded-lg border opacity-30 cursor-not-allowed select-none"
              style={{ borderColor: `${t.textMuted}30`, color: t.textMuted }}
            >
              <FiLock size={12} /> Private
            </span>
          )}
          {project.demo && project.demo !== '#' && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              className="btn-gold flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg"
            >
              <FiExternalLink size={13} /> Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useTheme();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Live', 'Production', 'Confidential'];

  const filtered = projects.filter((p) => {
    const q = search.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.tech.some((t) => t.toLowerCase().includes(q));
    const matchFilter = filter === 'All' || (filter === 'Confidential' && p.confidential) || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <section
      id="projects"
      className="relative section-py overflow-hidden"
      style={{ background: t.bg }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: `linear-gradient(90deg, transparent, ${t.gold}44, transparent)`
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 70% 40% at 50% 0%, ${t.gold}07 0%, transparent 55%)`
      }} />

      <div className="relative page-container">
        <SectionTitle
          subtitle="The Portfolio"
          title="Selected Projects"
          description="Production-grade work spanning SaaS, eCommerce, and enterprise domains."
        />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-12">
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl w-full sm:w-96"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${t.gold}25`,
            }}
          >
            <FiSearch size={15} style={{ color: t.textMuted, flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search by name or technology…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm outline-none w-full font-garamond"
              style={{ color: t.text }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 text-xs font-cinzel tracking-wider rounded-full border transition-all duration-200"
                style={{
                  background: filter === f ? t.gold : 'transparent',
                  borderColor: filter === f ? t.gold : t.gold + '30',
                  color: filter === f ? t.bg : t.textMuted,
                  boxShadow: filter === f ? `0 0 15px ${t.gold}44` : 'none',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter + search}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7"
          >
            {filtered.length > 0 ? (
              filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)
            ) : (
              <div
                className="col-span-3 text-center py-20 font-garamond text-lg"
                style={{ color: t.textMuted }}
              >
                No projects found for "{search}"
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
