import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pravakta Spoken English | India's Premier English Coaching Institute",
    template: "%s | Pravakta Spoken English",
  },
  description:
    "Master English communication with Pravakta Academy. IELTS, PTE, Spoken English, Corporate Training & Franchise opportunities. 10,000+ students trained. Join today!",
  keywords: ["Spoken English", "IELTS Coaching", "PTE Preparation", "English Coaching", "Pravakta Academy"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pravaktaacademy.com",
    siteName: "Pravakta Spoken English",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pravakta Spoken English | India's Premier English Coaching Institute",
    description: "10,000+ Students Trained. Expert Faculty. Franchise Available.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} flex min-h-screen flex-col font-sans`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
