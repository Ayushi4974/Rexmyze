"use client";

import { useState } from "react";
import { Calendar, Clock, User, Phone, Mail, GraduationCap, ChevronRight, CheckCircle2, Star, PlayCircle, Users, Briefcase, Target, Loader2 } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { Button } from "@/components/ui/button";

export default function BookDemoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "SEO",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", phone: "", course: "SEO" });
      } else {
        const data = await res.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send request. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-10">
      {/* Hero Section */}
      <section className="py-24 bg-background text-foreground relative overflow-hidden">
         <div className="absolute top-0 right-0 z-0 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/20 blur-[150px]" />
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <FadeIn direction="up">
                  <div className="space-y-8">
                     <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black tracking-widest text-primary">
                        Free Trial Class
                     </span>
                     <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] sm:leading-[0.95]">
                        Experience Ahmedabad's <span className="text-primary italic">Best</span> <br /> Digital Training
                     </h1>
                     <p className="text-lg text-foreground/60 font-medium italic border-l-4 border-primary pl-6 max-w-xl">
                        Not sure if digital marketing is for you? Join a free demo session and interact with our industry experts before you decide.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-6 pt-10">
                        <div className="flex gap-4 group">
                           <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                              <Calendar size={24} />
                           </div>
                           <div>
                              <p className="font-black tracking-tighter text-sm">Flexible Slots</p>
                              <p className="text-xs opacity-60">Morning & Evening batches</p>
                           </div>
                        </div>
                        <div className="flex gap-4 group">
                           <div className="h-12 w-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                              <Users size={24} />
                           </div>
                           <div>
                              <p className="font-black tracking-tighter text-sm">Expert Interaction</p>
                              <p className="text-xs opacity-60">Direct Q&A with mentors</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </FadeIn>

               <FadeIn direction="left" delay={0.2}>
                  <div className="bg-card border-6 sm:border-12 border-primary p-8 sm:p-12 rounded-[2.5rem] shadow-2xl relative">
                     <div className="absolute -top-6 -right-6 h-20 w-20 bg-primary rounded-full flex items-center justify-center text-white font-black text-xl rotate-12 shadow-xl border-4 border-white">
                        FREE
                     </div>
                     <h2 className="text-2xl sm:text-3xl font-black mb-8 tracking-tighter">Reserve Your <span className="text-primary italic underline underline-offset-8">Seat</span></h2>
                     
                     {success ? (
                       <div className="py-12 text-center space-y-6">
                         <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
                            <CheckCircle2 size={48} />
                         </div>
                         <h3 className="text-2xl font-black">Seat Reserved!</h3>
                         <p className="text-muted-foreground font-medium italic">We have received your request. Our team will contact you on WhatsApp shortly.</p>
                         <Button variant="outline" onClick={() => setSuccess(false)} className="mt-4">Register Another</Button>
                       </div>
                     ) : (
                       <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black tracking-widest text-muted-foreground ml-1">Full Name</label>
                             <div className="relative">
                                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                                <input 
                                  required
                                  type="text" 
                                  placeholder="Your Name" 
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                  className="w-full bg-muted/50 border-none rounded-xl px-12 py-4 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all" 
                                />
                             </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-[10px] font-black tracking-widest text-muted-foreground ml-1">Phone Number</label>
                                <div className="relative">
                                   <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                                   <input 
                                     required
                                     type="tel" 
                                     placeholder="+91" 
                                     value={formData.phone}
                                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                     className="w-full bg-muted/50 border-none rounded-xl px-12 py-4 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all" 
                                   />
                                </div>
                             </div>
                             <div className="space-y-2">
                                <label className="text-[10px] font-black tracking-widest text-muted-foreground ml-1">Interested In</label>
                                <div className="relative">
                                   <GraduationCap size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                                   <select 
                                     value={formData.course}
                                     onChange={(e) => setFormData({...formData, course: e.target.value})}
                                     className="w-full bg-muted/50 border-none rounded-xl px-12 py-4 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all appearance-none h-14"
                                   >
                                      <option value="SEO">SEO</option>
                                      <option value="Social Media">Social Media</option>
                                      <option value="Google Ads">Google Ads</option>
                                      <option value="Full Masterclass">Full Masterclass</option>
                                   </select>
                                </div>
                             </div>
                          </div>
                          <Button 
                            disabled={loading}
                            type="submit" 
                            size="lg" 
                            className="w-full py-8 text-xl font-black tracking-widest rounded-xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 active:scale-[0.98] transition-all mt-4"
                          >
                             {loading ? <Loader2 className="animate-spin" size={24} /> : (
                               <>
                                 Get Invite Link
                                 <ChevronRight size={24} className="ml-2" />
                               </>
                             )}
                          </Button>
                          <p className="text-[10px] text-center text-muted-foreground font-medium italic">We'll send the demo schedule via WhatsApp within 2 hours.</p>
                       </form>
                     )}
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* What you'll learn in Demo */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <FadeIn direction="up">
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">What's in the <span className="text-primary italic">Free Demo?</span></h2>
                  <p className="text-lg text-muted-foreground font-medium italic">A 90-minute deep dive into the digital ecosystem.</p>
               </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pb-12 sm:pb-0">
               {[
                  { title: "Live Tools", desc: "Watch us use AI tools like ChatGPT for content automation.", icon: PlayCircle },
                  { title: "Career Path", desc: "Get a personalized roadmap for your career goals.", icon: Target },
                  { title: "Live Case Study", desc: "How we scaled an Ahmedabad brand from 0 to 1M.", icon: Star },
                  { title: "Job Market", desc: "Understanding the demand for digital talent in 2024.", icon: Briefcase }
               ].map((item, i) => (
                  <StaggerItem key={i}>
                     <div className="bg-muted/30 p-5 sm:p-8 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all h-full group">
                        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                           <item.icon size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <h3 className="text-sm sm:text-lg font-black mb-2 sm:mb-3 tracking-tighter sm:tracking-tight leading-tight">{item.title}</h3>
                        <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed italic font-medium">{item.desc}</p>
                     </div>
                  </StaggerItem>
               ))}
            </StaggerContainer>
         </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 border-y border-border bg-card">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn direction="up">
               <div className="max-w-4xl mx-auto space-y-10">
                  <div className="flex justify-center gap-2">
                     {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={24} className="fill-primary text-primary animate-pulse" />
                     ))}
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tighter leading-relaxed sm:leading-tight italic">
                     "The demo session at <span className="text-primary italic">Rexmyze</span> was a game-changer. it cleared all my doubts about transitioning to digital marketing."
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                     <div className="h-14 w-14 rounded-full border-2 border-primary p-1">
                        <Image src="https://i.pravatar.cc/150?u=student1" alt="Student" width={56} height={56} className="rounded-full grayscale" />
                     </div>
                     <div className="text-left">
                        <p className="font-black tracking-tighter text-sm">Sneha Patel</p>
                        <p className="text-[10px] text-muted-foreground font-black tracking-widest">Now SEO Executive @ DigitalFlow</p>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* FAQ Mini */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
               <h3 className="text-2xl font-black tracking-widest text-center mb-12 italic">Quick <span className="text-primary italic underline underline-offset-8">Information</span></h3>
               {[
                  { q: "Is it really free?", a: "Yes, 100% free with no obligation to join." },
                  { q: "Offline or Online?", a: "We have both options available at our Maninagar center." },
                  { q: "Do I need any technical skill?", a: "No, anyone from any background can join." }
               ].map((faq, i) => (
                  <FadeIn key={i} direction="up" delay={i * 0.1}>
                     <div className="flex gap-6 items-start p-6 rounded-2xl bg-muted/20 border border-transparent hover:border-primary/10 transition-colors">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white shrink-0 mt-1">
                           <CheckCircle2 size={18} />
                        </div>
                        <div>
                           <p className="font-black tracking-tight mb-1">{faq.q}</p>
                           <p className="text-sm text-muted-foreground font-medium italic">{faq.a}</p>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
