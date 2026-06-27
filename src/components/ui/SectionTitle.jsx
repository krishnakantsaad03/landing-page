import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function SectionTitle({ subtitle, title, description }) {
  const { t } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65 }}
      className="text-center mb-10 sm:mb-12 lg:mb-16"
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cinzel uppercase text-xs mb-4"
          style={{ color: t.gold, letterSpacing: '0.3em' }}
        >
          ✦ {subtitle} ✦
        </motion.p>
      )}
      <h2
        className="font-cinzel font-bold leading-tight mb-5"
        style={{
          fontSize: 'clamp(1.75rem, 5vw, 3.2rem)',
          color: t.text,
          letterSpacing: '0.02em',
        }}
      >
        {title}
      </h2>
      <div className="divider-gold mb-5" />
      {description && (
        <p
          className="font-garamond italic mx-auto"
          style={{
            maxWidth: '560px',
            fontSize: '1.1rem',
            color: t.textMuted,
            lineHeight: 1.8,
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
