"use client";

import { motion } from "framer-motion";
import { 
  Camera, 
  Share2, 
  Users, 
  Tv, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight,
  Zap,
  TrendingUp,
  Layout,
  Monitor
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function SMMService() {
  const platforms = [
    { title: "Instagram Marketing", icon: Camera, desc: "Visual engagement, Reels strategy, and brand aesthetics." },
    { title: "Facebook Marketing", icon: Users, desc: "Community connection and targeted demographic reach." },
    { title: "LinkedIn Marketing", icon: Monitor, desc: "B2B growth and professional authority building." },
    { title: "YouTube Promotion", icon: Tv, desc: "Video storytelling and long-term search visibility." }
  ];

  const strategy = [
    { title: "Brand Voice", desc: "Learning your values and audience type for correct identity mirroring." },
    { title: "Content Direction", desc: "Monthly roadmap with educational, brand, and engagement focus." },
    { title: "Visual Assets", desc: "Clean, relatable creatives that feel authentic, not just polished." },
    { title: "Paid Advertising", desc: "Managed social campaigns reaching the right people exactly." }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-10">
      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary mb-10">
                   Social Media Marketing Ahmedabad
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  Stay Relevant. <br />
                  <span className="text-primary italic">Stay Connected.</span>
                </h1>
                <div className="border-l-4 border-primary pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     Most people check Instagram first. That small moment decides whether they trust you — or move on.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  At Rexmyze Agency, social media is a communication tool, not just a promotional channel. 
                  We build visibility, create trust, and turn attention into real business opportunities.
                </p>
                <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Build My Presence
                  <Share2 className="ml-2" />
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative hidden lg:block">
               <div className="relative aspect-square w-full max-w-[500px] ml-auto">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px]" />
                  <div className="relative h-full w-full grid grid-cols-2 gap-6 items-center">
                     <motion.div 
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="p-8 bg-white border border-border rounded-3xl shadow-xl flex flex-col items-center"
                     >
                        <Camera size={40} className="text-pink-600 mb-4" />
                        <div className="h-2 w-16 bg-muted/30 rounded-full mb-2" />
                        <div className="h-2 w-10 bg-muted/20 rounded-full" />
                     </motion.div>
                     <motion.div 
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="p-8 bg-white border border-border rounded-3xl shadow-xl flex flex-col items-center mt-12"
                     >
                        <Users size={40} className="text-blue-700 mb-4" />
                        <div className="h-2 w-16 bg-muted/30 rounded-full mb-2" />
                        <div className="h-2 w-10 bg-muted/20 rounded-full" />
                     </motion.div>
                     <motion.div 
                        animate={{ x: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="p-8 bg-foreground text-background border border-border rounded-3xl shadow-2xl flex flex-col items-center col-span-2 max-w-[200px] mx-auto"
                     >
                        <Monitor size={32} className="text-blue-400 mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Professional</p>
                        <p className="text-lg font-black italic">Authority</p>
                     </motion.div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-20">
                 <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter uppercase">Beyond <span className="text-primary italic">Posting Samples</span></h2>
                 <p className="text-lg text-muted-foreground font-medium italic">We focus on building a brand presence that feels natural. Not robotic, just clear communication.</p>
              </div>
           </FadeIn>

           <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {platforms.map((platform, i) => (
                <StaggerItem key={i}>
                   <div className="group bg-card border border-border rounded-[40px] p-10 hover:border-primary transition-all hover:shadow-2xl text-center h-full">
                      <div className="h-16 w-16 rounded-2xl bg-muted/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mx-auto mb-8">
                         <platform.icon size={30} />
                      </div>
                      <h4 className="text-lg font-black mb-3 tracking-tight uppercase">{platform.title}</h4>
                      <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">{platform.desc}</p>
                   </div>
                </StaggerItem>
              ))}
           </StaggerContainer>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <FadeIn direction="left">
                    <h2 className="text-3xl sm:text-4xl font-black mb-10 tracking-tighter uppercase">A Structured <span className="text-primary italic underline underline-offset-8">Strategy</span></h2>
                    <div className="space-y-10">
                       {strategy.map((item, i) => (
                         <div key={i} className="flex gap-6 group">
                            <div className="h-10 w-10 shrink-0 font-black text-2xl text-primary/20 group-hover:text-primary transition-colors">
                               0{i + 1}
                            </div>
                            <div>
                               <h4 className="font-black text-xl mb-1 tracking-tight">{item.title}</h4>
                               <p className="text-base text-muted-foreground font-medium italic leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </FadeIn>
              </div>
              <FadeIn direction="right">
                 <div className="bg-primary text-white p-12 rounded-[48px] shadow-2xl relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                       <TrendingUp size={400} />
                    </div>
                    <h3 className="text-2xl font-black mb-8 relative z-10">Long-Term Growth</h3>
                    <div className="space-y-6 relative z-10">
                       <p className="text-lg font-medium italic opacity-80 leading-relaxed mb-8">
                          Consistency creates reliability. Reliability builds trust. Trust influences decisions.
                       </p>
                       {[
                         "Stronger recognition among audience",
                         "More inquiries via Direct Messages",
                         "Improved brand trust with constant visibility",
                         "Better website traffic from social channels"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-white shrink-0" />
                            <span className="font-bold text-sm tracking-tight">{v}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>
    </div>
  );
}
