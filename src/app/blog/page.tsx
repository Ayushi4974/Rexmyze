import { Calendar, User, Search, ChevronRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const posts = [
    {
      title: "Mastering AI-Driven Marketing in 2026",
      excerpt: "Discover how AI tools like ChatGPT, Gemini, and Midjourney are transforming the digital marketing landscape in Ahmedabad and beyond.",
      date: "02 Apr, 2026",
      author: "Sandeep Gupta",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop",
      category: "AI Marketing",
    },
    {
      title: "SEO Checklist for Local Businesses",
      excerpt: "A comprehensive guide to Search Engine Optimization for small businesses in Gujarat. Get found on Google's first page.",
      date: "28 Mar, 2026",
      author: "Priya Varma",
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=1000&auto=format&fit=crop",
      category: "SEO",
    },
    {
      title: "The Ultimate Guide to Meta Ads",
      excerpt: "Learn how to run high-converting Facebook and Instagram ads with a limited budget. Practical strategies for 2026.",
      date: "20 Mar, 2026",
      author: "Rajesh Kumar",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
      category: "Paid Ads",
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden pt-10">
      {/* Blog Hero */}
      <section className="py-24 bg-white dark:bg-black relative">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary mb-8">
               Knowledge & Insights
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-8 sm:mb-10 leading-[0.95]">
               The <span className="highlight-red">Rexmyze</span> Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground opacity-70 max-w-2xl mx-auto font-medium italic border-l-4 border-primary pl-6 sm:pl-8 ml-auto mr-auto">
               Latest trends, strategies, and AI-powered insights from the leaders 
               in digital marketing training.
            </p>
         </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 border-t border-border bg-muted/20">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {posts.map((post, i) => (
                 <div key={i} className="group flex flex-col bg-card border border-border overflow-hidden hover:border-primary/50 hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-video overflow-hidden">
                       <Image
                         src={post.image}
                         alt={post.title}
                         fill
                         className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                       />
                       <div className="absolute top-0 left-0 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-4 py-2">
                          {post.category}
                       </div>
                    </div>
                    <div className="p-8 flex flex-1 flex-col">
                       <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-6">
                          <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {post.date}</span>
                          <span className="flex items-center gap-1.5"><User size={12} className="text-primary" /> {post.author}</span>
                       </div>
                       <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {post.title}
                       </h3>
                       <p className="text-sm text-muted-foreground font-medium flex-grow mb-8 italic">
                          {post.excerpt}
                       </p>
                       <Link href={`/blog/${i}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
                          Read Strategy <ChevronRight size={14} />
                       </Link>
                    </div>
                 </div>
               ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-16 sm:mt-24 bg-foreground text-background p-8 sm:p-12 md:p-20 rounded-3xl sm:rounded-4xl border-r-8 sm:border-r-12 border-r-primary shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 opacity-10 -translate-x-1/4 -translate-y-1/4 pointer-events-none">
                  <Zap className="size-64 sm:size-[400px]" />
               </div>
               <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
                  <div className="max-w-xl text-center lg:text-left">
                     <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter mb-4 sm:mb-6 uppercase">Get AI Strategies <span className="text-primary italic underline underline-offset-8">Weekly</span></h2>
                     <p className="text-base sm:text-lg opacity-60 font-medium italic">Join 5000+ marketers receiving Ahmedabad's #1 digital marketing newsletter.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4">
                     <input type="email" placeholder="Your Best Email" className="bg-white/10 border-none rounded-xl px-6 sm:px-8 py-4 sm:py-5 text-sm font-black focus:ring-4 focus:ring-primary/20 outline-none w-full lg:w-80" />
                     <button className="bg-primary text-white rounded-xl px-8 sm:px-10 py-4 sm:py-5 font-black uppercase tracking-widest text-xs hover:brightness-110 active:scale-95 shadow-xl shadow-primary/20 whitespace-nowrap">Subscribe</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
