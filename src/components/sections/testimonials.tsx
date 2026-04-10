import TestimonialCard from "@/components/ui/testimonial-card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Saiyed Aziz",
      role: "Performance Marketer",
      image: "/images/testimonials/saiyed-aziz.png",
      content: "Joining Rexmyze Academy was the best decision for my career. The practical training and AI tools integration made learning so much easier and relevant to today's industry需求.",
      rating: 5,
    },
    {
      name: "Zaki Vohra",
      role: "Social Media Strategist",
      image: "/images/testimonials/zaki-vohra.png",
      content: "As a business owner, I needed skills to grow my brand online. The expert trainers at Rexmyze Academy provided me with exactly what I needed - clear, practical, and effective strategies.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "SEO & Analytics Expert",
      image: "/images/testimonials/amit-patel.png",
      content: "The focus on live projects at Rexmyze Agency based training helped me land a job within weeks. Highly recommended for anyone looking for real skills.",
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
