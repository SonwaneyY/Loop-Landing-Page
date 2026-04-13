import { motion } from "motion/react";
import { PlugZap, RefreshCw, ChartColumn } from "lucide-react";

const atsList = [
  "Greenhouse",
  "Workday",
  "Ashby",
  "BambooHR",
  "Lever",
  "SmartRecruiters",
];

const cards = [
  {
    label: "No migration",
    headline: "Recruiters never leave their existing system.",
    body: "Loop runs in the background, triggered automatically when a candidate is moved to rejected status in your ATS. The workflow your team already has doesn't change.",
    icon: PlugZap,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10",
  },
  {
    label: "One-time setup",
    headline: "Set up once. Runs continuously.",
    body: "Connect your ATS, train Loop on your org profile, and it handles every rejection conversation that follows. No ongoing configuration, and no candidate falls through the cracks because someone forgot to follow up.",
    icon: RefreshCw,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
  },
  {
    label: "Built for scale",
    headline: "300 open roles or 3: the workload on your team is the same.",
    body: "Loop scales with your hiring volume automatically. High-volume periods don't create a backlog. Every rejected candidate gets a response, regardless of how many positions are running simultaneously.",
    icon: ChartColumn,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
  },
];

export function ATSIntegrationSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          
          <h2
            className="text-slate-900 font-semibold mb-5 max-w-2xl mx-auto"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
          >Compatible with any ATS, out of the box.</h2>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed" style={{ fontSize: "1rem" }}>
            Connect via API, complete a one-time setup, and Loop starts handling every rejection conversation your ATS was never designed to touch. No migration. No renegotiating contracts. No new platform for your team to learn.
          </p>
        </motion.div>

        {/* ATS compatibility pills — trust bar framing (Pattern 5) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14"
        >
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase text-center mb-5">
            Built to integrate with
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {(() => {
              const logoMap: Record<string, JSX.Element> = {
                "Greenhouse": (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#24A147"/>
                    {/* Stem */}
                    <rect x="7.5" y="7" width="1" height="5.5" rx="0.5" fill="white"/>
                    {/* Left leaf */}
                    <path d="M7.5 9.5C7.5 9.5 5 9.2 4.5 7C4.5 7 6.5 6.8 7.5 9.5Z" fill="white"/>
                    {/* Right leaf */}
                    <path d="M8.5 8C8.5 8 11 7.7 11.5 5.5C11.5 5.5 9.5 5.3 8.5 8Z" fill="white"/>
                    {/* Pot */}
                    <path d="M5.5 12.5H10.5L10 13.5H6L5.5 12.5Z" fill="white" opacity="0.85"/>
                  </svg>
                ),
                "Workday": (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#0875E1"/>
                    <path d="M2.5 5L4.8 11H6L8 6.8L10 11H11.2L13.5 5H12.2L10.6 9.4L8.6 5H7.4L5.4 9.4L3.8 5H2.5Z" fill="white"/>
                  </svg>
                ),
                "Ashby": (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#5C4EE5"/>
                    {/* Abstract A mark */}
                    <path d="M8 3L12 13H10.5L9.7 11H6.3L5.5 13H4L8 3ZM8 6L6.9 9.5H9.1L8 6Z" fill="white"/>
                  </svg>
                ),
                "BambooHR": (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#73AC39"/>
                    {/* Bamboo stalk left */}
                    <rect x="5" y="3" width="2" height="10" rx="1" fill="white"/>
                    {/* Bamboo stalk right */}
                    <rect x="9" y="4" width="2" height="9" rx="1" fill="white"/>
                    {/* Node marks */}
                    <rect x="5" y="7.5" width="2" height="1" fill="#73AC39"/>
                    <rect x="9" y="9" width="2" height="1" fill="#73AC39"/>
                    {/* Leaf */}
                    <path d="M7 5.5C7 5.5 9 4.5 11 5.5C11 5.5 9.5 7 7 5.5Z" fill="white"/>
                  </svg>
                ),
                "Lever": (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#1F2937"/>
                    {/* Lever beam */}
                    <rect x="2.5" y="7.5" width="11" height="1.5" rx="0.75" fill="#F97316"/>
                    {/* Fulcrum */}
                    <path d="M7.25 9L8 12L8.75 9H7.25Z" fill="#F97316"/>
                    {/* Left weight down */}
                    <circle cx="3.5" cy="6.5" r="1.5" fill="white"/>
                    {/* Right side up */}
                    <circle cx="12.5" cy="5.5" r="1.5" fill="white" opacity="0.5"/>
                  </svg>
                ),
                "SmartRecruiters": (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="16" height="16" rx="3" fill="#2557A7"/>
                    {/* S mark */}
                    <path d="M10.5 5.5C10.5 5.5 9.5 4.5 8 4.5C6.5 4.5 5.5 5.2 5.5 6.3C5.5 7.3 6.3 7.8 8 8.2C9.7 8.6 10.5 9.1 10.5 10.2C10.5 11.3 9.4 12 7.8 12C6.2 12 5.1 11.1 5 10.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  </svg>
                ),
              };
              return atsList.map((name, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2.5 text-sm rounded-full px-5 py-2.5 border border-slate-200 bg-slate-50 text-slate-500 cursor-default pointer-events-none select-none"
                >
                  {name}
                </span>
              ));
            })()}
          </div>
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
              className="group p-8 rounded-2xl border border-slate-100 hover:border-indigo-100 bg-white hover:bg-slate-50/70 hover:shadow-[0_12px_32px_rgba(79,70,229,0.08)] transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} mb-5`}>
                <card.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-semibold uppercase tracking-widest ${card.iconColor} mb-3 block`}>
                {card.label}
              </span>
              <h3
                className="text-slate-900 mb-3"
                style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.4 }}
              >
                {card.headline}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing statement */}
        

      </div>
    </section>
  );
}