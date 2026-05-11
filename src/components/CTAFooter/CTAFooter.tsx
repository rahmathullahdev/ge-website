"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const footerLinks = {
  Services: ["Web Development", "Mobile Apps", "Cloud Solutions", "Cybersecurity", "AI & Analytics"],
  Company: ["About Us", "Careers", "Blog", "Press", "Contact"],
  Resources: ["Documentation", "Case Studies", "Whitepapers", "FAQs", "Support"],
};

export default function CTAFooter() {
  return (
    <div id="contact" className="bg-[#F9FAFB] dark:bg-[#0A0A0A] transition-colors duration-300">

      {/* CTA Banner */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center cursor-pointer group shadow-2xl"
            style={{ background: "linear-gradient(135deg, #00BFA6 0%, #009688 50%, #007a6e 100%)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Radial glows */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              }}
            />
            <div className="relative z-10 flex items-center justify-center gap-6 flex-wrap">
              <span
                className="font-extrabold text-[#0A0A0A] uppercase leading-none tracking-tighter"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                LET&apos;S DISCUSS
              </span>
              <HiArrowRight
                className="text-[#0A0A0A] transition-transform duration-300 group-hover:translate-x-3"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-[#2A2A2A] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-1 max-w-xs">
              <div className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
                Genex<span className="text-[#00BFA6]">Lyf</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-[#666] leading-relaxed mb-6">
                Empowering businesses with innovative technology solutions. We transform ideas into digital reality.
              </p>
              <div className="flex gap-3">
                {[FaTwitter, FaLinkedinIn, FaGithub, FaInstagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#2A2A2A] flex items-center justify-center text-gray-600 dark:text-[#A0A0A0] text-sm transition-all duration-300 hover:bg-[#00BFA6] hover:border-[#00BFA6] hover:text-[#0A0A0A] hover:-translate-y-0.5 shadow-sm"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-[1px] mb-6">{title}</h4>
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <a key={link} href="#" className="text-sm text-gray-600 dark:text-[#666] hover:text-[#00BFA6] transition-colors duration-150">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 dark:border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-gray-500 dark:text-[#666]">© 2026 GenexLyf. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t) => (
                <a key={t} href="#" className="text-xs text-gray-500 dark:text-[#666] hover:text-[#00BFA6] transition-colors duration-150">{t}</a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
