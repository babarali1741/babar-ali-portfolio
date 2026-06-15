import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Copy, Check, Github, Linkedin, Twitter } from "lucide-react";
import Section from "./Section.jsx";

const EMAIL = "babarali@example.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's Build Something" subtitle="Have an idea, a role, or just want to say hi? My inbox is open.">
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass rounded-3xl p-6"
        >
          <h3 className="font-display text-xl font-bold">Contact Info</h3>
          <p className="mt-2 text-sm text-muted">Reach out — I usually reply within 24 hours.</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple text-background">
                <Mail size={16} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-muted">Email</div>
                <div className="text-sm font-medium">{EMAIL}</div>
              </div>
              <button onClick={copy} className="grid h-9 w-9 place-items-center rounded-lg glass hover:bg-white/10" aria-label="Copy email">
                {copied ? <Check size={14} className="text-neon-blue" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple text-background">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-xs text-muted">Location</div>
                <div className="text-sm font-medium">Bhilai, Chhattisgarh, India</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10"><Github size={16} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10"><Linkedin size={16} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10"><Twitter size={16} /></a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-3xl p-6 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs text-muted">Your Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/30"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-xs text-muted">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/30"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-muted">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-neon-blue/60 focus:ring-2 focus:ring-neon-blue/30"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-3 text-sm font-semibold text-background shadow-glow-blue transition-transform hover:scale-[1.02] disabled:opacity-70"
          >
            {sent ? (<><Check size={16} /> Message Sent!</>) : (<><Send size={16} /> Send Message</>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
