"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-purewhite border-t border-divider scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Natural Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[360px]">
              <div className="relative rounded-2xs overflow-hidden border border-divider bg-ivory-50 p-1.5 shadow-xs">
                <div className="aspect-[4/5] relative w-full overflow-hidden rounded-2xs">
                  <Image
                    src="/profile/promit_image.png"
                    alt="Promit Mukherjee"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dominant Personal Biography & Supporting Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
                BIOGRAPHY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-espresso-900">
                ABOUT ME
              </h2>
            </div>

            {/* Primary Content: Personal & Professional Narrative */}
            <div className="space-y-4 text-base sm:text-lg text-warmgray-600 leading-relaxed font-normal">
              <p className="text-espresso-900 font-medium leading-relaxed">
                I am an MCA student at RNS Institute of Technology, Bengaluru (2025–2027, CGPA 8.60), working at the intersection of machine learning, computer vision, representation learning, algorithms, and systems.
              </p>
              <p>
                My work centers on investigating technical problems through empirical experimentation and first-principles implementation rather than relying solely on high-level abstractions. I focus on understanding why systems behave the way they do—taking open-ended research questions across medical AI, computational RNA storage, matrix representation, and memory-efficient algorithms, and grounding them into working code.
              </p>
              <p>
                I am currently seeking research internships and AI/ML internship opportunities where I can contribute to technical exploration, experimental system design, and algorithm development.
              </p>
            </div>

            {/* Supporting Editorial Metadata Block */}
            <div className="pt-6 border-t border-divider space-y-3.5 text-xs sm:text-sm font-mono">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-1">
                <span className="text-warmgray-400 uppercase tracking-wider w-36 shrink-0">EDUCATION</span>
                <span className="text-espresso-900 font-semibold">
                  {profileData.education.degree} · {profileData.education.institution}, {profileData.education.location}{" "}
                  <span className="text-warmgray-500 font-normal">({profileData.education.period} · CGPA {profileData.education.cgpa})</span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-1 border-t border-divider/40">
                <span className="text-warmgray-400 uppercase tracking-wider w-36 shrink-0">ACHIEVEMENT</span>
                <span className="text-espresso-900 font-semibold">
                  {profileData.honors}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-1 border-t border-divider/40">
                <span className="text-warmgray-400 uppercase tracking-wider w-36 shrink-0">RESEARCH FOCUS</span>
                <span className="text-espresso-900 font-semibold">
                  Machine Learning · Computer Vision · Representation Learning · Algorithms · Systems
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-1 border-t border-divider/40">
                <span className="text-warmgray-400 uppercase tracking-wider w-36 shrink-0">CURRENTLY SEEKING</span>
                <span className="text-burgundy-800 font-semibold">
                  Research Internships · AI/ML Internships
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
