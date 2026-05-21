"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for parallax background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col justify-between overflow-hidden bg-white dark:bg-[#0A0A0A] pt-32 pb-0 transition-colors duration-300 font-inter"
    >
      {/* ── Parallax Fine Grid Pattern Background ── */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-30"
      >
        <div 
          className="w-full h-[150%] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"
        />
      </motion.div>

      {/* ── Top Right Custom Split Logo Box ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        whileHover={{ scale: 1.08, rotate: 5 }}
        className="absolute right-8 md:right-16 lg:right-24 top-24 md:top-30 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-[4px] shadow-lg dark:shadow-2xl border border-black/5 dark:border-white/10 select-none cursor-pointer transition-transform duration-300 z-10"
        title="GenexLyf Creative Lab"
      >
        {/* Split Diagonal Background */}
        <div className="absolute inset-0 bg-[#06BAA3]" />
        <div 
          className="absolute inset-0 bg-gray-950 dark:bg-gray-900 transition-colors duration-300"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      </motion.div>

      {/* ── Main Hero Inner Container ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col justify-between">
        
        {/* Heading Section */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mt-6 md:mt-12"
        >
          <h1 className="font-extrabold text-gray-950 dark:text-white leading-[0.92] tracking-tighter text-left uppercase font-inter text-[7.5vw] md:text-[5.5vw] lg:text-[5.4rem]">
            FUELING MINDS <br />
            INSPIRING SYSTEMS..
          </h1>
        </motion.div>

        {/* Middle Information Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full mt-10 mb-12">
          
          {/* Left Column: About Us pill arrow */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 lg:col-start-2 flex items-center gap-4 w-full"
          >
            <div className="flex items-center gap-3 text-xs md:text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#06BAA3] shrink-0 animate-pulse" />
              <span>ABOUT US</span>
            </div>
            {/* Dashed connector line */}
            <div className="h-[1px] flex-grow border-b border-dashed border-gray-300 dark:border-gray-800 ml-1" />
            <span className="text-gray-400 dark:text-gray-600 font-bold shrink-0 text-sm">──&gt;</span>
          </motion.div>

          {/* Right Column: Narrative Subtext & Separator Dot */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-6 lg:col-start-6 flex flex-col gap-4 text-left"
          >
            <p className="text-gray-600 dark:text-gray-400 font-semibold leading-relaxed text-sm md:text-base lg:text-[1.02rem] max-w-xl">
              An elite product development lab and intelligent automation studio set up in 2026 who care, build lasting relationships, master deep software architecture, and design cutting-edge automation orchestrations.
            </p>

            {/* Separator Dot */}
            <div className="flex items-center justify-start pl-1">
              <div className="w-2 h-2 rounded-full bg-gray-950 dark:bg-white" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* ── Giant Infinite Horizontal Scrolling Marquee ── */}
      <div className="relative w-full overflow-hidden border-t border-black/5 dark:border-white/5 py-4 bg-white dark:bg-[#0A0A0A] select-none pointer-events-none z-10 mt-auto">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex whitespace-nowrap text-[9vw] md:text-[7.5vw] lg:text-[7.5rem] font-black uppercase tracking-tighter text-gray-950 dark:text-white leading-none"
        >
          {/* First loop text block */}
          <span className="pr-12">ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US</span>
          {/* Replica loop text block for seamless wrap */}
          <span className="pr-12">ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US ABOUT US</span>
        </motion.div>
      </div>

    </section>
  );
}
