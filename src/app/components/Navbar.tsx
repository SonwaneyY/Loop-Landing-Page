import { useState, useEffect } from "react";
import { motion } from "motion/react";
import logoImg from "../../imports/Logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "bg-[rgba(10,15,30,0.85)] backdrop-blur-[16px] border-b border-indigo-500/12 shadow-[0_1px_0_rgba(79,70,229,0.08),_0_4px_24px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Loop" className="h-11 w-auto" />
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7">
          {[
            { label: "How it works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-px"
        >
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
}