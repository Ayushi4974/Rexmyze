import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-12">
          <div className="flex flex-col space-y-4 order-1 col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-academy.png"
                alt="Rexmyze Academy Logo"
                width={200}
                height={70}
                className="h-18 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed md:max-w-xs">
              Ahmedabad's leading AI-powered digital marketing academy.
              Empowering students, professionals, and business owners with
              practical training and 100% placement support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 order-2 md:order-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/why-choose-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why Choose Us</Link>
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Courses</Link>
              <Link href="/book-demo" className="text-sm text-muted-foreground hover:text-primary transition-colors">Book Free Demo</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Blog</Link>
            </div>
          </div>

          {/* Agency Services */}
          <div className="flex flex-col space-y-4 order-3 md:order-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Our Services</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/services/seo" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Agency</Link>
              <Link href="/services/google-ads" className="text-sm text-muted-foreground hover:text-primary transition-colors">Google Ads</Link>
              <Link href="/services/performance-marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Performance Marketing</Link>
              <Link href="/services/video-editing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Video Editing</Link>
              <Link href="/services/web-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Development</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4 order-4 md:order-4 col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:info@rexmyze.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                info@rexmyze.com
              </a>
              <a href="tel:7096181126" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                7096181126
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                8th Floor , B112, Sarover Complex, opposite Samruddhi Apartment, Vasant Vihar, Navrangpura, Ahmedabad, Gujarat 380009
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground text-center md:text-left">
          <p>© {new Date().getFullYear()} Rexmyze Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
