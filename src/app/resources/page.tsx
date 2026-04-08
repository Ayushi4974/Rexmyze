import { Download, FileText, CheckCircle2, Search, ChevronRight, PlayCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  const resources = [
    {
      title: "AI Marketing eBook 2026",
      description: "A comprehensive guide to 50+ AI tools for SEO, SMM, and Meta Ads. Ahmedabad's #1 downloaded guide.",
      type: "eBook",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
      size: "12.4 MB",
    },
    {
      title: "Digital Marketing Checklist",
      description: "The daily morning checklist used by agency professionals to manage multi-million budgets.",
      type: "PDF Guide",
      image: "https://images.unsplash.com/photo-1512314889357-115e1227167a?q=80&w=1000&auto=format&fit=crop",
      size: "2.1 MB",
    },
    {
      title: "Google Ads Secret Hacks",
      description: "Understand the auction physics and learn how to reduce your CPC by 40% instantly.",
      type: "Cheatsheet",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      size: "1.5 MB",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden pt-10">
      {/* Resources Hero */}
      <section className="py-24 bg-white  relative">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary mb-8">
               Free Learning Material
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 sm:mb-10 leading-[0.95]">
               Digital <span className="highlight-primary">Resources</span> Center
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground opacity-70 max-w-2xl mx-auto font-medium italic border-l-4 border-primary pl-6 sm:pl-8 ml-auto mr-auto">
               Download high-value eBook, checklists, and guides curated by 
               the experts at Ahmedabad's #1 digital marketing institute.
            </p>
         </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 border-t border-border bg-muted/20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {resources.map((res, i) => (
                 <div key={i} className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-video overflow-hidden">
                       <Image
                         src={res.image}
                         alt={res.title}
                         fill
                         className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                       />
                       <div className="absolute top-0 left-0 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">
                          {res.type}
                       </div>
                    </div>
                    <div className="p-10 flex flex-1 flex-col">
                       <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {res.title}
                       </h3>
                       <p className="text-sm text-muted-foreground font-medium grow mb-10 italic">
                          {res.description}
                       </p>
                       <div className="flex items-center justify-between mt-auto">
                          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{res.size}</span>
                          <Button className="bg-primary hover:bg-primary/90 rounded-lg px-8 py-6 font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
                             Download Now
                             <Download size={16} className="ml-2" />
                          </Button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            {/* Exclusive Video Workshop Invite */}
            <div className="mt-16 sm:mt-24 bg-background text-foreground p-8 sm:p-12 md:p-16 rounded-3xl border-l-8 sm:border-l-12 border-l-primary shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 relative overflow-hidden">
               <div className="absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4 pointer-events-none">
                  <PlayCircle className="size-64 sm:size-[400px]" />
               </div>
               <div className="relative z-10 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tighter">Want more <span className="text-primary italic">Practical</span> Insights?</h3>
                  <p className="text-base sm:text-lg opacity-60 font-medium italic mb-8 lg:mb-0">Join our next live workshop on AI-Powered Google Ads Strategies.</p>
               </div>
               <div className="relative z-10 w-full lg:w-auto">
                  <Button size="lg" className="bg-white text-primary hover:bg-muted font-black uppercase tracking-widest text-xs px-8 sm:px-12 py-6 sm:py-8 rounded-xl shadow-2xl w-full sm:w-auto text-center justify-center">
                     Watch Demo Workshop <ChevronRight size={18} className="ml-2" />
                  </Button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
