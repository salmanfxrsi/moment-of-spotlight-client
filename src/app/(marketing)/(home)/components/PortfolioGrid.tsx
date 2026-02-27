// src/components/marketing/PortfolioGrid.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Zay Flowers InterviewLamont Roach Media Day Event Interview",
    category: "Pro Boxer",
    image: "/portfolio-1.png", 
    size: "large",
  },
  {
    id: 2,
    title: "Roddy Rackzz Studio Interview",
    category: "Rapper",
    image: "/portfolio-2.png",
    size: "small",
  },
  {
    id: 3,
    title: "Tahmir Smalls Interview",
    category: "Pro Boxer",
    image: "/portfolio-3.png",
    size: "small",
  },
  {
    id: 4,
    title: "Tyrese Chambers Interview",
    category: "Pro Football Player",
    image: "/portfolio-4.png",
    size: "medium",
  },
  {
    id: 5,
    title: "Zay Flowers NFL Camp",
    category: "Pro Football player",
    image: "/portfolio-5.png",
    size: "medium",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              THE <span className="text-blue-500">WORK</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-md text-lg">
              Capturing the stories of the next generation of icons in stunning 4K.
            </p>
          </motion.div>
          
          <button className="text-white border-b border-blue-500 pb-1 font-bold hover:text-blue-500 transition-all">
            VIEW ALL PROJECTS
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900 ${
                project.size === "large" ? "md:col-span-8 md:row-span-2" : 
                project.size === "medium" ? "md:col-span-6 md:row-span-1" : 
                "md:col-span-4"
              }`}
            >
              {/* Image with Hover Zoom */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}