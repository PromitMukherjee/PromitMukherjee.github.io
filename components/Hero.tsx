"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 bg-ivory-50 overflow-hidden">
      {/* Background Scientific Linework in Negative Space */}
      <div className="absolute top-24 right-12 pointer-events-none opacity-[0.15] hidden xl:block select-none">
        <svg width="260" height="260" viewBox="0 0 200 200" fill="none" stroke="#6B625D" strokeWidth="0.85">
          <line x1="20" y1="180" x2="180" y2="180" stroke="#6B625D" />
          <line x1="20" y1="20" x2="20" y2="180" stroke="#6B625D" />
          <path d="M 20 160 Q 70 140, 100 90 T 180 30" strokeDasharray="3 3" stroke="#7A1C2E" />
          <circle cx="100" cy="90" r="3" fill="#7A1C2E" />
          <circle cx="180" cy="30" r="3" fill="#7A1C2E" />
          <text x="110" y="85" fill="#6B625D" fontSize="8" fontFamily="monospace">L(θ)=E[-log f(x)]</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Large Editorial Typography & Information */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-7"
          >
            {/* Title: PROMIT MUKHERJEE */}
            <div className="space-y-0 text-espresso-900 font-bold tracking-tight text-6xl sm:text-7xl lg:text-8xl leading-[0.93]">
              <h1>PROMIT</h1>
              <h1>MUKHERJEE</h1>
            </div>

            {/* Role Subtitle */}
            <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-burgundy-800 font-bold block">
              {profileData.role}
            </div>

            {/* Tagline Statement */}
            <p className="text-lg sm:text-xl text-warmgray-600 font-normal leading-relaxed max-w-xl border-l-2 border-burgundy-800/30 pl-4 py-0.5">
              "{profileData.tagline}"
            </p>

            {/* Editorial Inline Metadata */}
            <div className="text-xs sm:text-sm font-mono tracking-wider uppercase text-warmgray-600 flex flex-wrap items-center gap-2">
              <span>{profileData.discipline}</span>
              <span className="text-warmgray-400">·</span>
              <span>{profileData.location}</span>
              <span className="text-warmgray-400">·</span>
              <span>{profileData.focus}</span>
            </div>

            {/* Primary Actions: Four Subtle Editorial Links */}
            <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-8 gap-y-3 pt-3 border-t border-divider/60 max-w-xl">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
              >
                <span>GITHUB</span>
                <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
              >
                <span>LINKEDIN</span>
                <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a
                href={profileData.socials.email}
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
              >
                <span>EMAIL</span>
                <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>

              <a
                href={profileData.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Promit Mukherjee resume"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono uppercase tracking-wider text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
              >
                <span>RESUME</span>
                <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Clean Editorial Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px]">
              <div className="relative rounded-2xs overflow-hidden border border-divider bg-purewhite p-1.5 shadow-xs">
                <div className="aspect-[3/4] relative w-full overflow-hidden rounded-2xs">
                  <Image
                    src="/profile/promit_image.png"
                    alt="Promit Mukherjee — AI Researcher & Systems Builder"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
