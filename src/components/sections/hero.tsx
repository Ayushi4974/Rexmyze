"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const stats = [
    { label: "Start Date", value: "09 Apr" },
    { label: "Students Per Batch", value: "Only 50" },
    { label: "Successful Placements", value: "8000+" },
    { label: "Internship Program", value: "8 Months" },
    { label: "International Certs", value: "15+" },
    { label: "AI Marketing Tools", value: "40+" },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-black overflow-hidden border-b border-border">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-muted/30 -z-10 clip-path-hero hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start pt-10">
            <div className="flex flex-wrap items-center gap-4 text-primary font-bold text-xs uppercase tracking-tighter mb-6">
              Ahmedabad's <span className="bg-primary text-white px-2 py-0.5 rounded-sm">No.1</span> AI-Based Digital Marketing Institute (Maninagar)
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 sm:mb-8">
              Welcome to <span className="text-primary italic">Rexmyze Academy</span> <br className="hidden sm:block" />
              Digital Marketing Institute <span className="bg-primary text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm">Maninagar</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl leading-relaxed font-medium">
              Transform your career with hands-on Digital Marketing Course in Ahmedabad at Rexmyze Academy. 
              Led by experts with 5+ years of experience, we offer SEO-friendly training focused on 
              real-world skills like SEO, Google Ads, Meta Ads, and AI-powered lead generation through live projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 w-full sm:w-auto">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-lg px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold w-full sm:w-auto">
                Apply Now
                <ChevronRight size={20} className="ml-2" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-3 font-black text-[10px] sm:text-[11px] uppercase tracking-wider text-foreground/80 mb-8 sm:mb-12">
              <span className="flex items-center gap-2 tracking-tighter">LEARN PRACTICAL <Star size={12} className="text-primary fill-current" /></span>
              <span className="flex items-center gap-2 tracking-tighter">AI POWERED SKILLS <Star size={12} className="text-primary fill-current" /></span>
              <span className="flex items-center gap-2 tracking-tighter">100% PLACEMENT <Star size={12} className="text-primary fill-current" /></span>
              <span className="flex items-center gap-2 tracking-tighter">LIVE PROJECTS <Star size={12} className="text-primary fill-current" /></span>
            </div>
          </div>

          {/* Video Mask Frame */}
          <div className="lg:col-span-5 relative lg:pb-20">
            <div className="relative aspect-video lg:aspect-4/3 rounded-2xl overflow-hidden border-4 sm:border-6 border-primary shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                alt="Student Training"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 sm:h-20 sm:w-20 bg-primary/90 rounded-full flex items-center justify-center text-white shadow-xl shadow-primary/40 group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={24} className="fill-current ml-1 sm:size-[32px]" />
                </div>
              </div>
              {/* Agency Badge */}
              <div className="absolute top-4 right-4 bg-white dark:bg-black p-2 rounded-lg border border-border shadow-md">
                <p className="text-[10px] font-black uppercase text-primary tracking-tighter">REXMYZE ACADEMY</p>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-primary/10 rounded-full blur-[80px]" />
          </div>

        </div>

        {/* Stats Ribbon Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-border mt-10">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center py-6 sm:py-10 px-4 group hover:bg-muted/50 transition-colors ${i % 2 === 0 ? 'border-r' : ''} ${i < 4 ? 'border-b md:border-b-0' : ''} lg:border-b-0 lg:border-r border-border`}>
              <span className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground group-hover:text-primary transition-colors mb-1 sm:mb-2 whitespace-nowrap">{stat.value}</span>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center line-clamp-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .clip-path-hero {
          clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
