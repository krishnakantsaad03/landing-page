import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiCalendar } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/PortfolioContext';
import SectionTitle from '../ui/SectionTitle';

function InfoCard({ children, delay = 0 }) {
  const { t } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className="rounded-xl p-8"
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: `1px solid ${t.gold}1f`,
      }}
    >
      {children}
    </motion.div>
  );
}

function CardLabel({ emoji, text }) {
  const { t } = useTheme();
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="text-base">{emoji}</span>
      <h3
        className="font-cinzel font-bold text-xs tracking-[0.25em] uppercase"
        style={{ color: t.gold }}
      >
        {text}
      </h3>
    </div>
  );
}

export default function Resume() {
  const { t } = useTheme();
  const { education, certifications, experience, achievements } = usePortfolioData();

  return (
    <section
      id="resume"
      className="relative section-py overflow-hidden"
      style={{ background: t.surface }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: `linear-gradient(90deg, transparent, ${t.gold}44, transparent)`
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 50% 60% at 15% 60%, ${t.gold}05 0%, transparent 55%)`
      }} />

      <div className="relative page-container" style={{ maxWidth: 1100 }}>
        <SectionTitle
          subtitle="The Parchment"
          title="Resume"
          description="Academic lineage and professional credentials."
        />

        {/* Download buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <motion.a
            href="/Krishnakant_saad.pdf"
            download
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm"
          >
            <FiDownload size={15} /> Download Resume
          </motion.a>
          <motion.a
            href="/Krishnakant_saad.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-ghost flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm"
          >
            <FiEye size={15} /> View Online
          </motion.a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 items-start">

          {/* Experience */}
          <InfoCard delay={0}>
            <CardLabel emoji="💼" text="Experience" />
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="pb-6 mb-6 border-b last:border-0 last:mb-0 last:pb-0"
                style={{ borderColor: `${t.gold}15` }}
              >
                <p className="font-cinzel font-bold text-sm mb-1" style={{ color: t.text }}>
                  {exp.role}
                </p>
                <p
                  className="font-cinzel text-xs font-semibold mb-2"
                  style={{ color: t.gold }}
                >
                  {exp.company}
                </p>
                <div
                  className="flex items-center gap-1.5 font-garamond text-xs"
                  style={{ color: t.textMuted }}
                >
                  <FiCalendar size={10} /> {exp.duration}
                </div>
              </div>
            ))}
          </InfoCard>

          {/* Education + Certifications */}
          <div className="space-y-5">
            <InfoCard delay={0.1}>
              <CardLabel emoji="📜" text="Education" />
              {education.map((edu, i) => (
                <div key={i}>
                  <p className="font-cinzel font-bold text-xs leading-snug mb-1.5" style={{ color: t.text }}>
                    {edu.degree}
                  </p>
                  <p className="font-garamond text-xs leading-snug mb-2" style={{ color: t.textMuted }}>
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-garamond" style={{ color: t.textMuted }}>{edu.year}</span>
                    <span
                      className="font-cinzel px-2 py-0.5 rounded-full"
                      style={{ background: `${t.gold}15`, color: t.gold, fontSize: '0.65rem' }}
                    >
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </InfoCard>

            <InfoCard delay={0.15}>
              <CardLabel emoji="🏅" text="Certifications" />
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="pb-5 mb-5 border-b last:border-0 last:mb-0 last:pb-0"
                  style={{ borderColor: `${t.gold}12` }}
                >
                  <p className="font-cinzel text-xs font-semibold mb-0.5" style={{ color: t.text }}>
                    {cert.name}
                  </p>
                  <div className="flex justify-between items-center">
                    <p style={{ fontSize: '0.72rem', fontFamily: 'EB Garamond, serif', color: t.textMuted }}>
                      {cert.issuer}
                    </p>
                    <span
                      className="font-cinzel ml-2 shrink-0"
                      style={{ fontSize: '0.65rem', color: t.gold }}
                    >
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </InfoCard>
          </div>

          {/* Achievements + Languages */}
          <InfoCard delay={0.2}>
            <CardLabel emoji="⭐" text="Key Achievements" />
            <ul className="space-y-4 mb-7">
              {achievements.map((a, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex gap-2.5 font-garamond leading-snug"
                  style={{ fontSize: '0.88rem', color: t.text, opacity: 0.85 }}
                >
                  <span style={{ color: t.gold, marginTop: 4, flexShrink: 0, fontSize: '0.5rem' }}>◆</span>
                  {a}
                </motion.li>
              ))}
            </ul>

            <div className="pt-6 border-t" style={{ borderColor: `${t.gold}15` }}>
              <CardLabel emoji="🌐" text="Languages" />
              <div className="flex gap-2">
                {['English', 'Hindi'].map((lang) => (
                  <span
                    key={lang}
                    className="font-cinzel text-xs px-3 py-1 rounded-full"
                    style={{
                      background: `${t.gold}0a`,
                      border: `1px solid ${t.gold}25`,
                      color: t.gold,
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
