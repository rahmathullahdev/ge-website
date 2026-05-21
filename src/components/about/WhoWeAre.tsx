"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="relative w-full bg-[#FAF9F6] dark:bg-[#0E0E0E] py-24 md:py-32 overflow-hidden transition-colors duration-300 font-inter">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* Main 12-Column Grid Layout matching mockup proportions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* ── LEFT COLUMN (Spans 4 columns) ── */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[300px] lg:min-h-[480px]">
            
            {/* Top: Category Tag */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest text-[#06BAA3]">
              <span className="w-2 h-2 rounded-full bg-[#06BAA3] shrink-0" />
              <span>WHO WE ARE</span>
            </div>

            {/* Middle: Centered heavy separator dot */}
            <div className="hidden lg:flex items-center justify-start pl-8 my-12">
              <div className="w-3.5 h-3.5 rounded-full bg-gray-900 dark:bg-white" />
            </div>

            {/* Bottom Left: Premium spinning 8-point Asterisk star */}
            <div className="flex items-end justify-start mt-auto">
              <motion.svg
                width="96"
                height="96"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-950 dark:text-white shrink-0"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              >
                {/* 8-point geometric star skeleton matching mockup */}
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <line x1="18.18" y1="18.18" x2="81.82" y2="81.82" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <line x1="18.18" y1="81.82" x2="81.82" y2="18.18" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </motion.svg>
            </div>

          </div>

          {/* ── RIGHT COLUMN (Spans 8 columns) ── */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* Top: Narrative Headline Banner */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-[2.6rem] font-bold text-gray-950 dark:text-white leading-[1.2] tracking-tight max-w-4xl text-left font-inter"
            >
              An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.
            </motion.h2>

            {/* Bottom Section Sub-Grid (Portait Image + Info Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start w-full">
              
              {/* Card 1: Portrait Vertical Image Layout (They will swap this later) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[280px] sm:max-w-[300px] md:max-w-[260px] mx-auto md:mx-0 aspect-[3/4] overflow-hidden rounded-[8px] border border-black/5 dark:border-white/5 bg-gray-200 dark:bg-gray-800 shadow-md group cursor-pointer"
              >
                <Image
                  src="/images/who-we-are.webp"
                  alt="Who We Are Studio Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                />
                
                {/* Visual backdrop fallback design */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 border border-dashed border-gray-300 dark:border-gray-800 p-6 text-center select-none z-0">
                  <span className="text-gray-400 dark:text-gray-600 font-mono text-xs mb-2">✕ CARD-IMAGE-TRACK</span>
                  <span className="text-gray-300 dark:text-gray-700 text-[10px] font-sans">IMAGE PLACEHOLDER</span>
                </div>
              </motion.div>

              {/* Card 2: Creative Info Stack, Stats Row & Dividers */}
              <div className="flex flex-col gap-10 w-full text-left">
                
                {/* 1. Team Avatar Stack */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center -space-x-3">
                    {/* Circle 1 */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] dark:border-[#0E0E0E] bg-gray-300 flex items-center justify-center font-bold text-[10px] text-gray-700">🧑‍💻</div>
                    {/* Circle 2 */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] dark:border-[#0E0E0E] bg-gray-400 flex items-center justify-center font-bold text-[10px] text-gray-700">👩‍🎨</div>
                    {/* Circle 3 */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] dark:border-[#0E0E0E] bg-gray-500 flex items-center justify-center font-bold text-[10px] text-gray-700">🕵️</div>
                    {/* Plus Circle */}
                    <div className="w-10 h-10 rounded-full border-2 border-[#FAF9F6] dark:border-[#0E0E0E] bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-extrabold text-xs select-none">
                      +
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 font-semibold text-xs md:text-sm leading-relaxed max-w-xs">
                    Driven by a passion for innovation, we specialize in delivering top-quality design solutions
                  </p>
                </div>

                {/* 2. Thin divider line */}
                <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-800" />

                {/* 3. Stats Row */}
                <div className="grid grid-cols-2 gap-6 w-full">
                  {/* Metric 1 */}
                  <div className="flex flex-col gap-2">
                    <span className="text-5xl md:text-6xl font-extrabold text-gray-950 dark:text-white tracking-tighter leading-none">
                      98%
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs md:text-[13px] leading-snug">
                      Clients Satisfied and Repeating
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-col gap-2">
                    <span className="text-5xl md:text-6xl font-extrabold text-gray-950 dark:text-white tracking-tighter leading-none">
                      125+
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs md:text-[13px] leading-snug">
                      Projects Completed in 24 Countries
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
