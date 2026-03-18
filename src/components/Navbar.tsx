import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4) }
            70% { box-shadow: 0 0 0 8px rgba(34,197,94,0) }
            100% { box-shadow: 0 0 0 0 rgba(34,197,94,0) }
          }
          .animate-pulse-custom {
            animation: pulse 1.5s infinite;
          }
        `}
      </style>
      
      <nav 
        className={cn(
          "fixed top-0 left-0 w-full z-[1000] transition-all duration-400 px-[6vw] flex items-center justify-between",
          "h-[60px] md:h-[72px]",
          scrolled ? "bg-[rgba(10,10,10,0.92)] backdrop-blur-[20px]" : "bg-transparent"
        )}
      >
        {/* LEFT: Logo */}
        <Link to="/" className="font-display font-bold text-[22px] text-accent no-underline">
          JE.
        </Link>

        {/* CENTRE: Nav Links (Desktop) */}
        <div className="hidden md:flex gap-[40px] absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.15em] no-underline transition-colors duration-300",
                location.pathname === link.path ? "text-text" : "text-text-2 hover:text-text"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: Availability & Button (Desktop) */}
        <div className="hidden md:flex items-center gap-[24px]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse-custom" />
            <span className="font-mono text-[11px] text-text-2">Available for work</span>
          </div>
          <Link 
            to="/contact" 
            className="border border-border text-text-2 px-[22px] py-[10px] font-mono text-[11px] uppercase tracking-[0.1em] no-underline transition-all duration-300 hover:border-accent hover:text-accent rounded-[2px] bg-transparent"
          >
            Let's Talk →
          </Link>
        </div>

        {/* MOBILE: Hamburger */}
        <button 
          className="md:hidden flex flex-col justify-center items-center bg-transparent border-none cursor-pointer p-2 z-[1100]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={cn(
            "block w-[22px] h-[1.5px] bg-text transition-all duration-300 my-[5px]",
            isOpen ? "rotate-[45deg] translate-y-[7px]" : ""
          )} />
          <span className={cn(
            "block w-[22px] h-[1.5px] bg-text transition-all duration-300 my-[5px]",
            isOpen ? "opacity-0 scale-x-0" : ""
          )} />
          <span className={cn(
            "block w-[22px] h-[1.5px] bg-text transition-all duration-300 my-[5px]",
            isOpen ? "rotate-[-45deg] translate-y-[-7px]" : ""
          )} />
        </button>

        {/* MOBILE OVERLAY MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 w-screen h-screen bg-[#0A0A0A] flex flex-col items-center justify-center gap-8 z-[999]"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-[44px] text-text no-underline hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-accent text-accent px-[32px] py-[12px] font-mono text-[12px] uppercase tracking-[0.12em] no-underline rounded-[2px] bg-transparent hover:bg-accent hover:text-[#0A0A0A] transition-all duration-300"
              >
                Let's Talk
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
