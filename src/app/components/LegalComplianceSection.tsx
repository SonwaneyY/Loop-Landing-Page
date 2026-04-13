import { motion } from "motion/react";
import { LockKeyhole, Shuffle, FileClock } from "lucide-react";

const cards = [
  {
    label: "Encrypted at source",
    headline: "Interview notes never leave the room.",
    body: "Feedback, scorecards, and panel observations are end-to-end encrypted and anonymized before they're ever processed. The interviewer's identity is scrubbed. What happened in the room stays in the room.",
    icon: LockKeyhole,
    accent: "text-indigo-400",
    accentBg: "bg-indigo-500/10",
    border: "border-indigo-500/15",
  },
  {
    label: "Regenerated, not forwarded",
    headline: "The feedback informs the message. It never becomes the message.",
    body: "Loop reads the rejection rationale as a signal, not a source document. It extracts what's relevant, then writes a new email from scratch, removing any language that could expose the company to a discrimination, bias, or wrongful rejection claim.",
    icon: Shuffle,
    accent: "text-violet-400",
    accentBg: "bg-violet-500/10",
    border: "border-violet-500/15",
  },
  {
    label: "Auditable by default",
    headline: "Every output is logged with a full decision trace.",
    body: "AEDT-compliant from day one. If legal ever needs to review a communication, it's there, timestamped, attributed, and clean.",
    icon: FileClock,
    accent: "text-blue-400",
    accentBg: "bg-blue-500/10",
    border: "border-blue-500/15",
  },
];

export function LegalComplianceSection() {
  return (
    <section
      className="py-28 bg-slate-950"
      style={{
        backgroundImage:
          "linear-gradient(rgba(79,70,229,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          {/* Spec 9 — Eyebrow clip-path wipe */}
          <motion.p
            className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            Compliance by design
          </motion.p>
          <h2
            className="text-white font-semibold mb-5"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
          >
            Legally compliant by design.
          </h2>
          <p className="text-slate-400 leading-relaxed" style={{ fontSize: "1rem" }}>Most companies choose between honest rejection feedback and legal safety. Legal wins, so candidates get a template that says nothing. Loop was built to close that gap without opening a liability.</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { type: "tween", duration: 0.2, ease: [0.4, 0, 0.2, 1] } }}
              className={`flex flex-col p-7 rounded-2xl border ${card.border} bg-white/4 hover:border-indigo-500/50 transition-colors duration-200`}
            >
              <div className={`w-9 h-9 rounded-xl ${card.accentBg} flex items-center justify-center ${card.accent} mb-5 shrink-0`}>
                <card.icon className="w-[18px] h-[18px]" />
              </div>
              <span className={`text-xs font-semibold uppercase tracking-widest ${card.accent} mb-3`}>
                {card.label}
              </span>
              <h3
                className="text-white mb-3"
                style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 }}
              >
                {card.headline}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          
          <div className="flex items-center gap-2.5">
            {["AEDT-Compliant", "SOC 2 Ready", "ATS-logged"].map((tag) => (
              <span
                key={tag}
                className="text-slate-500 text-xs border border-white/8 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}