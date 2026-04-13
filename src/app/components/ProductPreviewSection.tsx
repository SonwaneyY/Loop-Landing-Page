import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

const RECRUITER_NOTE =
  `Portfolio walkthrough: polished, maybe too polished? Case studies read like Medium articles. Kept saying "I led" but when Jake asked who else was on the team she hesitated. Might be inflating ownership.

Design exercise (onboarding redesign):
+ Fast. Had wireframes up in 25 min
+ Good hierarchy, clear visual logic
- Skipped discovery entirely. No questions about users, business goals, constraints. Just started designing.
- When Maya challenged the flow for business accounts she said "oh I didn't think about that" - not a recovery, just an admission

Debrief vibe: confident but not curious. Answered every question like a rehearsed interview answer. Never once said "I don't know" or "good question, let me think."

Craft: 8/10. Process: 4/10. Coachability: unclear.`;

const GENERATED_EMAIL = `Hi Sarah,

Thank you so much for taking the time to interview with us and for walking us through your work. It's clear you've put real effort into your craft, and that came through.

After careful consideration, we've decided not to move forward with your candidacy at this time. This was a genuine decision, so we want to be honest about what we saw.

Your visual design instincts are strong. The hierarchy and clarity in your wireframes stood out, and your ability to move quickly under pressure is a real asset. The polish in your portfolio reflects a high bar for the work itself.

Where we felt the fit wasn't quite right for this role is in the design process. Our team works in environments where discovery (understanding users, business constraints, and edge cases) is just as important as the output. During the design exercise, jumping straight to execution without exploring those dimensions left some meaningful gaps, and when those gaps surfaced, we were hoping to see more of a recovery instinct kick in. For this particular role, that process orientation needs to be deeply embedded from the start.

We genuinely hope this feedback is useful. Strong execution skills are hard to find, and with intentional focus on process, we think you'll be a great fit somewhere.

Wishing you all the best,
The Loop Recruiting Team`;

function useTypewriter(text: string, speed: number, active: boolean) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active) return;
    setDisplayed("");
    setDone(false);
    let i = 0;

    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        timerRef.current = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };

    timerRef.current = setTimeout(tick, 400);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, text, speed]);

  return { displayed, done };
}

export function ProductPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const { displayed, done } = useTypewriter(GENERATED_EMAIL, 14, inView);

  return (
    <section className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 50%, rgba(79,70,229,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
            See it work
          </p>
          <h2
            className="text-white font-semibold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
          >
            From rough note to warm rejection,
            <br />
            <span className="text-slate-400">in seconds.</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed" style={{ fontSize: "1rem" }}>Loop reads the hiring manager's raw feedback and writes a fully personalized, legally compliant rejection email automatically.</p>
        </motion.div>

        {/* Two-panel demo */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Input panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden"
          >
            {/* Panel header */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-white/6">
              
              <span className="text-slate-600 text-xs ml-1">Rough Hiring Manager Feedback Scorecard</span>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                  <span className="text-slate-300 text-xs font-semibold">JM</span>
                </div>
                <div>
                  <p className="text-slate-300 text-xs font-medium">Jordan Marsh</p>
                  <p className="text-slate-600 text-xs">Hiring Manager · Meridian</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed whitespace-pre-line" style={{ fontSize: "0.9rem" }}>
                {RECRUITER_NOTE}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span className="text-slate-600 text-xs border border-white/8 rounded-full px-2.5 py-1">Role: Senior Product Designer, Payments</span>
                <span className="text-slate-600 text-xs border border-white/8 rounded-full px-2.5 py-1">Applicant: Sarah Chen</span>
              </div>
            </div>
          </motion.div>

          {/* Arrow connector — desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-8 h-8 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
            </div>
          </div>

          {/* Output panel */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-indigo-500/20 bg-indigo-500/4 overflow-hidden"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-indigo-500/12">
              <div className="flex items-center gap-2.5">
                
                <span className="text-indigo-400/70 text-xs ml-1">Loop's Generated Email</span>
              </div>
              {done && (
                <span className="text-emerald-400 text-xs border border-emerald-500/25 rounded-full px-2.5 py-0.5">
                  Sent · ATS logged
                </span>
              )}
            </div>
            <div className="p-7">
              {/* Email meta */}
              <div className="space-y-1.5 mb-5 pb-5 border-b border-indigo-500/10">
                <div className="flex gap-3">
                  <span className="text-slate-600 text-xs w-12 shrink-0">To</span>
                  <span className="text-slate-400 text-xs">sarah.chen@email.com</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-600 text-xs w-12 shrink-0">From</span>
                  <span className="text-slate-400 text-xs">jordan@meridian.io</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-600 text-xs w-12 shrink-0">Subject</span>
                  <span className="text-slate-300 text-xs">Your application at Meridian</span>
                </div>
              </div>
              {/* Email body */}
              <p
                className="text-slate-300 leading-relaxed whitespace-pre-line"
                style={{ fontSize: "0.84rem" }}
              >
                {GENERATED_EMAIL}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-slate-600 mt-8 text-[14px]"
        >
          Loop reads internal feedback as a signal. The candidate never sees the raw note. Every output is logged back to your ATS.
        </motion.p>
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