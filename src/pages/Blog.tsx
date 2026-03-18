import { blogPosts } from '../data/content';
import { Link } from 'react-router-dom';

export function Blog() {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-12 tracking-tighter">
          THE <span className="text-accent italic">BLOG</span>
        </h1>
        <p className="text-2xl text-secondary-text max-w-2xl leading-relaxed">
          Insights on design, strategy, and the digital landscape.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {blogPosts.map((post) => (
          <Link key={post.id} to={`/blog/${post.slug}`} className="group">
            <article className="p-12 bg-surface border border-border group-hover:border-accent transition-all duration-300 grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
              <div className="md:col-span-1">
                <span className="text-xs font-mono text-secondary-text uppercase tracking-widest mb-2 block">
                  {post.date}
                </span>
                <span className="text-xs font-mono text-accent uppercase tracking-widest">
                  {post.readingTime}
                </span>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-xl text-secondary-text mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex gap-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-secondary-text uppercase tracking-widest">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
