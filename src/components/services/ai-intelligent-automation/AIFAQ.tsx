"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";
import Image from "next/image";

const FAQ_ITEMS = [
  {
    question: "How does GenexLyf guarantee private data security during LLM training?",
    answer: "We employ strict isolated VPC boundaries. Your corporate documentation and proprietary data sets are tokenized, stored, and queried within secure private cloud containers (AWS/GCP/Azure). We leverage open-weights checkpoints (Llama-3, Mistral) locally and implement zero-data-retention parameters, ensuring no corporate IP ever leaks to external model vendors."
  },
  {
    question: "What is the typical timeline to deploy an autonomous AI agent?",
    answer: "An enterprise workflow automation project averages 4 to 8 weeks. This covers discovering logical inefficiencies, mapping automated workflow hubs using leading tools like n8n, Lindy, Make, Zapier, and OpenClaw, tokenizing legacy records into secure vector stores, engineering self-correcting agent chains (via CrewAI/LangChain), and deploying a staging sandbox for manual human-in-the-loop validation."
  },
  {
    question: "What is RAG (Retrieval-Augmented Generation) and why is it used?",
    answer: "RAG connects your base AI models to a real-time vector database (like Pinecone or pgvector). When an employee or customer asks a question, the system queries your internal directories first, appending precise facts directly to the model context. This virtually eliminates cognitive hallucinations and provides fully auditable source citations."
  },
  {
    question: "How do you control logical hallucinations in production?",
    answer: "We deploy a multi-tiered validation model. Every output is evaluated by secondary validator models before executing. Furthermore, we enforce strict schema patterns (using JSON structures), check generated math against physical database logs, and integrate strict system parameter bounds to stop models from predicting out-of-scope tasks."
  },
  {
    question: "Do you support on-premise execution or private server clusters?",
    answer: "Yes, we construct fully hardware-agnostic systems. We can orchestrate low-latency neural inference workloads directly inside your corporate physical hardware (Nvidia A10G/H100 instances) or build secure Dockerized microservice layers deployed within your private virtual servers."
  }
];

export default function AIFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-gray-50 dark:bg-[#080809] py-24 md:py-32 border-t border-gray-100 dark:border-white/5 transition-colors duration-300 font-inter overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-[#06BAA3] opacity-[0.02] dark:opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Two-Column Grid: Left Title & Image, Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading pill + Image illustration */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-24">
            
            {/* Tag Pill */}
            <div className="inline-block bg-[#06BAA3]/10 dark:bg-[#06BAA3]/10 border border-[#06BAA3]/20 rounded px-3 py-1 mb-6">
              <span className="text-xs uppercase tracking-widest font-black text-[#06BAA3]">FAQ</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] font-inter">
              Got Questions?
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm md:text-base leading-relaxed font-semibold max-w-sm">
              Discover how we architect low-latency vector databases, build self-correcting agents, and guarantee zero-trust data governance.
            </p>

            {/* Side Illustration matching homepage exact FAQ image */}
            <div className="relative w-full max-w-sm aspect-square mt-8 md:mt-12  p-4 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/faq-2.webp"
                  alt="Enterprise AI FAQ Support Center Illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-contain filter brightness-[0.98] dark:brightness-[0.9]"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Custom Motion Accordions */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div 
                  key={idx}
                  className="border-b border-gray-200 dark:border-white/10 pb-4 transition-colors duration-200"
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : idx)}
                    className="flex justify-between items-center w-full py-4 text-left group focus:outline-none"
                  >
                    <span className="text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#06BAA3] transition-colors duration-200">
                      {item.question}
                    </span>
                    <span 
                      className={`ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-gray-300 dark:border-white/10 transition-all duration-300 ${
                        isOpen ? "bg-[#06BAA3] border-[#06BAA3] text-white" : "text-gray-600 dark:text-gray-400 group-hover:border-[#06BAA3] group-hover:text-[#06BAA3]"
                      }`}
                    >
                      {isOpen ? <HiMinus size={16} /> : <HiPlus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-400 font-semibold pt-2 pb-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
