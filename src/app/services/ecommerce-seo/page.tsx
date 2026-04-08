"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Search, 
  BarChart, 
  CheckCircle2, 
  ChevronRight,
  Zap,
  Layout,
  Tag,
  Rocket,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function EcommerceSEOService() {
  const points = [
    { title: "Fixing Store Structure", desc: "Logical navigation and URL cleanup for better indexing.", icon: Layout },
    { title: "Product Optimization", desc: "Unique, keyword-focused descriptions for every product page.", icon: Tag },
    { title: "Technical Performance", desc: "Speed optimization and mobile usability for shopping.", icon: Zap },
    { title: "Search Intent Mapping", desc: "Targeting 'ready-to-buy' customer queries specifically.", icon: Search }
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
                   Specialized E-commerce SEO
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  Scaling Online <br />
                  <span className="bg-[#54A0D6] text-white px-4 py-1 inline-block mt-2 italic">Revenue.</span>
                </h1>
                <div className="border-l-4 border-[#54A0D6] pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     E-commerce success is not just about launching a website. It's about making sure your store is searchable and trustworthy.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  Rexmyze Agency helps online stores grow through structured, practical SEO improvements 
                  that bring steady results without relying only on daily ad spend.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest bg-[#54A0D6] hover:bg-[#54A0D6]/90 shadow-xl shadow-[#54A0D6]/20">
                    Audit My Store
                    <ShoppingBag className="ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative">
               <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto">
                  <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] -z-10" />
                  <div className="grid grid-cols-2 gap-4">
                     <div className="aspect-4/5 bg-card border-2 border-border p-6 rounded-3xl shadow-xl -rotate-6 translate-y-10 group hover:rotate-0 transition-all">
                        <div className="h-full w-full bg-muted/20 rounded-2xl flex items-center justify-center text-primary/20">
                           <ShoppingBag size={64} />
                        </div>
                     </div>
                     <div className="aspect-4/5 bg-white border-2 border-primary/20 p-6 rounded-3xl shadow-2xl rotate-3 group hover:rotate-0 transition-all">
                        <div className="flex justify-between items-center mb-6">
                           <div className="h-2 w-10 bg-primary/20 rounded-full" />
                           <Rocket size={18} className="text-primary" />
                        </div>
                        <div className="space-y-3">
                           <div className="h-3 w-full bg-muted/20 rounded-full" />
                           <div className="h-3 w-5/6 bg-muted/20 rounded-full" />
                           <div className="h-6 w-1/2 bg-primary/10 rounded-lg mt-4" />
                        </div>
                        <div className="mt-8 pt-6 border-t border-border flex justify-between items-center">
                           <p className="text-[10px] font-black uppercase tracking-wider text-primary">Conversion</p>
                           <ArrowRight size={14} className="text-muted-foreground" />
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
            <FadeIn direction="up">
               <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl sm:text-5xl font-black mb-6 tracking-tighter uppercase">Why Regular SEO is <span className="text-primary italic">Not Enough</span></h2>
                  <p className="text-lg text-muted-foreground font-medium italic">Online stores have unique challenges: thousands of pages, inventory shifts, and duplicate content issues.</p>
               </div>
            </FadeIn>
            
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
               {points.map((p, i) => (
                 <StaggerItem key={i}>
                    <div className="bg-muted/10 p-10 rounded-[40px] border border-border flex gap-8 items-start group hover:bg-white hover:shadow-2xl transition-all">
                       <div className="h-16 w-16 shrink-0 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          <p.icon size={28} />
                       </div>
                       <div>
                          <h4 className="text-xl font-black mb-2 tracking-tight uppercase">{p.title}</h4>
                          <p className="text-base text-muted-foreground font-medium italic leading-relaxed">{p.desc}</p>
                       </div>
                    </div>
                 </StaggerItem>
               ))}
            </StaggerContainer>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <FadeIn direction="left">
                  <h2 className="text-3xl sm:text-4xl font-black mb-8 tracking-tighter uppercase">The <span className="text-primary italic">Benefits</span> of Organic Growth</h2>
                  <div className="space-y-4">
                     {[
                       "Consistent traffic without daily ad spend",
                       "Better-quality visitors who are already searching",
                       "Stronger brand trust through organic rankings",
                       "Lower long-term customer acquisition cost",
                       "Scalable, sustainable sales infrastructure"
                     ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4">
                          <CheckCircle2 className="text-primary" />
                          <span className="font-bold text-foreground/80">{item}</span>
                       </div>
                     ))}
                  </div>
               </FadeIn>
               <FadeIn direction="right">
                 <div className="bg-foreground text-background p-12 rounded-[48px] shadow-2xl">
                    <h3 className="text-xl font-black mb-8 uppercase tracking-wide text-white">Platform Expertise</h3>
                    <div className="flex flex-wrap gap-3">
                       {["Shopify", "WooCommerce", "Magento", "BigCommerce", "Custom Stores"].map((plat, i) => (
                         <span key={i} className="px-6 py-3 bg-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-[#54A0D6] border border-white/10">
                            {plat}
                         </span>
                       ))}
                    </div>
                    <p className="mt-10 text-sm text-muted-foreground italic font-medium">We treat your store as a working system, not just a collection of pages.</p>
                 </div>
               </FadeIn>
            </div>
         </div>
      </section>
    </div>
  );
}
