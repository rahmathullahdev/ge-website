"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import Image from "next/image";

const TESTIMONIALS = [
  {
    id: 1,
    company: "Clickl",
    text: "It uses a directory of over 200 latin words combine a half of model sentence structures. Allgenerations on the internet trends to repeat predefined chunks as nessessary to make this file.",
    author: "Christian B.",
    avatar: "https://img.freepik.com/premium-vector/cute-boy-cartoon_1155253-102.jpg", // Mock avatar matching general color if user has image. User can update.
    altColor: "#FDF3EB"
  },
  {
    id: 2,
    company: "ProDirect",
    text: "Exceptional attention to detail and execution quality. The end deliverables surpassed all expectations and dramatically improved conversion cycles in month one.",
    author: "Diana Ross",
    avatar: "https://img.freepik.com/premium-vector/cute-boy-cartoon_1155253-102.jpg",
    altColor: "#FDF3EB"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const active = TESTIMONIALS[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    })
  };

  return (
    <section className="py-32 bg-[#F9FAFB] dark:bg-[#090909] font-inter text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Subtle minimalist background gradient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00BFA6]/5 dark:bg-[#00BFA6]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black/5 dark:bg-white/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Exact Text Headings based on Image */}
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="italic text-sm tracking-wide text-gray-500 dark:text-gray-300 mb-4 block font-medium opacity-90">
            Feedbacks
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black leading-[1] tracking-[-0.05em] max-w-3xl mx-auto">
            Trusted by the World&apos;s Fastest Growing Companies.
          </h2>
        </div>

        {/* The Main Flex Slider track matching exact layout balance */}
        <div className="relative max-w-5xl mx-auto flex items-center justify-between">
          
          {/* Mini Floating Prev Nav */}
          <button 
            onClick={prevSlide}
            className="w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-200 transition-all z-20 shadow-lg active:scale-95 shrink-0"
          >
            <HiArrowLeft size={18} />
          </button>

          {/* Inner content container where the content centers */}
          <div className="relative w-full h-[300px] flex justify-center items-center overflow-visible">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={active.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1]
                }}
                className="absolute flex flex-col md:flex-row items-center justify-center gap-12 px-4 w-full max-w-3xl"
              >
                {/* Exact Circular visual frame matching the render */}
                <div className="relative w-[240px] h-[240px] shrink-0">
                   <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center bg-[#FDF3EB] shadow-lg">
                      <div className="w-full h-full relative">
                        <Image 
                           src="/images/testi-img-1.webp" 
                           alt="Testimonial User Avatar"
                           fill
                           className="object-cover"
                        />
                      </div>
                   </div>
                </div>

                {/* Exact Text Content Mapping */}
                <div className="flex flex-col items-start text-left max-w-[400px]">
                  {/* Brand Logo style */}
                  <div className="flex items-center gap-1.5 mb-6 font-bold text-2xl text-gray-900 dark:text-white font-serif">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current">
                        <path d="M4 4H8V20H4V4Z" fill="currentColor" />
                        <path d="M10 4C14.4183 4 18 7.58172 18 12C18 16.4183 14.4183 20 10 20V4Z" fill="currentColor" />
                     </svg>
                     <span className="tracking-tight leading-none">{active.company}</span>
                  </div>

                  <p className="text-[1.05rem] leading-[1.6] text-gray-600 dark:text-gray-400 font-normal mb-8 relative pl-0">
                     &ldquo; {active.text} &rdquo;
                  </p>

                  <span className="text-base font-bold tracking-tight text-gray-900 dark:text-white font-sans">
                    {active.author}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mini Floating Next Nav */}
          <button 
            onClick={nextSlide}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-all z-20 shadow-lg active:scale-95 shrink-0"
          >
            <HiArrowRight size={18} />
          </button>
          
        </div>
      </div>
    </section>
  );
}
