"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowRight, HiPlay, HiShieldCheck, HiLightningBolt } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F9FAFB] dark:bg-[#0A0A0A] pt-32 md:pt-40 pb-20 transition-colors duration-300"
    >
      {/* ── Geometric Teal Shapes ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Large parallelogram right */}
        <div
          className="absolute top-[8%] right-[12%] w-[340px] h-[500px] opacity-90 dark:opacity-90"
          style={{
            background: "linear-gradient(135deg, #06BAA3 0%, #009688 100%)",
            clipPath: "polygon(30% 0%, 100% 0%, 70% 100%, 0% 100%)",
          }}
        />
        {/* Smaller accent shape */}
        <div
          className="absolute top-[4%] right-[3%] w-[280px] h-[520px] opacity-70 dark:opacity-70"
          style={{
            background: "linear-gradient(180deg, #007a6e 0%, #06BAA3 100%)",
            clipPath: "polygon(50% 0%, 100% 30%, 80% 100%, 0% 80%)",
          }}
        />
        {/* Soft glow blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#06BAA3] opacity-[0.08] dark:opacity-[0.12] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-[80px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-[#06BAA3] opacity-[0.05] dark:opacity-[0.08] rounded-full blur-[100px]" />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full -mt-6 md:-mt-10 lg:-mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[600px]"
          >

            {/* Headline */}
            <h1 className="font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-4" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>
              Reliable &amp; <br />
              <span className="text-[#06BAA3]">Secure</span> Managed <br />
              IT Services.
            </h1>

            {/* Description laced with transactional keywords */}
            <p className="text-gray-600 dark:text-[#A0A0A0] text-base leading-relaxed mb-6 max-w-[480px]">
              Ranked as the premier <span className="font-semibold text-gray-800 dark:text-gray-200">Software Development Company in Chennai</span>, 
              GenexLyf delivers future-proof Enterprise AI and digital platforms for top-tier domestic and international clients worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <button className="flex items-center gap-2 px-7 py-3.5 bg-[#06BAA3] text-black font-semibold rounded-full transition-all duration-300 hover:bg-[#06BAA3]/90 hover:shadow-[0_0_30px_rgba(6,186,163,0.3)] hover:-translate-y-0.5">
                Get Started <HiArrowRight />
              </button>
              <button className="flex items-center gap-2 px-7 py-3.5 bg-transparent border border-gray-300 dark:border-[#333] text-gray-900 dark:text-white font-semibold rounded-full transition-all duration-300 hover:border-[#06BAA3] hover:text-[#06BAA3] hover:-translate-y-0.5">
                <HiPlay /> Watch Demo
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex gap-10 mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex-wrap">
              {[
                { num: "250+", label: "Projects Delivered" },
                { num: "50+", label: "Team Members" },
                { num: "99%", label: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.num}>
                  <div className="text-3xl font-extrabold text-gray-900 dark:text-white">{s.num}</div>
                  <div className="text-sm text-gray-500 dark:text-[#666] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Image + floating cards */}
          <motion.div
            className="relative hidden lg:flex justify-center items-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Hero image */}
            <div className="relative w-full max-w-[540px] aspect-[4/5] z-10 rounded-2xl overflow-visible -mt-20">
              <Image
                src="/images/hero-thumb.webp"
                alt="GenexLyf Managed IT Services"
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>

            {/* Floating Card 1 — 99.9% Uptime */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[12%] left-[-18%] z-20 flex items-center gap-3 px-4 py-3 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap"
            >
              <div className="w-10 h-10 rounded-lg bg-[#06BAA3] flex items-center justify-center text-black text-lg shrink-0">
                <HiShieldCheck />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">99.9% Uptime</div>
                <div className="text-xs text-gray-500 dark:text-[#666]">Guaranteed reliability</div>
              </div>
            </motion.div>

            {/* Floating Card 2 — Fast Delivery */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[14%] right-[5%] z-20 flex items-center gap-3 px-4 py-3 bg-white/90 dark:bg-[#1A1A1A]/90 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap"
            >
              <div className="w-10 h-10 rounded-lg bg-[#06BAA3] flex items-center justify-center text-black text-lg shrink-0">
                <HiLightningBolt />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">Fast Delivery</div>
                <div className="text-xs text-gray-500 dark:text-[#666]">On-time, every time</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
