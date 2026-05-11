"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const partners = [
  { iconColor: "bg-[#1ED760]", name: "Spotify" },
  { iconColor: "bg-[#00A1E0]", name: "Salesforce" },
  { iconColor: "bg-[#611f69]", name: "Slack" },
  { iconColor: "bg-[#E50914]", name: "Netflix" },
  { iconColor: "bg-[#96bf48]", name: "Shopify" },
  { iconColor: "bg-[#FF7A59]", name: "HubSpot" },
  { iconColor: "bg-[#00BFA6]", name: "Airbnb" },
  { iconColor: "bg-white", name: "NextJS" }
];

// Repeat to guarantee smooth loop
const repeatedPartners = [...partners, ...partners, ...partners];

const deliveryStats = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Retention" },
  { number: "24/7", label: "Support Available" },
  { number: "15+", label: "Countries Served" },
];

export default function Partners() {
  return (
    <section className="py-24 bg-white dark:bg-[#090909] font-inter overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading Matching Style exactly */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-4 max-w-2xl mx-auto">
            Trusted by the World&apos;s Innovative Networks
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Leading companies trust us with their digital transformation
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee Area - Breaks container edge to edge */}
      <div className="relative flex overflow-x-hidden w-full mb-24 select-none">
        {/* Fades on edges for better integration */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white dark:from-[#090909] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white dark:from-[#090909] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex whitespace-nowrap gap-8 items-center py-4 min-w-full">
          {repeatedPartners.map((p, i) => (
            <div 
              key={i} 
              className="inline-flex items-center gap-3 bg-white dark:bg-[#141414] hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors border border-gray-200 dark:border-[#222] px-6 py-3 rounded-xl cursor-pointer shrink-0 shadow-md hover:border-[#00BFA6] dark:hover:border-gray-700"
            >
              <div className={`w-3.5 h-3.5 rounded-full shadow-sm ${p.iconColor === 'bg-white' ? 'bg-black dark:bg-white' : p.iconColor}`} />
              <span className="text-base font-semibold text-gray-700 dark:text-gray-300 tracking-wide">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-[#2A2A2A] to-transparent mb-20" />

        {/* Bottom Benefits Section Redesign with mobile-safe padding profile */}
        <motion.div
          className="bg-gray-50 dark:bg-[#151517] border border-black/5 dark:border-white/5 rounded-[2.5rem] p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Sparkles vector decoration in top right */}
          <div className="absolute top-12 right-12 text-black/10 dark:text-white/10 pointer-events-none select-none">
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current opacity-30 dark:opacity-50">
              <path d="M60 0C60 33.1371 33.1371 60 0 60C33.1371 60 60 86.8629 60 120C60 86.8629 86.8629 60 120 60C86.8629 60 60 33.1371 60 0Z" />
              <path d="M115 80C115 93.8071 103.807 105 90 105C103.807 105 115 116.193 115 130C115 116.193 126.193 105 140 105C126.193 105 115 93.8071 115 80Z" opacity="0.6" />
              <path d="M125 10C125 18.2843 118.284 25 110 25C118.284 25 125 31.7157 125 40C125 31.7157 131.716 25 140 25C131.716 25 125 18.2843 125 10Z" opacity="0.8" />
            </svg>
          </div>

          <div className="relative z-10 mb-12">
             <span className="italic text-gray-600 dark:text-white/80 text-lg font-medium mb-2 block">Benefits</span>
             <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] max-w-md">
               Delivering more<br />Than Just Solutions
             </h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
             
             {/* Col 1 */}
             <div className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#222222] rotate-45 flex items-center justify-center mb-8 ml-3 mt-3 shadow-lg border border-black/5 dark:border-white/5">
                  <div className="-rotate-45 text-gray-900 dark:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z"/></svg>
                  </div>
                </div>
                <div className="border-l border-gray-300 dark:border-white/30 pl-4">
                   <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Grow your business</h4>
                   <p className="text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-[240px]">
                     We believe in challenges and so we have made challenges.
                   </p>
                </div>
             </div>

             {/* Col 2 */}
             <div className="flex flex-col items-start md:border-l border-black/5 dark:border-white/5 md:pl-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#222222] rotate-45 flex items-center justify-center mb-8 ml-3 mt-3 shadow-lg border border-black/5 dark:border-white/5">
                  <div className="-rotate-45 text-gray-900 dark:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                  </div>
                </div>
                <div className="border-l border-gray-300 dark:border-white/30 pl-4">
                   <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Cost savings ideas</h4>
                   <p className="text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-[240px]">
                     We believe in challenges and so we have made challenges.
                   </p>
                </div>
             </div>

             {/* Col 3 */}
             <div className="flex flex-col items-start md:border-l border-black/5 dark:border-white/5 md:pl-6">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#222222] rotate-45 flex items-center justify-center mb-8 ml-3 mt-3 shadow-lg border border-black/5 dark:border-white/5">
                  <div className="-rotate-45 text-gray-900 dark:text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
                  </div>
                </div>
                <div className="border-l border-gray-300 dark:border-white/30 pl-4">
                   <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Boost performance</h4>
                   <p className="text-sm text-gray-600 dark:text-gray-400 font-normal leading-relaxed max-w-[240px]">
                     We believe in challenges and so we have made challenges.
                   </p>
                </div>
             </div>

          </div>
        </motion.div>
      </div>

      {/* Adding standard tailwind marquee animation utilities in globals.css is expected, 
          Assuming inline globals setup elsewhere. Adding style block here ensures zero breakage */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
