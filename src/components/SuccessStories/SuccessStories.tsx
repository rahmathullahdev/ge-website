"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

export default function SuccessStories() {
  return (
    <section className="py-24 bg-white dark:bg-[#0D0D0D] relative overflow-hidden font-inter text-gray-900 dark:text-white transition-colors duration-300">
      {/* Background accent decoration visible in corner */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/10 dark:bg-teal-900/30 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none z-0">
        <svg viewBox="0 0 400 400" fill="none" className="opacity-5 dark:opacity-10 w-full h-full stroke-teal-500" strokeWidth="20">
          <path d="M 200,-100 L 400,200 L 100,400 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Info Block (approx span 4 or 5) */}
          <motion.div 
            className="lg:col-span-4 pt-8 flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray-600 dark:text-white/80 italic font-semibold text-lg mb-4 block">Our company</span>
            <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-black leading-[0.9] tracking-tighter mb-10">
              More<br />About our<br />Success<br />Stories
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm mb-8 font-medium opacity-90">
              That&apos;s why we&apos;re dedicated to providing innovative, reliable, and responsive IT solutions that keep your operations running smoothly and securely
            </p>

            <button className="group relative flex items-center gap-3 bg-[#6366f1] hover:bg-[#5558e6] transition-colors px-6 py-3 rounded-full overflow-hidden">
              <span className="font-bold text-sm relative z-10">More about Us</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white text-indigo-600 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <HiArrowUpRight size={16} strokeWidth={1} />
              </div>
            </button>
          </motion.div>

          {/* RIGHT: Complex Masonry Image Cluster (span 8) */}
          <div className="lg:col-span-8 relative h-full grid grid-cols-2 gap-6">
            
            {/* Top-Left Item: Main Portrait with Stats Badges */}
            <motion.div 
              className="relative flex flex-col gap-4 z-20 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/5] bg-gray-800">
                 <Image 
                   src="/images/sucess-1.webp" 
                   alt="Featured success project avatar" 
                   fill
                   className="object-cover"
                 />
              </div>

              {/* Badge 1: Green Overlap */}
              <motion.div 
                className="absolute -right-12 top-16 bg-[#d9f99d] text-[#1a2e05] rounded-xl py-4 px-6 shadow-xl flex items-center gap-4 border border-white/20 whitespace-nowrap z-30"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-3xl font-extrabold tracking-tighter">15+</span>
                <span className="text-xs font-bold leading-tight text-left">Years of<br />Experience</span>
              </motion.div>

              {/* Badge 2: Lavender Overlap */}
              <motion.div 
                className="absolute -right-4 top-40 bg-[#ddd6fe] text-[#2e1065] rounded-xl py-4 px-6 shadow-xl flex items-center gap-4 border border-white/20 whitespace-nowrap z-30"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-3xl font-extrabold tracking-tighter">61+</span>
                <span className="text-xs font-bold leading-tight text-left">Projects<br />Worldwide</span>
                {/* The tiny little dot from design */}
                <div className="absolute right-3 top-3 w-2 h-2 bg-black rounded-full opacity-80" />
              </motion.div>
            </motion.div>

            {/* Right Long Vertical Block */}
            <motion.div 
              className="row-span-2 self-end pt-24 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[9/16] bg-gray-800 relative w-full">
                 <Image 
                   src="/images/sucess-3.webp" 
                   alt="Active project workspace" 
                   fill
                   className="object-cover"
                 />
              </div>
            </motion.div>

            {/* Bottom Left illustration block */}
            <motion.div 
              className="-mt-16 relative z-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[16/11] bg-gray-800 relative">
                 <Image 
                   src="/images/sucess-2.webp" 
                   alt="Visual digital product representation" 
                   fill
                   className="object-cover"
                 />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
