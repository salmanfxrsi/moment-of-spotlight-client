"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Construction, ArrowRight } from "lucide-react";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative max-w-lg w-full bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center"
          >
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="text-blue-500" size={40} />
            </div>

            <h2 className="text-3xl font-black text-white tracking-tighter mb-4">
              DEVELOPMENT <span className="text-blue-500">PREVIEW</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              This is a cinematic home-page demo developed by <span className="text-white font-bold">Nexico</span>. 
              Interactive features and dashboard authentication are currently under construction.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 text-left">
                <Lock className="text-blue-500 shrink-0" size={20} />
                <p className="text-sm text-gray-300">Buttons and booking links are disabled for this preview.</p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-white text-black py-4 rounded-full font-black flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition-all group"
              >
                EXPLORE DESIGN <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">
              Property of Nexico Digital
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}