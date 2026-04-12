"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Globe, 
  MapPin, 
  BarChart, 
  Zap, 
  CheckCircle2, 
  ChevronRight,
  Target,
  FileSearch,
  Users,
  Award
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function SEOService() {
  const highlights = [
    { title: "SEO Audit", desc: "Complete technical analysis of your site's structure and performance.", icon: FileSearch },
    { title: "Keyword Strategy", desc: "Intent-driven queries that bring meaningful traffic, not just volume.", icon: Target },
    { title: "On-Page SEO", desc: "Refining content, structure, and usability for better indexing.", icon: Globe },
    { title: "Local SEO", desc: "Dominating location-based searches and Google Map results.", icon: MapPin },
    { title: "Content Assets", desc: "Building credibility through useful, search-optimized content.", icon: Award },
    { title: "Monitoring", desc: "Continuous refinement based on trends and performance insights.", icon: BarChart }
  ];

  const industries = [
    "Healthcare Providers",
    "Educational Institutions",
    "Manufacturing Businesses",
    "Real Estate Firms",
    "Professional Services",
    "Local Retail",
    "Emerging Startups"
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
                  6+ Years of Search Excellence
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground mb-10">
                  SEO in <br />
                  <span className="bg-[#54A0D6] text-white px-4 py-1 inline-block mt-2">Ahmedabad</span>
                </h1>
                <div className="border-l-4 border-[#54A0D6] pl-6 mb-12">
                   <p className="text-lg text-muted-foreground font-medium italic">
                     When someone needs a product, they search. If your business isn't on the first page, you're not part of the decision.
                   </p>
                </div>
                <p className="text-muted-foreground mb-10 text-base leading-relaxed">
                  Rexmyze helps businesses improve their visibility through practical and structured SEO 
                  that build strong foundations rather than chasing shortcuts.
                </p>
                <Button size="lg" className="rounded-xl px-10 py-8 text-lg font-black uppercase tracking-widest bg-[#54A0D6] hover:bg-[#54A0D6]/90 shadow-xl shadow-[#54A0D6]/20">
                  Analyze My Website
                  <Search className="ml-2" />
                </Button>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="relative">
               <div className="relative aspect-square w-full max-w-[500px] mx-auto lg:ml-auto p-10 bg-[#54A0D6]/5 rounded-3xl border-2 border-[#54A0D6]/10 overflow-hidden">
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    <Globe size={400} />
                  </div>
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl border border-border"
                  >
                     <div className="flex items-center gap-4 mb-6">
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                        <div className="h-2 w-2 rounded-full bg-yellow-500" />
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <div className="h-4 w-full bg-muted/30 rounded-full" />
                     </div>
                     <div className="space-y-4">
                        <div className="h-6 w-3/4 bg-primary/20 rounded-lg animate-pulse" />
                        <div className="h-4 w-full bg-muted/20 rounded-lg" />
                        <div className="h-4 w-5/6 bg-muted/20 rounded-lg" />
                     </div>
                     <div className="mt-8 flex justify-between items-end">
                        <div className="space-y-2">
                           <div className="h-10 w-10 bg-primary/10 rounded-lg" />
                           <div className="h-3 w-16 bg-muted/30 rounded-full" />
                        </div>
                        <div className="text-right">
                           <p className="text-xs font-black text-primary uppercase">Rank #1</p>
                           <p className="text-2xl font-black text-foreground">Visibility</p>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <FadeIn direction="up">
              <div className="text-center max-w-3xl mx-auto mb-20">
                 <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter uppercase">Our SEO <span className="text-primary italic">Expertise</span></h2>
                 <p className="text-lg text-muted-foreground font-medium italic">Practical foundations for long-term search success.</p>
              </div>
           </FadeIn>
           <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item, i) => (
                <StaggerItem key={i}>
                   <div className="bg-card border border-border p-10 rounded-3xl hover:-translate-y-2 transition-all hover:shadow-2xl group border-b-8 border-b-transparent hover:border-b-primary">
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

      {/* Why Experience Matters */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <FadeIn direction="left">
                    <h2 className="text-3xl sm:text-4xl font-black mb-8 tracking-tighter uppercase">Why Experience <span className="text-primary italic underline underline-offset-8">Matters</span> In SEO</h2>
                    <p className="text-lg text-muted-foreground font-medium italic mb-10 leading-relaxed">
                       Over the past six years, our team has worked with local businesses and growing 
                       brands to improve their search presence using strategies that are practical and measurable.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       {["No Shortcuts", "Sustainable Growth", "Transparent Updates", "Ethical Best Practices"].map((v, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="text-primary" size={20} />
                            <span className="font-bold text-foreground/80">{v}</span>
                         </div>
                       ))}
                    </div>
                 </FadeIn>
              </div>
              <FadeIn direction="right">
                 <div className="bg-white p-10 rounded-[48px] shadow-2xl border border-border">
                    <h3 className="text-xl font-black mb-8 uppercase tracking-tight">Industries We Support</h3>
                    <div className="flex flex-wrap gap-3">
                       {industries.map((ind, i) => (
                         <span key={i} className="px-5 py-3 bg-muted/50 rounded-xl text-xs font-black uppercase tracking-widest text-[#54A0D6] border border-[#54A0D6]/10">
                            {ind}
                         </span>
                       ))}
                    </div>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#54A0D6] text-white rounded-[48px] p-12 md:p-20 relative overflow-hidden text-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white rotate-45" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white -rotate-45" />
              </div>
              <FadeIn direction="up">
                 <h2 className="text-3xl sm:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight">Build Long-Term <br /><span className="italic underline underline-offset-8">Visibility</span> With Rexmyze</h2>
                 <p className="text-xl opacity-80 font-medium italic mb-12 max-w-4xl mx-auto">
                    SEO is not about chasing algorithms. It's about making your business easier to find, understand, and trust online.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button size="lg" className="bg-white text-[#54A0D6] hover:bg-white/90 px-12 py-8 rounded-2xl font-black uppercase tracking-widest">
                       Book Free Consultation
                    </Button>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>
    </div>
  );
}
