import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
];

export function FooterBar() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className={cn(
      "py-8 md:py-10 px-[6vw] border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 bg-surface",
      isContactPage && "border-t-0"
    )}>
      {/* LEFT: Copyright */}
      <div className="font-mono text-[11px] text-secondary-text order-3 md:order-1">
        © 2024 Joshua Ehimare. All rights reserved.
      </div>

      {/* CENTRE: Nav Links */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 order-1 md:order-2">
        {navLinks.map(link => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="font-mono text-[11px] text-secondary-text no-underline hover:text-foreground transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* RIGHT: Social Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 order-2 md:order-3">
        {socialLinks.map(social => (
          <a 
            key={social.name} 
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-secondary-text no-underline hover:text-accent transition-colors duration-200"
          >
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

export function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  if (isContactPage) {
    return <FooterBar />;
  }

  return (
    <div className="w-full">
      {/* FOOTER CTA BLOCK */}
      <section className="py-[120px] px-[6vw] bg-surface border-t border-border text-center">
        <span className="font-mono text-[11px] text-secondary-text uppercase tracking-[0.15em] mb-6 block">
          READY WHEN YOU ARE
        </span>
        <h2 className="font-display text-[clamp(48px,8vw,100px)] font-bold leading-[1.05] max-w-[900px] mx-auto mb-6 text-foreground">
          Let's build something remarkable.
        </h2>
        <p className="font-serif italic text-[22px] text-secondary-text mb-12">
          Available for freelance projects and full-time roles.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-accent text-background font-display font-semibold text-base px-12 py-[18px] rounded no-underline transition-all duration-200 hover:bg-[#E04400] hover:scale-[1.02]"
        >
          Start a Project →
        </Link>
      </section>

      {/* FOOTER BAR */}
      <FooterBar />
    </div>
  );
}
