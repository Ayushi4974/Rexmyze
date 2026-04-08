"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Lock, 
  Layout, 
  Globe, 
  CheckCircle2, 
  ChevronRight,
  Monitor,
  Rocket,
  Settings,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function WebDevelopmentService() {
  const problems = [
    { title: "Slow Loading Websites", desc: "Visitors rarely wait more than a few seconds. Slow sites lose traffic." },
    { title: "Poor Mobile Experience", desc: "Most users browse on phones. If the site doesn't adapt, they leave." },
    { title: "Difficult Navigation", desc: "Customers should find information easily, not search endlessly." },
    { title: "Outdated Technology", desc: "Old platforms create security risks and performance issues." }
  ];

  const types = [
    { title: "Custom Website Development", icon: Code2, desc: "Flexible, high-performance solutions tailored to your unique identity." },
    { title: "WordPress Development", icon: Settings, desc: "Easy-to-manage, scalable websites ideal for quick content controls." },
    { title: "E-commerce Development", icon: Rocket, desc: "Secure stores optimized for smooth checkout and product management." },
    { title: "Responsive Design", icon: Smartphone, desc: "Seamless experience across mobile, tablets, laptops, and large screens." }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-10">
      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#54A0D6] mb-10">
                   Scalable Web Solutions In Ahmedabad
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  Built For <br />
                  <span className="bg-[#54A0D6] text-white px-4 py-1 inline-block mt-2 italic decoration-white/30 underline underline-offset-8">Real Growth.</span>
                </h1>
                <div className="border-l-4 border-[#54A0D6] pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     When someone visits your website, they form an opinion within seconds. If it's slow or outdated, they leave.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  Rexmyze Agency builds websites that are fast, practical, and designed to support business goals. 
                  Your digital office should be open 24/7, handling inquiries and building trust.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest bg-[#54A0D6] hover:bg-[#54A0D6]/90 shadow-xl shadow-[#54A0D6]/20">
                    Build My Website
                    <Code2 className="ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative">
               <div className="relative aspect-video rounded-3xl overflow-hidden border-8 border-[#54A0D6] shadow-2xl skew-y-1 mt-10 lg:mt-0">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                     <div className="bg-white p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl border border-border flex flex-col items-center">
                        <Monitor size={60} className="text-primary mb-4 md:mb-6" />
                        <div className="flex gap-2">
                           <div className="h-2 w-8 bg-primary rounded-full" />
                           <div className="h-2 w-4 bg-primary/20 rounded-full" />
                           <div className="h-2 w-4 bg-primary/20 rounded-full" />
                        </div>
                        <p className="mt-4 md:mt-6 text-lg md:text-xl font-black tracking-tighter text-center">SEO & Performance Built-In</p>
                     </div>
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
                 <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter uppercase">Solutions Built With <span className="text-primary italic">Purpose</span></h2>
                 <p className="text-lg text-muted-foreground font-medium italic">We approach every project with one simple question: "How will this website help the business grow?"</p>
              </div>
           </FadeIn>

           <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
              {types.map((type, i) => (
                <StaggerItem key={i}>
                   <div className="bg-card border-2 border-border p-10 rounded-[32px] hover:border-primary transition-all group h-full">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                         <type.icon size={28} />
                      </div>
                      <h3 className="text-xl font-black mb-4 tracking-tight uppercase">{type.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">{type.desc}</p>
                   </div>
                </StaggerItem>
              ))}
           </StaggerContainer>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <FadeIn direction="left">
                    <h2 className="text-3xl sm:text-4xl font-black mb-10 tracking-tighter uppercase">Solving Performance <span className="text-primary italic underline underline-offset-8">Bottlenecks</span></h2>
                    <div className="space-y-8">
                       {problems.map((p, i) => (
                         <div key={i} className="flex gap-6 group">
                            <div className="h-10 w-10 shrink-0 font-black text-2xl text-primary/20 group-hover:text-primary transition-colors">
                               0{i + 1}
                            </div>
                            <div>
                               <h4 className="font-black text-xl mb-1 tracking-tight">{p.title}</h4>
                               <p className="text-base text-muted-foreground font-medium italic leading-relaxed">{p.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </FadeIn>
              </div>
              <FadeIn direction="right">
                 <div className="bg-foreground text-background p-12 rounded-[48px] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                       <ShieldCheck size={400} />
                    </div>
                    <h3 className="text-2xl font-black mb-8 relative z-10 text-white">Built-In Excellence</h3>
                    <div className="space-y-6 relative z-10">
                       {[
                         "Clean Coding Structure",
                         "Fast Loading Speed",
                         "Mobile-First Design",
                         "Proper Heading Hierarchy",
                         "Optimized URLs",
                         "Technical SEO Readiness"
                       ].map((v, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-[#54A0D6] shrink-0" />
                            <span className="font-bold text-sm tracking-tight text-white/80">{v}</span>
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
