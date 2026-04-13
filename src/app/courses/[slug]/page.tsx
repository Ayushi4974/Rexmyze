import { CheckCircle2, Clock, BookOpen, Star, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  // Mock data for the demonstration
  const course = {
    title: "Advanced AI Digital Marketing",
    subtitle: "Ahmedabad's Most Comprehensive AI-Powered Digital Marketing Program",
    description: "Master the 45+ modules of digital marketing with a focus on AI power. Get 100% placement assistance and earn international certifications.",
    duration: "6 Months",
    modules: "45+",
    rating: "4.9/5",
    students: "1200+",
    curriculum: [
      { title: "Introduction to Digital Marketing", items: ["History of DM", "Traditional vs Digital", "The DM Funnel"] },
      { title: "AI-Powered Content Strategy", items: ["ChatGPT for Content", "Midjourney for Visuals", "Content Calendar Mastery"] },
      { title: "SEO (Search Engine Optimization)", items: ["On-Page SEO", "Off-Page SEO", "Technical SEO Audits"] },
      { title: "Search Engine Advertising (PPC)", items: ["Google Ads Setup", "Bidding Strategies", "Reporting & Scaling"] },
      { title: "Social Media Mastery (SMM)", items: ["Instagram Growth", "LinkedIn B2B Marketing", "Meta Ads Manager"] },
    ],
    features: [
      "100% Placement Assistance",
      "Official Google & Meta Certifications",
      "Live Practical Projects",
      "Lifetime Community Access",
      "Flexible Batch Timings"
    ]
  };

  return (
    <div className="flex flex-col w-full">
      {/* Course Hero Section */}
      <section className="relative py-24 bg-background text-foreground overflow-hidden">
        <div className="absolute top-0 right-0 -z-0 opacity-20 translate-x-1/4 -translate-y-1/4">
          <BookOpen size={600} className="text-primary-foreground" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Most Popular Course
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">
                {course.subtitle}
              </p>
              
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Duration</span>
                  <span className="text-lg font-bold flex items-center gap-2">
                    <Clock className="text-primary h-5 w-5" />
                    {course.duration}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Modules</span>
                  <span className="text-lg font-bold flex items-center gap-2">
                    <BookOpen className="text-primary h-5 w-5" />
                    {course.modules}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Rating</span>
                  <span className="text-lg font-bold flex items-center gap-2 text-orange-400">
                    <Star className="fill-current h-5 w-5" />
                    {course.rating}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button size="lg" className="px-10">Enroll Now</Button>
                 <a href="/rexmyze-brochure.pdf" target="_blank" className="inline-block">
                   <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 w-full sm:w-auto">
                     Download Brochure
                   </Button>
                 </a>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-video overflow-hidden rounded-3xl border-8 border-zinc-800 shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                   alt="Course Cover"
                   fill
                   className="object-cover transition-transform group-hover:scale-105 duration-700"
                 />
              </div>
              {/* Floating Overlay Card */}
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl hidden md:block">
                 <p className="text-white text-2xl font-bold mb-1">{course.students}</p>
                 <p className="text-primary-foreground/70 text-xs font-bold uppercase tracking-wider">Students Trained</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold mb-8">What You'll <span className="text-primary">Learn</span></h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border border-border rounded-xl p-6 bg-card transition-all hover:border-primary/30">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                       <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">
                         {index + 1}
                       </span>
                       {module.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                      {module.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                           <div className="h-1 w-1 bg-primary rounded-full" />
                           {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-8">
                <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                  <h3 className="text-xl font-bold mb-6">Course <span className="text-primary italic">Highlights</span></h3>
                  <div className="space-y-4">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-accent h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-4 font-bold uppercase tracking-widest text-center">Inquiry for next batch</p>
                    <div className="space-y-3">
                       <input type="text" placeholder="Your Name" className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:ring-2 focus:ring-primary h-12" />
                       <input type="email" placeholder="Email Address" className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:ring-2 focus:ring-primary h-12" />
                       <Button className="w-full py-6 rounded-xl font-bold">Ask for Details</Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                   <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                      <GraduationCap size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-sm">International Certification</p>
                      <p className="text-xs text-muted-foreground">Certified by Rexmyze, Google & Meta</p>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
