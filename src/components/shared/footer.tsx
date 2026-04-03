import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-primary">
              REXM<span className="text-accent">YZE</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ahmedabad's leading AI-powered digital marketing institute. 
              Empowering students, professionals, and business owners with 
              advanced practical training and 100% placement support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/courses" className="text-sm text-muted-foreground hover:text-primary">All Courses</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Digital Marketing Blog</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Support</Link>
            </div>
          </div>

          {/* Top Courses */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Popular Courses</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/courses/seo" className="text-sm text-muted-foreground hover:text-primary">SEO Masterclass</Link>
              <Link href="/courses/google-ads" className="text-sm text-muted-foreground hover:text-primary">Google Ads Training</Link>
              <Link href="/courses/social-media" className="text-sm text-muted-foreground hover:text-primary">Social Media Marketing</Link>
              <Link href="/courses/full-stack-marketing" className="text-sm text-muted-foreground hover:text-primary">Full Stack Marketing</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                info@rexmyze.com
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                +91 99999 88888
              </p>
              <p className="text-sm text-muted-foreground">
                Near Alpha One Mall, Ahmedabad, Gujarat - 380015
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Rexmyze. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
