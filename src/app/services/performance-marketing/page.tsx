"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  MousePointer2, 
  Search, 
  Users, 
  PieChart, 
  CheckCircle2, 
  ChevronRight,
  RefreshCcw,
  Zap,
  ArrowUpRight
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function PerformanceMarketingService() {
  const problems = [
    { title: "Spending Without Clear ROI", desc: "Ads run, money gets spent, but there's no clarity on conversions." },
    { title: "Wrong Audience Targeting", desc: "Campaigns reach people who are not actually interested." },
    { title: "No Optimization", desc: "Once ads are live, they are left untouched." },
    { title: "Lack of Data Analysis", desc: "Decisions are made based on assumptions, not insights." }
  ];

  const services = [
    { title: "Paid Advertising (PPC)", icon: MousePointer2, desc: "Search Ads, Display Campaigns, and Retargeting Bidding Strategies." },
    { title: "Conversion Optimization", icon: Zap, desc: "Landing page analysis and improvements to increase conversion rates." },
    { title: "Social Performance Ads", icon: Users, desc: "Highly targeted paid campaigns on Facebook, Instagram, and LinkedIn." },
    { title: "Remarketing Funnels", icon: RefreshCcw, desc: "Strategies to bring back visitors and guide them to purchase." }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-10">
      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden border-b border-border">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#54A0D6] mb-10">
                  Data-Driven ROI Focus
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  Performance <span className="text-[#54A0D6] italic">Marketing</span> in Ahmedabad
                </h1>
                <div className="border-l-4 border-[#54A0D6] pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     Marketing should not feel like guesswork. If you are spending money on ads, you should clearly see what you are getting in return.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  At Rexmyze Agency, we help businesses move away from random promotion and toward 
                  data-driven campaigns that are built to perform.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest bg-[#54A0D6] hover:bg-[#54A0D6]/90 shadow-xl shadow-[#54A0D6]/20">
                    Get Free Audit
                    <ArrowUpRight className="ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative">
               <div className="relative aspect-square lg:aspect-4/5 w-full max-w-[500px] ml-auto">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10 opacity-30" />
                  <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl skew-y-1">
                     <Image 
                        src="/images/services/performance-hero.png"
                        alt="Performance Marketing Growth"
                        fill
                        className="object-cover"
                     />
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section moved to below Hero */}
      <section className="py-20 bg-muted/20 border-b border-border">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="bg-white p-8 rounded-3xl border border-border text-center">
                  <TrendingUp size={32} className="text-primary mx-auto mb-4" />
                  <p className="text-3xl font-black text-foreground">300%</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Avg ROAS Improvement</p>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-border text-center">
                  <BarChart3 size={32} className="text-primary mx-auto mb-4" />
                  <p className="text-3xl font-black text-foreground">12k+</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Leads Generated</p>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-border text-center">
                  <Target size={32} className="text-primary mx-auto mb-4" />
                  <p className="text-3xl font-black text-foreground">100%</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Transparency</p>
               </div>
               <div className="bg-white p-8 rounded-3xl border border-border text-center">
                  <Users size={32} className="text-primary mx-auto mb-4" />
                  <p className="text-3xl font-black text-foreground">50+</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Scaling Brands</p>
               </div>
            </div>
         </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn direction="up">
              <div className="max-w-3xl mb-16 text-center mx-auto">
                 <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter uppercase">Our Core <span className="text-primary italic">Services</span></h2>
                 <p className="text-lg text-muted-foreground font-medium italic">We treat every campaign like a business investment — not just an advertisement.</p>
              </div>
           </FadeIn>
           <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((item, i) => (
                <StaggerItem key={i}>
                   <div className="bg-card border-2 border-border p-10 rounded-[32px] hover:border-primary transition-all group h-full">
                      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                         <item.icon size={28} />
                      </div>
                      <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">{item.desc}</p>
                   </div>
                </StaggerItem>
              ))}
           </StaggerContainer>
        </div>
      </section>

      {/* Problems & Solutions */}
      <section className="py-24 bg-muted/20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <FadeIn direction="right">
                 <div className="relative aspect-video rounded-3xl overflow-hidden border-8 border-white shadow-2xl skew-y-2">
                    <Image 
                      src="/images/services/ad-failures.png"
                      alt="Data Chaos vs Strategic Growth"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-30" />
                 </div>
               </FadeIn>
               <div>
                  <FadeIn direction="left">
                    <h2 className="text-3xl font-black mb-10 tracking-tighter uppercase">Solving Traditional <br /><span className="text-primary italic">Ad Failures</span></h2>
                    <div className="space-y-8">
                       {problems.map((p, i) => (
                         <div key={i} className="flex gap-6 group">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center font-black text-primary group-hover:bg-primary group-hover:text-white transition-all">
                               {i + 1}
                            </div>
                            <div>
                               <h4 className="font-black text-lg mb-1 tracking-tight">{p.title}</h4>
                               <p className="text-sm text-muted-foreground font-medium italic">{p.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </FadeIn>
               </div>
            </div>
         </div>
      </section>

      {/* Reporting Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-primary text-white rounded-[48px] p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                 <PieChart size={500} />
              </div>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight">Reports That Focus on <span className="italic underline underline-offset-8">Real Metrics</span></h2>
                    <p className="text-lg opacity-80 font-medium italic mb-10">We don't care about "Impressions". We care about your Revenue.</p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                          <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Lead Metric</p>
                          <p className="text-xl font-black text-white/90">Cost Per Lead (CPL)</p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                          <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Efficiency</p>
                          <p className="text-xl font-black text-white/90">Conversion Rate</p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                          <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Returns</p>
                          <p className="text-xl font-black text-white/90">ROAS Tracking</p>
                       </div>
                       <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                          <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">Acquisition</p>
                          <p className="text-xl font-black text-white/90">CAC Management</p>
                       </div>
                    </div>
                 </div>
                 <div className="relative h-[300px] lg:h-[400px] w-full">
                    <div className="absolute inset-0 bg-white p-4 rounded-[32px] shadow-2xl lg:rotate-3">
                       <Image 
                         src="/images/services/performance-dashboard.png"
                         alt="Performance Dashboard Graph"
                         fill
                         className="rounded-2xl object-cover"
                       />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
