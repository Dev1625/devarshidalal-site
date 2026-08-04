'use client';

import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function Cursor() {
  const [hasMoved, setHasMoved] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Instant coordinates for the dot
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // Spring coordinates for the ring
  const ringX = useSpring(dotX, { stiffness: 1000, damping: 40, mass: 0.15 });
  const ringY = useSpring(dotY, { stiffness: 1000, damping: 40, mass: 0.15 });

  useEffect(() => {
    // Only show custom cursor on fine pointers
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!hasMoved) setHasMoved(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Tag names or specific classes that should trigger hover state
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="hover"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [hasMoved, dotX, dotY]);

  if (!hasMoved) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full border border-stone-800 bg-obsidian pointer-events-none z-[1000]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isHovering ? 0 : 1,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-obsidian pointer-events-none z-[999]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 24,
          height: 24,
        }}
        animate={{
          width: isHovering ? 36 : 24,
          height: isHovering ? 36 : 24,
          borderColor: isHovering ? 'var(--color-accent)' : 'var(--color-obsidian)',
        }}
        transition={{
          width: { type: 'spring', stiffness: 300, damping: 20 },
          height: { type: 'spring', stiffness: 300, damping: 20 },
          borderColor: { duration: 0.2 },
        }}
      />
    </>
  );
}
