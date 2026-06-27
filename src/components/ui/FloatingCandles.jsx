import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const CANDLES = [
  { left: '8%', delay: 0, height: 60 },
  { left: '18%', delay: 1.2, height: 45 },
  { left: '78%', delay: 0.5, height: 70 },
  { left: '88%', delay: 2.1, height: 50 },
  { left: '93%', delay: 0.8, height: 40 },
  { left: '5%', delay: 1.8, height: 55 },
];

function Candle({ left, delay, height }) {
  const { t } = useTheme();

  return (
    <motion.div
      className="absolute bottom-0 flex flex-col items-center pointer-events-none"
      style={{ left }}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {/* Flame */}
      <motion.div
        className="relative mb-0"
        animate={{ scaleY: [1, 1.08, 0.94, 1], scaleX: [1, 0.96, 1.04, 1] }}
        transition={{ duration: 0.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Outer glow */}
        <div
          className="absolute -inset-1 rounded-full blur-md"
          style={{ background: `${t.goldLight}44` }}
        />
        {/* Flame shape */}
        <div
          style={{
            width: 6,
            height: 14,
            background: `linear-gradient(to top, #ff6600, #ffcc00, #fff8e0)`,
            borderRadius: '50% 50% 20% 20%',
            position: 'relative',
            boxShadow: `0 0 8px #ffaa00aa, 0 0 20px #ff660044`,
          }}
        />
      </motion.div>
      {/* Wax body */}
      <div
        style={{
          width: 8,
          height,
          background: `linear-gradient(to right, #e8e0d0, #f5f0e8, #c8c0b0)`,
          borderRadius: '1px',
          boxShadow: `inset -2px 0 4px rgba(0,0,0,0.2)`,
        }}
      />
    </motion.div>
  );
}

export default function FloatingCandles() {
  return (
    <div className="absolute bottom-16 left-0 right-0 h-96 overflow-hidden pointer-events-none">
      {CANDLES.map((c, i) => (
        <Candle key={i} {...c} />
      ))}
    </div>
  );
}
