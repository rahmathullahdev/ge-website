"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";

const STEPS_DATA = [
  {
    id: 1,
    title: "Discovery",
    description: "Leveraging our findings, we craft a comprehensive IT plan. This involves designing systems, networks, and software that align with your business goals."
  },
  {
    id: 2,
    title: "Planning & Design",
    description: "We formulate structured architecture maps and visual design workflows ensuring every technical specification aligns closely with your requirements."
  },
  {
    id: 3,
    title: "Implementation",
    description: "Executing full-stack development processes and cloud engineering integrations guided by agile iterative loops for reliability and scale."
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Rigorous continuous testing, vulnerability scanning, and peer-reviewed auditing guarantees consistent, high-performance delivery thresholds."
  }
];

export default function TransformSection() {
  const [activeStep, setActiveStep] = useState(1);
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Track scrolling progress through the 300vh parent container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Automatically update activeStep based on current percentage scrolled
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveStep(1);
    else if (latest < 0.5) setActiveStep(2);
    else if (latest < 0.75) setActiveStep(3);
    else setActiveStep(4);
  });

  return (
    /* Parent provides scrolling padding length only on desktop where sticky is used */
    <div ref={targetRef} className="relative h-auto lg:h-[300vh] bg-[#0e3d36]">
      {/* Sticky container locks view into viewport on large devices, natural flow on mobile to avoid height cuts */}
      <section className="relative lg:sticky lg:top-0 lg:h-screen w-full overflow-visible lg:overflow-hidden font-inter flex flex-col items-center justify-center bg-[#0e3d36] py-20 lg:py-4">
        
        {/* Background Pattern Decorators */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg viewBox="0 0 100 100" className="absolute top-0 left-0 w-96 h-96 text-white stroke-current fill-none" preserveAspectRatio="none">
            <path d="M0,30 Q40,20 60,60 T100,10" strokeWidth="0.5" />
            <path d="M-20,50 Q30,40 50,80 T90,30" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col">
          {/* Heading Section tightened maximally to reclaim vertical pixels */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight leading-tight">
              Transforming IT, One Step at a Time
            </h2>
            <p className="text-white/70 text-[13px] max-w-md mx-auto font-medium">
              Every business is unique, and so are our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center w-full">
            {/* Left: Compacted Image Frame Component to fix height overflow */}
            <div className="relative flex justify-center lg:justify-end pr-0 lg:pr-16">
              <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-[2rem] bg-zinc-800 overflow-hidden border-4 border-white/10 group shadow-2xl">
                {/* Main Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1f5c53] to-[#0a2924] flex items-center justify-center">
                  <div className="flex flex-col items-center text-white/40 w-full h-full">
                   <img src="/images/about-1.webp" alt="Hero" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Inner shadow simulation */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </div>

              {/* Widget 1: Top Right Client Sat repositioned to blend properly */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/4 -right-2 lg:-right-4 bg-white p-3 rounded-xl shadow-2xl hidden lg:flex items-center gap-2 border border-pink-200 z-20"
              >
                <div className="w-9 h-9 bg-orange-100 rounded-full flex items-center justify-center text-base">
                  🧑‍💼
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">98.8%</div>
                  <div className="text-[9px] font-medium text-gray-500 whitespace-nowrap">Client Satisfaction</div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-pink-400 rounded-xl -z-10 opacity-50" />
              </motion.div>

              {/* Widget 2: Floating name tag */}
              <div className="absolute top-[45%] right-4 md:right-0 z-20 hidden lg:block">
                <div className="bg-[#ffe066] px-3 py-1 rounded-lg text-[10px] font-bold text-black relative shadow-md">
                  Mary M.
                  <div className="absolute w-2 h-2 bg-[#ffe066] rotate-45 -bottom-1 left-4"></div>
                </div>
              </div>

              {/* Widget 3: Bottom Business Stats UI Card */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute bottom-8 -left-4 md:-left-8 bg-white rounded-2xl p-5 shadow-2xl w-64 z-20 border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-[#0e3d36] flex items-center justify-center text-white">
                    <HiOutlinePresentationChartLine size={18} />
                  </div>
                  <div className="text-gray-400 text-lg cursor-pointer">⋮</div>
                </div>
                
                <h4 className="text-sm font-bold text-gray-900 leading-tight mb-4">
                  Business <span className="text-orange-400">Growth</span> And Follow Statistics
                </h4>

                <div className="flex items-center justify-between text-[10px] text-gray-400 font-semibold mb-2">
                  <span>Participant</span>
                  <span>Progress</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-200 border-2 border-white overflow-hidden"><BsFillPersonFill className="text-blue-500 w-full h-full" /></div>
                    <div className="w-6 h-6 rounded-full bg-red-200 border-2 border-white overflow-hidden"><BsFillPersonFill className="text-red-500 w-full h-full" /></div>
                    <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-white overflow-hidden"><BsFillPersonFill className="text-green-500 w-full h-full" /></div>
                  </div>
                  <div className="relative w-8 h-8 rounded-full border-2 border-green-400 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-gray-900">85%</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[9px]">
                  <div className="flex items-center gap-1 text-gray-500">
                    <BsFillPersonFill size={10}/> Robert Miller
                  </div>
                  <div className="text-gray-500 flex items-center gap-1">
                    📈 Increase Rate
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Flow Step list driven automatically by scrolling delta */}
            <div className="relative flex flex-col gap-6 pl-4 lg:pl-12 h-full justify-start pt-4">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/20" />

              {STEPS_DATA.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <div 
                    key={step.id} 
                    className={`relative pl-8 transition-all duration-300 select-none ${isActive ? "mb-4" : "mb-2"}`}
                  >
                    {/* Highlight active vertical line marker - desktop only */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeMarkerReveal"
                        className="hidden lg:block absolute left-[-2.5px] top-0 w-1.5 h-full max-h-[120px] bg-[#ffd700] rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)]" 
                      />
                    )}
                    
                    <span className={`block text-xs font-semibold uppercase tracking-wider mb-1 transition-colors duration-300 text-[#ffd700] lg:text-white/30 ${isActive ? "lg:text-[#ffd700]" : ""}`}>
                      Step {step.id}
                    </span>
                    <h3 className={`font-bold text-white text-xl md:text-2xl lg:opacity-40 transition-all duration-300 ${isActive ? "lg:text-3xl lg:mb-3 lg:opacity-100" : ""}`}>
                      {step.title}
                    </h3>

                    {/* Static Display on Mobile for zero-interaction reads */}
                    <div className="block lg:hidden pt-2 pb-6">
                       <p className="text-white/80 text-sm leading-relaxed max-w-md">
                         {step.description}
                       </p>
                    </div>

                    {/* Dynamic Animated Presence on Large screens matching the viewport locked scroll hook */}
                    <div className="hidden lg:block">
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <p className="text-white/70 text-sm leading-relaxed max-w-md pb-4">
                              {step.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}

              <div className="absolute right-10 top-0 w-3 h-3 bg-black rounded-full opacity-60 hidden md:block" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
