import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import StickyInquiry from "@/components/shared/sticky-inquiry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home - Rexmyze Academy - Digital Marketing Institute (Maninagar)",
  description: "Enroll in the Best Digital Marketing Institute in Ahmedabad at Rexmyze Academy. Get practical training in Digital Marketing Course in Ahmedabad with SEO, Google Ads, and AI tools.",
  keywords: ["digital marketing course ahmedabad", "digital marketing institute maninagar", "SEO training ahmedabad", "Google Ads course", "social media marketing maninagar"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <StickyInquiry />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
