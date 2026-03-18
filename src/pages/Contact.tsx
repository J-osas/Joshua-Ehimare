import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact — Joshua Ehimare | Let's Talk";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation
    if (formData.name && formData.email && formData.projectType && formData.budget && formData.message) {
      setIsSubmitted(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants for scroll sections
  const scrollFade = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  return (
    <div className="w-full bg-bg text-text overflow-x-hidden selection:bg-accent selection:text-white">
      
      {/* SECTION 1 — PAGE HERO */}
      <section className="min-h-[100svh] relative flex flex-col pt-[140px] pb-[80px] px-[var(--page-padding)]">
        <div className="w-full flex-grow flex flex-col">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-8 block text-left"
          >
            GET IN TOUCH
          </motion.span>

          <h1 className="font-display text-[clamp(56px,8vw,110px)] font-bold leading-[1.0] tracking-[-0.02em] text-left">
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-text"
            >
              Let's
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block text-accent italic"
            >
              Talk.
            </motion.span>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-px bg-border my-10"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
          >
            <p className="font-serif italic text-[clamp(17px,1.8vw,24px)] text-text-2 leading-[1.7] max-w-[55%] text-left">
              Have a project in mind? I'd love to hear about it.
            </p>

            <div className="text-right">
              <span className="font-mono text-[11px] text-text-2 block mb-1">Response within 24hrs</span>
              <span className="font-mono text-[11px] text-text-2 block">Available Worldwide</span>
            </div>
          </motion.div>
        </div>

        {/* Vertical URL */}
        <div className="absolute bottom-10 right-[6vw] rotate-90 origin-right hidden lg:block">
          <span className="font-mono text-[10px] text-text-3 tracking-[0.3em] uppercase">
            joshuaehimare.com
          </span>
        </div>
      </section>

      {/* SECTION 2 — CONTACT LAYOUT */}
      <section className="py-[100px] px-[var(--page-padding)]">
        <motion.div 
          {...scrollFade}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]"
        >
          {/* LEFT — Contact Info */}
          <div className="flex flex-col">
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.15em] mb-6 block">
              CONTACT INFO
            </span>
            <h2 className="font-display text-[clamp(32px,4vw,52px)] text-text leading-[1.1] mb-8 font-bold">
              Work with me.
            </h2>
            <p className="font-sans text-[16px] text-text-2 leading-[1.9] mb-12 max-w-[450px]">
              Whether you need a brand identity, a high-converting website, or an SEO strategy — let's talk.
            </p>

            <div className="flex flex-col">
              {[
                { label: "EMAIL", value: "hello@joshuaehimare.com" },
                { label: "LOCATION", value: "Available Worldwide" },
                { label: "RESPONSE", value: "Within 24 hours" }
              ].map((row, idx) => (
                <div key={idx} className="flex justify-between items-center py-5 border-b border-border group cursor-default">
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] text-text-3 uppercase tracking-[0.1em] mb-1">
                      {row.label}
                    </span>
                    <span className="font-sans text-[16px] text-text">
                      {row.value}
                    </span>
                  </div>
                  <span className="text-accent text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 mt-10">
              {["LinkedIn", "Twitter·X", "Instagram", "Dribbble"].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="font-mono text-[12px] text-text-2 no-underline hover:text-accent transition-colors duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="flex flex-col">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bg-2 border border-border p-12 rounded-[4px] flex flex-col items-center text-center"
              >
                <span className="text-accent text-[48px] mb-4 block leading-none">✓</span>
                <h3 className="font-display text-[32px] text-text mb-4 font-bold">Message Sent.</h3>
                <p className="font-sans text-text-2 leading-[1.7]">
                  Thanks for reaching out. I'll be in touch within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 font-mono text-[11px] text-accent uppercase tracking-widest hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="font-mono text-[11px] text-text-2 uppercase tracking-[0.1em] mb-2 block">
                    Name
                  </label>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bg-2 border border-border text-text rounded-[4px] px-[18px] py-[14px] font-sans text-[15px] focus:border-accent outline-none transition-colors placeholder:text-text-3"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-text-2 uppercase tracking-[0.1em] mb-2 block">
                    Email
                  </label>
                  <input 
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bg-2 border border-border text-text rounded-[4px] px-[18px] py-[14px] font-sans text-[15px] focus:border-accent outline-none transition-colors placeholder:text-text-3"
                    required
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] text-text-2 uppercase tracking-[0.1em] mb-2 block">
                    Project Type
                  </label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-bg-2 border border-border text-text rounded-[4px] px-[18px] py-[14px] font-sans text-[15px] focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="SEO Strategy">SEO Strategy</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-text-2 uppercase tracking-[0.1em] mb-2 block">
                    Budget
                  </label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-bg-2 border border-border text-text rounded-[4px] px-[18px] py-[14px] font-sans text-[15px] focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a budget</option>
                    <option value="Under £1,000">Under £1,000</option>
                    <option value="£1,000–£3,000">£1,000–£3,000</option>
                    <option value="£3,000–£10,000">£3,000–£10,000</option>
                    <option value="£10,000+">£10,000+</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-text-2 uppercase tracking-[0.1em] mb-2 block">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-bg-2 border border-border text-text rounded-[4px] px-[18px] py-[14px] font-sans text-[15px] focus:border-accent outline-none transition-colors placeholder:text-text-3 min-h-[160px] resize-y"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-accent text-[#0A0A0A] font-display font-semibold text-[16px] uppercase py-[18px] rounded-[4px] border-none cursor-pointer hover:bg-[#E04400] transition-colors duration-300"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 — AVAILABILITY STRIP */}
      <section className="w-full bg-bg-2 border-y border-border py-8 px-[var(--page-padding)]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
            <span className="font-mono text-[12px] text-text-2 uppercase tracking-wider">
              Currently available for new projects
            </span>
          </div>
          <a 
            href="mailto:hello@joshuaehimare.com" 
            className="font-mono text-[12px] text-accent uppercase tracking-widest no-underline hover:underline"
          >
            Start a project →
          </a>
        </div>
      </section>

    </div>
  );
}
