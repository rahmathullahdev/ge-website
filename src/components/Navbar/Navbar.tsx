"use client";

import { useState, useEffect } from "react";
import { HiOutlineSearch, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "next-themes";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services/web-app-development",
    dropdown: [
      { label: "Web & App Development", href: "/services/web-app-development" },
      { label: "AI & Intelligent Automation", href: "/services/ai-intelligent-automation" }
    ]
  },
  { label: "Features", href: "/#features" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  if (!mounted) return null;

  return (
    <>
      <div className="fixed top-6 inset-x-0 px-6 z-[100] font-inter">
        <nav
          id="navbar"
          className="max-w-7xl mx-auto h-20 flex items-center bg-white/90 dark:bg-[#131313]/80 backdrop-blur-xl rounded-full border border-black/5 dark:border-white/10 shadow-lg dark:shadow-2xl px-4 md:px-10 justify-between transition-all duration-300"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 dark:text-white tracking-tighter">
            <div className="w-8 h-8 rounded-full bg-[#06BAA3] flex items-center justify-center font-black italic text-sm text-black">
              G
            </div>
            Genex<span className="text-[#06BAA3]">Lyf</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="relative group py-6">
                    <a
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-bold text-gray-700 dark:text-white/90 hover:text-[#06BAA3] transition-colors duration-200 cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="transition-transform duration-200 group-hover:rotate-180">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    
                    {/* Premium Glassmorphic Dropdown Panel */}
                    <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[260px] bg-white/95 dark:bg-[#131313]/95 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-2xl p-2 mt-2 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 origin-top shadow-2xl z-[110]">
                      {link.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="flex items-center px-4 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-150 group/item"
                        >
                          <span className="text-sm font-bold text-gray-900 dark:text-white group-hover/item:text-[#06BAA3] transition-colors duration-150">
                            {subItem.label}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-bold text-gray-700 dark:text-white/90 hover:text-[#06BAA3] transition-colors duration-200"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions Area */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex text-gray-700 dark:text-white/70 hover:text-[#06BAA3] text-xl transition-colors w-10 h-10 items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
            </button>

            <button
              aria-label="Search"
              className="hidden md:flex text-gray-700 dark:text-white/70 hover:text-[#06BAA3] text-xl transition-colors w-10 h-10 items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
            >
              <HiOutlineSearch size={22} />
            </button>
            
            {/* Reference White Pill CTA button with arrow element */}
            <button className="hidden md:flex items-center gap-3 pl-6 pr-1.5 py-1.5 bg-[#131313] dark:bg-white text-white dark:text-black text-sm font-bold rounded-full group transition-all hover:bg-[#222] dark:hover:bg-gray-100 border border-transparent">
              <span>Start a project</span>
              <div className="w-9 h-9 rounded-full bg-white dark:bg-[#131313] text-black dark:text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 z-[60]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-gray-900 dark:bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[90] bg-white/98 dark:bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 overflow-y-auto pt-24 px-6">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="flex flex-col items-center gap-2 mb-2">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#06BAA3] mb-1">
                    {link.label}
                  </span>
                  {link.dropdown.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-bold text-gray-800 dark:text-gray-200 hover:text-[#06BAA3] transition-colors text-center py-1"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-extrabold text-gray-900 dark:text-white hover:text-[#06BAA3] transition-colors"
              >
                {link.label}
              </a>
            );
          })}
          <button className="mt-4 text-sm font-bold px-8 py-3 bg-[#131313] dark:bg-white text-white dark:text-black rounded-full shadow-lg">
            Start a Project
          </button>
        </div>
      )}
    </>
  );
}
