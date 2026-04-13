import { motion } from "motion/react";
import { X, Check } from "lucide-react";

const rows = [
  {
    without: "Candidate waits 3 weeks. Or hears nothing.",
    with: "Candidate hears back within 24 hours, automatically.",
  },
  {
    without: "No response. No reason. A template if they're lucky.",
    with: "Personalized email. Real feedback. Something worth reading.",
  },
  {
    without: "1-star Glassdoor review. LinkedIn post. Brand damage.",
    with: "Candidate feels respected. Remembers the brand positively.",
  },
  {
    without: "Recruiter moves on. Thread forgotten.",
    with: "ATS log updated. Thread closed. Nothing falls through.",
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.p
            className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-4"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            The difference
          </motion.p>
          <h2
            className="text-slate-900 font-semibold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
          >
            What the rejection experience
            <br />
            looks like with and without Loop.
          </h2>
        </motion.div>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-2 gap-3 mb-3"
        >
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-50 border border-red-100">
            <X className="w-4 h-4 text-red-400 shrink-0" />
            <span className="text-red-500 text-sm font-semibold">Without Loop</span>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-50 border border-indigo-100">
            <Check className="w-4 h-4 text-indigo-500 shrink-0" />
            <span className="text-indigo-600 text-sm font-semibold">With Loop</span>
          </div>
        </motion.div>

        {/* Comparison rows */}
        <div className="space-y-2">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Without */}
              <div className="px-6 py-5 rounded-xl bg-red-500/4 border border-red-100 flex items-start gap-3">
                <X className="w-3.5 h-3.5 text-red-400/60 mt-0.5 shrink-0" />
                <p className="text-slate-600 text-sm leading-relaxed">{row.without}</p>
              </div>
              {/* With */}
              <div className="px-6 py-5 rounded-xl bg-indigo-500/4 border border-indigo-100 flex items-start gap-3">
                <Check className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
                <p className="text-slate-700 text-sm leading-relaxed">{row.with}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <p
            className="text-slate-500 italic max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: "1rem" }}
          >
            "Loop doesn't change the hiring decision.
            <br />
            It changes what the rejection feels like."
          </p>
        </motion.div>
      </div>
    </section>
  );
}