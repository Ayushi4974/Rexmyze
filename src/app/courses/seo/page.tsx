import { CheckCircle2, Clock, BookOpen, Star, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function SEOCoursePage() {
  const course = {
    title: "SEO Course in Ahmedabad",
    subtitle: "Learn SEO the Practical Way – Step by Step at Rexmyze Academy",
    description: "If you have ever wondered how some websites appear on the first page of Google while others don't, the answer is SEO. We teach ranking modules with a clear focus on live projects.",
    duration: "2 to 3 Months",
    modules: "12+",
    rating: "4.9/5",
    students: "500+",
    curriculum: [
      { title: "Understanding SEO Basics", items: ["What SEO really means", "How search engines decide rankings", "Types of SEO and their purpose", "How people search online"] },
      { title: "Keyword Research", items: ["Finding useful keywords", "Understanding search demand", "Choosing the right topics", "Competitor study"] },
      { title: "On-Page Optimization", items: ["Titles and descriptions", "Structuring content clearly", "Improving URLs and images", "Internal linking"] },
      { title: "Technical Understanding", items: ["Indexing/Crawling", "Page speed importance", "Mobile friendliness", "Fixing site issues"] },
      { title: "Off-Page & Local SEO", items: ["Backlink strategies", "Building credibility", "Google Business Profile", "Location-based search"] },
    ],
    features: [
      "No coding knowledge required",
      "Hands-on sessions on real websites",
      "Keyword research tool training",
      "Small batch sizes for focus",
      "100% Practical Assignment Based"
    ]
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative py-24 bg-foreground text-background overflow-hidden">
        <div className="absolute top-0 right-0 -z-0 opacity-20 translate-x-1/4 -translate-y-1/4">
          <BookOpen size={600} className="text-primary-foreground" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Most Practical SEO Training
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
                 <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                   Contact Advisor
                 </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-video overflow-hidden rounded-3xl border-8 border-zinc-800 shadow-2xl">
                 <Image 
                   src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=1000&auto=format&fit=crop"
                   alt="SEO Course"
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
              <h2 className="text-3xl font-bold mb-8">What You'll <span className="text-primary">Learn</span></h2>
              <div className="space-y-4">
                {course.curriculum.map((module, index) => (
                  <div key={index} className="border border-border rounded-xl p-6 bg-card">
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
              <div className="bg-muted/30 p-8 rounded-3xl border border-border sticky top-24">
                <h3 className="text-xl font-bold mb-6">Course <span className="text-primary italic">Highlights</span></h3>
                <div className="space-y-4 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-accent h-5 w-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full py-6 rounded-xl font-bold">Download Full Syllabus</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
