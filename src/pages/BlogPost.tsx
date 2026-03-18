import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/content';
import ReactMarkdown from 'react-markdown';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <div className="p-20 text-center">Post not found</div>;

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <header className="mb-20">
        <Link to="/blog" className="text-accent font-mono uppercase tracking-widest mb-12 block">
          ← Back to Blog
        </Link>
        <span className="text-xs font-mono text-secondary-text uppercase tracking-widest mb-4 block">
          {post.date} — {post.readingTime}
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-12 tracking-tighter leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-3">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-surface border border-border text-xs font-mono uppercase tracking-widest">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-invert prose-orange max-w-none">
        <div className="markdown-body text-xl text-secondary-text leading-relaxed space-y-8">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>

      <footer className="mt-32 pt-12 border-t border-border">
        <h3 className="text-2xl font-display font-bold mb-8">Share this article</h3>
        <div className="flex gap-6">
          <a href="#" className="text-secondary-text hover:text-accent font-mono uppercase tracking-widest text-sm">Twitter</a>
          <a href="#" className="text-secondary-text hover:text-accent font-mono uppercase tracking-widest text-sm">LinkedIn</a>
          <a href="#" className="text-secondary-text hover:text-accent font-mono uppercase tracking-widest text-sm">Copy Link</a>
        </div>
      </footer>
    </div>
  );
}
