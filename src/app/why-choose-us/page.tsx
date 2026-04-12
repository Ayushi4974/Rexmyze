import { CheckCircle2, ShieldCheck, Heart, Users, Briefcase, GraduationCap, Trophy, Globe, Zap, Target, Star, Play } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyChooseUsPage() {
  const points = [
    {
      title: "Real-World Experience",
      description: "We don't just teach theory. Our students work on active digital campaigns for real clients, giving them a taste of the professional world before they even graduate.",
      icon: Globe,
      color: "bg-blue-500",
    },
    {
      title: "Industry Experts as Mentors",
      description: "Learn from experts with over 5+ years in the field. They bring current industry trends and secrets directly to the classroom.",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "AI-Powered Curriculum",
      description: "Stay ahead of the curve with our AI-integrated marketing modules. Learn how to use latest tools like ChatGPT, Midjourney, and more for marketing efficiency.",
      icon: Zap,
      color: "bg-amber-500",
    },
    {
      title: "100% Placement Assistance",
      description: "Our dedicated placement cell works tirelessly to connect you with top digital agencies and corporate brands in India and abroad.",
      icon: Trophy,
      color: "bg-emerald-500",
    },
    {
      title: "Small Batch Sizes",
      description: "With only 20 students per batch, we ensure personalized attention and focused learning for every individual.",
      icon: Target,
      color: "bg-rose-500",
    },
    {
      title: "International Certifications",
      description: "Get certified by global giants like Google, Meta, and HubSpot, making your profile stand out to employers worldwide.",
      icon: ShieldCheck,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-muted/30 -z-10 hidden lg:block" style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)" }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div>
                <span className="text-primary font-bold text-xs tracking-widest mb-6 block">The Rexmyze Advantage</span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
                  Why Students <span className="text-primary italic">Choose</span> Us Every Time
                </h1>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl font-medium leading-relaxed italic border-l-4 border-primary pl-6">
                  At Rexmyze Academy, we don't just fill seats; we build futures. Discover why we are Ahmedabad's choice for digital marketing excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/courses">
                    <Button size="lg" className="px-8 py-7 font-black text-lg w-full sm:w-auto">Browse Courses</Button>
                  </Link>
                  <Link href="/book-demo">
                    <button className="btn-outline px-8 py-4 font-bold w-full sm:w-auto">Book Free Demo</button>
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative aspect-square lg:aspect-4/3 rounded-3xl overflow-hidden border-8 border-primary shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="Learning Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center text-primary shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                      <Play fill="currentColor" size={32} className="ml-1" />
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Points Grid */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <FadeIn direction="up">
                <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">Our <span className="text-primary italic">Core Pillars</span></h2>
                <p className="text-lg text-muted-foreground font-medium italic">We've built our reputation on these high standards, ensuring you get the best value for your career investment.</p>
             </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {points.map((point, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                   <div className={`h-16 w-16 rounded-2xl ${point.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-black/10 transition-transform group-hover:rotate-12`}>
                      <point.icon size={32} />
                   </div>
                   <h3 className="text-2xl font-black mb-4 tracking-tighter">{point.title}</h3>
                   <p className="text-muted-foreground leading-relaxed font-medium text-sm italic">
                      {point.description}
                   </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-card border-4 sm:border-8 border-primary rounded-4xl sm:rounded-[3rem] p-6 sm:p-20 shadow-2xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <FadeIn direction="up">
                    <div>
                       <h2 className="text-3xl sm:text-4xl font-black mb-8 leading-tight tracking-tighter">The Rexmyze <br /> <span className="text-primary italic">Transformation</span></h2>
                       <div className="space-y-6">
                          <div className="flex gap-4 items-start">
                             <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                                <CheckCircle2 size={18} />
                             </div>
                             <p className="font-bold text-lg">Individual focused mentoring from day one.</p>
                          </div>
                          <div className="flex gap-4 items-start">
                             <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                                <CheckCircle2 size={18} />
                             </div>
                             <p className="font-bold text-lg">Access to agency-grade premium tools worth ₹1.5L+.</p>
                          </div>
                          <div className="flex gap-4 items-start">
                             <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                                <CheckCircle2 size={18} />
                             </div>
                             <p className="font-bold text-lg">Interview preparation with mock sessions by HR heads.</p>
                          </div>
                       </div>
                    </div>
                 </FadeIn>
                 <div className="relative mt-12 lg:mt-0">
                    <FadeIn direction="up" delay={0.2}>
                        <div className="space-y-4">
                          <div className="bg-muted p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-l-4 sm:border-l-8 border-muted-foreground tracking-tight opacity-60 grayscale scale-95 origin-left">
                             <p className="font-bold text-xs mb-2 uppercase tracking-widest text-muted-foreground">Other Institutes</p>
                             <p className="italic font-medium text-sm sm:text-base">Outdated theoretical knowledge, crowded batches, and lack of real-world application.</p>
                          </div>
                          <div className="bg-primary p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-l-4 sm:border-l-8 border-white text-white tracking-tight shadow-2xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-2 opacity-10">
                                <ShieldCheck size={80} />
                             </div>
                             <p className="font-bold text-xs mb-2 text-white/70 uppercase tracking-widest">The Rexmyze Way</p>
                             <p className="italic font-bold text-base sm:text-lg">100% Practical exposure on live campaigns, AI-integrated learning, and guaranteed job support.</p>
                          </div>
                        </div>
                    </FadeIn>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-primary text-white text-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight italic">
              "We don't teach digital marketing; we build careers."
            </h2>
            <div className="flex items-center justify-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white relative">
                   <Image src="/images/founder.png" alt="Founder" fill className="object-cover" />
                </div>
               <div className="text-left">
                  <p className="font-bold tracking-widest text-xs">Aman Vazirani</p>
                  <p className="text-[10px] text-white/70 font-medium whitespace-nowrap">Founder & CEO, Rexmyze Academy</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
