import CourseCard from "@/components/ui/course-card";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function CoursesPage() {
  const allCourses = [
    {
      title: "Advanced AI Digital Marketing",
      description: "Our most popular course covering 45+ modules with AI integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      duration: "6 Months",
      modules: "45+",
      slug: "advanced-ai-digital-marketing",
      category: "Full Stack",
    },
    {
      title: "SEO Masterclass",
      description: "Deep dive into Search Engine Optimization with live project experience.",
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "12",
      slug: "seo-masterclass",
      category: "Specialized",
    },
    {
      title: "Google Ads Certification",
      description: "Master PPC, Search, Display, and Video ads with hands-on training.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "10+",
      slug: "google-ads",
      category: "Advertising",
    },
    {
      title: "Social Media Marketing",
      description: "Learn how to build brands on Instagram, Facebook, LinkedIn, and more.",
      image: "https://images.unsplash.com/photo-1611162617474-1a21e9a182cd?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "15",
      slug: "social-media",
      category: "Specialized",
    },
    {
      title: "Content Marketing & AI",
      description: "Harness the power of AI to create high-converting content at scale.",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop",
      duration: "1 Month",
      modules: "8",
      slug: "content-marketing",
      category: "AI Focused",
    },
    {
      title: "Shopify & E-commerce",
      description: "Build and scale your own e-commerce store with Shopify and dropshipping.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      duration: "2 Months",
      modules: "10",
      slug: "shopify-ecommerce",
      category: "Business",
    },
  ];

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Our Digital Marketing <span className="text-primary italic">Programs</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive list of courses designed to provide 
              practical, AI-powered training for the modern digital era.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course, i) => (
            <StaggerItem key={i}>
              <CourseCard 
                {...course}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
