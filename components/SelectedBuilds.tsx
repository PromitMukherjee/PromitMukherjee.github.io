"use client";

import { motion } from "framer-motion";
import { selectedBuilds, learningFoundations } from "@/data/projects";

export default function SelectedBuilds() {
  return (
    <section id="builds" className="py-20 sm:py-24 bg-purewhite border-t border-divider scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-divider mb-12">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              ENGINEERING & CODEBASES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900 mt-1">
              BUILDS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-warmgray-600 max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Practical software implementations and first-principles algorithmic codebases.
          </p>
        </div>

        {/* 1. SELECTED BUILDS (Applied Implementation — Primary within Builds) */}
        <div className="mb-16">
          <div className="pb-3 mb-8 border-b border-divider/60">
            <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-espresso-900 font-bold">
              SELECTED BUILDS
            </h3>
          </div>

          <div className="space-y-8">
            {selectedBuilds.map((build, idx) => (
              <motion.article
                key={build.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="pb-8 border-b border-divider/40 space-y-3"
              >
                {/* Category & Number */}
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                  <span className="text-burgundy-800 font-bold">
                    {build.number} · {build.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900">
                  {build.title}
                </h4>

                {/* Single Concise Description */}
                <p className="text-sm sm:text-base text-warmgray-600 max-w-3xl leading-relaxed font-normal">
                  {build.description}
                </p>

                {/* Technologies & Repository Link */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                  <div className="text-warmgray-600 flex flex-wrap items-center gap-2">
                    <span className="text-warmgray-400 uppercase tracking-wider">TECH:</span>
                    <span className="text-espresso-900 font-semibold">{build.tags.join("  ·  ")}</span>
                  </div>

                  <a
                    href={build.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5 self-start sm:self-auto"
                  >
                    <span>VIEW REPOSITORY</span>
                    <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* 2. LEARNING / FOUNDATIONS (Visually Secondary Archive) */}
        <div>
          <div className="pb-3 mb-8 border-b border-divider/60">
            <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-warmgray-600 font-bold">
              LEARNING / FOUNDATIONS
            </h3>
          </div>

          <div className="space-y-8">
            {learningFoundations.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="pb-8 border-b border-divider/40 space-y-3"
              >
                {/* Category & Number */}
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                  <span className="text-warmgray-600 font-bold">
                    {item.number} · {item.category}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-espresso-900">
                  {item.title}
                </h4>

                {/* Single Concise Description */}
                <p className="text-xs sm:text-sm text-warmgray-600 max-w-3xl leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Technologies & Repository Link */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
                  <div className="text-warmgray-600 flex flex-wrap items-center gap-2">
                    <span className="text-warmgray-400 uppercase tracking-wider">TECH:</span>
                    <span className="text-espresso-900 font-semibold">{item.tags.join("  ·  ")}</span>
                  </div>

                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5 self-start sm:self-auto"
                  >
                    <span>VIEW REPOSITORY</span>
                    <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
