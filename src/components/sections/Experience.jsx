import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { experience } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

function ExperienceCard({ exp, index }) {
  const [open, setOpen] = useState(index === 0);
  const { t } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative pl-16"
    >
      {/* Timeline dot — centered at left-0 of pl-16 wrapper so dot sits on the line */}
      <div className="absolute left-0 top-7 w-8 flex items-center justify-center">
        <div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center z-10"
          style={{ borderColor: t.gold, background: t.bg }}
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: t.gold, boxShadow: `0 0 8px ${t.gold}` }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        className="rounded-xl overflow-hidden transition-all duration-300"
        style={{
          background: open ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)',
          border: `1px solid ${open ? t.gold + '44' : t.gold + '1a'}`,
          boxShadow: open ? `0 4px 40px rgba(0,0,0,0.3), 0 0 20px ${t.gold}0a` : 'none',
        }}
      >
        {/* Clickable header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-7 group"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <h3
                  className="font-cinzel font-bold"
                  style={{ fontSize: '1.05rem', color: t.text }}
                >
                  {exp.role}
                </h3>
                {exp.duration.includes('Present') && (
                  <span
                    className="text-xs font-cinzel px-2.5 py-0.5 rounded-full animate-pulse-glow"
                    style={{
                      background: 'rgba(74,222,128,0.1)',
                      color: '#4ade80',
                      border: '1px solid rgba(74,222,128,0.3)',
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <p
                className="font-cinzel font-semibold text-sm mb-4"
                style={{ color: t.gold }}
              >
                {exp.company}
              </p>
              <div className="flex flex-wrap gap-5">
                <span
                  className="flex items-center gap-1.5 font-garamond text-xs"
                  style={{ color: t.textMuted }}
                >
                  <FiCalendar size={11} /> {exp.duration}
                </span>
                <span
                  className="flex items-center gap-1.5 font-garamond text-xs"
                  style={{ color: t.textMuted }}
                >
                  <FiMapPin size={11} /> {exp.location}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ color: t.gold, flexShrink: 0, marginTop: 2 }}
            >
              <FiChevronDown size={18} />
            </motion.div>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-cinzel px-2.5 py-1 rounded-full"
                style={{
                  background: `${t.gold}0d`,
                  border: `1px solid ${t.gold}2a`,
                  color: t.gold,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </button>

        {/* Expanded */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div
                className="px-7 pb-8 pt-3 border-t"
                style={{ borderColor: `${t.gold}1a` }}
              >
                <div className="grid sm:grid-cols-2 gap-10 pt-5">
                  <div>
                    <h4
                      className="font-cinzel text-xs tracking-[0.2em] uppercase mb-4"
                      style={{ color: t.gold }}
                    >
                      Responsibilities
                    </h4>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((r, i) => (
                        <li
                          key={i}
                          className="flex gap-3 font-garamond leading-snug"
                          style={{ fontSize: '0.9rem', color: t.text, opacity: 0.82 }}
                        >
                          <span
                            style={{ color: t.gold, marginTop: 5, flexShrink: 0, fontSize: '0.55rem' }}
                          >◆</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4
                      className="font-cinzel text-xs tracking-[0.2em] uppercase mb-4"
                      style={{ color: '#f0d060' }}
                    >
                      Achievements
                    </h4>
                    <ul className="space-y-4">
                      {exp.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="flex gap-3 font-garamond leading-snug"
                          style={{ fontSize: '0.9rem', color: t.text, opacity: 0.82 }}
                        >
                          <FiCheckCircle
                            size={12}
                            style={{ color: '#f0d060', marginTop: 4, flexShrink: 0 }}
                          />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useTheme();

  return (
    <section
      id="experience"
      className="relative section-py overflow-hidden"
      style={{ background: t.bg }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: `linear-gradient(90deg, transparent, ${t.gold}44, transparent)`
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 50% 60% at 80% 50%, ${t.gold}05 0%, transparent 60%)`
      }} />

      <div className="relative page-container" style={{ maxWidth: 860 }}>
        <SectionTitle
          subtitle="The Chronicles"
          title="Work Experience"
          description="Every great wizard has a journey. Here is mine."
        />

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-2.5 top-8 bottom-8 w-px"
            style={{
              background: `linear-gradient(to bottom, transparent, ${t.gold}66, ${t.gold}88, ${t.gold}66, transparent)`,
            }}
          />
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
