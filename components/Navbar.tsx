"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Research", href: "/#projects" },
  { label: "Builds", href: "/#builds" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("projects");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.split("#")[1]);
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (!section) continue;
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-purewhite border-b border-divider h-[72px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm sm:text-base font-semibold tracking-wider text-espresso-900 uppercase hover:text-burgundy-800 transition-colors"
        >
          <span className="w-2 h-2 rounded-xs bg-burgundy-800 transition-transform group-hover:scale-125" />
          <span>PROMIT MUKHERJEE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.split("#")[1];
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm tracking-wide uppercase py-2 transition-colors ${
                  isActive
                    ? "text-espresso-900 font-semibold"
                    : "text-warmgray-600 hover:text-espresso-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-burgundy-800" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-espresso-900 hover:text-burgundy-800 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-purewhite border-b border-divider px-6 py-4 space-y-3 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider text-espresso-900 py-2 border-b border-divider/40"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
