import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { GiCrystalWand } from 'react-icons/gi';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/portfolio';

export default function Footer() {
  const { t } = useTheme();

  return (
    <footer
      className="relative py-12"
      style={{
        background: t.surface,
        borderTop: `1px solid ${t.gold}20`,
      }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${t.gold}66, transparent)` }}
      />

      <div className="page-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div
              className="flex items-center gap-2 justify-center md:justify-start font-cinzel font-black text-base mb-1.5"
              style={{ color: t.gold }}
            >
              <GiCrystalWand size={18} /> KS Portfolio
            </div>
            <p className="font-garamond italic text-xs" style={{ color: t.textMuted }}>
              "It is our choices that show what we truly are."
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={16} />, href: personalInfo.github, label: 'GitHub' },
              { icon: <FiLinkedin size={16} />, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: <FiMail size={16} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.12 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all"
                style={{ borderColor: t.gold + '25', color: t.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = t.gold + '55';
                  e.currentTarget.style.color = t.gold;
                  e.currentTarget.style.background = t.gold + '0f';
                  e.currentTarget.style.boxShadow = `0 0 12px ${t.gold}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = t.gold + '25';
                  e.currentTarget.style.color = t.textMuted;
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-cinzel px-4 py-2 rounded-lg border transition-all tracking-wider"
            style={{ borderColor: t.gold + '25', color: t.textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = t.gold + '55';
              e.currentTarget.style.color = t.gold;
              e.currentTarget.style.background = t.gold + '0a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = t.gold + '25';
              e.currentTarget.style.color = t.textMuted;
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <FiArrowUp size={13} /> Back to Top
          </motion.button>
        </div>

        <div className="text-center mt-8 font-garamond text-xs" style={{ color: t.textMuted, opacity: 0.5 }}>
          © {new Date().getFullYear()} {personalInfo.name} · Built with React.js & Framer Motion
        </div>
      </div>
    </footer>
  );
}
