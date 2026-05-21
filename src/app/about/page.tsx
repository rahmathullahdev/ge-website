import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutBanner from "@/components/about/AboutBanner";
import WhoWeAre from "@/components/about/WhoWeAre";
import CTAFooter from "@/components/CTAFooter/CTAFooter";

export const metadata: Metadata = {
  title: "About GenexLyf | Elite AI & Product Development Lab",
  description: "Meet GenexLyf, an elite product design and intelligent automation lab built to engineer high-fidelity web apps, autonomous multi-agent frameworks, and vector search systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About GenexLyf | Elite AI & Product Development Lab",
    description: "Future-proof your enterprise with custom large language models, localized time-series forecasters, multi-agent SaaS coordination, and robust zero-trust API scale layers.",
    url: "https://genexlyf.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative overflow-x-hidden w-full bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* Custom About Hero Section replicating user mockup */}
      <AboutHero />

      {/* Parallax banner scroll transition */}
      <AboutBanner />

      {/* Who We Are layout section */}
      <WhoWeAre />

      {/* Standard Unified Footer consultation scheduler */}
      <CTAFooter />
    </div>
  );
}
