import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, Lock } from "lucide-react";
import { CustomSelect } from "./CustomSelect";

const roles = [
  "Recruiter / TA",
  "Hiring Manager",
  "Head of Talent / People Ops",
  "Founder / CEO",
  "Other",
];

const atsList = [
  "Bamboo",
  "Greenhouse",
  "Ashby",
  "Other",
];

const plans = [
  "Starter — $99/mo (up to 5 open roles)",
  "Growth — $299/mo (up to 20 open roles)",
  "Scale — $799/mo (unlimited roles)",
  "Not sure yet",
];

export function WaitlistSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    plan: "",
    context: "",
    atsOther: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xeepqkly", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          role: form.role,
          plan: form.plan,
          ats: form.context === "Other" ? form.atsOther : form.context,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all text-sm";

  return (
    <section id="waitlist" className="py-36 bg-slate-950 relative overflow-hidden">
      {/* Background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[900, 680, 460, 240].map((size, i) => (
          <div
            key={size}
            className="absolute rounded-full border border-indigo-400"
            style={{ width: size, height: size, opacity: 0.03 + i * 0.015 }}
          />
        ))}
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 55%, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Eyebrow */}
          

          {/* Headline */}
          <h2
            className="text-white font-semibold mb-4 text-center"
            style={{ fontSize: "clamp(1.9rem, 4.5vw, 3rem)", lineHeight: 1.15 }}
          >
            See how Loop handles every rejection conversation
            <span
              style={{
                background: "linear-gradient(135deg, #a5b4fc 0%, #818cf8 60%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}your team can't get to.
            </span>
          </h2>

          {/* Intro */}
          <p className="text-slate-400 text-sm text-center mb-8 leading-relaxed">We're launching soon. Join the waitlist and be first in line.</p>

          {/* Form / Success */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 px-8 py-10 rounded-2xl bg-emerald-500/8 border border-emerald-500/25 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                <Check className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <p className="text-emerald-300 font-medium text-lg">You're on the list.</p>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  We'll reach out personally when Loop opens up. No drip campaigns — just a direct message from the team.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full name */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
                className={inputClass}
              />

              {/* Work email */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Work email"
                required
                className={inputClass}
              />

              {/* Role dropdown */}
              <CustomSelect
                value={form.role}
                onChange={handleSelectChange("role")}
                options={roles}
                placeholder="Your role"
                required
              />

              {/* Plan selection */}
              <CustomSelect
                value={form.plan}
                onChange={handleSelectChange("plan")}
                options={plans}
                placeholder="Which plan interests you?"
              />

              {/* Optional context */}
              <CustomSelect
                value={form.context}
                onChange={handleSelectChange("context")}
                options={atsList}
                placeholder="Current ATS"
              />
              {form.context === "Other" && (
                <input
                  type="text"
                  name="atsOther"
                  value={form.atsOther}
                  onChange={handleChange}
                  placeholder="Please specify your ATS"
                  className={inputClass}
                />
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="loop-cta-glow w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors duration-200 disabled:opacity-60 mt-1"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>Join the Waitlist <ArrowRight className="w-4 h-4" /></>
                )}
              </button>

              {/* Disclaimer */}
              
            </form>
          )}

          {/* Legal note */}
          <div className="flex items-start justify-center gap-2 mt-6 text-slate-600 text-xs text-center">
            <Lock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
            <span>AEDT-compliant. Humans make every hiring decision. Loop only handles what comes after.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}