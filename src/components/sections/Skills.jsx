import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { skills } from '../../data/portfolio';
import SectionTitle from '../ui/SectionTitle';

const CATEGORY_META = {
  Frontend: { icon: '🖥', color: '#60a5fa' },
  Backend: { icon: '⚙️', color: '#a78bfa' },
  Database: { icon: '🗄', color: '#34d399' },
  Tools: { icon: '🛠', color: '#fbbf24' },
};

function SkillRow({ name, level, index, accentColor }) {
  const { t } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group mb-6"
    >
      <div className="flex justify-between items-center mb-3">
        <span
          className="font-cinzel text-xs font-semibold tracking-wide"
          style={{ color: t.text }}
        >
          {name}
        </span>
        <span
          className="font-garamond text-xs px-2 py-0.5 rounded-full"
          style={{
            background: accentColor + '18',
            color: accentColor,
            border: `1px solid ${accentColor}33`,
          }}
        >
          {level}%
        </span>
      </div>
      <div
        className="relative h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.06 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative"
          style={{
            background: `linear-gradient(90deg, ${accentColor}aa, ${accentColor})`,
            boxShadow: `0 0 8px ${accentColor}44`,
          }}
        >
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: accentColor,
              boxShadow: `0 0 8px ${accentColor}, 0 0 16px ${accentColor}66`,
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Object.keys(skills)];

  const filteredSkills = Object.entries(skills).filter(
    ([cat]) => activeCategory === 'All' || activeCategory === cat
  );

  return (
    <section
      id="skills"
      className="relative section-py overflow-hidden"
      style={{ background: t.surface }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: `linear-gradient(90deg, transparent, ${t.gold}44, transparent)`
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 60% 40% at 15% 50%, ${t.gold}06 0%, transparent 55%)`
      }} />

      <div className="relative page-container">
        <SectionTitle
          subtitle="The Spellbook"
          title="Skills & Technologies"
          description="Mastered through years of crafting digital solutions."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => {
            const meta = CATEGORY_META[cat];
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveCategory(cat)}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-cinzel tracking-wider transition-all duration-200 border"
                style={{
                  background: isActive ? t.gold : 'transparent',
                  borderColor: isActive ? t.gold : t.gold + '30',
                  color: isActive ? t.bg : t.textMuted,
                  boxShadow: isActive ? `0 0 20px ${t.gold}33` : 'none',
                }}
              >
                {meta?.icon} {cat}
              </motion.button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredSkills.map(([category, skillList]) => {
            const meta = CATEGORY_META[category];
            return (
              <motion.div
                key={category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl p-8 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${meta?.color || t.gold}22`,
                }}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${meta?.color || t.gold}88, transparent)`,
                  }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${meta?.color || t.gold}18` }}
                  >
                    {meta?.icon}
                  </div>
                  <h3
                    className="font-cinzel text-xs font-bold tracking-widest uppercase"
                    style={{ color: meta?.color || t.gold }}
                  >
                    {category}
                  </h3>
                </div>

                {skillList.map((skill, i) => (
                  <SkillRow
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                    accentColor={meta?.color || t.gold}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
