import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C87D4B] via-[#E2B78E] to-[#D4A373] origin-left z-50 pointer-events-none shadow-[0_0_10px_rgba(212,163,115,0.6)]"
      aria-hidden="true"
    />
  );
};
