"use client";

import { useState } from "react";
import { Plus, Minus, ChevronRight, HelpCircle, MessageCircle, Phone } from "lucide-react";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can join the digital marketing course?",
      answer: "Our courses are designed for everyone! Whether you are a student, a job seeker, a working professional looking to upskill, or a business owner wanting to grow your brand, our curriculum caters to all levels."
    },
    {
      question: "Do I need any technical or coding background?",
      answer: "Not at all. Digital marketing is highly non-technical. If you can use a smartphone and browse the internet, you can learn digital marketing. We teach everything from scratch."
    },
    {
      question: "What is the duration of the Masterclass course?",
      answer: "The Advanced Digital Marketing Masterclass typically spans 3-4 months, depending on the batch type (weekend or weekday). This includes hands-on practical training and live project work."
    },
    {
      question: "Do you provide 100% job placement assistance?",
      answer: "Yes! We have a dedicated placement cell that helps you with resume building, mock interviews, and connects you with our network of 200+ hiring partners in Ahmedabad and across India."
    },
    {
      question: "Will I get any certificates after the course?",
      answer: "Absolutely. You will receive a course completion certificate from Rexmyze Academy, along with guidance to earn 15+ industry-recognized certifications from Google, Meta, HubSpot, and more."
    },
    {
      question: "Do you offer offline (classroom) training?",
      answer: "Yes, we are highly known for our classroom training at our Maninagar center in Ahmedabad. We believe in face-to-face interaction for the best practical learning experience."
    },
    {
      question: "Can I pay the course fee in installments?",
      answer: "Yes, we offer flexible EMI and installment options to make the course accessible for all students. Contact our counselor for more details on the fee structure."
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-10">
      {/* FAQ Hero */}
      <section className="py-24 bg-background text-foreground relative overflow-hidden">
         <div className="absolute top-0 right-0 z-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/10 blur-[150px]" />
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn direction="up">
               <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black tracking-widest text-primary mb-8">
                  Support Center
               </span>
               <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
                  Common <span className="highlight-primary">Questions</span> <br />
                  Answered for You
               </h1>
               <p className="text-lg text-foreground/60 font-medium italic border-l-4 border-primary pl-6 max-w-xl mx-auto">
                  Everything you need to know about our digital marketing courses, placements, and career guidance in one place.
               </p>
            </FadeIn>
         </div>
      </section>

      {/* Accordion Section */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
               <StaggerContainer className="space-y-4">
                  {faqs.map((faq, i) => (
                     <StaggerItem key={i}>
                        <div className={`rounded-3xl border transition-all duration-300 ${openIndex === i ? 'border-primary bg-primary/5 shadow-xl' : 'border-border bg-card hover:border-primary/30'}`}>
                           <button 
                              onClick={() => setOpenIndex(openIndex === i ? null : i)}
                              className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                           >
                              <span className={`text-lg md:text-xl font-black tracking-tight ${openIndex === i ? 'text-primary' : 'text-foreground'}`}>
                                 {faq.question}
                              </span>
                              <div className={`shrink-0 ml-4 h-8 w-8 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-muted text-foreground'}`}>
                                 {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                              </div>
                           </button>
                           {openIndex === i && (
                              <div className="px-6 md:px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                                 <p className="text-muted-foreground leading-relaxed font-medium italic border-l-2 border-primary/30 pl-6">
                                    {faq.answer}
                                 </p>
                              </div>
                           )}
                        </div>
                     </StaggerItem>
                  ))}
               </StaggerContainer>
            </div>
         </div>
      </section>

      {/* Still have questions? */}
      <section className="py-24 bg-card border-y border-border">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn direction="up">
               <div className="max-w-3xl mx-auto space-y-10">
                  <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
                     <HelpCircle size={40} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight italic">
                     Still Have <span className="text-primary italic underline underline-offset-8">Questions?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground font-medium italic">
                     Our expert counselors are happy to help you with personalized career guidance and course details.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 pt-6">
                     <Link href="/contact">
                        <Button size="lg" className="py-8 px-10 text-lg font-black tracking-widest rounded-xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 active:scale-[0.98] transition-all">
                           Contact Support
                           <ChevronRight size={20} className="ml-2" />
                        </Button>
                     </Link>
                     <a href="tel:7096181126">
                        <button className="flex items-center gap-3 px-10 py-4 bg-white border-2 border-primary text-primary font-black rounded-xl hover:bg-primary/5 transition-colors">
                           <Phone size={20} />
                           7096181126
                        </button>
                     </a>
                  </div>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
               <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-white space-y-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                     <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight uppercase">
                     Start Your <span className="italic underline underline-offset-8">Growth</span> Journey <br />
                     Today
                  </h2>
                  <p className="max-w-xl mx-auto text-white/80 font-medium italic text-lg">
                     Join thousands of graduates building successful careers in digital marketing.
                  </p>
                  <Link href="/book-demo" className="inline-block">
                     <Button variant="secondary" size="lg" className="py-10 px-16 text-xl font-black rounded-2xl shadow-2xl hover:scale-105 transition-all">
                        Book Your Demo Class
                        <MessageCircle size={24} className="ml-3" />
                     </Button>
                  </Link>
               </div>
            </FadeIn>
         </div>
      </section>
    </div>
  );
}
