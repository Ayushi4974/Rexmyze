import CourseCard from "@/components/ui/course-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function TopCourses() {
  const topCourses = [
    {
      title: "Advanced SEO",
      description: "Master technical, on-page, and off-page SEO to rank any website on the first page.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "12",
      slug: "seo",
      category: "Performance",
    },
    {
      title: "Google Ads",
      description: "Master search, display, and video campaigns to drive high-quality traffic and ROI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "10",
      slug: "google-ads",
      category: "Performance",
    },
    {
      title: "Social Ads",
      description: "Create high-converting Facebook and Instagram campaigns to fuel brand growth.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "10+",
      slug: "social-media-marketing",
      category: "Social",
    },
    {
      title: "AI-Based Marketing",
      description: "Learn to use cutting-edge AI tools for modern and efficient marketing strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "15+",
      slug: "ai-marketing",
      category: "Modern",
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-10">
            <div className="max-w-2xl">
              <div className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                Premium Training Programs
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
                Our <span className="text-primary italic">Top</span> Courses
              </h2>
              <p className="text-lg text-muted-foreground font-medium italic border-l-4 border-primary pl-6">
                Choose from our curated selection of AI-powered digital marketing courses 
                designed to turn beginners into industry experts in just 2 months.
              </p>
            </div>
            <Link href="/courses">
              <button className="btn-outline hidden md:flex items-center gap-2 px-10 py-5">
                View All Courses
                <ChevronRight size={18} />
              </button>
            </Link>
          </div>
        </FadeIn>
 
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topCourses.map((course, i) => (
            <StaggerItem key={i}>
              <CourseCard 
                {...course}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center md:hidden">
            <Link href="/courses">
              <Button variant="outline" className="w-full">
                View All Courses
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
