"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";

export default function CoursesHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-border">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="up">
            <div className="flex flex-col items-start max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary mb-10">
                Industry-Recognized Programs
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10 text-left">
                Master the Art of <br />
                <span className="text-primary italic">Digital Growth.</span>
              </h1>
              
              <div className="border-l-4 border-primary pl-6 mb-12">
                <p className="text-lg text-muted-foreground font-medium italic leading-relaxed">
                  Choose from our wide range of specialized courses, each designed with 
                  AI-powered tools and real-world projects to make you a global expert.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8">
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <CheckCircle2 size={20} />
                    </div>
                    <span className="text-xs font-black tracking-widest uppercase text-muted-foreground">Certified</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <BookOpen size={20} />
                    </div>
                    <span className="text-xs font-black tracking-widest uppercase text-muted-foreground">45+ Modules</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                       <Award size={20} />
                    </div>
                    <span className="text-xs font-black tracking-widest uppercase text-muted-foreground">Job Ready</span>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="relative">
            <div className="relative aspect-square w-full max-w-[550px] mx-auto lg:ml-auto mt-10 lg:mt-0">
               {/* Decorative Frame */}
               <div className="absolute inset-0 border-20 border-primary/10 rounded-sm translate-x-8 translate-y-8 -z-10 hidden sm:block" />
               <div className="absolute inset-0 border-2 border-primary/20 rounded-sm translate-x-4 translate-y-4 -z-10 hidden sm:block" />
               
               <div className="relative h-full w-full rounded-sm overflow-hidden shadow-2xl sm:skew-y-2 border-4 border-white">
                 <Image
                   src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
                   alt="Courses Background"
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
               </div>

               {/* Floating Content Badge */}
               <motion.div 
                 initial={{ opacity: 0, y: -30, rotate: -10 }}
                 whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                 transition={{ delay: 0.6 }}
                 className="absolute -top-6 -left-6 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-border flex flex-col items-center justify-center z-20"
               >
                  <span className="text-3xl sm:text-4xl font-black text-primary">15+</span>
                  <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-1">Recognized Certifications</span>
               </motion.div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
