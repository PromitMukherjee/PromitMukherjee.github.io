"use client";

import { motion } from "framer-motion";
import { writingItems } from "@/data/writing";

export default function Writing() {
  return (
    <section id="writing" className="py-20 sm:py-24 bg-ivory-50 border-t border-divider scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-divider mb-10">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              TECHNICAL NOTES & ESSAYS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-espresso-900 mt-1">
              WRITING
            </h2>
          </div>
          <p className="text-sm sm:text-base text-warmgray-600 max-w-md mt-4 md:mt-0 font-normal leading-relaxed">
            Technical notes, research observations, experiments, and ideas around the problems I am actively exploring.
          </p>
        </div>

        {/* Editorial Notebook Index */}
        <div className="divide-y divide-divider/60 border-b border-divider/60">
          {writingItems.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="py-7 space-y-3"
            >
              {/* YEAR · TYPE */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-burgundy-800 font-bold">
                  {post.date} · {post.type}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-espresso-900 leading-snug">
                {post.title}
              </h3>

              {/* 1-2 SENTENCE ABSTRACT */}
              <p className="text-sm sm:text-base text-warmgray-600 leading-relaxed font-normal max-w-3xl">
                {post.abstract}
              </p>

              {/* ACTION LINK OR NON-INTERACTIVE STATUS */}
              <div className="pt-1">
                {post.link ? (
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
                  >
                    <span>READ ESSAY</span>
                    <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono uppercase tracking-wider text-warmgray-400 font-medium block">
                    {post.status}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
