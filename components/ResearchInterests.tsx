"use client";

import { motion } from "framer-motion";
import { researchInterests } from "@/data/research";

export default function ResearchInterests() {
  return (
    <section id="research" className="relative py-20 sm:py-24 bg-purewhite border-t border-divider overflow-hidden scroll-mt-20">
      {/* Quiet Background Linework in Negative Space */}
      <div className="absolute top-12 right-6 pointer-events-none opacity-[0.12] hidden xl:block select-none">
        <svg width="220" height="220" viewBox="0 0 200 200" fill="none" stroke="#6B625D" strokeWidth="0.75">
          <path d="M 20 20 C 60 80, 140 80, 180 20" strokeDasharray="3 3" />
          <path d="M 20 180 C 60 120, 140 120, 180 180" strokeDasharray="3 3" />
          <line x1="60" y1="50" x2="60" y2="150" stroke="#7A1C2E" />
          <line x1="100" y1="70" x2="100" y2="130" stroke="#7A1C2E" />
          <line x1="140" y1="50" x2="140" y2="150" stroke="#7A1C2E" />
          <circle cx="100" cy="70" r="2.5" fill="#7A1C2E" />
          <circle cx="100" cy="130" r="2.5" fill="#7A1C2E" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header — Academic Index Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-divider mb-12">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              RESEARCH DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-espresso-900 mt-1">
              RESEARCH INTERESTS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-warmgray-600 max-w-md mt-3 md:mt-0 font-normal leading-relaxed">
            Exploring foundational questions across intelligent architectures, medical computer vision, biological data encoding, and enterprise observability.
          </p>
        </div>

        {/* 5-Column Academic Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-0">
          {researchInterests.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`flex flex-col justify-between ${
                index < researchInterests.length - 1
                  ? "lg:border-r lg:border-divider lg:pr-6 lg:mr-6"
                  : ""
              }`}
            >
              <div className="space-y-3">
                {/* Large Burgundy Index Number */}
                <div className="text-2xl sm:text-3xl font-serif text-burgundy-800 font-medium">
                  {item.number}
                </div>

                {/* Category Title */}
                <h3 className="text-sm font-bold tracking-wider text-espresso-900 uppercase leading-snug">
                  {item.title}
                </h3>

                {/* Index Description */}
                <p className="text-xs sm:text-sm text-warmgray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Sub-topics List */}
              <div className="pt-4 mt-6 border-t border-divider/60">
                <ul className="space-y-1.5 text-xs font-mono text-warmgray-600 font-normal">
                  {item.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-burgundy-800/50" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
