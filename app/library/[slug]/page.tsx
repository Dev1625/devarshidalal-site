'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getNextPublication, getPublicationBySlug } from '@/lib/publications';

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPublicationBySlug(slug);
  const nextPost = getNextPublication(slug);

  if (!post) {
    return (
      <div className="max-w-[680px] mx-auto px-6 py-32 min-h-screen">
        <div className="font-mono text-[10px] uppercase tracking-widest text-accent mb-6">Not found</div>
        <h1 className="font-serif text-5xl text-obsidian mb-8">This essay is not in the library yet.</h1>
        <Link href="/library" className="font-mono text-[10px] uppercase tracking-widest text-obsidian hover:text-accent" data-cursor="hover">
          &larr; Back to Library
        </Link>
      </div>
    );
  }

  return (
    <motion.article 
      className="max-w-[680px] mx-auto px-6 py-20 min-h-screen"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-obsidian tracking-tight leading-tight mb-8">
          {post.title}
        </h1>
        <div className="flex gap-4 font-mono text-[10px] uppercase tracking-widest text-stone-mid">
          <span className="text-accent">{post.category}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
          <span>{post.depth}</span>
        </div>
        <p className="font-sans text-lg font-light text-stone-mid mt-8 leading-relaxed">
          {post.dek}
        </p>
      </div>

      <div className="prose prose-stone prose-lg max-w-none font-sans font-light leading-[1.8] text-ink
        prose-headings:font-serif prose-headings:font-normal prose-headings:text-obsidian
        prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
        prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-obsidian prose-blockquote:border-l-[2px] prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:my-10
        prose-p:mb-6 prose-li:mb-2
      ">
         <Markdown remarkPlugins={[remarkGfm]}>
            {post.content}
         </Markdown>
      </div>

      <div className="flex justify-center my-16">
        <div className="w-12 h-[1px] bg-stone-mid" />
      </div>

      {/* Read Next Placeholder */}
      <div className="border-t border-stone-light/50 pt-16 mt-16">
        <div className="font-mono text-[10px] uppercase tracking-widest text-stone-mid mb-6">Read Next</div>
        <Link href={`/library/${nextPost.slug}`} className="group" data-cursor="hover">
          <h3 className="font-serif text-3xl text-obsidian group-hover:text-accent transition-colors mb-2">{nextPost.title}</h3>
          <p className="font-sans text-sm text-stone-mid">{nextPost.dek}</p>
        </Link>
      </div>
    </motion.article>
  );
}
