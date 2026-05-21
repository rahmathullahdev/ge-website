import type { Metadata } from "next";
import ServiceHero from "@/components/services/web-app-development/ServiceHero";
import ServicesMarquee from "@/components/services/web-app-development/ServicesMarquee";
import ServiceBanner from "@/components/services/web-app-development/ServiceBanner";
import ServiceWorkingProcess from "@/components/services/web-app-development/ServiceWorkingProcess";
import ServiceTechStack from "@/components/services/web-app-development/ServiceTechStack";
import ServiceProcess from "@/components/services/web-app-development/ServiceProcess";
import OurServices from "@/components/OurServices/OurServices";
import Testimonials from "@/components/Testimonials/Testimonials";
import ServiceFAQ from "@/components/services/web-app-development/ServiceFAQ";
import CTAFooter from "@/components/CTAFooter/CTAFooter";

export const metadata: Metadata = {
  title: "Enterprise Web & Mobile App Development Services | GenexLyf",
  description: "Deploy premium, high-performance web applications and mobile apps built to scale. From discovery and design to custom clean engineering and automated cloud deployment.",
  alternates: {
    canonical: "/services/web-app-development",
  },
  openGraph: {
    title: "Web & Mobile App Development Services | GenexLyf",
    description: "Future-proof Enterprise AI, custom web systems, and high-performance cross-platform mobile engineering built to scale internationally.",
    url: "https://genexlyf.com/services/web-app-development",
  },
};

export default function WebAppDevelopmentPage() {
  return (
    <div className="relative overflow-x-hidden w-full bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
      {/* 1. Hero Section matching image exactly with parallax */}
      <ServiceHero />

      {/* 1.5. Infinite Scrolling Services Marquee */}
      <ServicesMarquee />

      {/* 2. Hardware-accelerated Parallax Banner Image Showcase */}
      <ServiceBanner />

      {/* 3. Custom Working Process Timeline Layout */}
      <ServiceWorkingProcess />

      {/* 4. Floating Tech Parallax Grid */}
      <ServiceTechStack />

      {/* 5. Overlapping Pinned Process Card deck */}
      <ServiceProcess />

      {/* 6. Our Services Auto Marquee Horizontal Scroll Carousel */}
      <OurServices />

      {/* 6.5. Client Testimonials Section */}
      <Testimonials />

      {/* 7. Dedicated Web & Mobile App FAQ Section */}
      <ServiceFAQ />

      {/* 8. Let's Discuss Call To Action & Footer */}
      <CTAFooter />
    </div>
  );
}
