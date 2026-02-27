// src/components/marketing/Hero.tsx
"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effect: Image moves slightly slower than scroll
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // We use innerWidth/Height to make sure the spotlight is centered correctly
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* 1. Dynamic Spotlight Overlay - Z-index 20 to be above the image but below text */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
        }}
      />

      {/* 2. Optimized Background Image Container */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" /> 
        
        <Image
          src="/hero-image.png" // Ensure this is high resolution
          alt="Moment of Spotlight Professional Interview"
          fill // Makes image fill the container
          priority // Loads image immediately (LCP optimization)
          quality={90}
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
      </motion.div>

      {/* 3. Content - Z-index 30 */}
      <div className="relative z-30 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
            Professional Media Production
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 leading-none">
            MOMENT OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              SPOTLIGHT
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-300 text-base md:text-lg mb-10 leading-relaxed font-light">
            We give pro athletes and creators the platform they deserve with 
            elite 4K interviews and viral social storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href={"/services"} className="group bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              BOOK YOUR SESSION
            </Link>
            <Link href={"/portfolio"} className="group text-white border border-white/20 backdrop-blur-sm px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              <Play size={18} className="group-hover:fill-white transition-all" /> VIEW PORTFOLIO
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* 4. Animated Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}