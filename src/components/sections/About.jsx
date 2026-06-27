import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/PortfolioContext';
import SectionTitle from '../ui/SectionTitle';
import AnimatedCounter from '../ui/AnimatedCounter';
import { GiSpellBook, GiCrystalWand, GiOwl, GiCastle } from 'react-icons/gi';
import { FiMapPin, FiMail, FiPhone, FiBriefcase } from 'react-icons/fi';

const traits = [
  { icon: <GiSpellBook />, label: 'Clean Code', desc: 'Readable, maintainable, well-structured.' },
  { icon: <GiCrystalWand />, label: 'Problem Solver', desc: 'Complex requirements into elegant solutions.' },
  { icon: <GiOwl />, label: 'Learner', desc: 'Always exploring the next technology.' },
  { icon: <GiCastle />, label: 'Architecture First', desc: 'Design before code, always.' },
];

export default function About() {
  const { t } = useTheme();
  const { personalInfo, stats, achievements } = usePortfolioData();

  return (
    <section
      id="about"
      className="relative section-py overflow-hidden"
      style={{ background: t.surface }}
    >
      {/* Top border glow */}
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: `linear-gradient(90deg, transparent, ${t.gold}44, transparent)`
      }} />
      {/* Background radial */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 70% 50% at 85% 30%, ${t.gold}07 0%, transparent 60%)`
      }} />

      <div className="relative page-container">
        <SectionTitle subtitle="The Wizard Behind the Code" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Bio text */}
            <p className="font-garamond leading-relaxed mb-8" style={{
              fontSize: '1.15rem',
              color: t.text,
              opacity: 0.88,
              lineHeight: '1.9',
            }}>
              {personalInfo.about}
            </p>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: <FiMapPin />, label: personalInfo.location },
                { icon: <FiBriefcase />, label: 'Zehntech Technology Pvt. Ltd.' },
                { icon: <FiMail />, label: personalInfo.email },
                { icon: <FiPhone />, label: personalInfo.phone },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-lg"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${t.gold}18`,
                  }}
                >
                  <span style={{ color: t.gold, flexShrink: 0 }}>{icon}</span>
                  <span className="text-sm font-garamond truncate" style={{ color: t.textMuted }}>{label}</span>
                </div>
              ))}
            </div>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="flex items-start gap-3.5 p-5 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: `1px solid ${t.gold}18`,
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = t.gold + '44';
                    e.currentTarget.style.background = `${t.gold}06`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = t.gold + '18';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                  }}
                >
                  <span style={{ color: t.gold, fontSize: '1.25rem', marginTop: 2, flexShrink: 0 }}>{trait.icon}</span>
                  <div>
                    <p className="font-cinzel text-xs font-bold mb-1.5" style={{ color: t.text }}>{trait.label}</p>
                    <p style={{ fontSize: '0.78rem', fontFamily: 'EB Garamond, serif', color: t.textMuted, lineHeight: 1.6 }}>{trait.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center py-10 px-5 rounded-xl relative overflow-hidden"
                  style={{
                    background: 'rgba(201,168,76,0.04)',
                    border: `1px solid ${t.gold}2a`,
                  }}
                >
                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-12 h-12 opacity-10" style={{
                    background: `radial-gradient(circle at top right, ${t.gold}, transparent)`
                  }} />
                  <div className="absolute bottom-0 left-0 w-8 h-8 opacity-10" style={{
                    background: `radial-gradient(circle at bottom left, ${t.gold}, transparent)`
                  }} />

                  <div
                    className="font-cinzel font-black mb-2"
                    style={{ fontSize: '2.8rem', color: t.gold, lineHeight: 1 }}
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-cinzel text-xs tracking-widest uppercase" style={{ color: t.textMuted }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div
              className="rounded-xl p-8"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${t.gold}1f`,
              }}
            >
              <h3
                className="font-cinzel text-xs font-bold tracking-[0.25em] uppercase mb-6 flex items-center gap-2"
                style={{ color: t.gold }}
              >
                <span>★</span> Key Achievements
              </h3>
              <ul className="space-y-4">
                {achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="flex gap-3 font-garamond leading-snug"
                    style={{ fontSize: '0.95rem', color: t.text, opacity: 0.85 }}
                  >
                    <span style={{ color: t.gold, marginTop: 4, flexShrink: 0, fontSize: '0.6rem' }}>◆</span>
                    {a}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
