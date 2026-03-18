import { useState } from 'react';
import { GeminiLive } from '../components/GeminiLive';
import { Mail, Linkedin, Twitter, Instagram, Send } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Branding',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thank you for your message! Joshua will get back to you soon.');
    setFormState({ name: '', email: '', projectType: 'Branding', message: '' });
  };

  return (
    <div className="px-6 py-20 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-7xl md:text-9xl font-display font-bold mb-12 tracking-tighter">
          LET'S <span className="text-accent italic">TALK</span>
        </h1>
        <p className="text-2xl text-secondary-text max-w-2xl leading-relaxed">
          Ready to build something bold? Drop a message or try talking to my AI assistant.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono text-accent uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-surface border border-border p-4 focus:border-accent outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-accent uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-surface border border-border p-4 focus:border-accent outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-mono text-accent uppercase tracking-widest">Project Type</label>
            <select 
              value={formState.projectType}
              onChange={(e) => setFormState({...formState, projectType: e.target.value})}
              className="w-full bg-surface border border-border p-4 focus:border-accent outline-none transition-colors appearance-none"
            >
              <option>Branding</option>
              <option>Web Design</option>
              <option>SEO Strategy</option>
              <option>Digital Marketing</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-accent uppercase tracking-widest">Message</label>
            <textarea 
              rows={6}
              required
              value={formState.message}
              onChange={(e) => setFormState({...formState, message: e.target.value})}
              className="w-full bg-surface border border-border p-4 focus:border-accent outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button 
            type="submit"
            className="w-full py-6 bg-accent text-background font-mono font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform flex items-center justify-center gap-4"
          >
            Send Message <Send size={20} />
          </button>
        </form>

        {/* Sidebar */}
        <div className="space-y-12">
          <GeminiLive />

          <div className="space-y-6">
            <h3 className="text-xs font-mono text-accent uppercase tracking-widest">Socials</h3>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-4 text-2xl font-display font-medium hover:text-accent transition-colors">
                <Linkedin /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-4 text-2xl font-display font-medium hover:text-accent transition-colors">
                <Twitter /> Twitter
              </a>
              <a href="#" className="flex items-center gap-4 text-2xl font-display font-medium hover:text-accent transition-colors">
                <Instagram /> Instagram
              </a>
              <a href="mailto:hello@joshuaehimare.com" className="flex items-center gap-4 text-2xl font-display font-medium hover:text-accent transition-colors">
                <Mail /> hello@joshuaehimare.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
