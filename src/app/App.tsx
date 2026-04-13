import { useEffect } from "react";
import { Toaster } from "sonner";
import faviconImg from "../imports/Favicon.png";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { InsightSection } from "./components/InsightSection";
import { ProductPreviewSection } from "./components/ProductPreviewSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { BentoSection } from "./components/BentoSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { LegalComplianceSection } from "./components/LegalComplianceSection";
import { ValueSection } from "./components/ValueSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { ATSIntegrationSection } from "./components/ATSIntegrationSection";
import { PricingSection } from "./components/PricingSection";
import { WaitlistSection } from "./components/WaitlistSection";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") || document.createElement("link");
    link.type = "image/png";
    link.rel = "shortcut icon";
    link.href = faviconImg;
    document.head.appendChild(link);

    const description = "AI Talent Intelligence Platform to turn rejected applicants into brand promoters";

    const setMeta = (property: string, content: string, isName = false) => {
      const attr = isName ? "name" : "property";
      let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description, true);
    setMeta("og:description", description);
    setMeta("og:title", "Loop — AI Recruiting Intelligence");
    setMeta("og:type", "website");
    setMeta("twitter:card", "summary_large_image", true);
    setMeta("twitter:description", description, true);
    setMeta("twitter:title", "Loop — AI Recruiting Intelligence", true);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950">
      <Toaster position="top-center" richColors />
      <Navbar />
      {/* Pattern 1+6 — Asymmetric hero + dual-tone glow */}
      <HeroSection />
      {/* Pattern 4 — Stat counter (count-up already implemented) */}
      <StatsSection />
      {/* Pattern 8 — Animated product preview (typewriter) */}
      <ProductPreviewSection />
      {/* Insight / ATS gap */}
      <InsightSection />
      {/* Pattern 2 — Sticky scroll feature walkthrough */}
      <HowItWorksSection />
      {/* Pattern 3 — Bento grid capability layer */}
      <BentoSection />
      {/* Pattern 9 — Before/after comparison */}
      <BeforeAfterSection />
      <LegalComplianceSection />
      <ValueSection />
      <SocialProofSection />
      {/* Pattern 5 — Logo cloud / ATS trust bar */}
      <ATSIntegrationSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}