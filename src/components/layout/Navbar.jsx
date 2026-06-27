import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, themes } from '../../context/ThemeContext';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { FiMenu, FiX } from 'react-icons/fi';
import { GiCrystalWand } from 'react-icons/gi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const themeIcons = { dark: '🌑', light: '☀️', gold: '✨', minimal: '⬛' };

export default function Navbar() {
  const { theme, switchTheme, t } = useTheme();
  const progress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[60] transition-all duration-75"
        style={{
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${t.goldDark}, ${t.gold}, ${t.goldLight})`,
          boxShadow: `0 0 8px ${t.gold}`,
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? t.bg + 'eb' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${t.gold}18` : 'none',
          boxShadow: scrolled ? `0 4px 30px rgba(0,0,0,0.3)` : 'none',
        }}
      >
        <div className="page-container">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 font-cinzel font-black text-base"
              style={{ color: t.gold }}
            >
              <GiCrystalWand size={18} />
              <span>KS</span>
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="px-3.5 py-2 font-cinzel text-xs tracking-wider transition-all duration-200 relative group"
                  style={{ color: t.textMuted }}
                  onMouseEnter={(e) => (e.target.style.color = t.gold)}
                  onMouseLeave={(e) => (e.target.style.color = t.textMuted)}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{ background: t.gold }}
                  />
                </button>
              ))}
            </div>

            {/* Right: theme + menu */}
            <div className="flex items-center gap-3">
              {/* Theme switcher */}
              <div className="relative">
                <button
                  onClick={() => setThemeOpen(!themeOpen)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base border transition-all"
                  style={{ borderColor: t.gold + '30', color: t.gold }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.gold + '66'; e.currentTarget.style.background = t.gold + '0f'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.gold + '30'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {themeIcons[theme]}
                </button>
                <AnimatePresence>
                  {themeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-44 rounded-xl overflow-hidden shadow-2xl z-50"
                      style={{
                        background: t.card,
                        border: `1px solid ${t.gold}25`,
                        boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
                      }}
                    >
                      {Object.values(themes).map((th) => (
                        <button
                          key={th.id}
                          onClick={() => { switchTheme(th.id); setThemeOpen(false); }}
                          className="w-full text-left px-4 py-2.5 text-xs font-cinzel flex items-center gap-2.5 transition-colors"
                          style={{
                            color: theme === th.id ? t.gold : t.textMuted,
                            background: theme === th.id ? t.gold + '12' : 'transparent',
                          }}
                          onMouseEnter={(e) => { if (theme !== th.id) e.currentTarget.style.background = t.gold + '08'; }}
                          onMouseLeave={(e) => { if (theme !== th.id) e.currentTarget.style.background = 'transparent'; }}
                        >
                          {themeIcons[th.id]} {th.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile menu */}
              <button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-all"
                style={{ borderColor: t.gold + '30', color: t.gold }}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
              style={{ background: t.bg + 'fa', borderTop: `1px solid ${t.gold}18` }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-6 py-4 font-cinzel text-xs tracking-wider transition-colors"
                  style={{
                    color: t.textMuted,
                    borderBottom: `1px solid ${t.gold}0a`,
                  }}
                  onMouseEnter={(e) => { e.target.style.color = t.gold; e.target.style.background = t.gold + '06'; }}
                  onMouseLeave={(e) => { e.target.style.color = t.textMuted; e.target.style.background = 'transparent'; }}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {themeOpen && <div className="fixed inset-0 z-40" onClick={() => setThemeOpen(false)} />}
    </>
  );
}
