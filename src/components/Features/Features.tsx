"use client";

import { motion, Variants } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const features = [
  {
    title: "AI & Intelligent Automation",
    description: "Smart systems that automate workflows, optimize operations, and unlock data-driven decisions using AI and machine learning.",
    icon: "🤖",
    bgCircle: "bg-blue-500/10",
    tags: ["AUTOMATION", "AI/ML", "BIG DATA"]
  },
  {
    title: "EdTech & Smart Campus",
    description: "Digital platforms and automation tools for educational institutions—enhancing learning, administration, and student engagement.",
    icon: "🎓",
    bgCircle: "bg-orange-500/10",
    tags: ["EDUCATION", "SAAS", "MANAGEMENT"]
  },
  {
    title: "Product Engineering",
    description: "End-to-end product development—from idea and prototyping to scalable, secure, and high-performance digital platforms.",
    icon: "🛠️",
    bgCircle: "bg-purple-500/10",
    tags: ["SCALABILITY", "PROTOTYPING", "SECURITY"]
  },
  {
    title: "IT Consulting & Strategy",
    description: "Technology consulting, cloud architecture, and system optimization to help organizations modernize and scale efficiently.",
    icon: "💡",
    bgCircle: "bg-green-500/10",
    tags: ["CLOUD", "STRATEGY", "MODERNIZATION"]
  },
  {
    title: "Web & App Development",
    description: "Building modern, responsive, and fast web & mobile interfaces crafted to satisfy user expectations and business scalability.",
    icon: "🌐",
    bgCircle: "bg-pink-500/10",
    tags: ["FRONTEND", "MOBILE", "CROSS PLATFORM"]
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.8 
    } 
  },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#F9FAFB] dark:bg-[#0A0A0A] relative font-inter transition-colors duration-300">
      {/* Side design element from image background */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full pointer-events-none opacity-10 dark:opacity-20 z-0">
        <svg viewBox="0 0 400 800" fill="none" className="w-full h-full stroke-teal-600" strokeWidth="1">
          <path d="M-100 700 C 100 700, 200 600, 0 500 C -200 400, 100 300, 200 400 C 300 500, 400 400, 300 300" />
          <path d="M-100 650 C 100 650, 200 550, 0 450 C -200 350, 100 250, 200 350" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 dark:text-white/80 italic font-semibold mb-4 text-base">Core Expertise</p>
          <h2 className="italic font-extrabold text-gray-900 dark:text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
            Features
          </h2>
        </motion.div>

        {/* Grid Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-white dark:bg-[#161616] border border-black/5 dark:border-white/5 rounded-[2rem] px-8 py-12 text-center flex flex-col items-center cursor-pointer transition-all duration-300 hover:bg-white dark:hover:bg-[#1e1e1e] hover:border-[#00BFA6]/30 shadow-xl hover:-translate-y-2"
            >
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">{f.title}</h3>
              
              {/* Center Icon Sphere visual representation */}
              <div className={`w-32 h-32 rounded-full flex items-center justify-center relative mb-10 overflow-visible ${f.bgCircle} group-hover:scale-110 transition-transform duration-500`}>
                {/* Blurred soft backing shadow simulation from design */}
                <div className="absolute inset-0 rounded-full bg-black/5 dark:bg-black/40 blur-md -z-10" />
                <span className="text-6xl drop-shadow-2xl transform group-hover:rotate-12 transition-transform">{f.icon}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-[240px] mb-8">
                {f.description}
              </p>

              {/* Badges wrapper */}
              <div className="flex flex-wrap gap-2 justify-center mt-auto pt-2">
                {f.tags.map((tag, tIndex) => (
                  <span 
                    key={tIndex} 
                    className="text-[9px] font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 px-3 py-1.5 rounded-full tracking-wider hover:border-[#00BFA6] dark:hover:border-white/30 hover:text-[#00BFA6] dark:hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Call to Action Last Card */}
          <motion.div
            variants={cardVariants}
            className="relative bg-[#7fc7b3] rounded-[2rem] px-8 py-12 flex flex-col h-full min-h-[400px] group cursor-pointer overflow-hidden shadow-xl text-white hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-3xl lg:text-4xl font-extrabold leading-[1.1] mb-auto relative z-10">
              Schedule a Call With a Client Success Expert Now.
            </h3>

            {/* Bottom CTA link pill */}
            <div className="mt-auto pt-8 relative z-10">
              <div className="bg-white/20 backdrop-blur-md rounded-full p-2 pl-6 flex items-center justify-between border border-white/30 group-hover:bg-white/30 transition-colors duration-300">
                <span className="font-bold text-sm">Our all Services</span>
                <BsArrowUpRightCircleFill size={42} className="text-white" />
              </div>
            </div>

            {/* Abstract 3D background blob rendering mockup in background of card */}
            <div className="absolute bottom-0 right-[-10%] w-full h-2/3 pointer-events-none overflow-visible z-0 opacity-90">
              <div className="w-full h-full bg-[#a6dfcf] rounded-full blur-[60px] absolute -bottom-20 rotate-12" />
              {/* An Emoji acting as 3D assets visual placeholders until user sets their static assets */}
              <span className="absolute bottom-4 right-4 text-9xl opacity-70 filter saturate-150 group-hover:scale-105 transition-transform duration-700 rotate-[-15deg]">🥦</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
