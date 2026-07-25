import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Geist({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teksalah — Beyond Solutions. Technology Advisors.",
  description:
    "Teksalah is a Dubai-based ICT consulting firm delivering cyber security, cloud infrastructure, managed services and digital transformation for enterprise across the Middle East.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <div className="bg-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
