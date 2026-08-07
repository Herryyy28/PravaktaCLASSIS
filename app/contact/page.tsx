import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pravakta Academy Institute of Spoken English. Visit us at S9, 2nd Floor, Harmony Apartment-1, Navsari or call +91 97123 05346.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    lines: [
      "S9, 2nd Floor, Harmony Apartment-1",
      "Opp. Shushrusha Hospital, Maneklal Road",
      "Navsari, Gujarat",
    ],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    lines: ["+91 97123 05346"],
    href: "tel:+919712305346",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["1989nspatil@mail.com"],
    href: "mailto:1989nspatil@mail.com",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: [
      "Monday – Saturday: 8:00 AM – 8:00 PM",
      "Sunday: 8:00 AM – 12:00 PM",
    ],
    color: "bg-amber-100 text-amber-600",
  },
];

export default function ContactPage() {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-slate-600">
            Have questions? We&apos;d love to hear from you. Reach out and we&apos;ll respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-5">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>

            {contactInfo.map((item) => (
              <div key={item.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-start gap-4">
                <div className={`${item.color} p-3 rounded-xl shrink-0`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.label}</h4>
                  {item.lines.map((line, i) =>
                    item.href && i === 0 ? (
                      <a key={i} href={item.href} className="block text-slate-600 text-sm hover:text-blue-600 transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-slate-600 text-sm">{line}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Map embed placeholder */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden h-44 flex items-center justify-center text-slate-400 text-sm">
              📍 Google Maps — Harmony Apartment-1, Navsari
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
