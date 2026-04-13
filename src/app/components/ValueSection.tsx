import { motion } from "motion/react";
import { ShieldCheck, RefreshCw, Users } from "lucide-react";

const impacts = [
  {
    icon: ShieldCheck,
    tag: "For your employer brand",
    tagStyle: "bg-violet-50 text-violet-600",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
    kicker: "Ghosted candidates become brand advocates, not detractors.",
    description:
      "One public rejection story on LinkedIn reaches thousands. Loop closes every open loop before it becomes a liability, turning declined candidates into people who remember how well they were treated.",
  },
  {
    icon: RefreshCw,
    tag: "For your talent pipeline",
    tagStyle: "bg-indigo-50 text-indigo-600",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
    kicker: "Declined today doesn't mean lost forever.",
    description:
      "Candidates who receive genuine closure stay warm and re-enter your pipeline. Every closed loop is a future hire you don't have to source from scratch.",
  },
  {
    icon: Users,
    tag: "For your recruiting team",
    tagStyle: "bg-blue-50 text-blue-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    kicker: "Zero post-rejection backlog. Every candidate gets a response.",
    description:
      "Loop handles every rejection conversation automatically: the initial outreach, follow-up replies, and thread closure. Your recruiters focus on the candidates moving forward, not the ones who aren't.",
  },
];

export function ValueSection() {
  return (
    null
  );
}