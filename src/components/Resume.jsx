import { motion } from "framer-motion";
import { Download, FileText, GraduationCap, Briefcase } from "lucide-react";
import Section from "./Section.jsx";

const timeline = [
  {
    icon: Briefcase,
    title: "Frontend Developer",
    org: "Freelance / Personal Projects",
    period: "2024 — Present",
    desc: "Building responsive React applications with modern UI, animations and AI integrations.",
  },
  {
    icon: GraduationCap,
    title: "Self-Taught Developer",
    org: "Online Courses & Real Projects",
    period: "2023 — 2024",
    desc: "Mastered React, JavaScript, Tailwind and modern frontend tooling through hands-on practice.",
  },
];

export default function Resume() {
  return (
    <Section id="resume" eyebrow="My Journey" title="Resume" subtitle="A quick look at my experience and learning path.">
      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 text-center lg:col-span-1"
        >
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple text-background shadow-glow-blue">
            <FileText size={26} />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold">Download My CV</h3>
          <p className="mt-2 text-sm text-muted">Get a one-page summary of skills, projects and contact info.</p>
          <a href="/Babar_Ali_Resume.pdf" download className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-3 text-sm font-semibold text-background shadow-glow-blue">
            <Download size={16} /> Download Resume
          </a>
        </motion.div>

        <div className="lg:col-span-2 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon-blue to-neon-purple opacity-40" />
          <div className="space-y-5">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 glass rounded-2xl p-5"
              >
                <div className="absolute left-1 top-5 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-background">
                  <t.icon size={14} />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-semibold">{t.title}</h4>
                  <span className="text-xs text-muted">{t.period}</span>
                </div>
                <div className="text-sm text-neon-blue">{t.org}</div>
                <p className="mt-2 text-sm text-muted">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
