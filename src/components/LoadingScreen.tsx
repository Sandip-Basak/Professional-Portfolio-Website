import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LOADING_TEXTS = [
  "TUNING STRINGS",
  "PITCHING DISTORTION",
  "READY TO ROCK"
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(10);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const duration = 3000; // Total 3 seconds
    const interval = duration / 9; // Intervals to go from 10 down to 1

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 1;
        }
        return prev - 1;
      });
    }, interval);

    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % LOADING_TEXTS.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(textTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[10000] bg-ink flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glitch Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-10 pointer-events-none select-none overflow-hidden">
        <h2 className="font-display text-[30vw] leading-none text-outline whitespace-nowrap uppercase">AXE</h2>
        <h2 className="font-display text-[30vw] leading-none text-outline whitespace-nowrap uppercase">GRINDER</h2>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Progress Number */}
        <motion.div 
          className="font-display text-[25vw] md:text-[15vw] leading-none text-white mix-blend-difference"
        >
          {count.toString().padStart(2, '0')}
        </motion.div>

        {/* Animated Loading Text */}
        <div className="h-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="font-sans text-neon font-bold tracking-[0.3em] text-xs md:text-sm uppercase"
            >
              {LOADING_TEXTS[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-2 bg-neon transition-all duration-300 ease-out" 
        style={{ width: `${((11 - count) / 10) * 100}%` }} 
      />
      
      {/* Visual Accents */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 border-l border-t border-white/20 w-20 h-20" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 border-r border-b border-white/20 w-20 h-20" />
    </motion.div>
  );
}
