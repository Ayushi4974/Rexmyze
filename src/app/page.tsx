import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import TopCourses from "@/components/sections/top-courses";
import WhyChooseUs from "@/components/sections/why-us";
import Testimonials from "@/components/sections/testimonials";
import Partners from "@/components/sections/partners";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Stats />
      <TopCourses />
      <WhyChooseUs />
      
      {/* Mid-Page Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
              Ready to Start Your Digital Career?
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-primary-foreground/80 text-lg">
              Join 1200+ successful students who have transformed their lives with our 
              AI-powered practical training.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-demo">
                <Button variant="accent" size="lg">
                  Book a Free Demo
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Testimonials />
      <Partners />

      {/* Final Newsletter/Lead Capture Section */}
      <section className="py-24 bg-muted/30 border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-card border border-border rounded-4xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 tracking-tight">
                  Not sure which course is <span className="text-primary italic">right for you?</span>
                </h2>
                <p className="text-muted-foreground text-lg">
                  Get a free career counseling session with our expert mentors. 
                  Simply drop your details and we'll call you back!
                </p>
              </div>
              
              <div className="w-full md:w-auto shrink-0">
                 <Link href="/contact">
                    <Button size="lg" className="w-full px-12 group">
                      Get Free Counseling
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                 </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
