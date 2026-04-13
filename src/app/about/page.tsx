import AboutHero from "@/components/sections/about-hero";
import { Award, Eye, Heart, MessageSquare, Target, Users } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function AboutPage() {
  const stats = [
    { label: "Students Trained", value: "10,000+", icon: Users },
    { label: "Placement Rate", value: "100%", icon: Target },
    { label: "Awards Won", value: "25+", icon: Award },
    { label: "Industry Partners", value: "150+", icon: Heart },
  ];

  const values = [
    { title: "Practical Learning", description: "We believe in hands-on training with live projects and case studies.", icon: Target },
    { title: "AI-Powered Focus", description: "Our curriculum is regularly updated with the latest AI tools and trends.", icon: Heart },
    { title: "Expert Mentorship", description: "Our trainers are industry leaders with years of practical experience.", icon: Users },
    { title: "Career Support", description: "From resume building to interview prep, we support you all the way.", icon: MessageSquare },
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-10">
      <AboutHero />

      {/* Stats Ribbon */}
      <section className="py-12 sm:py-20 border-y border-border bg-muted/20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat, i) => (
               <StaggerItem key={i}>
                <div className="flex flex-col items-center text-center group">
                   <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <stat.icon className="size-5 sm:size-7" />
                   </div>
                   <h3 className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2 tracking-tighter">{stat.value}</h3>
                   <p className="text-[9px] sm:text-[10px] font-black tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision Section */}
       <section className="py-16 sm:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <FadeIn direction="left">
                <div className="bg-card border-l-8 sm:border-l-12 border-l-primary border-y border-r border-border p-8 sm:p-12 rounded-r-3xl sm:rounded-r-4xl shadow-sm hover:shadow-xl transition-all">
                   <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-primary flex items-center justify-center text-white mb-6 sm:mb-8">
                      <Target className="size-6 sm:size-7" />
                   </div>
                   <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tight">Our <span className="text-primary italic underline underline-offset-8">Mission</span></h2>
                   <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-medium italic">
                     "To bridge the gap between traditional education and industry requirements by providing 
                     the most advanced, practical, and AI-driven digital marketing training in Ahmedabad."
                   </p>
                </div>
              </FadeIn>
              <FadeIn direction="right">
                <div className="bg-background text-foreground p-8 sm:p-12 rounded-3xl sm:rounded-none sm:rounded-l-3xl shadow-2xl border-r-8 sm:border-r-12 border-r-primary hover:-translate-x-2 transition-all">
                   <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-primary flex items-center justify-center text-white mb-6 sm:mb-8">
                      <Eye className="size-6 sm:size-7" />
                   </div>
                   <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-tight">Our <span className="text-primary italic underline underline-offset-8">Vision</span></h2>
                   <p className="opacity-80 text-base sm:text-lg leading-relaxed font-medium italic">
                     "To be the world's leading destination for digital skills training, empowering 1 Million+ 
                     individuals to achieve financial freedom through AI-powered technology."
                   </p>
                </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <FadeIn direction="up">
             <div className="mb-20">
                <h2 className="text-4xl font-black md:text-5xl mb-8 tracking-tighter">Values That <span className="text-primary italic">Define</span> Us</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
                   At Rexmyze, we don't just follow trends; we set them. Our core values reflect our commitment to excellence.
                </p>
             </div>
           </FadeIn>
           <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v, i) => (
                <StaggerItem key={i}>
                  <div className="bg-card border-b-8 border-b-transparent hover:border-b-primary border border-border p-10 transition-all group">
                     <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all mx-auto">
                        <v.icon size={24} />
                     </div>
                     <h3 className="font-black text-lg mb-4 tracking-tight">{v.title}</h3>
                     <p className="text-sm text-muted-foreground leading-relaxed italic font-medium">
                        {v.description}
                     </p>
                  </div>
                </StaggerItem>
              ))}
           </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
