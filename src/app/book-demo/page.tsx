import { Calendar, Clock, Star, Play, CheckCircle2, Award, Zap, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BookDemoPage() {
  const benefits = [
    { title: "Live Session", description: "Experience our teaching style in a real-time live environment.", icon: Play },
    { title: "Career Roadmap", description: "Get a personalized digital marketing career roadmap during the demo.", icon: Zap },
    { title: "AI Tool Demo", description: "Witness the power of AI tools like ChatGPT, Gemini, and Midjourney.", icon: CheckCircle2 },
    { title: "Certificate Guidance", description: "Understand how to earn Google, Meta, and HubSpot certificates.", icon: Award },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden pt-10">
      {/* Book Demo Hero */}
      <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
         {/* Background Shapes */}
         <div className="absolute top-1/2 left-0 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[150px]" />
         <div className="absolute top-0 right-0 -z-0 h-[800px] w-[800px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/20 blur-[120px]" />

         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              
              {/* Left Side: Copy */}
              <div className="lg:col-span-7">
                 <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary mb-10 animate-pulse">
                    <span className="relative flex h-2 w-2">
                       <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                       <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    Live Batch Starting 09 Apr
                 </div>
                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-10 leading-[0.95]">
                    Take a <span className="highlight-red">Free Demo</span> <br />
                    Lecture & Start <br />
                    Your Career!
                 </h1>
                 <p className="text-xl text-background/60 mb-14 max-w-xl font-medium italic border-l-4 border-primary pl-8">
                    Discover why Rexmyze is Ahmedabad's #1 AI-powered digital marketing institute. 
                    Reserve your seat for an exclusive demo session.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex gap-6 group">
                         <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                            <benefit.icon size={28} />
                         </div>
                         <div>
                            <p className="font-black text-lg mb-2 uppercase tracking-tight">{benefit.title}</p>
                            <p className="text-[11px] opacity-50 leading-relaxed italic font-medium">{benefit.description}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Right Side: High Conversion Form */}
              <div className="lg:col-span-5 relative">
                 <div className="bg-white text-black p-12 md:p-16 rounded-[3.5rem] shadow-2xl border-[12px] border-primary relative z-10 flex flex-col items-center text-center">
                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Reserve Your <span className="text-primary italic underline underline-offset-4">Spot</span></h3>
                    <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-12">No charges. Limited 50 seats per batch.</p>
                    
                    <form className="space-y-6 w-full text-left">
                       <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                          <input type="text" placeholder="Your Name" className="w-full bg-muted/30 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all h-16" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Mobile Number</label>
                          <input type="tel" placeholder="+91 00000 00000" className="w-full bg-muted/30 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all h-16" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-muted-foreground ml-1">Select Course</label>
                          <select className="w-full bg-muted/30 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all h-16 appearance-none">
                             <option>Advanced AI Digital Marketing</option>
                             <option>SEO Masterclass</option>
                             <option>Social Media Marketing</option>
                             <option>Google Ads Specialization</option>
                          </select>
                       </div>
                       <div className="pt-6">
                          <Button size="lg" className="w-full py-10 text-xl font-black uppercase tracking-widest rounded-xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30">
                             Book Free Demo Now
                             <ChevronRight size={24} className="ml-2" />
                          </Button>
                       </div>
                    </form>
                    
                    <div className="mt-10 flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                       <div className="flex items-center gap-2">
                          <Star size={16} className="text-primary fill-current" />
                          <span>4.9/5 Rating</span>
                       </div>
                       <div className="h-4 w-px bg-border" />
                       <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-primary" />
                          <span>ISO Certified</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Decorative Elements */}
                 <div className="absolute -bottom-10 -right-10 h-40 w-40 bg-primary/20 blur-[100px]" />
                 <div className="absolute -top-10 -left-10 h-40 w-40 bg-primary/10 blur-[80px]" />
              </div>

            </div>
         </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="py-24 bg-white dark:bg-black border-b border-border">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-16 border-b border-border pb-4 inline-block">Trusted by students from top institutions</h4>
            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 opacity-30 grayscale pointer-events-none transition-all hover:opacity-100 hover:grayscale-0">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" alt="HubSpot" className="h-8" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft" className="h-8" />
            </div>
         </div>
      </section>
    </div>
  );
}
