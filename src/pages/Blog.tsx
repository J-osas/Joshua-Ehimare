import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageHero, Section } from '../components/Shared';
import { cn } from '../lib/utils';
import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';
import { postsQuery } from '../lib/queries';

export function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Insights — Joshua Ehimare | Blog";
    
    client.fetch(postsQuery)
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-bg flex items-center justify-center py-32">
        <span className="font-mono text-[12px] text-text-2 uppercase tracking-widest">
          Loading insights...
        </span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <PageHero 
        label="INSIGHTS"
        title="The"
        italicTitle="Blog."
        subline="Thoughts on design, strategy, and the digital landscape. Exploring the intersection of creativity and business."
      />

      <Section className="pt-0">
        <div className="max-w-[1400px] mx-auto flex flex-col">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "border-t border-border group",
                index === posts.length - 1 && "border-b border-border"
              )}
            >
              <Link 
                to={`/blog/${post.slug}`} 
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-16 no-underline transition-all duration-500 hover:bg-bg-2 px-4 gap-8"
              >
                <div className="flex flex-col gap-4 max-w-[800px]">
                  <div className="flex items-center gap-4 font-mono text-[11px] text-text-3 uppercase tracking-widest">
                    <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Recently"}</span>
                    <span className="text-accent">•</span>
                    <span>{post.readTime || 5} MIN READ</span>
                  </div>
                  <h3 className="font-display text-[clamp(28px,3.5vw,48px)] font-semibold leading-[1.2] group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-secondary-text text-lg line-clamp-2 max-w-[600px]">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <span className="font-mono text-[11px] text-accent border border-accent/30 px-4 py-2 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="hidden md:block font-mono text-[18px] text-accent opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter Strip */}
      <Section dark className="text-center">
        <div className="max-w-[800px] mx-auto space-y-8">
          <span className="font-mono text-[11px] text-accent uppercase tracking-[0.2em]">NEWSLETTER</span>
          <h2 className="font-display text-[clamp(32px,4vw,56px)] leading-[1.1]">
            Get insights delivered to your inbox.
          </h2>
          <p className="text-secondary-text font-body text-lg max-w-[500px] mx-auto">
            No spam, just high-quality thoughts on design and strategy once a month.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto mt-12" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-bg-3 border border-border px-6 py-5 font-mono text-[13px] focus:outline-none focus:border-accent transition-colors rounded-[2px]"
            />
            <button className="bg-accent text-[#0A0A0A] font-display text-base uppercase tracking-widest px-8 py-5 font-bold hover:bg-[#E04400] transition-colors rounded-[2px]">
              Subscribe
            </button>
          </form>
        </div>
      </Section>
    </div>
  );
}
