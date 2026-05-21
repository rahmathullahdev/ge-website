import type { Metadata } from "next";
import AIHero from "@/components/services/ai-intelligent-automation/AIHero";
import AIMarquee from "@/components/services/ai-intelligent-automation/AIMarquee";
import AIBanner from "@/components/services/ai-intelligent-automation/AIBanner";
import AIWorkingProcess from "@/components/services/ai-intelligent-automation/AIWorkingProcess";
import AITechStack from "@/components/services/ai-intelligent-automation/AITechStack";
import AIServiceProcess from "@/components/services/ai-intelligent-automation/AIServiceProcess";
import OurServices from "@/components/OurServices/OurServices";
import Testimonials from "@/components/Testimonials/Testimonials";
import AIFAQ from "@/components/services/ai-intelligent-automation/AIFAQ";
import CTAFooter from "@/components/CTAFooter/CTAFooter";

export const metadata: Metadata = {
  title: "Enterprise AI & Intelligent Automation Services | GenexLyf",
  description: "Deploy robust, private neural computing networks, time-series forecasting, multi-agent frameworks, and vector database cognitive layers fine-tuned on your data.",
  alternates: {
    canonical: "/services/ai-intelligent-automation",
  },
  openGraph: {
    title: "Enterprise AI & Intelligent Automation Services | GenexLyf",
    description: "Future-proof your enterprise with custom large language models, localized time-series forecasters, multi-agent SaaS coordination, and robust zero-trust API scale layers.",
    url: "https://genexlyf.com/services/ai-intelligent-automation",
  },
};

export default function AIIntelligentAutomationPage() {
  return (
    <div className="relative overflow-x-hidden w-full bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* 1. Specialized AI Parallax Hero Header */}
      <AIHero />

      {/* 1.5. Infinite Scrolling AI concepts Marquee */}
      <AIMarquee />

      {/* 2. zoom-linked sci-fi banner parallax showcase */}
      <AIBanner />

      {/* 3. Deep AI Custom Project Methodologies Timeline */}
      <AIWorkingProcess />

      {/* 4. Scrolling Technology Arc Curve Dome */}
      <AITechStack />

      {/* 5. Sticky overlapping card deck showcasing core AI capabilities */}
      <AIServiceProcess />

      {/* 6. High-Fidelity horizontal scrolling services marquee */}
      <OurServices />

      {/* 6.5. Trusted client feedbacks slider */}
      <Testimonials />

      {/* 7. Dedicated AI Compliant Q&A accordions */}
      <AIFAQ />

      {/* 8. Call To Action Footer consultation scheduler */}
      <CTAFooter />
    </div>
  );
}
