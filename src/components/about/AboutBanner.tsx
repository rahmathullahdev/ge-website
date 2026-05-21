"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position within this component viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Identical transform properties for fluid parallax depth
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280px] md:h-[450px] lg:h-[580px] overflow-hidden bg-gray-900 border-t border-b border-black/5 dark:border-white/5"
    >
      {/* ── Inner Animated Parallax Frame ── */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 w-full h-[124%] origin-center"
      >
        <Image
          src="/images/about-banner.png"
          alt="GenexLyf Collaboration Workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 dark:brightness-75 transition-all duration-300"
        />
      </motion.div>

      {/* ── Technical Overlay Graphic elements ── */}
      <div className="absolute inset-0 pointer-events-none z-10 select-none">
        
        {/* Neon Brand Teal Accents */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 h-20 w-[2px] bg-[#06BAA3]/60" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 h-20 w-[2px] bg-[#06BAA3]/60" />

        {/* Monospace Corner Crosshairs */}
        <div className="absolute left-6 top-6 text-[#06BAA3]/50 text-[10px] md:text-xs font-mono tracking-widest uppercase">
          ✕ COLLABORATIVE-LAB-SYSTEM
        </div>
        <div className="absolute right-6 top-6 text-[#06BAA3]/50 text-[10px] md:text-xs font-mono tracking-widest uppercase">
          ✕ ESTABLISHED.2026
        </div>
        
        {/* Subtle glass light leak overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
      </div>
    </div>
  );
}
