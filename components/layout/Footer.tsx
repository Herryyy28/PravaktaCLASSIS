import Link from "next/link";
import { BookOpen, Facebook, Instagram, Linkedin, Twitter, Youtube, Send } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/franchise", label: "Franchise" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const programs = [
  { href: "/courses#basic", label: "Basic Spoken English" },
  { href: "/courses#advanced", label: "Advanced Spoken English" },
  { href: "/courses#pte", label: "PTE Academic" },
  { href: "/courses#corporate", label: "Corporate English" },
  { href: "/courses#public-speaking", label: "Public Speaking" },
];

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-400" },
  { Icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-400" },
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-300" },
  { Icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" },
  { Icon: Twitter, href: "#", label: "X/Twitter", color: "hover:text-sky-400" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      {/* Top CTA strip */}
      <div className="bg-gold py-5">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-heading font-bold text-navy text-lg">
            🚀 Ready to Transform Your English? Enroll Today!
          </p>
          <Link href="/contact" className="btn-navy text-sm px-6 py-2.5 shrink-0">
            Book Free Demo Class
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-royal to-royal-dark flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-heading font-bold text-white text-lg leading-none">Pravakta</p>
                <p className="text-gold text-xs font-semibold tracking-widest uppercase">Spoken English</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              India's premier spoken English coaching institute, empowering 2,000+ students with the confidence to communicate globally since 2014.
            </p>
            {/* Social */}
            <div className="flex gap-3 flex-wrap">
              {socials.map(({ Icon, href, label, color }) => (
                <a key={label} href={href} aria-label={label} className={`text-slate-400 ${color} transition-colors duration-200`}>
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-gold transition-colors text-sm flex items-center gap-1.5">
                    <span className="text-gold/50">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">Programs</h3>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-slate-400 hover:text-gold transition-colors text-sm flex items-center gap-1.5">
                    <span className="text-gold/50">›</span> {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Contact */}
          <div>
            <h3 className="font-heading font-bold text-white mb-5 text-sm uppercase tracking-widest">Stay Updated</h3>
            <p className="text-slate-400 text-sm mb-4">Subscribe for new batch updates and free resources.</p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-gold transition"
              />
              <button className="bg-gold hover:bg-gold-dark text-navy p-2.5 rounded-lg transition-colors" aria-label="Subscribe">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              <p>📞 <a href="tel:+919712305346" className="hover:text-white transition-colors">+91 97123 05346</a></p>
              <p>📧 <a href="mailto:1989nspatil@mail.com" className="hover:text-white transition-colors">1989nspatil@mail.com</a></p>
              <p>🕐 Mon–Sat: 8:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Pravakta Spoken English. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
