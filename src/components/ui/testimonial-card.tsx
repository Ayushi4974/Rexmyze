import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  role,
  image,
  content,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="relative p-8 rounded-3xl bg-card border border-border shadow-sm group hover:shadow-xl transition-all duration-300">
      <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
        <Quote size={48} />
      </div>

      <div className="flex flex-col h-full">
        <div className="flex gap-1 mb-4 text-orange-400">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="star"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground italic mb-8 relative z-10">
          "{content}"
        </p>

        <div className="mt-auto flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-foreground">{name}</span>
            <span className="text-xs text-muted-foreground">{role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
