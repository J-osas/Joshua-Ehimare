import { useState } from 'react';
import { GeminiLive } from '../components/GeminiLive';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Branding',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', projectType: 'Branding', message: '' });
    }, 5000);
  };

  return (
    <div className="w-full pt-[120px] pb-[100px] px-[var(--page-padding)]">
      <header className="max-w-[1400px] mx-auto mb-20">
        <span className="font-mono text-[11px] text-accent tracking-[0.2em] mb-4 block">GET IN TOUCH</span>
        <h1 className="font-display text-[clamp(48px,8vw,120px)] font-bold leading-[0.9] tracking-[-0.04em] mb-12">
          Let's <span className="text-accent italic">Talk.</span>
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl text-secondary-text max-w-[700px] leading-relaxed">
          Have a project in mind or just want to say hello? I'm always open to new opportunities and collaborations.
        </p>
      </header>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Contact Info */}
        <div className="space-y-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">EMAIL</span>
              <a href="mailto:hello@joshuaehimare.com" className="block font-display text-3xl md:text-4xl font-semibold no-underline text-foreground hover:text-accent transition-colors">
                hello@joshuaehimare.com
              </a>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">LOCATION</span>
              <p className="font-display text-3xl md:text-4xl font-semibold">Lagos, Nigeria — Worldwide</p>
            </div>
          </div>

          <div className="space-y-8">
            <span className="font-mono text-[10px] text-text-3 uppercase tracking-widest">SOCIALS</span>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <a href="#" className="font-display text-2xl font-semibold no-underline text-foreground hover:text-accent transition-colors">LinkedIn</a>
              <a href="#" className="font-display text-2xl font-semibold no-underline text-foreground hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="font-display text-2xl font-semibold no-underline text-foreground hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="font-display text-2xl font-semibold no-underline text-foreground hover:text-accent transition-colors">Behance</a>
            </div>
          </div>

          <GeminiLive />
        </div>

        {/* Contact Form */}
        <div className="bg-surface border border-border p-8 md:p-12 rounded-[2px]">
          {submitted ? (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h2 className="font-display text-3xl font-bold">Message Sent!</h2>
              <p className="text-secondary-text">Thank you for reaching out. I'll get back to you within 24-48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-text-3 uppercase tracking-widest">YOUR NAME</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-bg-3 border border-border px-6 py-4 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-text-3 uppercase tracking-widest">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-bg-3 border border-border px-6 py-4 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-text-3 uppercase tracking-widest">PROJECT TYPE</label>
                <select 
                  value={formState.projectType}
                  onChange={(e) => setFormState({...formState, projectType: e.target.value})}
                  className="w-full bg-bg-3 border border-border px-6 py-4 font-mono text-sm focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option>Branding</option>
                  <option>Web Design</option>
                  <option>SEO Strategy</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-text-3 uppercase tracking-widest">MESSAGE</label>
                <textarea 
                  rows={5}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-bg-3 border border-border px-6 py-4 font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-accent text-background font-mono text-xs uppercase tracking-widest px-8 py-5 font-bold hover:bg-[#E04400] transition-colors"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
