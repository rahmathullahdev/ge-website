"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What is GenexLyf and how can it benefit my business?",
    answer: "GenexLyf is a dynamic tech solutions agency specializing in end-to-end product engineering and enterprise transformation. We bridge technical capability gaps, modernize your infrastructure, and drive digital growth via robust AI automation.",
  },
  {
    question: "Is there a mobile app development package available?",
    answer: "Absolutely. We build cross-platform solutions utilizing React Native and Flutter, as well as robust native iOS/Android builds ensuring consistency, speed, and optimal UX across all smart devices.",
  },
  {
    question: "How does GenexLyf help modernize legacy infrastructure?",
    answer: "Our core expertise includes mapping existing legacy system workflows to current cloud-native environments, deploying containerized microservices architecture that scale immediately.",
  },
  {
    question: "Do you offer dedicated customer support solutions post-launch?",
    answer: "Yes. We provide various maintenance packages including 24/7 performance health audits, continuous reliability updates, feature roll-outs, and dedicated priority tickets access for critical workflows.",
  },
  {
    question: "Can you manage intelligent analytics dashboard implementations?",
    answer: "We incorporate real-time big data visualization tools within custom administration portals, helping leadership visualize predictive analytics, retention metrics, and bottom-line conversions instantaneously.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-white dark:bg-[#090909] font-inter text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-300">
      {/* Abstract decoration background matching layout aesthetics */}
      <div className="absolute bottom-0 left-0 w-1/4 h-full pointer-events-none opacity-10 dark:opacity-20 z-0">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full stroke-teal-600" strokeWidth="1">
          <path d="M-100 700 C 100 700, 200 600, 0 500 C -200 400, 100 300, 200 400 C 300 500, 400 400, 300 300" />
          <path d="M-100 650 C 100 650, 200 550, 0 450 C -200 350, 100 250, 200 350" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Content and Main Visual */}
          <div className="lg:col-span-5 flex flex-col items-start pt-6">
            <div className="bg-black/5 dark:bg-white/10 backdrop-blur rounded-lg px-3 py-1 mb-6 border border-black/5 dark:border-white/10">
              <span className="text-xs uppercase tracking-widest font-bold text-gray-600 dark:text-white/80">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1] mb-12 max-w-sm">
              Got any<br />Questions?
            </h2>
            
            <div className="relative w-full max-w-sm aspect-square">
               <Image 
                  src="/images/faq-2.webp" 
                  alt="Illustration depicting customer feedback and system interaction" 
                  fill
                  className="object-contain object-left"
               />
            </div>
          </div>

          {/* Right Column: The Accordion List with specified dark framing */}
          <div className="lg:col-span-7">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-gray-50 dark:bg-[#141416] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden shadow-2xl"
             >
               {faqs.map((faq, i) => {
                 const isOpen = activeIndex === i;
                 return (
                    <div key={i} className={`border-b border-black/5 dark:border-white/5 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-black/[0.01] dark:bg-white/[0.02]' : ''}`}>
                       <button
                          onClick={() => setActiveIndex(isOpen ? null : i)}
                          className="w-full px-8 py-7 flex justify-between items-center text-left cursor-pointer group"
                       >
                          <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-200 ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                             {faq.question}
                          </span>
                          <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ml-4 ${
                             isOpen ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white rotate-45' : 'bg-black/5 dark:bg-white/5 text-gray-900 dark:text-white border-black/10 dark:border-white/10'
                          }`}>
                             <span className="text-lg font-light">+</span>
                          </div>
                       </button>
                       <AnimatePresence initial={false}>
                          {isOpen && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: "auto", opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                               className="overflow-hidden"
                             >
                               <div className="px-8 pb-8 pt-0 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                                  {faq.answer}
                               </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </div>
                 );
               })}
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
