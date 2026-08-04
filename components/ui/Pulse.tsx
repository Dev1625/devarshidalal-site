'use client';

import { motion } from 'motion/react';
import { useState } from 'react';

export function Pulse() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[900] hidden sm:flex items-center gap-3">
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        className="font-mono text-[10px] text-stone-mid tracking-widest uppercase bg-bone/80 px-2 py-1 rounded backdrop-blur-sm pointer-events-none"
      >
        Still thinking.
      </motion.div>
      <div 
        className="relative w-8 h-8 flex items-center justify-center cursor-none group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor="hover"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-accent absolute"
        />
        <div className="w-2 h-2 rounded-full bg-accent absolute" />
      </div>
    </div>
  );
}
