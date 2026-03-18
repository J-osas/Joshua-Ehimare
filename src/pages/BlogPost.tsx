import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../lib/sanity';
import { postBySlugQuery } from '../lib/queries';
import { PortableText } from '@portabletext/react';

export function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client.fetch(postBySlugQuery, { slug })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching post:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-bg flex items-center justify-center py-32">
        <span className="font-mono text-[12px] text-text-2 uppercase tracking-widest">
          Loading insight...
        </span>
      </div>
    );
  }

  if (!post) return <div className="p-20 text-center font-display text-2xl">Post not found</div>;

  const components = {
    types: {
      image: ({ value }: any) => (
        <div className="my-12 relative w-full aspect-video overflow-hidden rounded-[4px] bg-bg-3">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Blog image'}
            className="w-full h-full object-cover"
          />
          {value.caption && (
            <p className="mt-4 text-center font-mono text-[11px] text-text-3 uppercase tracking-widest">
              {value.caption}
            </p>
          )}
        </div>
      ),
    },
    block: {
      h2: ({ children }: any) => <h2 className="font-display text-3xl md:text-4xl font-bold mt-16 mb-6 text-text">{children}</h2>,
      h3: ({ children }: any) => <h3 className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 text-text">{children}</h3>,
      normal: ({ children }: any) => <p className="font-body text-lg md:text-xl text-secondary-text leading-relaxed mb-8">{children}</p>,
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-accent pl-8 my-12 font-serif italic text-2xl md:text-3xl text-text leading-relaxed">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-8 mb-8 space-y-4 font-body text-lg text-secondary-text">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-8 mb-8 space-y-4 font-body text-lg text-secondary-text">{children}</ol>,
    },
  };

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
            <span className="font-mono text-[11px] text-text-3 uppercase tracking-widest">
              {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Recently"} — {post.readTime || 5} MIN READ
            </span>
          </div>
          
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-bold leading-[1.1] tracking-[-0.02em] mb-12">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Featured Image */}
      {post.coverImage && (
        <section className="px-[var(--page-padding)] mb-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="aspect-video w-full relative overflow-hidden rounded-[4px] bg-bg-3">
              <img
                src={urlFor(post.coverImage).width(1600).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <article className="px-[var(--page-padding)] mb-32">
        <div className="max-w-[800px] mx-auto">
          <div className="portable-text">
            <PortableText value={post.body} components={components} />
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

      {/* Navigation CTA */}
      <section className="px-[var(--page-padding)] py-[120px] bg-bg-2 border-t border-border">
        <div className="max-w-[1000px] mx-auto text-center">
           <Link to="/blog" className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] no-underline hover:translate-x-[-8px] transition-transform">
             ← BACK TO ALL INSIGHTS
           </Link>
        </div>
      </section>
    </div>
  );
}
