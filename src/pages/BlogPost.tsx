import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/content';
import ReactMarkdown from 'react-markdown';

export function BlogPost() {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex(p => p.slug === slug);
  const post = blogPosts[postIndex];
  const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];

  if (!post) return <div className="p-20 text-center font-display text-2xl">Post not found</div>;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="pt-[120px] pb-[80px] px-[var(--page-padding)]">
        <div className="max-w-[900px] mx-auto">
          <Link to="/blog" className="inline-block font-mono text-[11px] text-accent tracking-[0.2em] mb-12 no-underline hover:translate-x-[-8px] transition-transform">
            ← BACK TO ALL POSTS
          </Link>
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-accent/10 text-accent font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">{post.date} — {post.readingTime}</span>
          </div>
          <h1 className="font-display text-[clamp(40px,6vw,80px)] font-bold leading-[1.1] tracking-[-0.03em] mb-12">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-3 mb-16">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-surface border border-border text-[10px] font-mono uppercase tracking-widest text-text-3">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="px-[var(--page-padding)] mb-20">
        <div className="max-w-[1200px] mx-auto aspect-video bg-bg-3 overflow-hidden rounded-[2px]">
          <img 
            src={`https://picsum.photos/seed/${post.slug}/1200/675`} 
            alt={post.title} 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Content */}
      <article className="px-[var(--page-padding)] mb-32">
        <div className="max-w-[800px] mx-auto">
          <div className="markdown-body font-serif text-xl md:text-2xl text-secondary-text leading-relaxed space-y-8 italic">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <div className="mt-20 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex gap-6">
              <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">SHARE:</span>
              <a href="#" className="font-mono text-[11px] text-accent uppercase tracking-widest no-underline hover:underline">Twitter</a>
              <a href="#" className="font-mono text-[11px] text-accent uppercase tracking-widest no-underline hover:underline">LinkedIn</a>
              <a href="#" className="font-mono text-[11px] text-accent uppercase tracking-widest no-underline hover:underline">Facebook</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-bg-3 overflow-hidden border border-border">
                <img src="https://picsum.photos/seed/joshua/100/100" alt="Joshua Ehimare" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
              </div>
              <div>
                <span className="block font-display font-bold text-sm">Joshua Ehimare</span>
                <span className="block font-mono text-[10px] text-text-3 uppercase tracking-widest">Author</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Next Post CTA */}
      <section className="px-[var(--page-padding)] pb-32">
        <Link 
          to={`/blog/${nextPost.slug}`} 
          className="group block max-w-[900px] mx-auto py-20 border-t border-border no-underline"
        >
          <span className="font-mono text-[11px] text-text-3 uppercase tracking-[0.3em] mb-6 block">READ NEXT</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight group-hover:text-accent transition-colors">
            {nextPost.title}
          </h2>
          <div className="mt-8 inline-block font-mono text-[11px] text-accent uppercase tracking-widest group-hover:translate-x-4 transition-transform">
            CONTINUE READING →
          </div>
        </Link>
      </section>
    </div>
  );
}
