'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';
import { PUBLICATIONS, PUBLICATION_CATEGORIES, type PublicationCategory } from '@/lib/publications';
import { LIBRARY_PUBLISHED } from '@/lib/site';
import { LibraryCover } from '@/components/layout/LibraryCover';

function Bubble({
  cat,
  setSelectedCategory,
}: {
  cat: { name: PublicationCategory; count: number; size: number };
  setSelectedCategory: (cat: PublicationCategory) => void;
}) {
  return (
    <motion.button
      layoutId={`bubble-${cat.name}`}
      onClick={() => setSelectedCategory(cat.name)}
      className="group min-h-40 w-full border border-obsidian/70 bg-bone px-6 py-5 text-left cursor-none hover:border-accent hover:bg-stone-light/35 transition-colors"
      data-cursor="hover"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ layout: { type: 'spring', stiffness: 300, damping: 30 } }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">
        {cat.count} essays
      </span>
      <span className="mt-8 block font-serif text-3xl text-obsidian transition-colors group-hover:text-accent">
        {cat.name}
      </span>
    </motion.button>
  );
}

export default function LibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState<PublicationCategory | null>(null);
  const isMobile = useIsMobile();

  // Everything below is intact and returns as soon as the flag flips.
  if (!LIBRARY_PUBLISHED) return <LibraryCover />;

  if (isMobile === undefined) return null;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!selectedCategory && (
          <motion.div 
            key="category-grid"
            className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12 md:pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h1 className="font-serif text-5xl text-obsidian md:text-7xl">The Library</h1>
              <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid">
                {PUBLICATIONS.length} essays across {PUBLICATION_CATEGORIES.length} fields
              </div>
            </div>
            <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PUBLICATION_CATEGORIES.map((cat) => (
                <Bubble key={cat.name} cat={cat} setSelectedCategory={setSelectedCategory} />
              ))}
            </div>
          </motion.div>
        )}

        {selectedCategory && (
          <motion.div 
            key="list"
            className="w-full max-w-4xl mx-auto px-6 pt-12 md:pt-20 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <button 
              onClick={() => setSelectedCategory(null)}
              className="font-mono text-[10px] uppercase tracking-widest text-stone-mid hover:text-obsidian mb-12 flex items-center gap-2 pointer-events-auto"
              data-cursor="hover"
            >
              &larr; Back to Library
            </button>

            <motion.div 
              layoutId={`bubble-${selectedCategory}`}
              className="h-24 w-40 bg-bone border border-accent flex flex-col items-center justify-center mb-16"
              style={{ borderRadius: '0' }}
            >
               <span className="font-mono text-[10px] uppercase tracking-widest text-obsidian">{selectedCategory}</span>
            </motion.div>

            <div className="flex flex-col">
              {PUBLICATIONS.filter(p => !selectedCategory || p.category === selectedCategory).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-obsidian/30 group pointer-events-auto"
                >
                  <span className="font-mono text-[10px] text-stone-mid uppercase tracking-widest block md:w-32 mb-2 md:mb-0">
                    {post.date}
                  </span>
                  
                  <Link href={`/library/${post.slug}`} className="flex-grow font-serif text-2xl text-obsidian group-hover:text-accent transition-colors" data-cursor="hover">
                    {post.title}
                  </Link>
                  
                  <span className="font-mono text-[10px] text-stone-mid uppercase tracking-widest mt-2 md:mt-0 text-left md:text-right md:w-32 block">
                    {post.readTime}
                  </span>
                </motion.div>
              ))}
              
              {PUBLICATIONS.filter(p => p.category === selectedCategory).length === 0 && (
                <div className="text-stone-mid font-sans italic py-12">No posts available in this category yet.</div>
              )}
            </div>
            
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
