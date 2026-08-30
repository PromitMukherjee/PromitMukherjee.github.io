"use client";

import { motion } from "framer-motion";
import { techStackCategories } from "@/data/projects";

export default function TechStack() {
  return (
    <section id="stack" className="py-16 sm:py-20 bg-ivory-50 border-t border-divider scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-divider mb-8">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              STACK & TOOLING
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
              TECH STACK
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-warmgray-600 max-w-md mt-2 md:mt-0 font-normal leading-relaxed">
            Core technologies and tools used for building, experimentation, and research implementation.
          </p>
        </div>

        {/* Restrained Editorial Technical Index Layout */}
        <div className="divide-y divide-divider/60 border-b border-divider/60">
          {techStackCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 py-4 items-baseline"
            >
              <div className="md:col-span-4 text-xs font-mono font-bold tracking-widest text-burgundy-800 uppercase">
                {cat.title}
              </div>
              <div className="md:col-span-8 text-xs sm:text-sm font-mono text-espresso-900 leading-relaxed font-semibold">
                {cat.items.join("  ·  ")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
