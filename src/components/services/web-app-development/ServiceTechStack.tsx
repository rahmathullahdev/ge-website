"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  SiNextdotjs, 
  SiReact, 
  SiFlutter, 
  SiNodedotjs, 
  SiPostgresql, 
  SiMongodb, 
  SiTypescript, 
  SiDocker, 
  SiTailwindcss,
  SiSupabase,
  SiGraphql,
  SiGo,
  SiPython,
  SiFramer,
  SiFigma
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

// Select elite tech ecosystem of 16 frameworks for perfect spacing
const techItems = [
  { icon: SiNextdotjs, name: "Next.js", color: "#00BFA6", glowColor: "rgba(0, 191, 166, 0.4)" },
  { icon: SiReact, name: "React.js", color: "#61DAFB", glowColor: "rgba(97, 218, 251, 0.4)" },
  { icon: SiFlutter, name: "Flutter", color: "#02569B", glowColor: "rgba(2, 86, 155, 0.4)" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933", glowColor: "rgba(51, 153, 51, 0.4)" },
  { icon: FaAws, name: "AWS Cloud", color: "#FF9900", glowColor: "rgba(255, 153, 0, 0.4)" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1", glowColor: "rgba(65, 105, 225, 0.4)" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248", glowColor: "rgba(71, 162, 72, 0.4)" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", glowColor: "rgba(49, 120, 198, 0.4)" },
  { icon: SiDocker, name: "Docker", color: "#2496ED", glowColor: "rgba(36, 150, 237, 0.4)" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8", glowColor: "rgba(56, 189, 248, 0.4)" },
  { icon: SiSupabase, name: "Supabase", color: "#3ECF8E", glowColor: "rgba(62, 207, 142, 0.4)" },
  { icon: SiGraphql, name: "GraphQL", color: "#E10098", glowColor: "rgba(225, 0, 152, 0.4)" },
  { icon: SiGo, name: "Go / Golang", color: "#00ADD8", glowColor: "rgba(0, 173, 216, 0.4)" },
  { icon: SiPython, name: "Python", color: "#3776AB", glowColor: "rgba(55, 118, 171, 0.4)" },
  { icon: SiFramer, name: "Framer Motion", color: "#0055FF", glowColor: "rgba(0, 85, 255, 0.4)" },
  { icon: SiFigma, name: "Figma UI", color: "#F24E1E", glowColor: "rgba(242, 78, 30, 0.4)" },
];

// Mathematical calculation for quadratic bezier path: P(t) = (1-t)^2 * P0 + 2*(1-t)*t * P1 + t^2 * P2
// Elevated high-rise curved arch coordinates inside a 1200 x 480 coordinate space
const getArcCoordinates = (t: number) => {
  const p0 = { x: 10, y: 320 };    // High-rise left start
  const p1 = { x: 600, y: -140 };  // Extremely high vertical arch peak
  const p2 = { x: 1190, y: 320 };  // High-rise right end

  const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
  const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;

  return {
    left: `${(x / 1200) * 100}%`,
    top: `${(y / 480) * 100}%`,
  };
};

export default function ServiceTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Continuous marquee offset value from 0 to 1
  const [scrollOffset, setScrollOffset] = useState(0);

  // Smooth requestAnimationFrame frame loop for the marquee (runs continuously)
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      // Speed factor: full rotation every 45 seconds
      const speed = 0.000022;
      setScrollOffset((prev) => (prev + delta * speed) % 1.0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative bg-gray-50 dark:bg-[#0B0B0C] py-24 md:py-32 border-t border-b border-gray-200 dark:border-white/5 overflow-hidden flex flex-col justify-center transition-colors duration-300 font-inter"
    >
      {/* Glow accents */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#00BFA6]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#06BAA3]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center">
        
        {/* Dynamic mathematical arc container with expanded width & aspect ratio (1200 x 520 px grid) */}
        <div className="relative w-full aspect-[1200/520] max-w-[1200px] flex items-center justify-center">
          
          {/* 1. Curved Connector Dashed SVG Arc (Sweeps widely and rises high above the dome) */}
          <svg 
            viewBox="0 0 1200 480" 
            fill="none" 
            className="absolute inset-0 w-full h-full stroke-gray-200 dark:stroke-white/5 stroke-[2] pointer-events-none overflow-visible"
          >
            <path 
              d="M 10 320 Q 600 -140 1190 320" 
              strokeDasharray="6 6"
            />
          </svg>

          {/* 2. Scrolling Marquee Technology Circles */}
          {techItems.map((tech, idx) => {
            // Distribute base index positions and add the scroll offset
            const t = (idx / techItems.length + scrollOffset) % 1.0;
            const style = getArcCoordinates(t);

            // Smooth linear fade-in at bottom-left start, and fade-out at bottom-right end
            // Ensures circles do not abruptly pop when wrapping around
            let opacity = 1;
            const boundary = 0.08; // 8% fade zone at both ends
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
                  pointerEvents: opacity < 0.2 ? "none" : "auto", // Disable interactions when faded out
                }}
                className="group z-20"
              >
                {/* Outer Glow Card Circle (Sleeker smaller size for lots of clean visual gaps) */}
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

          {/* 3. Centered Content positioned comfortably below the high curve peak (Zero Overlaps) */}
          <div className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-xs sm:max-w-sm md:max-w-2xl px-4 z-10">
            
            {/* Sub-tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#00BFA6]/10 dark:bg-[#00BFA6]/10 border border-[#00BFA6]/20 rounded px-3 py-1 mb-3"
            >
              <span className="text-[10px] uppercase tracking-widest font-black text-[#00BFA6] dark:text-[#00E5C3]">
                Integration
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
              Technologies <br /><span className="text-[#06BAA3]">We Work</span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-semibold mb-6 max-w-xs sm:max-w-xl mx-auto"
            >
              Easily connect our high-efficiency tech ecosystem to Next.js, Flutter, Node.js, AWS Cloud, PostgreSQL, and more.
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
              Explore integration
              <span className="font-mono">░</span>
            </motion.button>

          </div>

        </div>

      </div>
    </section>
  );
}
