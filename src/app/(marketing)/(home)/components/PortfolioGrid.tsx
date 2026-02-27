// src/components/marketing/PortfolioGrid.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Lamont Roach Media Day Event Interview",
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
    <section className="py-24 bg-black px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              THE <span className="text-blue-500">PORTFOLIO</span>
            </h2>
          </motion.div>

          <Link href={"/portfolio"} className="text-white border-b border-blue-500 pb-1 font-bold hover:text-blue-500 transition-all text-sm md:text-base">
            VIEW ALL PROJECTS
          </Link>
        </div>

        {/* Bento Grid - Responsive version */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[350px] md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-3xl border border-white/5 bg-zinc-900 
                /* Mobile: All items take 1 column */
                col-span-1 
                /* Desktop: Grid spans based on size */
                ${
                  project.size === "large"
                    ? "md:col-span-8 md:row-span-2"
                    : project.size === "medium"
                      ? "md:col-span-6 md:row-span-1"
                      : "md:col-span-4"
                }`}
            >
              {/* Image with Hover Zoom */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 md:group-hover:scale-110 opacity-70 md:opacity-60 md:group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay Gradient - Darker on bottom for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <p className="text-blue-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </p>
                <div className="flex justify-between items-end md:items-center gap-4">
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  {/* Icon: Always visible on mobile, hover on desktop */}
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity transform md:translate-y-4 md:group-hover:translate-y-0 duration-300 shrink-0">
                    <ExternalLink
                      size={18}
                      className="text-white md:w-5 md:h-5"
                    />
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
