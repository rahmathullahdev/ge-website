"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const PROJECTS_DATA = [
  {
    id: "01",
    year: "2025",
    title: "Fametn - TNCGS Dashbaord",
    image: "/images/project1-fametn.jpeg", // User provided specific asset
    tags: ["DASHBOARD", "TNCGS"]
  },
  {
    id: "02",
    year: "2025",
    title: "Optimized wearable application dashboard integration.",
    image: "/images/sucess-2.webp",
    tags: ["INTERFACE", "MOBILE"]
  },
  {
    id: "03",
    year: "2024",
    title: "Corporate architectural portfolio brand launch.",
    image: "/images/sucess-1.webp",
    tags: ["IDENTITY", "STRATEGY"]
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-[#1e352e] py-32 text-white relative overflow-visible font-inter">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left: Sticky Info Title Box */}
        <div className="w-full lg:w-2/5 lg:sticky lg:top-32 flex flex-col self-start">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter flex flex-col mb-10">
            <span>Our</span>
            <span>recent</span>
            <span className="text-[#c4eb55]">projects</span>
          </h2>

          <button className="w-fit px-8 py-4 border-2 border-[#c4eb55] text-[#c4eb55] text-sm font-extrabold uppercase tracking-widest rounded-xl hover:bg-[#c4eb55] hover:text-[#1e352e] transition-all duration-300 mt-auto">
            See All Projects
          </button>
        </div>

        {/* Right: Parallax Stacking Project Cards */}
        <div className="w-full lg:w-3/5 flex flex-col gap-12 relative">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              total={PROJECTS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, total }: { project: any, index: number, total: number }) {
  const containerRef = useRef(null);
  
  // Parallax offset setup for internal content using scroll range
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <div 
      ref={containerRef}
      className="sticky top-20 w-full" 
      style={{ 
        top: `${100 + index * 24}px`, // Dynamic stacking height offset
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#fefdf0] rounded-[2.5rem] border border-black/10 shadow-2xl overflow-hidden flex flex-col text-black p-6 md:p-8 transition-all duration-500 hover:-translate-y-2"
      >
        {/* Card Header */}
        <div className="flex justify-between items-center text-[#1e352e] font-extrabold mb-6 pb-4 border-b border-black/5 opacity-80 text-base">
          <span>{project.id}</span>
          <span>{project.year}</span>
        </div>

        {/* Dynamic container aspect ratios: taller on mobile for visibility, ultra-wide on desktop */}
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-white shadow-inner border border-black/5 mb-6 group flex items-center justify-center p-2">
           <Image 
             src={project.image}
             alt={project.title}
             fill
             className="object-contain group-hover:scale-105 transition-transform duration-700"
           />
        </div>

        {/* Lowered Vertical footprint further */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl md:text-2xl font-black text-[#1e352e] leading-tight tracking-tight">
            {project.title}
          </h3>

          <div className="flex gap-3 mt-2">
            {project.tags.map((tag: string) => (
              <span 
                key={tag} 
                className="px-4 py-2 rounded-full border border-black/10 text-[10px] font-extrabold uppercase tracking-wider text-[#1e352e]/60 bg-black/[0.02]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
