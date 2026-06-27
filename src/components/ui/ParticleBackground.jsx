import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);
  const { t } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    // Parse gold color to rgba
    const goldRgb = '201,168,76';
    const purpleRgb = '92,59,158';

    const particles = Array.from({ length: 80 }, () => ({
      x: randomBetween(0, W),
      y: randomBetween(0, H),
      r: randomBetween(0.5, 2.2),
      dx: randomBetween(-0.3, 0.3),
      dy: randomBetween(-0.5, -0.1),
      alpha: randomBetween(0.2, 0.8),
      color: Math.random() > 0.4 ? goldRgb : purpleRgb,
      pulse: randomBetween(0.005, 0.02),
      pulseDir: 1,
    }));

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();

        // Sparkle cross
        if (p.r > 1.5) {
          ctx.strokeStyle = `rgba(${p.color},${p.alpha * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x - p.r * 2, p.y);
          ctx.lineTo(p.x + p.r * 2, p.y);
          ctx.moveTo(p.x, p.y - p.r * 2);
          ctx.lineTo(p.x, p.y + p.r * 2);
          ctx.stroke();
        }

        p.x += p.dx;
        p.y += p.dy;
        p.alpha += p.pulse * p.pulseDir;

        if (p.alpha >= 0.9 || p.alpha <= 0.1) p.pulseDir *= -1;
        if (p.y < -10) { p.y = H + 10; p.x = randomBetween(0, W); }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}
