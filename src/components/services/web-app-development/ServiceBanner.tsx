"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ServiceBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of the banner container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to a vertical translation offset for the image (parallax)
  // Moving from -12% to +12% relative to the image size
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden bg-[#0A0A0A] border-t border-b border-gray-200 dark:border-white/5 transition-colors duration-300"
    >
      {/* ── Parallax Image Container ── */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <Image
          src="/images/web-app-banner.png"
          alt="GenexLyf Web & App Development Showcase Mockup"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Futuristic technical lines/accents framing the banner */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Subtle left technical border */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-[#06BAA3]/60" />
        {/* Subtle right technical border */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-[#00BFA6]/60" />
        
        {/* Fine crosshairs in the corner */}
        <div className="absolute left-6 top-6 text-[#06BAA3]/40 text-xs font-mono select-none">✕ MOCKUP-S1</div>
        <div className="absolute right-6 top-6 text-[#00BFA6]/40 text-xs font-mono select-none">✕ SCALE-99.9</div>
      </div>
    </div>
  );
}
