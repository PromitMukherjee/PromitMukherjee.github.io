"use client";

import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 sm:py-24 bg-purewhite border-t border-divider scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Editorial Closing & Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 items-start">
          
          {/* Left Column: Editorial Closing Statement */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-burgundy-800 font-bold block">
              CONTACT & COLLABORATION
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-espresso-900 leading-[1.05]">
              LET'S BUILD<br />WHAT'S NEXT.
            </h2>

            <p className="text-base sm:text-lg text-warmgray-600 max-w-xl font-normal leading-relaxed pt-1">
              Open to research collaborations, AI/ML internship opportunities, technical project discussions, and academic exchange across machine learning, computer vision, and systems engineering.
            </p>
          </div>

          {/* Right Column: Editorial Contact Links */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 pt-2 lg:pt-0">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-burgundy-800 font-bold block">
              DIRECT REACH
            </span>

            <ul className="space-y-4 font-mono text-xs sm:text-sm">
              <li>
                <a
                  href={profileData.socials.email}
                  aria-label="Send email to Promit Mukherjee"
                  className="group inline-flex flex-wrap items-center gap-2 text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
                >
                  <span className="uppercase tracking-wider font-semibold">EMAIL</span>
                  <span className="text-warmgray-500 font-sans text-xs lowercase">promitmukherjeeofficial@gmail.com</span>
                  <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </li>

              <li>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile (opens in new tab)"
                  className="group inline-flex items-center gap-2 text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
                >
                  <span className="uppercase tracking-wider font-semibold">GITHUB</span>
                  <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </li>

              <li>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile (opens in new tab)"
                  className="group inline-flex items-center gap-2 text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
                >
                  <span className="uppercase tracking-wider font-semibold">LINKEDIN</span>
                  <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </li>

              <li className="pt-2">
                <a
                  href={profileData.socials.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Promit Mukherjee resume (opens in new tab)"
                  className="group inline-flex items-center gap-2 text-espresso-900 border-b border-burgundy-800/40 hover:border-burgundy-800 hover:text-burgundy-800 transition-colors pb-0.5"
                >
                  <span className="uppercase tracking-wider font-semibold">RESUME</span>
                  <span className="text-burgundy-800 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Hairline Divider & Editorial Copyright */}
        <div className="border-t border-divider pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-warmgray-600 font-normal">
          <div>
            © {new Date().getFullYear()} PROMIT MUKHERJEE · ALL RIGHTS RESERVED
          </div>
          <div className="text-warmgray-500 font-mono text-xs uppercase tracking-wider">
            BENGALURU, KARNATAKA, INDIA
          </div>
        </div>

      </div>
    </footer>
  );
}
