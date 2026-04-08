import { Rocket, Target, Users, Zap, Briefcase, TrendingUp, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function StartupIncubatorPage() {
  const steps = [
    { title: "Idea Validation", description: "Validate your startup idea with Ahmedabad's top digital marketing and AI experts.", icon: Target },
    { title: "MVP Development", description: "Learn how to build a Minimum Viable Product with no-code and AI tools.", icon: Zap },
    { title: "Growth Hacking", description: "Scale your user base from 0 to 10k with our proven digital strategies.", icon: TrendingUp },
    { title: "Investor Pitching", description: "Master the art of pitching and get ready for Ahmedabad's next funding round.", icon: Rocket },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden pt-10">
      {/* Incubator Hero */}
      <section className="py-24 bg-background text-foreground relative overflow-hidden">
         <div className="absolute top-0 right-0 -z-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/20 blur-[150px]" />
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary mb-10">
                 Entrepreneurship Program
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 sm:mb-10 leading-[0.95]">
                 Rexmyze <span className="highlight-primary">Incubator</span> <br className="hidden sm:block" />
                 From Idea to Exit
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 mb-10 sm:mb-14 max-w-xl mx-auto font-medium italic border-l-4 border-primary pl-6 sm:pl-8 ml-auto mr-auto">
                 Ahmedabad's #1 digital marketing institute is now empowering 
                 founders to build, scale, and fund their startups.
              </p>
            </FadeIn>
         </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
             <div className="text-center mb-20">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Our <span className="text-primary italic underline underline-offset-8">Incubation</span> Roadmap</h2>
             </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-10">
              {steps.map((step, i) => (
                <StaggerItem key={i}>
                  <div className="relative group flex flex-col items-center text-center">
                     <div className="h-20 w-20 rounded-4xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all shadow-xl shadow-primary/10">
                        <step.icon size={32} />
                     </div>
                     <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed italic font-medium">{step.description}</p>
                     {i !== steps.length - 1 && (
                       <div className="hidden lg:block absolute top-10 left-[80%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0" />
                     )}
                  </div>
                </StaggerItem>
              ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Registration / Join Section */}
      <section className="py-24 border-t border-border bg-muted/20 overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
               <FadeIn direction="left">
                 <div className="relative aspect-4/3 rounded-3xl sm:rounded-4xl overflow-hidden border-6 sm:border-[12px] border-primary shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop"
                      alt="Pitch Session"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
               </FadeIn>
               <div className="space-y-12">
                  <FadeIn direction="right">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight uppercase">Ready to <span className="highlight-primary">Scale Your Startup?</span></h2>
                    <div className="space-y-8 font-medium italic mt-12">
                       <div className="flex gap-6 group">
                          <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-all">
                             <CheckCircle2 size={24} />
                          </div>
                          <div>
                             <p className="text-xl font-black mb-1 uppercase tracking-tighter text-foreground">Equity-Free Mentorship</p>
                             <p className="text-sm opacity-60">We focus on your growth, not your cap table. 100% founder-focused.</p>
                          </div>
                       </div>
                       <div className="flex gap-6 group">
                          <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-all">
                             <CheckCircle2 size={24} />
                          </div>
                          <div>
                             <p className="text-xl font-black mb-1 uppercase tracking-tighter text-foreground">Growth Capital Access</p>
                             <p className="text-sm opacity-60">Connect with Rexmyze's network of angel investors in Gujarat.</p>
                          </div>
                       </div>
                    </div>
                    <Button size="lg" className="w-full lg:w-auto py-10 px-16 text-xl font-black uppercase tracking-widest rounded-xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/30 mt-12">
                       Join the Next Batch
                       <ChevronRight size={24} className="ml-2" />
                    </Button>
                  </FadeIn>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
