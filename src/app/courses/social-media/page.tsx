import { CheckCircle2, Clock, BookOpen, Star, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SMMCoursePage() {
  const course = {
    title: "Social Media Marketing Course",
    subtitle: "Learn SMM in Ahmedabad with Practical Content Strategy",
    description: "Master Instagram, Facebook, and Reels. Learn how to grow followers organically and create high-converting social media ads that build brand engagement.",
    duration: "2 Months",
    modules: "12+",
    rating: "4.9/5",
    students: "600+",
    curriculum: [
      { title: "SMM Basics", items: ["Importance for business", "Platform algorithms", "Page optimization"] },
      { title: "Content Planning", items: ["Content calendars", "Caption writing", "Hashtag strategies"] },
      { title: "Instagram Mastery", items: ["Reels growth", "Organic reach", "Story engagement"] },
      { title: "Meta Ads Intro", items: ["Setting up ad ads", "Audience targeting", "Creative testing"] },
      { title: "Performance Tracking", items: ["Measuring engagement", "Reach analysis", "Reporting results"] },
    ],
    features: [
      "100% Practical content creation",
      "Instagram Reels strategy secrets",
      "Small batches for personal attention",
      "Live example analysis",
      "Friendly learning environment"
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative py-24 bg-background text-foreground overflow-hidden">
        <div className="absolute top-0 right-0 z-0 opacity-20 translate-x-1/4 -translate-y-1/4">
          <BookOpen size={600} className="text-secondary-foreground" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-6">Social Media Success</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{course.title}</h1>
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl">{course.subtitle}</p>
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Duration</span>
                  <span className="text-lg font-bold flex items-center gap-2"><Clock className="text-primary h-5 w-5" />{course.duration}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Modules</span>
                  <span className="text-lg font-bold flex items-center gap-2"><BookOpen className="text-primary h-5 w-5" />{course.modules}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                 <Button size="lg" className="px-10">Get Started</Button>
                 <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-300">Brochure Details</Button>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-video overflow-hidden rounded-3xl border-8 border-zinc-800 shadow-2xl">
                 <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop" alt="SMM Training" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold mb-8">What You'll <span className="text-primary">Learn</span></h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border border-border rounded-xl p-6 bg-card transition-all hover:border-primary/30">
                    <h3 className="font-bold mb-3 flex items-center gap-2"><span className="h-6 w-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">{index + 1}</span>{module.title}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                      {module.items.map((item, i) => (<li key={i} className="text-sm text-muted-foreground flex items-center gap-2"><div className="h-1 w-1 bg-primary rounded-full" />{item}</li>))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-muted/30 p-8 rounded-3xl border border-border sticky top-24">
                <h3 className="text-xl font-bold mb-6">Course Highlights</h3>
                <div className="space-y-4 mb-8">
                  {course.features.map((feature, i) => (<div key={i} className="flex items-center gap-3"><CheckCircle2 className="text-accent h-5 w-5 shrink-0" /><span className="text-sm font-medium">{feature}</span></div>))}
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
