import { motion } from "motion/react";
import { Database, BrainCircuit, Send, MessagesSquare } from "lucide-react";

const stages = [
  {
    number: "01",
    icon: Database,
    name: "Training",
    stage: "Setup",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
    description:
      "Loop holds deep context of your company brand, the job role and the hiring team. It's trained as your proprietary model, on your hiring policies, and employee culture profiles so every message sounds like your team, not a system.",
    mockup: {
      label: "Knowledge base · Building",
      items: [
        { key: "Company", value: "Meridian Tech", done: true },
        { key: "Brand voice", value: "Professional, warm, direct", done: true },
        { key: "Hiring policies", value: "3 ingested documents", done: true },
        { key: "Culture profiles", value: "Syncing team bios…", done: false },
      ],
      accentColor: "indigo",
    },
  },
  {
    number: "02",
    icon: BrainCircuit,
    name: "Evaluation Co-Pilot",
    stage: "Analyze",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    description:
      "After the interview, Loop helps hiring managers turn scattered notes and scorecards into structured, compliant rejection rationale, before it gets lost to memory or Slack.",
    phase: "Phase 2",
    mockup: {
      label: "Scorecard · Structuring",
      items: [
        { key: "Raw note", value: "\"Strong candidate, not quite right for role\"", done: true },
        { key: "Reason extracted", value: "Stage-experience mismatch", done: true },
        { key: "Bias check", value: "No protected language found", done: true },
        { key: "Rationale", value: "Ready for email generation", done: true },
      ],
      accentColor: "blue",
    },
  },
  {
    number: "03",
    icon: Send,
    name: "AI Agent",
    stage: "Outreach",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    description:
      "Generates and sends a personalized, compliant rejection email, on-brand and logged to your ATS automatically. The candidate gets closure. The recruiter focuses on evaluation.",
    mockup: {
      label: "Email agent · Sending",
      items: [
        { key: "To", value: "sarah.chen@email.com", done: true },
        { key: "Subject", value: "Your application at Meridian", done: true },
        { key: "Body", value: "Personalized · 3 paragraphs", done: true },
        { key: "ATS log", value: "Written ✓", done: true },
      ],
      accentColor: "violet",
    },
  },
  {
    number: "04",
    icon: MessagesSquare,
    name: "Conversation Manager",
    stage: "Converses",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
    description:
      "If the candidate replies, with questions, frustration, or gratitude, Loop manages the thread to closure. It escalates to a human recruiter only when intervention is genuinely required.",
    mockup: {
      label: "Reply thread · Managing",
      thread: [
        { from: "Sarah Chen", msg: "Thank you for the kind message, that really means a lot.", time: "10:14 am", candidate: true },
        { from: "Loop", msg: "We appreciate you saying that, Sarah. We'll be in touch when a relevant role opens up.", time: "10:14 am", candidate: false },
        { from: "Sarah Chen", msg: "One question: was it just experience or also technical?", time: "10:17 am", candidate: true },
        { from: "Loop", msg: "Primarily a stage-fit question around scaling infrastructure. Your technical depth was genuinely strong.", time: "10:17 am", candidate: false },
      ],
      status: "Closed",
      accentColor: "pink",
    },
  },
];

const accentMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  indigo: { border: "border-indigo-500/20", bg: "bg-indigo-500/5", text: "text-indigo-400", badge: "bg-indigo-500/15 text-indigo-300" },
  blue: { border: "border-blue-500/20", bg: "bg-blue-500/5", text: "text-blue-400", badge: "bg-blue-500/15 text-blue-300" },
  violet: { border: "border-violet-500/20", bg: "bg-violet-500/5", text: "text-violet-400", badge: "bg-violet-500/15 text-violet-300" },
  pink: { border: "border-pink-500/20", bg: "bg-pink-500/5", text: "text-pink-400", badge: "bg-pink-500/15 text-pink-300" },
};

