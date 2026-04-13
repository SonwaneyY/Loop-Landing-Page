import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$99",
    description: "For teams hiring across a handful of roles.",
    capacity: "Up to 5 open roles",
    comms: "300 communications / month",
    features: [
      "Personalized rejection emails",
      "ATS logging",
      "Reply thread management",
      "Email encryption",
    ],
    accent: false,
  },
  {
    name: "Growth",
    price: "$299",
    description: "For scaling teams running multiple pipelines.",
    capacity: "Up to 20 open roles",
    comms: "800 communications / month",
    features: [
      "Everything in Starter",
      "Custom AI training on your tone",
      "Escalation logic",
      "Priority onboarding",
    ],
    accent: true,
    badge: "Most popular",
  },
  {
    name: "Scale",
    price: "$799",
    description: "For orgs with high-volume, always-on hiring.",
    capacity: "Unlimited open roles",
    comms: "Unlimited communications",
    features: [
      "Everything in Growth",
      "Dedicated success manager",
      "Custom compliance workflows",
      "Multi-ATS support",
    ],
    accent: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
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
            Pricing
          </motion.p>
          <h2
            className="text-slate-900 font-semibold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", lineHeight: 1.2 }}
          >
            Simple pricing. No per-candidate fees.
          </h2>
          <p
            className="text-slate-500 max-w-lg mx-auto leading-relaxed"
            style={{ fontSize: "1rem" }}
          >
            Every plan includes the full Loop engine — personalized rejection
            emails, reply handling, and ATS integration.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -3,
                transition: {
                  type: "tween",
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-colors duration-200 ${
                tier.accent
                  ? "border-indigo-500/40 bg-indigo-500/4 hover:border-indigo-500/60"
                  : "border-slate-200 bg-white hover:border-indigo-500/30"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-7 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {tier.badge}
                </span>
              )}

              <span
                className={`text-xs font-semibold uppercase tracking-widest mb-4 ${
                  tier.accent ? "text-indigo-600" : "text-slate-400"
                }`}
              >
                {tier.name}
              </span>

              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className="text-slate-900 font-bold"
                  style={{ fontSize: "2.5rem", lineHeight: 1 }}
                >
                  {tier.price}
                </span>
                <span className="text-slate-400 text-sm">/month</span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-2">
                {tier.description}
              </p>

              <div className="text-slate-400 text-xs mb-6 space-y-0.5">
                <p>{tier.capacity}</p>
                <p>{tier.comms}</p>
              </div>

              <div className="border-t border-slate-100 pt-5 mt-auto">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.accent ? "text-indigo-500" : "text-slate-400"
                        }`}
                      />
                      <span className="text-slate-600 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#waitlist"
                className={`mt-7 block text-center text-sm font-semibold py-3 rounded-xl transition-colors duration-200 ${
                  tier.accent
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Join waitlist
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center text-slate-400 text-sm mt-10"
        >
          All plans billed monthly. No contracts. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
}
