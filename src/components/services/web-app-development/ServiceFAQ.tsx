"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const serviceFaqs = [
  {
    question: "What is your typical development timeline for a custom web or mobile app?",
    answer: "Our typical development lifecycle spans 8 to 12 weeks from initial discovery and design to final production deployment. We utilize an agile sprint-based framework, delivering testable builds every 2 weeks so you can track progress and refine requirements in real time.",
  },
  {
    question: "Do you specialize in cross-platform mobile apps (Flutter/React Native) or native development?",
    answer: "We are experts in both. For most startups and businesses looking to optimize cost and time-to-market, we build high-performance cross-platform apps using Flutter and React Native. If your app requires heavy, low-level hardware integration (like advanced bluetooth controls or native background OS tasks), we engineer bespoke native Swift (iOS) and Kotlin (Android) systems.",
  },
  {
    question: "How do you ensure our application is secure and compliant?",
    answer: "Security is built into our core engineering foundation. We implement zero-trust authentication protocols (OAuth2.0/OIDC), strict HTTPS and end-to-end TLS encryption, secure database architectures with data at rest/transit encrypted, and conduct rigorous automated vulnerability testing during the CI/CD pipeline before any launch.",
  },
  {
    question: "Can your web & app solutions integrate with our existing ERP, CRM, or legacy database?",
    answer: "Absolutely. We specialize in building secure API adapters and headless middleware layers that interface seamlessly with major CRM systems (Salesforce, HubSpot), ERPs (SAP, Odoo), legacy SQL/Oracle databases, and third-party payment gateways (Stripe, Razorpay, PayPal) without interrupting active business workflows.",
  },
  {
    question: "How do you handle backend cloud infrastructure and scalability?",
    answer: "We deploy containerized microservices architectures on AWS or Google Cloud Platform, configured with automated horizontal scaling (Kubernetes/ECS). This ensures that your system automatically spins up new server resources during sudden traffic spikes and scales down during low-activity hours to minimize operational costs.",
  },
];

export default function ServiceFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="service-faq" className="w-full py-24 bg-white dark:bg-[#0A0A0A] font-inter text-gray-900 dark:text-white overflow-hidden relative transition-colors duration-300">
      {/* Side decorative mesh background */}
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 pointer-events-none opacity-5 dark:opacity-10 z-0">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full stroke-[#06BAA3]" strokeWidth="1">
          <circle cx="100" cy="200" r="150" strokeDasharray="5,5" />
          <circle cx="100" cy="200" r="100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading Block */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-block bg-[#06BAA3]/10 dark:bg-[#06BAA3]/10 border border-[#06BAA3]/20 rounded px-3 py-1 mb-6 select-none">
              <span className="text-xs uppercase tracking-widest font-bold text-[#06BAA3]">SERVICE FAQS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1] font-inter mb-6">
              Got any<br />Questions?
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-sm font-medium pl-4 border-l-2 border-[#06BAA3]/30">
              Find answers to common development queries, timelines, tech stack decisions, and integration structures.
            </p>

            <div className="relative w-full max-w-sm aspect-square mt-8 md:mt-12">
               <Image 
                  src="/images/faq-2.webp" 
                  alt="Illustration depicting customer feedback and system interaction" 
                  fill
                  className="object-contain object-left"
               />
            </div>
          </div>

          {/* Right Column: The Premium Accordion List */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F9FAFB] dark:bg-[#141416] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-xl"
            >
              {serviceFaqs.map((faq, i) => {
                const isOpen = activeIndex === i;
                return (
                  <div 
                    key={i} 
                    className={`border-b border-black/5 dark:border-white/5 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-white dark:bg-[#1C1C20]/40' : ''}`}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : i)}
                      className="w-full px-6 py-6 md:px-8 md:py-7 flex justify-between items-center text-left cursor-pointer group select-none"
                    >
                      <span className="text-base md:text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#06BAA3] transition-colors flex items-center gap-4">
                        <FiHelpCircle className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? 'text-[#06BAA3]' : 'text-gray-400'}`} />
                        <span>{faq.question}</span>
                      </span>
                      <FiChevronDown 
                        className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#06BAA3]' : ''}`} 
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pl-14 md:px-8 md:pb-7 md:pl-16 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
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
