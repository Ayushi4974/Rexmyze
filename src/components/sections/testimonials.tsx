import TestimonialCard from "@/components/ui/testimonial-card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sneha Patel",
      role: "Digital Marketing Specialist",
      image: "https://i.pravatar.cc/150?u=sneha",
      content: "Rexmyze's AI-focused curriculum completely changed how I approach marketing. The practical training on live projects was invaluable for my career.",
      rating: 5,
    },
    {
      name: "Rahul Sharma",
      role: "SEO Analyst",
      image: "https://i.pravatar.cc/150?u=rahul",
      content: "I landed my dream job at a top MNC within a month of completing the SEO masterclass. Huge thanks to the placement cell for their support!",
      rating: 5,
    },
    {
      name: "Anjali Mehta",
      role: "Business Owner",
      image: "https://i.pravatar.cc/150?u=anjali",
      content: "As a business owner, I wanted to understand how to scale my brand online. Rexmyze gave me the tools and confidence to manage my own campaigns.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Hear from Our <span className="text-primary italic">Successful</span> Students
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Explore the stories of students who transformed 
            their careers with Rexmyze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard 
              key={i}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
