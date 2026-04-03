import Link from "next/link";
import { Phone, Mail, ChevronRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex flex-col w-full sticky top-0 z-50">
      {/* Top Header Bar */}
      <div className="bg-primary text-white py-2 hidden sm:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[13px] font-medium">
          <div className="flex items-center gap-6">
            <a href="tel:+917567154257" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Phone size={14} className="fill-current" />
              +91-7567154257
            </a>
            <a href="mailto:info@rexmyze.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <Mail size={14} className="fill-current" />
              info@rexmyze.com
            </a>
          </div>
          <div className="flex items-center gap-4">
             <Link href="/blog" className="hover:text-white/80 transition-colors">Blog</Link>
             <span className="w-px h-3 bg-white/30" />
             <Link href="/about" className="hover:text-white/80 transition-colors">About Us</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full border-b border-border bg-white/95 dark:bg-black/95 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-2xl font-black tracking-tight flex items-center">
               <span className="bg-primary text-white px-2 py-0.5 rounded-sm mr-1">REX</span>
               <span className="text-foreground">MYZE</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/courses" className="text-[15px] font-bold text-foreground/80 hover:text-primary transition-colors">Courses</Link>
            <Link href="/resources" className="text-[15px] font-bold text-foreground/80 hover:text-primary transition-colors">Resources</Link>
            <Link href="/startup-incubator" className="text-[15px] font-bold text-foreground/80 hover:text-primary transition-colors">Startup Incubator</Link>
            <Link href="/contact" className="text-[15px] font-bold text-foreground/80 hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/book-demo" className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-[14px] font-bold text-white transition-all hover:brightness-110 active:scale-95 shadow-md shadow-primary/20">
              Get Demo Lecture
              <ChevronRight size={16} className="ml-1" />
            </Link>
            <button className="lg:hidden p-2 text-muted-foreground" aria-label="Menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
