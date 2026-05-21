"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const processSteps = [
  {
    num: "01",
    title: "Thinking",
    subtitle: "and research",
  },
  {
    num: "02",
    title: "Discovering",
    subtitle: "the problem",
  },
  {
    num: "03",
    title: "Scratch, design,",
    subtitle: "and wireframing",
  },
  {
    num: "04",
    title: "Implementation",
    subtitle: "and solution",
  },
];

export default function ServiceWorkingProcess() {
  return (
    <section className="relative bg-white dark:bg-[#0A0A0A] py-24 md:py-32 border-b border-gray-100 dark:border-white/5 transition-colors duration-300 font-inter overflow-hidden">
      {/* Decorative fine technical grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000002_1px,transparent_1px),linear-gradient(to_bottom,#00000002_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Tag Category */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-1.5 h-1.5 bg-[#06BAA3] rounded-full" />
          <span className="text-xs uppercase tracking-widest font-black text-gray-500 dark:text-gray-400">
            WEB DESIGN
          </span>
          <span className="text-gray-300 dark:text-gray-700">{"──────>"}</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl font-inter">
          We think out of the box <br />
          and follow the working process
        </h2>

        {/* ── Two Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mt-16 md:mt-24 items-start">
          
          {/* Left Column: Timeline Steps */}
          <div className="lg:col-span-5 relative pl-4 md:pl-8">
            {/* Vertical Connecting Line */}
            <div className="absolute left-[39px] md:left-[47px] top-6 bottom-6 w-[2px] bg-gray-200 dark:bg-white/10" />

            <div className="flex flex-col gap-12 relative">
               {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-6 md:gap-8 group cursor-pointer relative z-10"
                >
                  {/* Number Circle */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white dark:bg-[#121214] border-2 border-gray-200 dark:border-white/10 flex items-center justify-center font-bold text-gray-800 dark:text-gray-200 shadow-sm transition-all duration-300 group-hover:border-[#06BAA3] group-hover:text-[#06BAA3] group-hover:scale-110">
                    <span className="text-sm md:text-base">{step.num}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h4 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white leading-tight transition-colors duration-200 group-hover:text-[#06BAA3]">
                      {step.title} <br />
                      <span className="font-semibold text-gray-400 dark:text-gray-500 text-lg md:text-xl">
                        {step.subtitle}
                      </span>
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Desc & Video Mockup */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Description Text */}
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-medium lg:self-end">
              Our design system energy comes from a natural source such as wind power, water power, or the heat of the sun. They are more friendly.
            </p>

            {/* Video/Image Container */}
            <div className="relative mt-8 lg:mt-16 w-full aspect-[16/10] rounded-2xl shadow-2xl border border-black/5 dark:border-white/5">
              
              {/* Massive Interactive Play Button overlapping the left boundary */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(190, 230, 0, 0.4)",
                    "0 0 0 20px rgba(190, 230, 0, 0)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }
                }}
                className="absolute -left-6 md:-left-12 lg:-left-16 top-1/4 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-[#BEE600] dark:bg-[#C2F100] flex items-center justify-center shadow-2xl z-20 cursor-pointer"
              >
                <svg className="w-5 h-5 md:w-7 md:h-7 text-black fill-current ml-1" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>

              {/* Mockup Frame / Workspace Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#151518]">
                <Image
                  src="/images/creative-team.png"
                  alt="Creative Design Workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center filter brightness-[0.98] dark:brightness-[0.9]"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
