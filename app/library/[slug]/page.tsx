'use client';

import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getNextPublication, getPublicationBySlug } from '@/lib/publications';
import { LIBRARY_PUBLISHED } from '@/lib/site';
import { LibraryCover } from '@/components/layout/LibraryCover';
import React from 'react';

/**
 * Flatten a react-markdown node tree down to its text.
 *
 * Needed because markdown hands a blockquote its children as ['\n', <p>, '\n'],
 * so anything that reads the text has to skip the whitespace nodes and walk
 * into the paragraph. Joining the array directly leaves a leading newline,
 * which breaks a regex anchored with ^, and turns any nested element such as
 * bold text into "[object Object]".
 */
function toText(node: any): string {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(toText).join('');
  if (node?.props?.children) return toText(node.props.children);
  return '';
}

function CustomBlockquote({ children }: any) {
  const textContent = toText(children).trim();

  const match = textContent.match(/^\[!([a-zA-Z0-9_-]+)\]\s*(.*)/);

  if (match) {
    const rawType = match[1].toLowerCase();
    const headerTitle = match[2] || rawType.toUpperCase();

    let variantClass = 'callout-concept';
    let icon = '⚡';

    if (['concept', 'definition', 'tools'].includes(rawType)) {
      variantClass = `callout-${rawType}`;
      icon = rawType === 'tools' ? '🛠️' : rawType === 'definition' ? '📖' : '⚡';
    } else if (['warning', 'aim', 'danger'].includes(rawType)) {
      variantClass = `callout-${rawType}`;
      icon = rawType === 'aim' ? '🎯' : rawType === 'danger' ? '🚨' : '⚠️';
    } else if (['insight', 'customize', 'note', 'history'].includes(rawType)) {
      variantClass = `callout-${rawType}`;
      icon = rawType === 'customize' ? '🏷️' : rawType === 'history' ? '📜' : '🌾';
    } else if (['takeaway', 'levelup', 'summary'].includes(rawType)) {
      variantClass = `callout-${rawType}`;
      icon = rawType === 'levelup' ? '🌱' : '🚀';
    } else if (['tip', 'intuition'].includes(rawType)) {
      variantClass = `callout-${rawType}`;
      icon = rawType === 'intuition' ? '💧' : '💡';
    }

    const cleanedChildren = React.Children.map(children, (child: any) => {
      if (child?.props?.children) {
        const pText = toText(child.props.children);
        if (pText.trimStart().startsWith(`[!${match[1]}]`)) {
          const lines = pText.split('\n');
          const remainingText = lines.slice(1).join('\n').trim();
          if (!remainingText) return null;
          return <p>{remainingText}</p>;
        }
      }
      return child;
    });

    return (
      <div className={`callout-box ${variantClass}`}>
        <div className="callout-header">
          <span>{icon}</span>
          <span>{headerTitle}</span>
        </div>
        <div>{cleanedChildren}</div>
      </div>
    );
  }

  return <blockquote className="standard-quote">{children}</blockquote>;
}

export default function PostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getPublicationBySlug(slug);
  const nextPost = getNextPublication(slug);

  // Direct essay links should not leak the content while the section is down.
  if (!LIBRARY_PUBLISHED) return <LibraryCover />;

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

      <div className="essay-content max-w-none">
         <Markdown 
           remarkPlugins={[remarkGfm]}
           components={{
             blockquote: CustomBlockquote
           }}
         >
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
