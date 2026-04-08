"use client";

import { motion } from "framer-motion";
import { 
  Video, 
  TrendingUp, 
  Search, 
  MousePointer2, 
  ShoppingBag, 
  Share2, 
  MapPin, 
  Code2,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function AgencyServices() {
  const services = [
    { title: "Video Editing", href: "/services/video-editing", icon: Video },
    { title: "Performance Marketing", href: "/services/performance-marketing", icon: TrendingUp },
    { title: "SEO Agency", href: "/services/seo", icon: Search },
    { title: "Google Ads", href: "/services/google-ads", icon: MousePointer2 },
    { title: "E-commerce SEO", href: "/services/ecommerce-seo", icon: ShoppingBag },
    { title: "Social Media", href: "/services/social-media-marketing", icon: Share2 },
    { title: "Local SEO", href: "/services/local-seo", icon: MapPin },
    { title: "Web Development", href: "/services/web-development", icon: Code2 },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-black md:text-5xl mb-6 tracking-tighter uppercase">Rexmyze <span className="text-primary italic">Agency</span> Services</h2>
            <p className="text-lg text-muted-foreground font-medium italic">
              Empowering businesses with data-driven marketing and premium creative solutions.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <Link href={service.href} className="group block h-full">
                <div className="bg-muted/10 border-2 border-border p-8 rounded-[32px] hover:border-primary transition-all hover:bg-white hover:shadow-2xl h-full flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-2xl bg-white border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-tight group-hover:text-primary transition-colors mb-4">{service.title}</h3>
                  <div className="mt-auto flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    Explore Service <ChevronRight size={12} />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
