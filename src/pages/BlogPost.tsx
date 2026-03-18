import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/content';
import ReactMarkdown from 'react-markdown';
import { motion } from 'motion/react';
import { ImagePlaceholder, Section } from '../components/Shared';

export function BlogPost() {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[postIndex];
  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  if (!post) return <div className="p-20 text-center font-display text-2xl">Post not found</div>;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="pt-[140px] pb-[80px] px-[var(--page-padding)]">
        <div className="max-w-[1000px] mx-auto">
          <Link to="/blog" className="inline-block font-mono text-[11px] text-accent tracking-[0.2em] mb-12 no-underline hover:translate-x-[-8px] transition-transform">
            ← BACK TO BLOG
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[11px] text-accent border border-accent/30 px-4 py-1 rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <span className="font-mono text-[11px] text-text-3 uppercase tracking-widest">{post.date} — {post.readingTime}</span>
          </div>
          
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-bold leading-[1.1] tracking-[-0.02em] mb-12">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-16">
            {post.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-bg-2 border border-border text-[11px] font-mono uppercase tracking-widest text-secondary-text rounded-[2px]">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-[var(--page-padding)] mb-20">
        <div className="max-w-[1200px] mx-auto">
          <ImagePlaceholder label="Featured Image" className="aspect-video w-full" />
        </div>
      </section>

      {/* Content */}
      <article className="px-[var(--page-padding)] mb-32">
        <div className="max-w-[800px] mx-auto">
          <div className="markdown-body font-body text-lg md:text-xl text-secondary-text leading-relaxed space-y-8">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="flex gap-8">
              <span className="font-mono text-[11px] text-text-3 uppercase tracking-widest">SHARE</span>
              <div className="flex gap-6">
                {['Twitter', 'LinkedIn', 'Facebook'].map((platform) => (
                  <a key={platform} href="#" className="font-mono text-[11px] text-accent uppercase tracking-widest no-underline hover:underline">
                    {platform}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-bg-3 overflow-hidden border border-border flex items-center justify-center">
                <span className="font-display font-bold text-accent">JE</span>
              </div>
              <div>
                <span className="block font-display font-bold text-base">Joshua Ehimare</span>
                <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">Author & Designer</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Next Post CTA */}
      <section className="px-[var(--page-padding)] py-[120px] bg-bg-2 border-t border-border">
        <Link 
          to={`/blog/${nextPost.slug}`} 
          className="group block max-w-[1000px] mx-auto text-center no-underline"
        >
          <span className="font-mono text-[11px] text-text-3 uppercase tracking-[0.3em] mb-8 block">READ NEXT</span>
          <h2 className="font-display text-[clamp(32px,4vw,64px)] font-bold leading-tight tracking-tight group-hover:text-accent transition-colors">
            {nextPost.title}
          </h2>
          <div className="mt-12 inline-block font-mono text-[11px] text-accent uppercase tracking-widest group-hover:translate-x-4 transition-transform">
            CONTINUE READING →
          </div>
        </Link>
      </section>
    </div>
  );
}
