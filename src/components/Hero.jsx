import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Github, Linkedin } from "lucide-react";
import Particles from "./Particles.jsx";
import Typing from "./Typing.jsx";
import profile from "../assets/babar-profile.webp";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 pb-16 bg-hero">
      <Particles count={36} />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted">
            <Sparkles size={14} className="text-neon-blue" />
            Available for freelance & full-time roles
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="gradient-text bg-[length:200%_200%] animate-gradient text-glow">BABAR ALI</span>
            <br />
            <span className="mt-2 block text-2xl font-medium text-muted sm:text-3xl lg:text-4xl">
              Crafting modern, interactive &
              <br className="hidden sm:block" /> AI-enhanced web experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
            Frontend Developer passionate about building responsive, fast and visually engaging web applications using React.js and JavaScript.
          </p>

          <div className="mt-6 flex items-center gap-2 text-base">
            <span className="text-muted">I am a</span>
            <Typing words={["Frontend Developer", "React Developer", "AI Enthusiast"]} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-3 text-sm font-semibold text-background shadow-glow-blue transition-transform hover:scale-[1.03]">
              View Projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/Babar_Ali_Resume.pdf" download className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition-all hover:bg-white/10">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold transition-all hover:bg-white/10">
              <Mail size={16} /> Hire Me
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10"><Github size={16} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10"><Linkedin size={16} /></a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { v: "2+", l: "Projects" },
              { v: "React", l: "+ AI" },
              { v: "100%", l: "Responsive" },
              { v: "Front", l: "End Focused" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-xl font-bold gradient-text">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-full opacity-70 animate-spin-slow"
              style={{
                background: "conic-gradient(from 0deg, #4aa8ff, #b169ff, #4aa8ff)",
                filter: "blur(28px)",
              }}
            />
            <div className="absolute -inset-2 rounded-full animate-pulse-glow" />
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full p-[3px] bg-gradient-to-br from-neon-blue via-neon-purple to-neon-blue animate-float">
              <div className="h-full w-full overflow-hidden rounded-full bg-background ring-1 ring-white/10">
                <img src={profile} alt="Babar Ali" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            </div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -left-4 top-10 glass rounded-2xl px-3 py-2 text-xs font-medium shadow-lg">⚛️ React</motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -right-2 top-24 glass rounded-2xl px-3 py-2 text-xs font-medium shadow-lg">✨ AI</motion.div>
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-6 -left-2 glass rounded-2xl px-3 py-2 text-xs font-medium shadow-lg">🎨 UI/UX</motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
