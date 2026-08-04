'use client';

import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Progress Bar Sweep */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[1000] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
          transition={{ duration: 0.5, ease: "circInOut" }}
        />
        
        {/* Content Fade In */}
        <motion.main
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="min-h-screen pt-20"
        >
          {children}
        </motion.main>
      </motion.div>
    </AnimatePresence>
  );
}
