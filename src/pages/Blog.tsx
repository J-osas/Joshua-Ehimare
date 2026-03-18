import { blogPosts } from '../data/content';
import { Link } from 'react-router-dom';

export function Blog() {
  return (
    <div className="w-full pt-[120px] pb-[100px] px-[var(--page-padding)]">
      <header className="max-w-[1400px] mx-auto mb-20">
        <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">INSIGHTS</span>
        <h1 className="font-display text-[clamp(48px,8vw,120px)] font-bold leading-[0.9] tracking-[-0.04em] mb-12">
          The <span className="text-accent italic">Blog.</span>
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl text-secondary-text max-w-[700px] leading-relaxed">
          Thoughts on design, strategy, and the digital landscape.
        </p>
      </header>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}`} 
            className="group flex flex-col bg-surface border border-border rounded-[2px] no-underline transition-all duration-500 hover:border-accent overflow-hidden"
          >
            <div className="aspect-video bg-bg-3 overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${post.slug}/800/450`} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-accent/10 text-accent font-mono text-[10px] px-3 py-1 rounded-full uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">{post.date}</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-secondary-text text-base mb-8 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              <div className="pt-6 border-t border-border flex justify-between items-center">
                <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">{post.readingTime}</span>
                <span className="font-mono text-[11px] text-accent uppercase tracking-widest group-hover:translate-x-2 transition-transform">Read →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter Strip */}
      <div className="mt-[100px] py-16 px-8 bg-surface border border-border rounded-[2px] max-w-[1400px] mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Get insights delivered to your inbox.</h2>
        <p className="text-secondary-text mb-8 max-w-[500px] mx-auto">No spam, just high-quality thoughts on design and strategy once a month.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow bg-bg-3 border border-border px-6 py-4 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
          />
          <button className="bg-accent text-background font-mono text-xs uppercase tracking-widest px-8 py-4 font-bold hover:bg-[#E04400] transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
