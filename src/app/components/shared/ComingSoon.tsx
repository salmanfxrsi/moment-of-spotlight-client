"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background Cinematic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full" />

      <div className="relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Icon */}
          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-blue-500/30"
          >
            <Construction className="text-blue-500" size={40} />
          </motion.div>

          <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Nexico Design Preview
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            COMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              SOON
            </span>
          </h1>
          
          <p className="max-w-md mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
            We are currently developing this section to be as impactful as the spotlight itself. Stay tuned.
          </p>

          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-bold transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </Link>
        </motion.div>
      </div>

      {/* Decorative Branding */}
      <div className="absolute bottom-10 w-full text-center">
        <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-bold">
          Developed & Maintained by Nexico
        </p>
      </div>
    </main>
  );
}