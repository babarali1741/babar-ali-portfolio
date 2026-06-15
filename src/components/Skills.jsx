import { motion } from "framer-motion";
import Section from "./Section.jsx";

const skills = [
  { name: "React.js", level: 90, icon: "⚛️" },
  { name: "JavaScript", level: 88, icon: "🟨" },
  { name: "HTML5", level: 95, icon: "🟧" },
  { name: "CSS3", level: 92, icon: "🎨" },
  { name: "Tailwind CSS", level: 90, icon: "💨" },
  { name: "Framer Motion", level: 80, icon: "🎞️" },
  { name: "GSAP", level: 70, icon: "✨" },
  { name: "Git & GitHub", level: 82, icon: "🐙" },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="My Stack" title="Skills & Tools" subtitle="Technologies I use to build premium, modern web experiences.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">{s.icon}</span>
                <span className="font-semibold">{s.name}</span>
              </div>
              <span className="text-xs text-muted">{s.level}%</span>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.05 }}
                className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
