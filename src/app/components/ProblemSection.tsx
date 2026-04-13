import { useRef } from "react";
import { motion, useInView } from "motion/react";

const lines = [
  "Recruiters manage 300–400 applications per role.",
  "Across 5–6 positions.",
  "Simultaneously.",
];

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <section className="py-36 bg-slate-950 relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,70,229,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Stacked problem statement */}
        <div className="space-y-2 mb-14">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.18, ease: [0.4, 0, 0.2, 1] }}
              className="text-white"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                fontWeight: 600,
                lineHeight: 1.25,
                opacity: 1 - i * 0.08,
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Pause divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-12 h-px bg-slate-700 mx-auto mb-14 origin-left"
        />

        {/* Resolution */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-white mb-6"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 600, lineHeight: 1.25 }}
        >The silence isn't indifference. <span className="text-slate-400">It's burnout.</span></motion.p>

        
      </div>
    </section>
  );
}
