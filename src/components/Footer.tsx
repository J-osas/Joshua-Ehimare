import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Twitter·X', url: '#' },
  { name: 'Instagram', url: '#' },
  { name: 'Dribbble', url: '#' },
];

export function FooterBar() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className={cn(
      "py-10 md:py-[40px] px-[6vw] border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 bg-surface",
      isContactPage && "border-t-0"
    )}>
      {/* LEFT: Copyright */}
      <div className="font-mono text-[11px] text-text-3 order-3 md:order-1">
        © 2024 Joshua Ehimare. All rights reserved.
      </div>

      {/* CENTRE: Nav Links */}
      <div className="flex gap-8 order-1 md:order-2">
        {navLinks.map(link => (
          <Link 
            key={link.path} 
            to={link.path} 
            className="font-mono text-[11px] text-text-2 no-underline hover:text-text transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* RIGHT: Social Links */}
      <div className="flex gap-6 order-2 md:order-3">
        {socialLinks.map(social => (
          <a 
            key={social.name} 
            href={social.url} 
            className="font-mono text-[11px] text-text-2 no-underline hover:text-accent transition-colors duration-200"
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
      <section className="py-[120px] px-[6vw] bg-bg-2 border-t border-border text-center">
        <span className="font-mono text-[11px] text-text-2 uppercase tracking-[0.15em] mb-6 block">
          READY WHEN YOU ARE
        </span>
        <h2 className="font-display text-[clamp(48px,7vw,100px)] leading-[1.1] max-w-[900px] mx-auto mb-6 text-text">
          Let's build something remarkable.
        </h2>
        <p className="font-serif italic text-[22px] text-text-2 mb-12">
          Available for freelance projects and full-time roles.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-accent text-[#0A0A0A] font-display font-semibold text-base px-[48px] py-[18px] rounded-[2px] no-underline transition-colors duration-200 hover:bg-[#E04400]"
        >
          Start a Project →
        </Link>
      </section>

      {/* FOOTER BAR */}
      <FooterBar />
    </div>
  );
}