function StageMockup({ stage }: { stage: typeof stages[0] }) {
  const { mockup } = stage;
  const accent = accentMap[mockup.accentColor];

  return (
    <div className={`rounded-2xl border ${accent.border} ${accent.bg} overflow-hidden`}>
      {/* Mock chrome */}
      <div className={`flex items-center justify-between px-5 py-3 border-b ${accent.border}`}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {[0, 1, 2].map(j => (
              <div key={j} className={`w-2 h-2 rounded-full ${accent.bg} border ${accent.border}`} />
            ))}
          </div>
          <span className={`${accent.text} text-xs ml-1 opacity-70`}>{mockup.label}</span>
        </div>
        <span className={`text-xs rounded-full px-2.5 py-0.5 ${accent.badge}`}>
          {stage.stage}
        </span>
      </div>

      <div className="p-6">
        {"items" in mockup && mockup.items && (
          <div className="space-y-3">
            {mockup.items.map((item, k) => (
              <div key={k} className="flex items-start justify-between gap-4">
                <span className="text-slate-600 text-xs w-28 shrink-0">{item.key}</span>
                <span className={`text-right leading-relaxed ${item.done ? "text-slate-300" : ""} text-[12px] text-[#4a4f54] font-bold`} style={!item.done ? { color: "#475569" } : {}}>
                  {item.value}
                  {!item.done && (
                    <span
                      className="inline-block w-px h-3 bg-slate-500 ml-0.5 align-middle"
                      style={{ animation: "loop-cursor-blink 0.9s step-end infinite" }}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>
        )}

        {"thread" in mockup && mockup.thread && (
          <div className="space-y-3">
            {mockup.thread.map((msg, k) => (
              <div key={k} className={`flex flex-col gap-1 ${msg.candidate ? "items-start" : "items-end"}`}>
                {/* Name tag */}
                <div className={`flex items-center gap-1.5 px-1 ${msg.candidate ? "flex-row" : "flex-row-reverse"}`}>
                  {msg.candidate ? (
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#f472b6">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12 Q12 6 16 12 Q12 18 8 12Z" fill="white"/>
                      </svg>
                    </div>
                  )}
                  <span className="text-[10px] text-slate-400 font-medium">
                    {msg.candidate ? "Applicant" : "Loop"}
                  </span>
                </div>
                {/* Bubble */}
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                    msg.candidate
                      ? "bg-white/6 text-slate-300"
                      : `${accent.bg} border ${accent.border} ${accent.text}`
                  }`}
                >
                  <p className="text-xs leading-relaxed" style={{ color: msg.candidate ? "#4A4F54" : "#f472b6", fontWeight: msg.candidate ? undefined : 700 }}>{msg.msg}</p>
                  <p className="text-slate-600 text-xs mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
            <div className={`flex items-center justify-center gap-2 mt-3 pt-3 border-t ${accent.border}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 text-xs">Thread closed · ATS updated</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mb-4"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            Four stages. Zero additional workload.
          </motion.p>
          <h2
            className="text-slate-900 font-semibold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
          >
            Loop auto-activates after a rejection
            <br />
            <span className="text-slate-400">Without any required recruiter effort.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Loop acts only after a human has made a decision. It doesn't infer, speculate, or replace judgment.
          </p>
        </motion.div>

        {/* ── Stage rows — desktop ───────────────────────────── */}
        <div className="hidden lg:flex flex-col gap-0">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="grid grid-cols-2 gap-16 items-center min-h-[50vh]"
            >
              {/* Left: step description */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl ${stage.iconBg} flex items-center justify-center ${stage.iconColor}`}>
                    <stage.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">{stage.number} /</span>
                    <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wider">{stage.stage}</span>
                    {"phase" in stage && stage.phase && (
                      <span className="text-xs text-slate-400 border border-slate-200 rounded-full px-2 py-0.5">{stage.phase}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-slate-900 mb-4" style={{ fontSize: "1.35rem", fontWeight: 600, lineHeight: 1.25 }}>
                  {stage.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{stage.description}</p>
              </div>

              {/* Right: mockup with scroll-driven opacity */}
              <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <StageMockup stage={stage} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ── Card grid — mobile fallback ───────────────────────────────── */}
        <div className="lg:hidden grid grid-cols-1 gap-10 mt-4">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${stage.iconBg} flex items-center justify-center ${stage.iconColor}`}>
                    <stage.icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">{stage.number} /</span>
                    <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wider">{stage.stage}</span>
                    {"phase" in stage && stage.phase && (
                      <span className="text-xs text-slate-400 border border-slate-200 rounded-full px-2 py-0.5">{stage.phase}</span>
                    )}
                  </div>
                </div>
                <h3 className="text-slate-900 mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {stage.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{stage.description}</p>
              </div>
              <StageMockup stage={stage} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes loop-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}