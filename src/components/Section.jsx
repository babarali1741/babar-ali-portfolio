import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-4 sm:px-6 py-20 ${className}`}>
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          {eyebrow && (
            <div className="mb-3 text-xs uppercase tracking-[0.3em] text-neon-blue">{eyebrow}</div>
          )}
          {title && (
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              <span className="gradient-text">{title}</span>
            </h2>
          )}
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-muted">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
}
