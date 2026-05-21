"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AIBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform functions for continuous scaling/movement
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[320px] md:h-[500px] lg:h-[620px] overflow-hidden bg-gray-900 border-t border-b border-gray-200 dark:border-white/5"
    >
      {/* ── Inner Parallax Image Track ── */}
      <motion.div 
        style={{ scale, y }}
        className="absolute inset-0 w-full h-[124%] origin-center"
      >
        <Image
          src="/images/ai-banner.png"
          alt="GenexLyf AI Processing Hub"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 dark:brightness-75"
        />
      </motion.div>

      {/* Futuristic technical lines/accents framing the banner */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Subtle left technical border */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-[#06BAA3]/60" />
        {/* Subtle right technical border */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-[#00BFA6]/60" />
        
        {/* Fine crosshairs in the corner */}
        <div className="absolute left-6 top-6 text-[#06BAA3]/40 text-xs font-mono select-none">✕ NEURAL-MODEL-V3</div>
        <div className="absolute right-6 top-6 text-[#00BFA6]/40 text-xs font-mono select-none">✕ ITERATION-99.8</div>
      </div>
    </div>
  );
}
