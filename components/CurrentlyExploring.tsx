"use client";

import { motion } from "framer-motion";
import { currentlyExploringDirections } from "@/data/projects";

export default function CurrentlyExploring() {
  return (
    <section className="py-16 sm:py-20 bg-purewhite border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-divider mb-8">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              RESEARCH DIRECTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
              CURRENTLY EXPLORING
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-warmgray-600 max-w-md mt-2 md:mt-0 font-normal leading-relaxed">
            Broader technical questions, research vectors, and ongoing learning directions.
          </p>
        </div>

        {/* Editorial Exploration List */}
        <div className="divide-y divide-divider/60 border-b border-divider/60">
          {currentlyExploringDirections.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="py-5 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline"
            >
              <div className="md:col-span-5 flex items-baseline gap-3">
                <span className="text-xs font-mono text-burgundy-800 font-bold">
                  {item.number}
                </span>
                <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-espresso-900 uppercase">
                  {item.title}
                </h3>
              </div>
              <p className="md:col-span-7 text-xs sm:text-sm text-warmgray-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
