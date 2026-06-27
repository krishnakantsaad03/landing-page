import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { usePortfolioData } from '../../context/PortfolioContext';
import ParticleBackground from '../ui/ParticleBackground';
import FloatingCandles from '../ui/FloatingCandles';

function TypewriterText({ roles = [] }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const { t } = useTheme();

  useEffect(() => {
    if (!roles.length) return;
    const role = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx, roles]);

  return (
    <span>
      <span style={{ color: t.gold }}>{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity }}
        style={{ color: t.gold }}
      >|</motion.span>
    </span>
  );
}

export default function Hero() {
  const { t } = useTheme();
  const { personalInfo } = usePortfolioData();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-24"
      style={{ background: `linear-gradient(180deg, ${t.bg} 0%, ${t.bg} 60%, ${t.surface} 100%)` }}
    >
      <ParticleBackground />
      <FloatingCandles />

      {/* Radial glow center */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 80% 50% at 50% 60%, ${t.gold}0a 0%, transparent 70%)`
      }} />

      {/* Stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() > 0.85 ? 2 : 1,
            height: Math.random() > 0.85 ? 2 : 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 70}%`,
            background: Math.random() > 0.6 ? t.goldLight : '#ffffff',
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{ opacity: [0.1, 0.7 + Math.random() * 0.3, 0.1] }}
          transition={{ duration: 2 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 4 }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 page-container text-center" style={{ maxWidth: 900 }}>
        {/* Subtitle badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-cinzel tracking-[0.35em] uppercase px-6 py-2.5 rounded-full"
            style={{
              border: `1px solid ${t.gold}44`,
              color: t.gold,
              background: `linear-gradient(135deg, ${t.gold}08, ${t.gold}04)`,
            }}
          >
            <span style={{ color: t.goldLight }}>✦</span>
            Wizard of the Web
            <span style={{ color: t.goldLight }}>✦</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-cinzel font-black leading-none mb-6"
          style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 3.6rem)',
            color: t.text,
            textShadow: `0 0 60px ${t.gold}18`,
            letterSpacing: '0.02em',
          }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-garamond mb-6"
          style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', minHeight: '2.5rem' }}
        >
          <TypewriterText roles={personalInfo?.roles ?? []} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-garamond italic leading-relaxed mb-10 mx-auto max-w-xl"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', color: t.textMuted }}
        >
          "{personalInfo.tagline}"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projects')}
            className="btn-gold px-8 py-3.5 rounded-lg text-sm"
          >
            View Projects
          </motion.button>
          <motion.a
            href="/Krishnakant_saad.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-ghost flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm"
          >
            <FiDownload /> Download CV
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-cinzel text-sm font-semibold tracking-wider border transition-all"
            style={{ borderColor: t.gold + '30', color: t.textMuted }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.gold + '55'; e.currentTarget.style.color = t.gold; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.gold + '30'; e.currentTarget.style.color = t.textMuted; }}
          >
            <FiMail /> Contact Me
          </motion.button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex justify-center items-center gap-5"
        >
          {[
            { icon: <FaGithub size={20} />, href: personalInfo.github, label: 'GitHub' },
            { icon: <FaLinkedin size={20} />, href: personalInfo.linkedin, label: 'LinkedIn' },
          ].map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.15 }}
              className="transition-colors"
              style={{ color: t.textMuted }}
              onMouseEnter={(e) => (e.currentTarget.style.color = t.gold)}
              onMouseLeave={(e) => (e.currentTarget.style.color = t.textMuted)}
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
          <div className="w-px h-5 mx-1" style={{ background: t.gold + '33' }} />
          <span className="text-xs font-cinzel tracking-widest" style={{ color: t.textMuted }}>
            {personalInfo.location}
          </span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        onClick={() => scrollTo('about')}
      >
        <span className="text-xs font-cinzel tracking-[0.3em] uppercase" style={{ color: t.textMuted + '88' }}>
          Scroll
        </span>
        <FiArrowDown size={14} style={{ color: t.gold }} />
      </motion.div>
    </section>
  );
}
