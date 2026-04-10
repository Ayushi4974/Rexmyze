"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content side */}
          <FadeIn direction="up">
            <div className="flex flex-col items-start max-w-xl">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#54A0D6] mb-10">
                Redefining Digital Education
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                Empowering the Next <br />
                <span className="text-[#54A0D6] italic">Digital Leaders.</span>
              </h1>
              
              <div className="border-l-4 border-[#54A0D6] pl-6 mb-12">
                <p className="text-lg text-muted-foreground font-medium italic leading-relaxed">
                  Rexmyze is Ahmedabad's premier AI-powered digital marketing institute. 
                  Our mission is to provide industry-ready skills that transform careers.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="bg-[#54A0D6] hover:bg-[#54A0D6]/90 text-white rounded-xl px-10 py-7 text-lg font-bold shadow-xl shadow-[#54A0D6]/20">
                    Join Our Mission
                    <ChevronRight size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="border-[#54A0D6] text-[#54A0D6] hover:bg-[#54A0D6]/5 rounded-xl px-10 py-7 text-lg font-bold">
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Image side */}
          <FadeIn direction="left" delay={0.2} className="relative">
            <div className="relative aspect-square lg:aspect-4/5 w-full max-w-[500px] ml-auto">
              {/* Blue Outline Frame */}
              <div className="absolute inset-0 border-16 border-[#54A0D6] rounded-sm translate-x-4 translate-y-4 -z-10" />
              
              <div className="relative h-full w-full rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="Our Mission"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: -5 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-6 -left-6 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-border z-20 flex flex-col items-center justify-center min-w-[150px] sm:min-w-[180px]"
              >
                <span className="text-2xl sm:text-3xl font-black text-foreground">10+ Years</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground mt-1">Of Industry Excellence</span>
              </motion.div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
