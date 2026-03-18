import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <header className="mb-32">
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-12 tracking-tighter">
          ABOUT <span className="text-accent italic">ME</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="aspect-[3/4] overflow-hidden border border-border">
            <img 
              src="https://picsum.photos/seed/joshua/800/1200" 
              alt="Joshua Ehimare" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              I design digital experiences that make businesses impossible to ignore.
            </h2>
            <p className="text-xl text-secondary-text mb-8 leading-relaxed">
              I'm Joshua Ehimare, a creative designer and brand strategist with a distinct point of view. I combine design craft with strategic thinking — brand, SEO, and web, all working together to create high-impact digital experiences.
            </p>
            <p className="text-xl text-secondary-text mb-12 leading-relaxed">
              Based in the intersection of creativity and data, I help brands stand out in crowded markets and rank higher where it matters most.
            </p>
            
            <div className="mb-12">
              <h3 className="text-xs font-mono text-accent uppercase tracking-widest mb-6">Skills & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {['Brand Identity', 'Web Design', 'SEO Strategy', 'React', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Digital Marketing'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-surface border border-border text-xs font-mono uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Link 
              to="/contact" 
              className="inline-block px-10 py-4 bg-accent text-background font-mono uppercase tracking-widest font-bold hover:scale-105 transition-transform"
            >
              Work with me →
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
