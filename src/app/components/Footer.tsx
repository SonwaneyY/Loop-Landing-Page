import logoImg from "../../imports/Logo.png";

export function Footer() {
  return (
    <footer className="py-14 bg-slate-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Logo + tagline + about */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <img src={logoImg} alt="Loop" className="h-7 w-auto" />
            </div>
            
            <p className="text-slate-700 text-xs leading-relaxed">Loop is an AI intelligence layer for recruiting teams built to handle the candidate rejection journey so your team doesn't have to.</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-2">
            
            {[
              { label: "How it works", href: "#how-it-works" },
              { label: "Impact", href: "#impact" },
              { label: "Request access", href: "#waitlist" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Credits */}
          <div className="text-right">
            
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-700 text-xs">© 2026 Loop. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}