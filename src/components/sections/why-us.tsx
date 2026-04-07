import { CheckCircle2, ShieldCheck, Heart, Users, Briefcase, GraduationCap } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Trainers",
      description: "Industry veterans with 5+ years of experience running active digital campaigns.",
      icon: Users,
    },
    {
      title: "Practical Focus",
      description: "Live projects and real client work, not just theory. Practical hands-on training.",
      icon: ShieldCheck,
    },
    {
      title: "Comprehensive Curriculum",
      description: "Complete SEO, PPC, social media, and AI integration for future-ready skills.",
      icon: GraduationCap,
    },
    {
      title: "Job Support",
      description: "Ideal for students, job seekers, and freelancers with 100% placement assistance.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose the <span className="text-primary italic">Best Digital Marketing Institute</span> in Ahmedabad?
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just teach digital marketing; we build careers. Here's why students 
            and professionals trust us for their future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <div key={i} className="flex gap-4 group">
              <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-white dark:bg-zinc-800 border border-border shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <feature.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
