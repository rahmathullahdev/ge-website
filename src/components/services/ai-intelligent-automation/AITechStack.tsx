"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
  SiHuggingface,
  SiNvidia,
  SiJupyter,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiGooglecloud
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// Selected elite AI & ML stack for perfect arc distribution
const techItems = [
  { icon: SiPython, name: "Python", color: "#3776AB", glowColor: "rgba(55, 118, 171, 0.4)" },
  { icon: SiPytorch, name: "PyTorch", color: "#EE4C2C", glowColor: "rgba(238, 76, 44, 0.4)" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00", glowColor: "rgba(255, 111, 0, 0.4)" },
  { icon: SiOpenai, name: "OpenAI API", color: "#412991", glowColor: "rgba(65, 41, 145, 0.4)" },
  { icon: SiHuggingface, name: "Hugging Face", color: "#FFD21E", glowColor: "rgba(255, 210, 30, 0.4)" },
  { icon: SiNvidia, name: "Nvidia CUDA", color: "#76B900", glowColor: "rgba(118, 185, 0, 0.4)" },
  { icon: SiJupyter, name: "Jupyter Labs", color: "#F37626", glowColor: "rgba(243, 118, 38, 0.4)" },
  { icon: SiFastapi, name: "FastAPI", color: "#009688", glowColor: "rgba(0, 150, 136, 0.4)" },
  { icon: SiPostgresql, name: "Postgres Vector", color: "#4169E1", glowColor: "rgba(65, 105, 225, 0.4)" },
  { icon: SiDocker, name: "Docker Scale", color: "#2496ED", glowColor: "rgba(36, 150, 237, 0.4)" },
  { icon: FaAws, name: "AWS SageMaker", color: "#FF9900", glowColor: "rgba(255, 153, 0, 0.4)" },
  { icon: SiGooglecloud, name: "Vertex AI", color: "#4285F4", glowColor: "rgba(66, 133, 244, 0.4)" },
];

export default function AITechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Slow continuous auto-scroll ticker for technology icons
  useEffect(() => {
    let animationFrameId: number;
    
    const tick = () => {
      setScrollOffset((prev) => (prev + 0.0003) % 1.0);
      animationFrameId = requestAnimationFrame(tick);
    };
    
    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Exact Quadratic Bezier formula matching the SVG path for perfect icon-to-line alignment
  const getArcCoordinates = (t: number) => {
    // P0 = (60, 420), P1 = (600, -20), P2 = (1140, 420)
    const mt = 1 - t;
    const x = mt * mt * 60 + 2 * mt * t * 600 + t * t * 1140;
    const y = mt * mt * 420 + 2 * mt * t * (-20) + t * t * 420;

    return {
      left: `${(x / 1200) * 100}%`,
      top: `${(y / 480) * 100}%`,
    };
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-gray-50 dark:bg-[#0B0B0C] py-24 md:py-32 border-t border-b border-gray-200 dark:border-white/5 overflow-hidden flex flex-col justify-center transition-colors duration-300 font-inter"
    >
      {/* Glow accents */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#06BAA3]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#06BAA3]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Dynamic mathematical arc container with expanded width & aspect ratio (1200 x 520 px grid) */}
        <div className="relative w-full aspect-[1200/520] max-w-[1200px] flex items-center justify-center">
          
          {/* 1. Curved Connector Dashed SVG Arc */}
          <svg 
            viewBox="0 0 1200 480" 
            fill="none" 
            className="absolute inset-0 w-full h-full stroke-gray-200 dark:stroke-white/5 stroke-[2] pointer-events-none overflow-visible"
          >
            <path 
              d="M 60 420 Q 600 -20 1140 420" 
              strokeDasharray="6 6"
            />
          </svg>

          {/* 2. Scrolling Marquee Technology Circles */}
          {techItems.map((tech, idx) => {
            // Distribute base index positions and add the scroll offset
            const t = (idx / techItems.length + scrollOffset) % 1.0;
            const style = getArcCoordinates(t);

            // Smooth linear fade-in at bottom-left start, and fade-out at bottom-right end
            let opacity = 1;
            const boundary = 0.08; 
            if (t < boundary) {
              opacity = t / boundary;
            } else if (t > 1.0 - boundary) {
              opacity = (1.0 - t) / boundary;
            }

            return (
              <motion.div
                key={idx}
                style={{
                  position: "absolute",
                  ...style,
                  x: "-50%",
                  y: "-50%",
                  opacity,
                  pointerEvents: opacity < 0.2 ? "none" : "auto", 
                }}
                className="group z-20"
              >
                {/* Outer Glow Card Circle */}
                <motion.div
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: `0 0 25px ${tech.glowColor}`,
                    borderColor: tech.color,
                  }}
                  className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 shadow-md cursor-pointer transition-colors duration-300 relative"
                >
                  <tech.icon style={{ color: tech.color }} />

                  {/* Hover Tooltip display */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 dark:bg-white/90 text-white dark:text-black text-[10px] font-bold tracking-widest px-2 py-0.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 uppercase whitespace-nowrap shadow-md">
                    {tech.name}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* 3. Centered Content positioned comfortably below the curve */}
          <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-xs sm:max-w-sm md:max-w-2xl px-4 z-10">
            
            {/* Sub-tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#06BAA3]/10 dark:bg-[#06BAA3]/10 border border-[#06BAA3]/20 rounded px-3 py-1 mb-3"
            >
              <span className="text-[10px] uppercase tracking-widest font-black text-[#06BAA3] dark:text-[#06BAA3]">
                AI Ecosystem
              </span>
            </motion.div>

            {/* Central Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-2xl sm:text-4xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1] mb-3 font-inter"
            >
              Models & Frameworks <br /><span className="text-[#06BAA3]">We Train</span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-semibold mb-6 max-w-xs sm:max-w-xl mx-auto"
            >
              We integrate high-performance machine learning tooling, pre-trained base LLMs, and enterprise automation hubs like n8n, Lindy, Make, Zapier, and OpenClaw for flawless cognitive workflows.
            </motion.p>

            {/* Explore Button */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-extrabold text-[10px] sm:text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-black/85 dark:hover:bg-white/85 shadow-lg transition-all duration-200 cursor-pointer"
            >
              Explore AI Stack
              <span className="font-mono">░</span>
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
}
