"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, Globe } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-border">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="up">
            <div className="flex flex-col items-start max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#54A0D6] mb-10">
                Contact Support Center
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10 text-left">
                Get in <br />
                <span className="bg-[#54A0D6] text-white px-4 py-1 inline-block mt-2">Touch</span> With Us.
              </h1>
              
              <div className="border-l-4 border-[#54A0D6] pl-6 mb-12">
                <p className="text-lg text-muted-foreground font-medium italic leading-relaxed">
                  Have questions about our AI-powered courses or need career guidance? 
                  Our expert team is here to help you navigate your digital future.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8">
                 <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-[#54A0D6]/10 flex items-center justify-center text-[#54A0D6]">
                       <MessageSquare size={24} />
                    </div>
                    <div>
                       <p className="text-sm font-black tracking-tight">Email Us</p>
                       <p className="text-xs text-muted-foreground font-medium">info@rexmyze.com</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-[#54A0D6]/10 flex items-center justify-center text-[#54A0D6]">
                       <Phone size={24} />
                    </div>
                    <div>
                       <p className="text-sm font-black tracking-tight">Call Us</p>
                       <p className="text-xs text-muted-foreground font-medium">7096181126</p>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="relative mt-20 lg:mt-0">
            <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto p-10">
               {/* Decorative Circles */}
               <div className="absolute inset-0 border-2 border-[#54A0D6]/20 rounded-full animate-spin-slow" />
               <div className="absolute inset-6 border border-[#54A0D6]/10 rounded-full animate-reverse-spin" />
               
               <div className="relative h-full w-full bg-[#54A0D6]/5 rounded-full flex items-center justify-center overflow-hidden">
                  <Globe size={300} className="text-[#54A0D6]/20" />
                  <motion.div 
                    animate={{ 
                       y: [0, -20, 0],
                       rotate: [0, 5, 0]
                    }}
                    transition={{ 
                       duration: 6,
                       repeat: Infinity,
                       ease: "easeInOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                     <div className="relative h-64 w-64 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl flex items-center justify-center">
                        <div className="flex flex-col items-center">
                           <div className="h-20 w-20 bg-[#54A0D6] rounded-2xl flex items-center justify-center text-white shadow-xl mb-4">
                              <MessageSquare size={40} />
                           </div>
                           <p className="text-center font-black text-[#54A0D6] text-xl">24/7 Support</p>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
