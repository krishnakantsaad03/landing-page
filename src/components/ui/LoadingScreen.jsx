import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiCrystalWand } from 'react-icons/gi';

const spells = ['Lumos…', 'Accio Portfolio…', 'Alohomora…', 'Nox.'];

export default function LoadingScreen({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = spells.map((_, i) =>
      setTimeout(() => setPhase(i + 1), i * 600 + 400)
    );
    const done = setTimeout(onComplete, spells.length * 600 + 800);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex flex-col items-center justify-center"
      style={{ background: '#0a0a0f' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Stars */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.1,
          }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="text-5xl mb-8"
        style={{ color: '#c9a84c' }}
      >
        <GiCrystalWand />
      </motion.div>

      <div className="font-cinzel text-3xl mb-8" style={{ color: '#c9a84c' }}>
        KS Portfolio
      </div>

      <div className="h-8 flex items-center">
        <AnimatePresence mode="wait">
          {spells[phase - 1] && (
            <motion.p
              key={phase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="font-garamond italic text-lg"
              style={{ color: '#8a8090' }}
            >
              {spells[phase - 1]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 w-48 h-0.5 rounded overflow-hidden" style={{ background: '#1a1a2e' }}>
        <motion.div
          className="h-full rounded"
          style={{ background: 'linear-gradient(90deg, #8b6914, #c9a84c, #f0d060)' }}
          initial={{ width: '0%' }}
          animate={{ width: `${Math.min((phase / spells.length) * 100, 100)}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}
