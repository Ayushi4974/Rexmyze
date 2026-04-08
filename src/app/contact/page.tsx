import { Mail, MapPin, Phone, MessageSquare, Clock, Globe, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FadeIn from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export default function ContactPage() {
  const branches = [
    {
      city: "Maninagar Branch (Ahmedabad)",
      address: "2, Prem Sagar Apartments, Opp Chavla Park, Bhairavnath Char Rasta, Maninagar, Ahmedabad – 380008",
      phone: "7096181126",
      email: "info@rexmyze.com",
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden pt-10">
      {/* Contact Hero */}
      <section className="py-24 bg-background text-foreground relative overflow-hidden">
         <div className="absolute top-0 left-0 z-0 opacity-10 -translate-x-1/4 -translate-y-1/4">
            <Globe size={600} />
         </div>
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <FadeIn direction="up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8">
                 Get in <span className="highlight-primary">Touch</span> With Us
              </h1>
              <p className="text-base sm:text-lg md:text-xl opacity-70 max-w-2xl mx-auto font-medium italic border-l-4 border-primary pl-6 ml-auto mr-auto">
                 Have questions about our AI-powered courses or need career guidance? 
                 Our expert team is here to help you 24/7.
              </p>
            </FadeIn>
         </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Branch Information */}
              <div className="lg:col-span-12">
                 <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                      {branches.map((branch, i) => (
                      <StaggerItem key={i}>
                        <div className="bg-card border-b-8 border-b-primary border border-border p-8 sm:p-10 transition-all hover:shadow-2xl group">
                           <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                              <MapPin size={24} />
                           </div>
                           <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6 uppercase tracking-tight">{branch.city}</h3>
                           <div className="space-y-4 sm:space-y-6 text-sm font-medium text-muted-foreground italic">
                              <p className="flex items-start gap-3 leading-relaxed">
                                 <MapPin size={18} className="mt-1 text-primary shrink-0" />
                                 {branch.address}
                              </p>
                              <p className="flex items-center gap-3">
                                 <Phone size={18} className="text-primary shrink-0" />
                                 {branch.phone}
                              </p>
                              <p className="flex items-center gap-3">
                                 <Mail size={18} className="text-primary shrink-0" />
                                 {branch.email}
                              </p>
                           </div>
                        </div>
                      </StaggerItem>
                    ))}
                 </StaggerContainer>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-7">
                 <FadeIn direction="left">
                    <div className="bg-card border-6 sm:border-10 border-primary p-6 sm:p-10 md:p-16 rounded-3xl sm:rounded-4xl shadow-2xl relative">
                       <h2 className="text-2xl sm:text-4xl font-black mb-8 sm:mb-10 uppercase tracking-tighter">Send Us a <span className="text-primary italic underline underline-offset-8">Message</span></h2>
                       <form className="space-y-8">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                             <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-muted/50 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all" />
                             </div>
                             <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-muted/50 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all" />
                             </div>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                             <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                                <input type="tel" placeholder="+91 00000 00000" className="w-full bg-muted/50 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all" />
                             </div>
                             <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Preferred Center</label>
                                <select className="w-full bg-muted/50 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all appearance-none h-16">
                                   <option>Maninagar Branch (Ahmedabad)</option>
                                </select>
                             </div>
                          </div>

                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                             <textarea placeholder="Describe your inquiry..." rows={5} className="w-full bg-muted/50 border-none rounded-xl px-6 py-5 text-sm font-bold focus:ring-4 focus:ring-primary/20 outline-none transition-all resize-none" />
                          </div>

                          <Button size="lg" className="w-full py-6 sm:py-10 text-lg sm:text-xl font-black uppercase tracking-widest rounded-xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 active:scale-[0.98] transition-all">
                             Send Message
                             <ChevronRight size={24} className="ml-2" />
                          </Button>
                       </form>
                    </div>
                 </FadeIn>
              </div>

               {/* Sidebar Info */}
              <div className="lg:col-span-5 space-y-10">
                 <FadeIn direction="right">
                    <div className="bg-background text-foreground p-8 sm:p-12 rounded-3xl sm:rounded-4xl border-r-8 sm:border-r-12 border-r-primary shadow-2xl">
                       <h3 className="text-xl sm:text-2xl font-black mb-10 uppercase tracking-tight">Why Choose <span className="text-primary italic underline underline-offset-4">Rexmyze?</span></h3>
                       <div className="space-y-6 sm:space-y-8 italic font-medium">
                          <div className="flex gap-6 group">
                             <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                <MessageSquare size={22} />
                             </div>
                             <div>
                                <p className="font-black text-lg mb-1 uppercase tracking-tighter">Instant Response</p>
                                <p className="text-xs opacity-60">Our team typically responds within 2 working hours.</p>
                             </div>
                          </div>
                          <div className="flex gap-6 group">
                             <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                <Clock size={22} />
                             </div>
                             <div>
                                <p className="font-black text-lg mb-1 uppercase tracking-tighter">Flexible Timings</p>
                                <p className="text-xs opacity-60">We are open for inquiries from 9 AM to 9 PM IST.</p>
                             </div>
                          </div>
                          <div className="flex gap-6 group">
                             <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                                <Award size={22} />
                             </div>
                             <div>
                                <p className="font-black text-lg mb-1 uppercase tracking-tighter">Award-Winning</p>
                                <p className="text-xs opacity-60">National-award-winning marketing experts.</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </FadeIn>

                 {/* Mock Map Placeholder */}
                 <FadeIn direction="up">
                    <div className="relative aspect-video rounded-3xl sm:rounded-4xl overflow-hidden border-4 sm:border-6 border-primary shadow-2xl group">
                       <Image
                         src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop"
                         alt="Google Map Placeholder"
                         fill
                         className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-primary/30 backdrop-blur-[2px] flex flex-col items-center justify-center p-8 text-center transition-all group-hover:backdrop-blur-0">
                          <div className="bg-white p-4 rounded-full mb-4 shadow-xl">
                             <MapPin size={40} className="text-primary" />
                          </div>
                          <div className="bg-background text-foreground px-6 py-2 rounded-lg font-black text-sm uppercase tracking-widest shadow-2xl">
                             Maninagar, Ahmedabad
                          </div>
                       </div>
                    </div>
                 </FadeIn>
              </div>

           </div>
        </div>
      </section>
    </div>
  );
}
