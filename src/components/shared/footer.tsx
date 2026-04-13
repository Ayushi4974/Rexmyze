import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

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
                className="h-28 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed md:max-w-xs">
              Ahmedabad's leading AI-powered digital marketing academy.
              Empowering students, professionals, and business owners with
              practical training and 100% placement support.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/rexmyze_group?igsh=YzlkcHR3cWpjOHY0&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/18ea7tYZfN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/irfan-khan-pathan?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
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
              <Link href="/services/seo" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO</Link>
              <Link href="/services/google-ads" className="text-sm text-muted-foreground hover:text-primary transition-colors">Google Ads</Link>
              <Link href="/services/performance-marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Performance Marketing</Link>
              <Link href="/services/video-editing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Video Editing</Link>
              <Link href="/services/web-development" className="text-sm text-muted-foreground hover:text-primary transition-colors">Web Development</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4 order-4 md:order-4 col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact Us</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <a href="mailto:info@rexmyze.com" className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all">
                  <div className="p-1.5 rounded-md bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={14} />
                  </div>
                  info@rexmyze.com
                </a>
              </div>

              <div className="space-y-4">
                <div className="group flex items-start gap-3">
                  <div className="p-1.5 rounded-md bg-primary/5 text-primary mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Maninagar Branch</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=2,+Prem+Sagar+Apartments,+Opp+Chavla+Park,+Bhairavnath+Char+Rasta,+Maninagar,+Ahmedabad+–+380008" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground leading-relaxed mb-1 hover:text-primary transition-colors block"
                    >
                      2, Prem Sagar Apartments, Opp Chavla Park, Bhairavnath Char Rasta, Maninagar, Ahmedabad – 380008
                    </a>
                    <a href="tel:7096181126" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2 mt-1">
                      <Phone size={14} />
                      +91 7096181126
                    </a>
                  </div>
                </div>
                
                <div className="group flex items-start gap-3 pt-4 border-t border-border/10">
                  <div className="p-1.5 rounded-md bg-primary/5 text-primary mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Navrangpura Center</p>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=8th+Floor,+B112,+Sarover+Complex,+opposite+Samruddhi+Apartment,+Vasant+Vihar,+Navrangpura,+Ahmedabad,+Gujarat+380009" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground leading-relaxed mb-1 hover:text-primary transition-colors block"
                    >
                      8th Floor, B112, Sarover Complex, opposite Samruddhi Apartment, Vasant Vihar, Navrangpura, Ahmedabad, Gujarat 380009
                    </a>
                    <a href="tel:8735881126" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-2 mt-1">
                      <Phone size={14} />
                      +91 8735881126
                    </a>
                  </div>
                </div>
              </div>
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
