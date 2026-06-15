import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section.jsx";

const projects = [
  {
    title: "Resume Radiance",
    desc: "A premium AI-powered resume builder with elegant templates, real-time preview, and instant PDF export.",
    tags: ["React", "Tailwind", "AI", "PDF"],
    gradient: "from-neon-blue/30 to-neon-purple/30",
    emoji: "📄",
    live: "https://ai-resume-analyzer-ashen-gamma.vercel.app/",
    code: "https://github.com/babarali1741/ai-resume-analyzer",
  },
  {
    title: "Eternal Frames",
    desc: "A cinematic photography portfolio with , masonry gallery and lightbox.",
    tags: ["React", "GSAP", "Framer Motion"],
    gradient: "from-neon-purple/30 to-neon-blue/30",
    emoji: "📸",
    live: "https://eternal-frames-git-main-babarali1741s-projects.vercel.app/",
    code: "https://github.com/babarali1741/Eternal-Frames",
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects" subtitle="Real-world products I've designed and built with React.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative overflow-hidden rounded-3xl glass p-6"
          >
            <div className={`absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br ${p.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            <div className={`relative mb-5 grid h-44 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient}`}>
              <span className="text-6xl drop-shadow-lg">{p.emoji}</span>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
            <h3 className="font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted leading-relaxed">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full glass px-3 py-1 text-[11px] text-muted">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple px-4 py-2 text-xs font-semibold text-background shadow-glow-blue">
                <ExternalLink size={14} /> Live
              </a>
              <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2 text-xs font-semibold hover:bg-white/10">
                <Github size={14} /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
