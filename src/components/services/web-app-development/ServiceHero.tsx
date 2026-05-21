"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ServiceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const elementsY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const iconRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const iconScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const leftList = [
    "AI-Powered Applications",
    "Full Stack Web Development",
    "Mobile App Development",
  ];
  const rightList = [
    "Cloud & DevOps Solutions",
    "SaaS Platform Engineering",
    "API & System Integrations",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white dark:bg-[#0A0A0A] pt-32 pb-20 transition-colors duration-300 font-inter"
    >
      {/* ── Parallax Fine Grid Pattern Background ── */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-40"
      >
        <div 
          className="w-full h-[150%] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        />
      </motion.div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#00BFA6] opacity-[0.03] dark:opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#06BAA3] opacity-[0.02] dark:opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* ── Hero Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-center gap-12 -mt-4 md:-mt-8 lg:-mt-12">
        
        {/* Header Tag / Category */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-[#06BAA3] select-none"
        >
          <span className="w-2 h-2 rounded-full bg-[#06BAA3] animate-pulse" />
          <span>WEB DESIGN</span>
          <span className="text-gray-300 dark:text-gray-800 font-light tracking-tighter">──────────&gt;</span>
        </motion.div>

        {/* Headline + Custom Icons */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative max-w-5xl"
        >
          <h1 className="font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-2 font-inter" style={{ fontSize: "clamp(2.5rem, 7vw, 6.2rem)" }}>
            Web and mobile <br />
            development
            
            {/* Split orange/dark square icon inside title */}
            <motion.div
              style={{ rotate: iconRotate, scale: iconScale }}
              className="inline-flex w-14 h-14 md:w-20 md:h-20 ml-4 md:ml-6 relative align-middle overflow-hidden rounded-[4px] shadow-md dark:shadow-2xl border border-black/5 dark:border-white/10"
              title="GenexLyf Innovation Shape"
            >
              {/* Split Diagonal Background */}
              <div className="absolute inset-0 bg-[#06BAA3]" />
              <div 
                className="absolute inset-0 bg-gray-950 dark:bg-gray-900 transition-colors duration-300"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              />
            </motion.div>
          </h1>

          {/* Hand-drawn Loop SVG Floating nearby */}
          <motion.div 
            style={{ y: elementsY }}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block select-none pointer-events-none"
          >
            <svg width="220" height="150" viewBox="0 0 220 150" fill="none" className="text-gray-950 dark:text-white">
              {/* Beautiful custom hand-drawn continuous curve */}
              <motion.path 
                d="M20,80 C60,20 120,20 120,75 C120,120 70,120 70,75 C70,25 170,25 185,90"
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.5 }}
              />
              {/* Dynamic glowing dot at the end of loop */}
              <motion.circle 
                cx="185" 
                cy="90" 
                r="6" 
                className="fill-[#06BAA3]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, type: "spring" }}
              />
              <circle cx="185" cy="90" r="12" className="stroke-[#06BAA3]/30 stroke-[1px] animate-ping" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Subtext Paragraph & Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full mt-4">
          
          {/* Middle column: Brief Paragraph */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 lg:col-start-4 text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-sm md:text-base border-l-2 border-[#06BAA3]/30 pl-6"
          >
            This section explores a common challenge developer with face such as cross platform compatibility make within performance optimization and user experience.
          </motion.div>

          {/* Right column: Bullet Grid lists */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8 lg:col-start-4 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mt-4 text-gray-800 dark:text-gray-200"
          >
            {/* Left bullet column */}
            <div className="flex flex-col gap-3">
              {leftList.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 6, color: "#06BAA3" }}
                  className="flex items-center gap-3 text-sm md:text-base font-bold tracking-tight cursor-pointer transition-colors duration-200"
                >
                  <span className="text-[#06BAA3] text-lg font-light shrink-0">+</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Right bullet column */}
            <div className="flex flex-col gap-3">
              {rightList.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 6, color: "#06BAA3" }}
                  className="flex items-center gap-3 text-sm md:text-base font-bold tracking-tight cursor-pointer transition-colors duration-200"
                >
                  <span className="text-[#06BAA3] text-lg font-light shrink-0">+</span>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
