import { motion } from "framer-motion";
import { MapPin, Code2, Sparkles, Rocket } from "lucide-react";
import Section from "./Section.jsx";

const facts = [
  { icon: MapPin, label: "Bhilai, Chhattisgarh, India" },
  { icon: Code2, label: "React.js • JavaScript • Tailwind" },
  { icon: Sparkles, label: "AI-Enhanced Interfaces" },
  { icon: Rocket, label: "Performance-First Mindset" },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who Am I" subtitle="A frontend developer who blends modern design with cutting-edge tech to build digital experiences people love.">
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8"
        >
          <p className="text-foreground/90 leading-relaxed">
            I'm <span className="gradient-text font-semibold">Babar Ali</span>, a Frontend Developer based in Bhilai, India.
            I specialize in crafting fast, responsive, and visually engaging web applications using React.js and JavaScript.
            I love turning ideas into smooth, interactive interfaces with subtle animations and clean, premium design.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Currently exploring the intersection of AI and the modern web — building intelligent UIs that feel
            effortless. Always learning, always shipping.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {facts.map((f, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl glass px-3 py-2 text-sm">
                <f.icon size={16} className="text-neon-blue" />
                <span className="text-muted">{f.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {[
            { v: "Frontend", l: "Developer" },
            { v: "React", l: "Specialist" },
            { v: "AI", l: "Enthusiast" },
            { v: "UI/UX", l: "Focused" },
          ].map((s, i) => (
            <div key={i} className="glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform">
              <div className="font-display text-xl font-bold gradient-text">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
