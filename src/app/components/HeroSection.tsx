import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">

      {/* ── Hero glow ─────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 500px at 50% 55%, rgba(79,70,229,0.20) 0%, rgba(249,115,22,0.07) 50%, transparent 100%)",
        }}
      />

      {/* ── Content grid ─────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — 50% */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/8 text-indigo-300 text-sm mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 loop-pulse-dot" />
            Applicant facing AI agent for high-volume recruiting
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white font-semibold tracking-tight mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            Turn every rejected candidate
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 50%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              into a brand asset.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 max-w-xl mb-10 leading-relaxed"
            style={{ fontSize: "1.15rem" }}
          >
            61% make it to a face-to-face interview and never hear back. Loop closes every conversation automatically, on-brand, and at the scale your team can't reach manually.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href="#waitlist"
              className="loop-cta-glow inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors duration-200 whitespace-nowrap"
            >
              Join the Waitlist <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors duration-200"
            >
              See how it works
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Right — 50% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="flex items-center"
        >
          {/* Email mockup card */}
          <div className="w-full rounded-2xl border border-indigo-500/20 bg-indigo-500/4 overflow-hidden">
            {/* Card chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-indigo-500/12">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-indigo-500/20" />
                <div className="w-2 h-2 rounded-full bg-indigo-500/20" />
                <div className="w-2 h-2 rounded-full bg-indigo-500/20" />
              </div>
              <span className="text-indigo-400/60 text-xs ml-1">Sample Rejection Email</span>
              <span className="ml-auto text-emerald-400 text-xs border border-emerald-500/25 rounded-full px-2 py-0.5">Sent</span>
            </div>
            {/* Email content */}
            <div className="px-5 py-5">
              <p className="text-slate-300 leading-relaxed" style={{ fontSize: "0.8rem" }}>Hi <span className="text-indigo-300">Sarah</span>,<br /><br />Thank you so much for coming in and spending time with our team. We genuinely appreciated seeing your work. After reflecting carefully, we've decided not to move forward, and we want to be honest with you about why.<br /><br />The piece we kept coming back to was process. During the design exercise, the team noticed that you moved into execution very quickly. The wireframes were up fast, which is impressive, but there wasn't much exploration of users, goals, or constraints before diving in. When the scenario got more complex, it was hard to see how the earlier decisions connected to a broader rationale.<br /><br />For this role, we're looking for someone who treats ambiguity as a starting point rather than something to move past. That kind of structured curiosity, asking hard questions before picking up the pen, is something we rely on heavily here.<br /><br />This isn't a reflection of your talent. We just need a closer match on process maturity right now.<br /><br />We wish you the very best and hope your search goes well.<br /><br />Warm regards,<br /><span className="text-indigo-300">Recruiting Team</span></p>
              <div className="mt-4 pt-4 border-t border-indigo-500/12 flex items-center justify-between">
                <span className="text-slate-600 text-xs">Sent by: Jordan · Meridian</span>
                
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}