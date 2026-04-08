"use client";

import { motion } from "framer-motion";
import { 
  MousePointer2, 
  Target, 
  Search, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Award
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function GoogleAdsService() {
  const steps = [
    { title: "Business Understanding", desc: "We learn about your services, audience, and locations you want to target." },
    { title: "Research & Strategy", desc: "We analyze competitors and identify search terms that bring actual leads." },
    { title: "Campaign Creation", desc: "Ads are structured carefully so they reach only relevant users." },
    { title: "Smart Launch", desc: "Campaigns start with controlled budgets while we track behavior." }
  ];

  const benefits = [
    "Faster visibility on Google search",
    "Better quality enquiries",
    "Lower wasted spend",
    "Measurable performance",
    "Scalable growth over time"
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
                   Google Ads Partner In Ahmedabad
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  Smart PPC <br />
                  <span className="bg-primary text-white px-4 py-1 inline-block mt-2 underline underline-offset-8 decoration-white/30 italic">Growth</span>
                </h1>
                <div className="border-l-4 border-primary pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     When people in Ahmedabad need a service today, they don't search for long. They choose from the first few results they see.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  Rexmyze Agency helps businesses appear in front of the right audience using professional 
                  Google Ads management that focuses on real enquiries, not just random clicks.
                </p>
                <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Start My Campaign
                  <Zap className="ml-2" />
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative hidden lg:block">
               <div className="relative aspect-4/5 w-full max-w-[450px] ml-auto">
                  <div className="absolute inset-0 border-r-16 border-b-16 border-primary/10 -translate-x-8 translate-y-8 rounded-3xl" />
                  <div className="relative h-full w-full bg-card border-2 border-border p-10 rounded-3xl shadow-2xl flex flex-col justify-between">
                     <div className="flex items-center justify-between mb-8">
                        <div className="h-12 w-32 bg-primary/10 rounded-lg flex items-center justify-center">
                           <ShieldCheck className="text-primary mr-2" size={18} />
                           <span className="text-[10px] font-black uppercase tracking-tighter text-primary">Certified Partner</span>
                        </div>
                        <Award className="text-primary" />
                     </div>
                     <div className="space-y-6">
                        <div className="p-6 bg-muted/20 rounded-2xl border border-border">
                           <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Live Ad Results</p>
                           <p className="text-3xl font-black text-foreground">Rank #1</p>
                        </div>
                        <div className="p-6 bg-primary/90 text-white rounded-2xl">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Conversion Rate</p>
                           <p className="text-3xl font-black">+45%</p>
                        </div>
                     </div>
                     <div className="mt-8 pt-8 border-t border-border flex items-center gap-4">
                        <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
                           <TrendingUp size={20} />
                        </div>
                        <div>
                           <p className="text-sm font-black italic">Strategic Optimization</p>
                           <p className="text-[10px] text-muted-foreground font-bold">Scaling performance daily</p>
                        </div>
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
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-12">
                 <FadeIn direction="up">
                   <h2 className="text-3xl sm:text-5xl font-black mb-10 tracking-tighter uppercase text-center">Google Ads Management <span className="text-primary italic">Process</span></h2>
                 </FadeIn>
                 <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {steps.map((item, i) => (
                      <StaggerItem key={i}>
                         <div className="bg-muted/10 p-10 rounded-[40px] border border-border h-full relative group hover:bg-white hover:shadow-2xl transition-all">
                            <span className="absolute top-6 right-10 text-4xl font-black text-primary/10 group-hover:text-primary/20">{i + 1}</span>
                            <h4 className="text-xl font-black mb-4 tracking-tight uppercase">{item.title}</h4>
                            <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">{item.desc}</p>
                         </div>
                      </StaggerItem>
                    ))}
                 </StaggerContainer>
              </div>

              <div className="lg:col-span-7">
                 <FadeIn direction="left">
                    <h3 className="text-2xl font-black mb-10 uppercase tracking-tighter">Budget Control & <span className="text-primary italic">Relevance</span></h3>
                    <div className="space-y-6">
                       <p className="text-lg text-muted-foreground font-medium italic leading-relaxed mb-8 border-l-4 border-primary pl-6">
                          We don't run ads using generic keywords. We target high-intent searches within Ahmedabad 
                          to avoid wasting budget on random clicks.
                       </p>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                               <CheckCircle2 className="text-primary" size={18} />
                               <span className="text-sm font-bold text-foreground/80">{benefit}</span>
                            </div>
                          ))}
                       </div>
                    </div>
                 </FadeIn>
              </div>

              <div className="lg:col-span-5">
                 <FadeIn direction="right">
                    <div className="bg-foreground text-background p-10 rounded-[40px] shadow-2xl">
                       <h3 className="text-xl font-black mb-8 uppercase tracking-tight text-white">Targeted Locations</h3>
                       <div className="space-y-6">
                          <div className="flex items-center gap-4 group">
                             <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                                <MapPin size={20} />
                             </div>
                             <div>
                                <p className="font-black text-white">Ahmedabad Reach</p>
                                <p className="text-[10px] opacity-60 font-bold tracking-widest uppercase">Pinpoint targeting</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-4 group">
                             <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                                <Search size={20} />
                             </div>
                             <div>
                                <p className="font-black text-white">High-Intent Keywords</p>
                                <p className="text-[10px] opacity-60 font-bold tracking-widest uppercase">Enquiry ready users</p>
                             </div>
                          </div>
                          <div className="flex items-center gap-4 group">
                             <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-primary">
                                <BarChart3 size={20} />
                             </div>
                             <div>
                                <p className="font-black text-white">Performance Tracking</p>
                                <p className="text-[10px] opacity-60 font-bold tracking-widest uppercase">Every rupee accounted for</p>
                             </div>
                          </div>
                       </div>
                       <Button size="lg" className="w-full mt-10 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest py-8 rounded-2xl">
                          Get Free Account Audit
                       </Button>
                    </div>
                 </FadeIn>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
