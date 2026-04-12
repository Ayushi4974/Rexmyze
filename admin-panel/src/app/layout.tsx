import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rexmyze Admin Panel",
  description: "Internal lead management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
