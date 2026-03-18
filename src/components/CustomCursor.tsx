import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePos.x - 8,
        y: mousePos.y - 8,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 250,
        mass: 0.5,
      }}
    />
  );
}
