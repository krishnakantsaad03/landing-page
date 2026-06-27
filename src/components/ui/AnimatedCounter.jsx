import { useEffect, useState, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

export default function AnimatedCounter({ value, suffix = '' }) {
  const [ref, inView] = useInView(0.5);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const step = 16;
    const steps = duration / step;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}
