"use client";

import { motion } from "framer-motion";

const workflowSteps = [
  {
    number: "01",
    label: "QUESTION",
    title: "Define the fundamental core problem",
  },
  {
    number: "02",
    label: "LITERATURE",
    title: "Review existing models & architectures",
  },
  {
    number: "03",
    label: "EXPERIMENT",
    title: "Build prototypes, pipelines & benchmark models",
  },
  {
    number: "04",
    label: "SYSTEM",
    title: "Translate research findings into scalable tools",
  },
];

export default function ResearchWorkflow() {
  return (
    <section className="py-20 bg-ivory-50 border-t border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-divider mb-12">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-espresso-900 mt-1">
              FROM QUESTION TO SYSTEM
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-warmgray-600 max-w-md mt-3 md:mt-0 font-normal leading-relaxed">
            A systematic progression translating foundational theoretical inquiries into validated prototypes and production-grade systems.
          </p>
        </div>

        {/* Clean Editorial Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 bg-purewhite border border-divider rounded-2xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif text-burgundy-800 font-medium">
                  {step.number}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-warmgray-600 font-bold">
                  {step.label}
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-espresso-900 leading-snug">
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
