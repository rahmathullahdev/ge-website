"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HiTrendingUp, HiCloud, HiCode, HiDeviceMobile } from "react-icons/hi";

const processSteps = [
  {
    num: "01",
    title: "E-Commerce Platform Development",
    desc: "Building intelligent online commerce ecosystems with secure payment integration, inventory management, customer analytics, and conversion-focused shopping experiences designed for modern digital brands.",
    icon: HiTrendingUp,
    bgColor: "bg-white dark:bg-[#121214]",
    accentColor: "#00BFA6",
    textColor: "text-[#00BFA6]",
    stats: "3x Faster Online Sales Growth",
    image: "/images/ecommerce-process.png",
  },
  {
    num: "02",
    title: "SaaS Product Development",
    desc: "Developing cloud-based software platforms with subscription systems, admin dashboards, workflow automation, and scalable multi-user architectures tailored for growing businesses and startups.",
    icon: HiCloud,
    bgColor: "bg-gray-900 text-white dark:bg-[#18181B]",
    accentColor: "#06BAA3",
    textColor: "text-[#06BAA3]",
    stats: "99.9% Cloud Platform Availability",
    image: "/images/saas-process.png",
  },
  {
    num: "03",
    title: "Enterprise Application Development",
    desc: "Engineering custom enterprise systems that streamline operations, automate internal workflows, centralize business data, and improve organizational productivity with secure scalable infrastructures.",
    icon: HiCode,
    bgColor: "bg-white dark:bg-[#1C1C20]",
    accentColor: "#00BFA6",
    textColor: "text-[#00E5C3]",
    stats: "60% Operational Efficiency Increase",
    image: "/images/enterprise-process.png",
  },
  {
    num: "04",
    title: "Mobile App Development",
    desc: "Creating high-performance Android and iOS applications with real-time synchronization, intuitive user interfaces, API integrations, push notifications, and optimized cross-platform experiences.",
    icon: HiDeviceMobile,
    bgColor: "bg-black text-white dark:bg-[#242429]",
    accentColor: "#06BAA3",
    textColor: "text-[#06BAA3]",
    stats: "2.7x Higher User Retention",
    image: "/images/mobile-process.png",
  },
];

export default function ServiceProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative max-w-7xl mx-auto px-6 py-32 font-inter"
    >
      {/* Header Info */}
      <div className="max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-[#06BAA3]/10 dark:bg-[#06BAA3]/10 border border-[#06BAA3]/20 rounded px-3 py-1 mb-6"
        >
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#06BAA3]">OUR EXPERTISE</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1] font-inter">
          How We Build Modern <br />
          Web & App Solutions
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
          A premium development ecosystem focused on creating scalable platforms, seamless digital experiences, and enterprise-grade applications for modern businesses.
        </p>
      </div>

      {/* ── Stacking Cards Container ── */}
      <div className="relative flex flex-col gap-24">
        {processSteps.map((step, idx) => {
          // Adjust sticky offsets so cards slide smoothly on top of each other
          const stickyTopOffset = 140 + idx * 24;

          return (
            <div
              key={idx}
              className="sticky w-full"
              style={{
                top: `${stickyTopOffset}px`,
              }}
            >
              <CardContent step={step} idx={idx} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Separate component to isolate useScroll hook per card target
function CardContent({ step, idx }: { step: typeof processSteps[0]; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track the scroll of this specific card to apply subtle scaling as it gets stacked upon
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Scale down slightly and dim when scrolled past (overlapping parallax)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const shadow = useTransform(
    scrollYProgress,
    [0, 1],
    ["0 10px 30px rgba(0,0,0,0.06)", "0 20px 50px rgba(0,0,0,0.15)"]
  );

  const isDarkCard = step.bgColor.includes("bg-gray-900") || step.bgColor.includes("bg-black");

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, boxShadow: shadow }}
      className={`relative w-full min-h-[480px] lg:min-h-[520px] rounded-3xl border border-black/5 dark:border-white/5 p-8 md:p-12 lg:p-14 flex items-center overflow-hidden transition-all duration-300 ${step.bgColor}`}
    >
      {/* Decorative Grid or Abstract Background elements inside card */}
      <div className="absolute right-[-5%] top-[-5%] w-80 h-80 rounded-full bg-current opacity-[0.02] dark:opacity-[0.03] pointer-events-none" style={{ color: step.accentColor }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Unified 12-Column Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
        
        {/* Left Column: Typographic Details (Grouped together for perfect flow) */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          {/* Step Number & Title */}
          <div>
            <span className={`text-4xl md:text-5xl font-black tracking-tighter ${step.textColor}`}>
              {step.num}
            </span>
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mt-2 max-w-lg leading-tight ${isDarkCard ? "text-white" : "text-gray-900 dark:text-white"}`}>
              {step.title}
            </h3>
          </div>

          {/* Description */}
          <p className={`mt-6 text-sm md:text-base lg:text-lg leading-relaxed font-semibold max-w-xl ${isDarkCard ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
            {step.desc}
          </p>

          {/* Key Performance Stat */}
          <div className="flex flex-col items-start w-full mt-8 lg:mt-12">
            <span className="text-[10px] uppercase font-extrabold tracking-widest text-gray-500 mb-1">
              KEY PERFORMANCE
            </span>
            <span className={`text-lg sm:text-2xl font-black tracking-tight ${step.textColor}`}>
              {step.stats}
            </span>
          </div>
        </div>

        {/* Right Column: Visual Mockup & Floating Process Icon */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full relative">
          
          {/* Floating Icon positioned at the top-right corner of the visual mockup container */}
          <div 
            className="absolute top-[-24px] right-[-10px] lg:top-[-36px] lg:right-[-16px] z-30 w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-lg border border-black/5 dark:border-white/5 transition-all duration-300"
            style={{
              backgroundColor: isDarkCard ? "#18181B" : "#ffffff",
              color: step.accentColor,
              borderColor: `${step.accentColor}30`,
            }}
          >
            <step.icon />
          </div>

          {/* High-Fidelity Mockup Container */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl aspect-[4/3] w-full max-w-[360px] lg:max-w-[420px]"
          >
            <img 
              src={step.image} 
              alt={step.title} 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>

      </div>

      {/* Interactive Bottom Bar Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px]" style={{ backgroundColor: step.accentColor }} />
    </motion.div>
  );
}
