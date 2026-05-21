"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { HiCheckCircle, HiArrowTrendingUp, HiAcademicCap, HiWrenchScrewdriver, HiLightBulb, HiCommandLine } from "react-icons/hi2";

export default function OurServices() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="services" className="w-full bg-[#F9FAFB] dark:bg-[#0A0A0A] py-24 transition-colors duration-300 font-inter relative overflow-hidden">
      {/* Side decorative SVG element */}
      <div className="absolute top-0 right-0 w-1/4 h-full pointer-events-none opacity-10 dark:opacity-20 z-0">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full stroke-[#06BAA3]/30" strokeWidth="1">
          <path d="M400 100 C 300 200, 200 100, 300 300 C 400 500, 200 600, 100 500" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="max-w-3xl mb-20">
          <div className="inline-block bg-[#06BAA3]/10 dark:bg-[#06BAA3]/10 border border-[#06BAA3]/20 rounded px-3 py-1 mb-6 select-none">
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#06BAA3]">OUR SERVICES</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1] font-inter">
            Our all Services
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
            We engineer premium digital ecosystems, enterprise cloud architectures, and highly scalable software applications designed to catalyze business transformation.
          </p>
        </div>

        {/* Apple Carousel */}
        <Carousel items={cards} />
      </div>
    </section>
  );
}

// ── Custom Rich Modal Detail Content for Services ──

interface ServiceContentProps {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  metric: string;
  metricLabel: string;
  bulletPoints: string[];
  description: string;
  link?: string;
}

const ServiceDetailContent = ({
  title,
  icon,
  subtitle,
  metric,
  metricLabel,
  bulletPoints,
  description,
  link,
}: ServiceContentProps) => {
  return (
    <div className="flex flex-col gap-8 bg-[#F5F5F7] dark:bg-neutral-850 p-6 md:p-12 rounded-3xl">
      {/* Overview Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-200 dark:border-neutral-750">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#06BAA3]/10 flex items-center justify-center text-2xl text-[#06BAA3]">
            {icon}
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {title}
            </h4>
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* High Performance Metric */}
        <div className="bg-white dark:bg-neutral-800 border border-black/5 dark:border-white/5 rounded-2xl px-6 py-4 flex flex-col shadow-sm shrink-0">
          <span className="text-2xl md:text-3xl font-extrabold text-[#06BAA3]">
            {metric}
          </span>
          <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5">
            {metricLabel}
          </span>
        </div>
      </div>

      {/* Copywriting */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 flex flex-col gap-4 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
          <p className="font-bold text-gray-800 dark:text-gray-200 text-base md:text-lg">
            High performance, battle-tested solutions tailored for scalable growth.
          </p>
          <p>{description}</p>
          {link && (
            <div className="mt-4">
              <a 
                href={link}
                className="inline-flex items-center gap-2 bg-[#06BAA3] hover:bg-[#05a08c] text-white font-bold tracking-tight text-xs md:text-sm px-6 py-3 rounded-xl shadow-lg transition-colors duration-200 uppercase"
              >
                <span>View Full Service Page</span>
                <span className="text-lg leading-none">➔</span>
              </a>
            </div>
          )}
        </div>

        {/* Features Checklist */}
        <div className="lg:col-span-5 bg-white dark:bg-neutral-850 border border-black/5 dark:border-white/5 p-6 rounded-2xl flex flex-col gap-4 shadow-sm">
          <h5 className="text-xs font-extrabold text-gray-900 dark:text-white uppercase tracking-widest pb-2 border-b border-gray-100 dark:border-neutral-800">
            Key Deliverables
          </h5>
          <div className="flex flex-col gap-3">
            {bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <HiCheckCircle className="h-5 w-5 text-[#06BAA3] shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Service Cards Data ──

const data = [
  {
    category: "AI & Intelligent Automation",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <ServiceDetailContent
        title="AI & Intelligent Automation"
        icon={<HiCommandLine />}
        subtitle="Next-Gen Intelligent Systems"
        metric="10x Faster"
        metricLabel="Data Processing Speed"
        bulletPoints={[
          "Predictive AI & Analytics Models",
          "Automated Workflow Pipelines",
          "Natural Language Processing (NLP)",
          "Custom Large Language Models (LLMs)"
        ]}
        description="We build state-of-the-art intelligent software systems that automate manual organizational workflows, uncover latent data-driven decisions, and leverage cutting-edge predictive AI algorithms to accelerate growth."
        link="/services/ai-intelligent-automation"
      />
    ),
  },
  {
    category: "EdTech & Smart Campus",
    title: "Modernize educational ecosystems.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <ServiceDetailContent
        title="EdTech & Smart Campus Solutions"
        icon={<HiAcademicCap />}
        subtitle="Institutional Automation"
        metric="95% Less"
        metricLabel="Administrative Workload"
        bulletPoints={[
          "Smart LMS Platforms & Portals",
          "Digital Grading & Attendance Logs",
          "Virtual Classrooms & Examinations",
          "Advanced Performance Dashboards"
        ]}
        description="Our premium EdTech platforms streamline entire educational workflows. From automated attendance and cloud databases to student lifecycle management portals, we enhance learning and administrative efficiency."
      />
    ),
  },
  {
    category: "Product Engineering",
    title: "High-performance digital products.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <ServiceDetailContent
        title="Product Engineering Services"
        icon={<HiWrenchScrewdriver />}
        subtitle="End-to-End Product Cycle"
        metric="99.99%"
        metricLabel="Infrastructure Availability"
        bulletPoints={[
          "Rapid Prototyping & MVPs",
          "Scalable Microservices Backend",
          "Multi-tenant SaaS Architectures",
          "Automated CI/CD DevOps Pipelines"
        ]}
        description="We engineer resilient, secure, and robust digital platforms from initial concepts to global deployment. Our architecture stands up to millions of concurrent users with zero latency."
      />
    ),
  },
  {
    category: "IT Consulting & Strategy",
    title: "Smarter consulting for smart businesses.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <ServiceDetailContent
        title="Enterprise IT Consulting & Strategy"
        icon={<HiLightBulb />}
        subtitle="Strategic Modernization"
        metric="40% Cut"
        metricLabel="Operational Cloud Costs"
        bulletPoints={[
          "Cloud Migration Strategy (AWS/GCP)",
          "Legacy Architecture Auditing",
          "Enterprise Database Tuning",
          "Zero-Trust Cybersecurity Auditing"
        ]}
        description="We work alongside executive teams to audited legacy environments, design highly optimized cloud-native migration frameworks, cut cloud spend, and implement bulletproof zero-trust systems."
      />
    ),
  },
  {
    category: "Web & App Development",
    title: "Photography & interactive frontends.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <ServiceDetailContent
        title="Modern Web & Mobile App Development"
        icon={<HiArrowTrendingUp />}
        subtitle="Tactile User Experiences"
        metric="100/100"
        metricLabel="Lighthouse Performance Score"
        bulletPoints={[
          "SEO Optimized Headless Frontends",
          "Cross-Platform Native Apps (Flutter)",
          "Smooth Physics & Micro-animations",
          "Curated Accessible UI/UX Design"
        ]}
        description="We craft premium web portals and mobile applications that load instantly and respond beautifully. We merge curated typography and tactile micro-animations with standard-setting web speed."
        link="/services/web-app-development"
      />
    ),
  },
];
