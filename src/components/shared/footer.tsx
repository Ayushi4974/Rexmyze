import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-12">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4 order-1 col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
              REXM<span className="text-accent">YZE</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed md:max-w-xs">
              Ahmedabad's leading AI-powered digital marketing institute. 
              Empowering students, professionals, and business owners with 
              advanced practical training and 100% placement support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4 order-2 md:order-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Courses</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Digital Marketing Blog</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Support</Link>
            </div>
          </div>

          {/* Top Courses */}
          <div className="flex flex-col space-y-4 order-3 md:order-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Popular Courses</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/courses/seo" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Masterclass</Link>
              <Link href="/courses/google-ads" className="text-sm text-muted-foreground hover:text-primary transition-colors">Google Ads Training</Link>
              <Link href="/courses/social-media" className="text-sm text-muted-foreground hover:text-primary transition-colors">Social Media Marketing</Link>
              <Link href="/courses/full-stack-marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Full Stack Marketing</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4 order-4 md:order-4 col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:info@rexmyze.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                info@rexmyze.com
              </a>
              <a href="tel:+917567154257" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                +91-7567154257
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Near Alpha One Mall, Vastrapur, Ahmedabad, Gujarat - 380015
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground text-center md:text-left">
          <p>© {new Date().getFullYear()} Rexmyze. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
