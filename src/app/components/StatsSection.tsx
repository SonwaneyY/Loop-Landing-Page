import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// ── Count-up hook (ease-out cubic, fires once, respects reduced-motion) ──────
function useCountUp(target: number, duration: number, started: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const t0 = performance.now();
    let raf: number;
    const update = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(e * target));
      if (p < 1) raf = requestAnimationFrame(update);
      else setValue(target);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return value;
}

function useCountUpDecimal(target: number, duration: number, started: boolean, decimals = 1) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const t0 = performance.now();
    let raf: number;
    const update = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setValue(parseFloat((e * target).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(update);
      else setValue(target);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, decimals]);
  return value;
}

// ── Hover transition shared config ───────────────────────────────────────────
const hoverTransition = { type: "tween" as const, duration: 0.2, ease: [0.4, 0, 0.2, 1] };

export function StatsSection() {
  const [started, setStarted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // Trigger count-up when the grid enters viewport
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count61  = useCountUp(61,  1200, started);
  const count72  = useCountUp(72,  1200, started);
  const count54  = useCountUpDecimal(5.4, 1200, started);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          {/* Spec 9 — Eyebrow clip-path wipe */}
          
          <h2 className="text-slate-900 font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}>Ghosting isn't just an applicant experience problem.<br />It's a brand equity problem.</h2>
        </motion.div>

        {/* Three stat cards — Spec 4 count-up, Spec 5 hover elevation */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {/* Card 1 — 61% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ y: -3, transition: hoverTransition }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-[0_12px_32px_rgba(79,70,229,0.10)] hover:border-indigo-100 transition-shadow duration-200"
          >
            <div className="font-semibold text-indigo-600 mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1 }}>
              {started ? `${count61}%` : "0%"}
            </div>
            <p className="text-slate-600 leading-relaxed text-sm mb-2">of candidates ghosted even after a face-to-face interview</p>
            <p className="text-slate-400 text-xs">Greenhouse, State of Job Hunting 2024</p>
          </motion.div>

          {/* Card 2 — 72% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -3, transition: hoverTransition }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-[0_12px_32px_rgba(79,70,229,0.10)] hover:border-indigo-100 transition-shadow duration-200"
          >
            <div className="font-semibold text-indigo-600 mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1 }}>
              {started ? `${count72}%` : "0%"}
            </div>
            <p className="text-slate-600 leading-relaxed text-sm mb-2">of candidates who have a poor experience share it publicly or with their network</p>
            <p className="text-slate-400 text-xs">CareerArc, Candidate Experience Report</p>
          </motion.div>

          {/* Card 3 — 8–22× (static per spec) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            whileHover={{ y: -3, transition: hoverTransition }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-[0_12px_32px_rgba(79,70,229,0.10)] hover:border-indigo-100 transition-shadow duration-200"
          >
            <div className="font-semibold text-indigo-600 mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", lineHeight: 1.1 }}>
              8–22×
            </div>
            <p className="text-slate-600 leading-relaxed text-sm mb-2">ROI delivered based on recruiter time saved and employer brand protection value</p>
          </motion.div>
        </div>

        {/* Virgin Media callout — $5.4M count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="rounded-2xl bg-slate-950 p-8 flex flex-col sm:flex-row sm:items-center gap-6 mb-10"
        >
          <div className="shrink-0">
            <div
              className="font-semibold"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                lineHeight: 1,
                background: "linear-gradient(135deg, #a5b4fc, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ${started ? count54.toFixed(1) : "0.0"}M
            </div>
          </div>
          <div className="h-px sm:h-12 sm:w-px bg-white/10 shrink-0" />
          <div className="flex-1">
            <p className="text-white leading-relaxed mb-1">Annual revenue lost to poor candidate experience at a single company</p>
            <p className="text-slate-500 text-xs">Virgin Media case study</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
