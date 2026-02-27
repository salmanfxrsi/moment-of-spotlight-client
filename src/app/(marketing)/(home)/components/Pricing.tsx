"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, Flame, Trophy, Crown, Zap } from "lucide-react";

const allServices = [
  {
    name: "Bronze",
    price: "750",
    time: "15 min",
    description: "Perfect for quick on-site features and event highlights.",
    features: [
      "10-20 min On-site Interview",
      "5-10 min Clean Feature Edit",
      "1-3 Short Vertical Clips",
      "Optimized for Reels/TikTok",
      "Brand/Event Tagging",
      "$250 Deposit Required"
    ],
    highlight: false,
    icon: <Zap className="text-orange-400" size={24} />,
    color: "border-orange-500/20"
  },
  {
    name: "Silver",
    price: "1200",
    time: "35+ min",
    description: "Professional multi-angle studio setup for serious creators.",
    features: [
      "30 min Studio/Virtual Interview",
      "Multi-angle 4K Camera Setup",
      "2 Viral Vertical Clips w/ Captions",
      "2 Additional Unedited Clips",
      "Basic Editing & Color Grading",
      "Moment of Spotlight Social Post"
    ],
    highlight: false,
    icon: <Trophy className="text-slate-300" size={24} />,
    color: "border-slate-500/20"
  },
  {
    name: "Gold",
    price: "2100",
    time: "60+ min",
    description: "The viral growth engine. Includes promo strategy and photoshoot.",
    features: [
      "Everything in Silver +",
      "60 min Extended Session",
      "4-6 Edited Viral Clips",
      "10 Minute Post-Interview Photoshoot",
      "Custom YT/IG Thumbnail Design",
      "2 Promo Blog Posts on Instagram",
      "Priority 5-7 Day Turnaround"
    ],
    highlight: true,
    icon: <Flame className="text-blue-500" size={24} />,
    color: "border-blue-500"
  },
  {
    name: "Spotlight",
    price: "3000",
    time: "90+ min",
    description: "The ultimate tier. Multi-location filming and full content bundle.",
    features: [
      "Everything in Gold +",
      "90 min Multi-location/Studio Shoot",
      "8-12 Vertical Clips (Staggered)",
      "30-60s Highlight Trailer/Ad",
      "30-45 Minute Photoshoot",
      "72-Hour Rush Editing",
      "Pinned Featured Placement",
      "Exclusive Merchandise"
    ],
    highlight: false,
    icon: <Crown className="text-yellow-500" size={24} />,
    color: "border-yellow-500/20"
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            LEVEL <span className="text-blue-500">UP</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allServices.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-6 rounded-[2rem] border ${pkg.color} ${
                pkg.highlight ? "bg-blue-500/5" : "bg-zinc-900/30"
              } backdrop-blur-xl transition-all duration-300 hover:scale-[1.02]`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase text-white tracking-widest">
                  Best Seller
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                {pkg.icon}
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">${pkg.price}</span>
                  <span className="text-gray-500 text-sm font-medium">+</span>
                </div>
                <p className="text-blue-500 text-xs font-bold mt-1 uppercase tracking-tighter">
                  {pkg.time} session
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 text-[13px] text-gray-400 leading-tight">
                    <Check size={14} className="text-blue-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-black text-sm transition-all ${
                pkg.highlight 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400" 
                : "bg-white/10 text-white hover:bg-white/20"
              }`}>
                SELECT {pkg.name.toUpperCase()}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}