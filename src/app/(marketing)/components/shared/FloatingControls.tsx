"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Instagram, Youtube, Share2, X, ChevronUp } from "lucide-react";

// TikTok Icon SVG since Lucide may vary
const TiktokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function FloatingControls() {
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socials = [
    {
      icon: <Instagram size={20} />,
      href: "https://instagram.com/momentofspotlight",
      label: "Instagram",
    },
    {
      icon: <Youtube size={20} />,
      href: "https://youtube.com/@momentofspotlight",
      label: "YouTube",
    },
    {
      icon: <TiktokIcon size={20} />,
      href: "https://www.tiktok.com/@momentofspotlight",
      label: "TikTok",
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] flex justify-between items-end pointer-events-none">
      {/* LEFT: NEURAL SOCIAL HUB */}
      <div className="pointer-events-auto relative">
        <AnimatePresence>
          {isSocialOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="absolute bottom-20 left-0 flex flex-col gap-3 p-2 bg-zinc-900/80 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl"
            >
              {socials.map((soc, i) => (
                <motion.a
                  key={i}
                  href={soc.href}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-colors relative group"
                >
                  {soc.icon}
                  <span className="absolute left-16 px-3 py-1 rounded-md bg-white text-black text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest shadow-xl">
                    {soc.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSocialOpen(!isSocialOpen)}
          className={`w-16 h-16 flex items-center justify-center rounded-3xl border transition-all duration-500 shadow-2xl ${
            isSocialOpen
              ? "bg-white border-white text-black rotate-90"
              : "bg-zinc-900/90 border-white/10 text-white backdrop-blur-md"
          }`}
        >
          {isSocialOpen ? <X size={24} /> : <Share2 size={24} />}
        </motion.button>
      </div>

      {/* RIGHT: SMART SCROLL INDICATOR */}
      <div className="pointer-events-auto relative">
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, transform: "translateY(100px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              exit={{ opacity: 0, transform: "translateY(100px)" }}
              onClick={scrollToTop}
              className="group relative w-16 h-16 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl"
            >
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-blue-600/30 origin-bottom"
                style={{ scaleY }}
              />

              <div className="relative z-10 flex flex-col items-center text-white transition-transform group-hover:-translate-y-1">
                <ChevronUp size={24} />
                <span className="text-[8px] font-black uppercase tracking-tighter -mt-1">
                  Top
                </span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
