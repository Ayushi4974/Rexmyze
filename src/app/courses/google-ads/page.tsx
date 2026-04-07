import { CheckCircle2, Clock, BookOpen, Star, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GoogleAdsCoursePage() {
  const course = {
    title: "Google Ads Course in Ahmedabad",
    subtitle: "Learn Google Ads from Scratch with 100% Practical Training",
    description: "Master the fastest growing digital marketing skill. Learn to create search, display, and YouTube ad campaigns that generate real leads and sales for businesses.",
    duration: "2 Months",
    modules: "10+",
    rating: "4.8/5",
    students: "400+",
    curriculum: [
      { title: "Basics of Google Ads", items: ["What is PPC (Pay Per Click)", "How Google Ads works", "Understanding search ads networks"] },
      { title: "Keyword & Bidding", items: ["Keyword research tools", "Bidding strategies", "Budget control and optimization"] },
      { title: "Campaign Setup & Ads", items: ["Campaign goals and locations", "Writing headlines/descriptions", "Using ad extensions"] },
      { title: "Conversion Tracking", items: ["Tracking calls and form leads", "Measuring performance", "Performance reporting"] },
      { title: "Display & YouTube Ads", items: ["Creating display networks ads", "YouTube ads introduction", "Remarketing strategies"] },
    ],
    features: [
      "Create real live campaigns",
      "Think like a professional advertiser",
      "Lead generation focused learning",
      "Optimize for lower CPC",
      "Support for career direction"
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative py-24 bg-foreground text-background overflow-hidden">
        <div className="absolute top-0 right-0 -z-0 opacity-20 translate-x-1/4 -translate-y-1/4">
          <BookOpen size={600} className="text-secondary-foreground" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Pay-Per-Click Mastery
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{course.title}</h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">{course.subtitle}</p>
              
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
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button size="lg" className="px-10">Book Free Demo</Button>
                 <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                    Syllabus Details
                 </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-video overflow-hidden rounded-3xl border-8 border-zinc-800 shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop"
                   alt="Google Ads Training"
                   fill
                   className="object-cover transition-transform group-hover:scale-105 duration-700"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold mb-8">Course <span className="text-primary">Syllabus</span></h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border border-border rounded-xl p-6 bg-card transition-all hover:border-primary/30">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                       <span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">{index + 1}</span>
                       {module.title}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                      {module.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                           <div className="h-1 w-1 bg-primary rounded-full" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-muted/30 p-8 rounded-3xl border border-border sticky top-24">
                <h3 className="text-xl font-bold mb-6">Why Rexmyze?</h3>
                <div className="space-y-4 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full py-6 rounded-xl font-bold">Ask for Details</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
