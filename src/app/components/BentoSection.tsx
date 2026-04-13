import { motion } from "motion/react";
import { Sparkles, Plug, MessageCircle, GitBranch, UserCheck, ShieldOff } from "lucide-react";

const cards = [
  {
    id: "personalized",
    span: "col-span-1",
    icon: Sparkles,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    label: "Personalized at scale",
    body: "300 comms/month. Each one named, specific, human.",
    accent: null,
  },
  {
    id: "ats-native",
    span: "col-span-2",
    icon: Plug,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    label: "ATS-native",
    body: "No new workflow. Loop lives inside the tools you already use, triggered automatically when a candidate is moved to rejected.",
    accent: "border-blue-500/20 bg-blue-500/4",
  },
  {
    id: "feedback",
    span: "col-span-2",
    icon: MessageCircle,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    label: "Feedback that lands",
    body: "Rejection emails with actual reasons, not form letters. Loop reads the internal rationale and writes something worth reading.",
    accent: "border-violet-500/20 bg-violet-500/4",
  },
  {
    id: "escalation",
    span: "col-span-1",
    icon: GitBranch,
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
    label: "Escalation logic",
    body: "Human override. Always.",
    accent: null,
  },
  {
    id: "thread",
    span: "col-span-1",
    icon: UserCheck,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    label: "Thread management",
    body: "Replies handled to closure: questions, frustration, gratitude.",
    accent: null,
  },
  {
    id: "zero-decisions",
    span: "col-span-2",
    icon: ShieldOff,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    label: "Zero hiring decisions",
    body: "Loop automates the administrative. Not the evaluative. Every output is triggered by a human decision, never inferred, never assumed.",
    accent: "border-blue-500/20 bg-blue-500/4",
  },
];

export function BentoSection() {
  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,70,229,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.p
            className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            What Loop does
          </motion.p>
          <h2
            className="text-white font-semibold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
          >
            Every capability your team needs.
            <br />
            <span className="text-slate-400">Zero additional workload.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3, transition: { type: "tween", duration: 0.2, ease: [0.4, 0, 0.2, 1] } }}
              className={`${card.span} p-7 rounded-2xl border transition-all duration-200 ${
                card.accent
                  ? card.accent
                  : "border-white/8 bg-white/3 hover:border-indigo-500/25"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-5`}
              >
                <card.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <p
                className="text-white mb-2"
                style={{ fontSize: "0.95rem", fontWeight: 600, lineHeight: 1.4 }}
              >
                {card.label}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}