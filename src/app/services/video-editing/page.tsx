"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  Film, 
  Camera, 
  Tv, 
  Monitor, 
  CheckCircle2, 
  ChevronRight,
  Clock,
  Layout,
  Music,
  Zap,
  Star,
  Target
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function VideoEditingService() {
  const challenges = [
    "Videos look inconsistent across platforms",
    "Poor sound or lighting reduces quality",
    "No storytelling structure",
    "Content fails to retain viewers",
    "Time wasted learning complicated software"
  ];

  const tools = [
    { name: "Adobe Premiere Pro", desc: "Professional timeline editing" },
    { name: "Adobe After Effects", desc: "Motion graphics & animations" },
    { name: "Final Cut Pro", desc: "High-speed processing" },
    { name: "DaVinci Resolve", desc: "Advanced color correction" },
    { name: "Adobe Audition", desc: "Clean & balanced audio" },
    { name: "Canva Pro", desc: "Branded social visuals" },
    { name: "CapCut Pro", desc: "Short-form optimization" },
    { name: "Filmora", desc: "Efficient marketing production" }
  ];

  const process = [
    { title: "Understanding Purpose", desc: "We identify where the video will be used — ads, website, or social media.", icon: Target },
    { title: "Selection & Organization", desc: "We carefully select the strongest visuals to maintain focus and clarity.", icon: Layout },
    { title: "Story Development", desc: "We arrange content to create a logical and engaging viewer journey.", icon: Film },
    { title: "Visual Enhancement", desc: "We refine colors, lighting, and transitions using professional tools.", icon: Zap },
    { title: "Audio Optimization", desc: "Sound is cleaned and balanced for a professional listening experience.", icon: Music },
    { title: "Branding & Graphics", desc: "We add titles, logos, or animations to strengthen identity.", icon: Star },
    { title: "Platform Optimization", desc: "Final videos are formatted for YouTube, Instagram, and more.", icon: Monitor }
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
                  Professional Post-Production
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  Video Editing <span className="text-primary italic">Services</span> in Ahmedabad
                </h1>
                <div className="border-l-4 border-primary pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     That Make Your Content Look Professional. Good videos grab attention. Great videos keep people watching.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  At Rexmyze Agency, we transform basic recordings into engaging, high-quality visuals designed for 
                  marketing, branding, and communication.
                </p>
                <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest shadow-xl shadow-primary/20">
                  Get a Quote
                  <ChevronRight className="ml-2" />
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative">
               <div className="relative aspect-video rounded-3xl overflow-hidden border-8 border-primary shadow-2xl">
                  <Image 
                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop"
                    alt="Video Editing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="h-16 w-16 md:h-20 md:w-20 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl">
                       <Film size={32} />
                    </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-12">
               <FadeIn direction="up">
                  <h2 className="text-3xl sm:text-4xl font-black mb-6 uppercase tracking-tighter">What Video Editing Means for <span className="text-primary italic">Modern Businesses</span></h2>
                  <p className="text-lg text-muted-foreground mb-12 font-medium italic">
                    Video editing is not just cutting and joining clips. It is about presenting your message clearly through structure, timing, visuals, and sound.
                  </p>
               </FadeIn>
               
               <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                  {[
                    "Improve brand visibility through video content",
                    "Increase engagement on Instagram Reels, YouTube, and Ads",
                    "Build trust with high-quality visuals",
                    "Deliver your message faster and more effectively",
                    "Support digital marketing campaigns with strong storytelling"
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-4 p-6 bg-muted/20 border border-border rounded-2xl group hover:bg-white hover:shadow-xl transition-all h-full">
                        <CheckCircle2 className="text-primary h-6 w-6 shrink-0" />
                        <span className="text-sm font-bold text-foreground/80">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
               </StaggerContainer>
            </div>

            <div className="lg:col-span-7">
               <FadeIn direction="left">
                  <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter">Common Challenges <span className="text-primary italic">We Solve</span></h3>
                  <div className="space-y-6">
                    {challenges.map((challenge, i) => (
                      <div key={i} className="flex items-center gap-4 bg-card border border-border p-6 rounded-2xl">
                         <div className="h-3 w-3 rounded-full bg-primary" />
                         <span className="font-bold text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
               </FadeIn>
            </div>

            <div className="lg:col-span-5">
               <FadeIn direction="right">
                  <div className="bg-primary text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden h-full">
                     <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                        <Monitor size={300} />
                     </div>
                     <h3 className="text-2xl font-black mb-8 relative z-10">Why Choose <br />Rexmyze Agency?</h3>
                     <ul className="space-y-6 relative z-10">
                        <li className="flex items-start gap-4 text-sm font-bold italic">
                           <CheckCircle2 size={18} className="shrink-0" /> Practical approach to business video production
                        </li>
                        <li className="flex items-start gap-4 text-sm font-bold italic">
                           <CheckCircle2 size={18} className="shrink-0" /> Experienced team using industry-standard tools
                        </li>
                        <li className="flex items-start gap-4 text-sm font-bold italic">
                           <CheckCircle2 size={18} className="shrink-0" /> Consistent visual quality across all content
                        </li>
                        <li className="flex items-start gap-4 text-sm font-bold italic">
                           <CheckCircle2 size={18} className="shrink-0" /> Fast turnaround with attention to detail
                        </li>
                     </ul>
                  </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn direction="up">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Tools & <span className="text-primary italic">Software</span> We Use</h2>
                 <p className="text-muted-foreground font-medium italic">We work with industry-leading tools trusted by global creators.</p>
              </div>
           </FadeIn>
           <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, i) => (
                <StaggerItem key={i}>
                   <div className="bg-white p-8 rounded-3xl border border-border text-center group hover:border-primary transition-all hover:shadow-2xl h-full">
                      <h4 className="font-black text-primary mb-2 uppercase tracking-tight">{tool.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-bold tracking-widest">{tool.desc}</p>
                   </div>
                </StaggerItem>
              ))}
           </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn direction="up">
              <div className="mb-20">
                 <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Our <span className="text-primary italic">Step-by-Step</span> Process</h2>
                 <p className="text-muted-foreground font-medium italic">We follow a structured approach so every video aligns with your goal.</p>
              </div>
           </FadeIn>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {process.slice(0, 4).map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                   <div className="relative">
                      <span className="text-6xl font-black text-muted/20 absolute -top-10 -left-6 z-0">{i + 1}</span>
                      <div className="relative z-10">
                        <h4 className="text-xl font-black mb-3 tracking-tight">{item.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                </FadeIn>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
