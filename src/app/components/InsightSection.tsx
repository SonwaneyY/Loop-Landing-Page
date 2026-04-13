import { motion } from "motion/react";

export function InsightSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            <h2
              className="text-white font-semibold mb-7"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
            >ATS tools track who moves forward.<br /><span className="text-slate-400">None of them manage who you leave behind.</span></h2>
            <div className="space-y-5 text-slate-400 leading-relaxed">
              
              
            </div>

            {/* Punch line */}
            
          </motion.div>

          {/* Right: contrast panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {/* What ATS does */}
            <div className="rounded-2xl border border-white/8 bg-white/3 p-7">
              <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-4">What your ATS handles</p>
              <div className="space-y-3">
                {[
                  "Candidate tracking & pipeline stages",
                  "Interview scheduling & coordination",
                  "Offer management & onboarding",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-0.5 shrink-0" style={{ fontSize: "0.8rem", fontWeight: 700 }}>✓</span>
                    <p className="text-slate-400 text-sm">{item}</p>
                  </div>
                ))}
                {/* Gap item */}
                <div className="flex items-start gap-3 pt-1 mt-1">
                  <span className="text-red-500/70 mt-0.5 shrink-0" style={{ fontSize: "0.8rem", fontWeight: 700 }}>✗</span>
                  <p className="text-slate-600 text-sm">Post-rejection candidate journey</p>
                </div>
              </div>
              
            </div>

            {/* What Loop handles */}
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-7">
              <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">What Loop handles</p>
              <div className="space-y-3">
                {[
                  "Personalized rejection outreach, automatically",
                  "Candidate follow-up replies managed to closure",
                  "Every conversation logged back to your ATS",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-0.5 shrink-0" style={{ fontSize: "0.8rem", fontWeight: 700 }}>✓</span>
                    <p className="text-slate-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4">
                <p className="text-indigo-400 text-xs italic">The gap no other tool touches.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}