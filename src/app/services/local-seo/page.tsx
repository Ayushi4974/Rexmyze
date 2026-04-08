"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Search, 
  CheckCircle2, 
  ChevronRight,
  Target,
  Users,
  Star,
  Globe,
  Navigation,
  Smartphone
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function LocalSEOService() {
  const steps = [
    { title: "Business Analysis", desc: "We study your market, services, and competitors in Ahmedabad." },
    { title: "SEO Audit", desc: "We identify gaps in your current presence and find opportunities." },
    { title: "Strategy Development", desc: "We design a tailored approach focused on your specific goals." },
    { title: "Implementation", desc: "We optimize listings, website, and local signals step by step." }
  ];

  const categories = [
    "Healthcare Providers", "Restaurants & Cafés", "Local Service Companies", 
    "Retail Stores", "Real Estate Professionals", "Educational Institutes", 
    "Home Service Businesses", "Consultants & Agencies"
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
                   Dominate Your Local Market
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  Local SEO In <br />
                  <span className="bg-[#54A0D6] text-white px-4 py-1 inline-block mt-2 italic underline underline-offset-8 decoration-white/30">Ahmedabad.</span>
                </h1>
                <div className="border-l-4 border-[#54A0D6] pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     When someone searches for "best service near me" they scan the first few options and call. Decisions happen in minutes.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  Rexmyze Agency helps businesses become visible exactly where customers are searching. 
                  We connect you with nearby people who are already looking for what you offer.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest bg-[#54A0D6] hover:bg-[#54A0D6]/90 shadow-xl shadow-[#54A0D6]/20">
                    Get Found Locally
                    <Navigation className="ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative">
               <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto p-12 bg-white rounded-[64px] shadow-2xl border-4 border-[#54A0D6]">
                  <div className="absolute top-0 right-0 p-8">
                     <Star size={40} className="text-orange-400 fill-current" />
                  </div>
                  <div className="h-full w-full flex flex-col justify-center gap-8">
                     <div className="p-8 bg-[#54A0D6]/5 rounded-3xl border border-[#54A0D6]/10 flex items-center gap-6">
                        <MapPin size={40} className="text-[#54A0D6]" />
                        <div>
                           <p className="text-2xl font-black text-foreground">Maps Ranking #1</p>
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Optimized Listing</p>
                        </div>
                     </div>
                     <div className="p-8 bg-[#54A0D6]/5 rounded-3xl border border-[#54A0D6]/10 flex items-center gap-6">
                        <Smartphone size={40} className="text-[#54A0D6]" />
                        <div>
                           <p className="text-2xl font-black text-foreground">Mobile Traffic</p>
                           <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Nearby Searches</p>
                        </div>
                     </div>
                     <div className="mt-4 flex items-center gap-3">
                        {[1, 2, 3, 4, 5].map((s) => (
                           <Star key={s} size={20} className="text-orange-400 fill-current" />
                        ))}
                        <span className="ml-2 font-black text-lg">Top Rated</span>
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
                 <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter uppercase">Practical <span className="text-primary italic">Local Roadmap</span></h2>
                 <p className="text-lg text-muted-foreground font-medium italic">We strengthen your presence naturally so you appear in local searches and earn instant trust.</p>
              </div>
           </FadeIn>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
              <FadeIn direction="left">
                 <div className="space-y-12">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="h-14 w-14 shrink-0 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-white transition-all">
                            {i + 1}
                         </div>
                         <div>
                            <h4 className="text-xl font-black mb-2 tracking-tight uppercase">{step.title}</h4>
                            <p className="text-base text-muted-foreground font-medium italic leading-relaxed">{step.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </FadeIn>
              <FadeIn direction="right">
                 <div className="relative aspect-square lg:aspect-4/3 w-full max-w-[500px] ml-auto">
                    <div className="absolute inset-0 bg-[#54A0D6]/5 rounded-3xl blur-[100px] -z-10" />
                    <div className="relative h-full w-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl skew-y-1">
                       <Image 
                         src="/images/services/local-seo.png"
                         alt="Local SEO Map Visualization"
                         fill
                         className="object-cover"
                       />
                    </div>
                 </div>
              </FadeIn>
           </div>

           {/* Industries */}
           <div className="py-20 border-t border-border">
              <FadeIn direction="up">
                 <div className="text-center">
                    <h2 className="text-2xl font-black uppercase tracking-widest text-[#54A0D6] mb-12">Who Can Benefit?</h2>
                 </div>
              </FadeIn>
              <div className="flex flex-wrap justify-center gap-4">
                 {categories.map((cat, i) => (
                   <span key={i} className="px-8 py-4 bg-muted/30 border border-border rounded-2xl font-black text-xs uppercase tracking-widest text-foreground/70 hover:border-primary hover:text-primary transition-all cursor-default">
                      {cat}
                   </span>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
