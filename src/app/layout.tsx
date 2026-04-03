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
  title: "Rexmyze | Ahmedabad's No.1 Premium AI Powered Digital Marketing Institute",
  description: "Master AI-powered digital marketing with Rexmyze. 100% placement assistance, live projects, and hands-on training in SEO, Google Ads, SMM, and more in Ahmedabad.",
  keywords: ["digital marketing course ahmedabad", "AI marketing training", "SEO course", "Google Ads certification", "social media marketing training"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Navbar />
        <StickyInquiry />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
