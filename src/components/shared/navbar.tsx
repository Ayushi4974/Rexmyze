"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Resources", href: "/resources" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col w-full sticky top-0 z-50">
      {/* Top Header Bar - Optimized for mobile */}
      <div className="bg-primary text-white py-2 hidden sm:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[13px] font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:7096181126" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone size={14} className="fill-current" />
              7096181126
            </a>
            <a href="mailto:info@rexmyze.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail size={14} className="fill-current" />
              <span className="hidden md:inline">info@rexmyze.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
             <span className="w-px h-3 bg-white/30" />
             <Link href="/about" className="hover:text-white/80 transition-colors">About Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full border-b border-border bg-white/95 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center group">
               <div className="relative h-14 w-40">
                 <Image 
                   src="/logo-academy.png" 
                   alt="Rexmyze Academy Logo" 
                   fill 
                   className="object-contain"
                   priority
                 />
               </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-[14px] xl:text-[15px] font-bold text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/book-demo" className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-[14px] font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-md shadow-primary/20">
              Get Demo
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <button 
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-white border-b border-border overflow-hidden absolute top-[calc(100%-1px)] left-0 z-40 shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Link 
                  href="/book-demo" 
                  className="flex items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-bold text-white transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Get Demo Lecture
                  <ChevronRight size={18} className="ml-2" />
                </Link>
                <div className="flex flex-col gap-3 pt-4 text-sm text-muted-foreground font-medium">
                  <a href="tel:7096181126" className="flex items-center gap-3">
                    <Phone size={16} className="text-primary" />
                    7096181126
                  </a>
                  <a href="mailto:info@rexmyze.com" className="flex items-center gap-3">
                    <Mail size={16} className="text-primary" />
                    info@rexmyze.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

