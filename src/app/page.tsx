import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import TopCourses from "@/components/sections/top-courses";
import WhyChooseUs from "@/components/sections/why-us";
import AgencyServices from "@/components/sections/agency-services";
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
      <AgencyServices />
      
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

      {/* Contact & Enroll Section */}
      <section className="py-24 bg-muted/30 border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-card border-x-4 border-x-primary rounded-4xl p-8 md:p-16 flex flex-col items-center text-center gap-10 shadow-xl">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-black mb-6 tracking-tight uppercase">
                  Contact & <span className="text-primary italic">Enroll</span>
                </h2>
                <p className="text-muted-foreground text-xl font-medium mb-8 leading-relaxed">
                  Ready to start? Call <span className="text-primary font-black">7096181126</span> or visit <br className="hidden md:block" />
                  <span className="italic">2, Prem Sagar Apartments, Opp Chavla Park, Bhairavnath Char Rasta, Maninagar, Ahmedabad – 380008</span>
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link href="/book-demo">
                    <Button size="lg" className="px-12 py-8 h-auto text-lg font-black uppercase tracking-widest bg-primary hover:bg-primary/90">
                      Enroll Now for a free demo!
                    </Button>
                  </Link>
                </div>
                <p className="mt-10 text-sm font-black text-muted-foreground uppercase tracking-widest opacity-60">
                  Thank you for choosing Rexmyze Academy – let's build your digital future!
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
