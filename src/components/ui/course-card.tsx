import Image from "next/image";
import Link from "next/link";
import { Clock, BookOpen, Star, ChevronRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  modules: string;
  slug: string;
  category: string;
}

export default function CourseCard({
  title,
  description,
  image,
  duration,
  modules,
  slug,
  category,
}: CourseCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2">
          {category}
        </div>
        <div className="absolute bottom-4 right-4 bg-white/95 px-2 py-1 rounded shadow-md flex items-center gap-1">
           <Star className="h-3 w-3 text-primary fill-current" />
           <span className="text-[10px] font-black italic">4.9/5</span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6 lg:p-8">
        <h3 className="mb-4 text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="mb-8 text-sm text-muted-foreground font-medium leading-relaxed line-clamp-2 italic">
          {description}
        </p>
        
        <div className="mt-auto grid grid-cols-2 border-t border-border pt-6 gap-4">
           <div className="flex flex-col border-r border-border pr-4">
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Duration</span>
              <span className="text-sm font-black flex items-center gap-2">
                 <Clock className="h-3.5 w-3.5 text-primary" />
                 {duration}
              </span>
           </div>
           <div className="flex flex-col pl-2">
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Modules</span>
              <span className="text-sm font-black flex items-center gap-2">
                 <BookOpen className="h-3.5 w-3.5 text-primary" />
                 {modules}
              </span>
           </div>
        </div>

        <Link 
          href={`/courses/${slug}`}
          className="mt-8 inline-flex items-center justify-center bg-background text-foreground py-4 rounded-lg font-black text-xs uppercase tracking-widest group-hover:bg-primary transition-all overflow-hidden relative"
        >
          <span className="relative z-10 flex items-center gap-2">View Course Details <ChevronRight size={14} /></span>
        </Link>
      </div>
    </div>
  );
}
