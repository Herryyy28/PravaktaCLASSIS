"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name:    z.string().min(2, "Name is required"),
  phone:   z.string().min(10, "Enter a valid phone number"),
  course:  z.string().min(1, "Please select a course"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const info = [
  { icon: MapPin, label: "Address",        value: "S9, 2nd Floor, Harmony Apartment-1\nOpp. Shushrusha Hospital, Maneklal Road\nNavsari, Gujarat" },
  { icon: Phone,  label: "Phone / WhatsApp",value: "+91 97123 05346" },
  { icon: Mail,   label: "Email",          value: "1989nspatil@mail.com" },
  { icon: Clock,  label: "Business Hours", value: "Mon – Sat: 8:00 AM – 8:00 PM\nSunday: 8:00 AM – 12:00 PM" },
];

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const formatMessage = (data: FormData) => {
    return `*New Enquiry (Home Page)*\n\n*Name:* ${data.name}\n*Phone:* ${data.phone}\n*Course:* ${data.course}\n*Message:*\n${data.message || 'No additional message'}`;
  };

  const handleWhatsApp = (data: FormData) => {
    const text = formatMessage(data);
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919712305346?text=${encodedText}`, "_blank");
  };

  const handleEmail = (data: FormData) => {
    const body = `New Enquiry (Home Page)\n\nName: ${data.name}\nPhone: ${data.phone}\nCourse: ${data.course}\n\nMessage:\n${data.message || 'No additional message'}`;
    const encodedSubject = encodeURIComponent(`Website Enquiry for: ${data.course}`);
    const encodedBody = encodeURIComponent(body);
    window.open(`mailto:1989nspatil@mail.com?subject=${encodedSubject}&body=${encodedBody}`, "_blank");
  };

  return (
    <section className="section-py bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-royal">Contact Us</span>
          <h2 className="section-title">Get In Touch With Us</h2>
          <p className="section-sub text-center">
            Have questions? We are here 6 days a week. Reach out and we'll respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {info.map((item) => (
              <div key={item.label} className="card p-5 flex items-start gap-4">
                <div className="bg-navy p-3 rounded-xl text-white shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-bold text-navy text-sm mb-1">{item.label}</p>
                  <p className="text-slate-600 text-sm whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="card overflow-hidden h-40 flex items-center justify-center bg-slate-100 text-slate-400 text-sm">
              📍 Google Maps Embed
            </div>
          </motion.div>

          {/* Quick Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 card p-8"
          >
            <h3 className="font-heading text-xl font-bold text-navy mb-6">Quick Enquiry Form</h3>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input {...register("name")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition" placeholder="Your full name" />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                  <input {...register("phone")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition" placeholder="+91 97123 05346" />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Course Interested In *</label>
                <select {...register("course")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition bg-white">
                  <option value="">Select a course</option>
                  <option value="basic">Basic Spoken English</option>
                  <option value="advanced">Advanced Spoken English</option>
                  <option value="computer">Computer Classes</option>
                  <option value="corporate">Corporate English</option>
                  <option value="kids">Kids English</option>
                  <option value="franchise">Franchise Enquiry</option>
                </select>
                {errors.course && <p className="mt-1 text-xs text-red-500">{errors.course.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
                <textarea {...register("message")} rows={4} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition resize-none" placeholder="Any specific questions or requirements..." />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSubmit(handleWhatsApp)}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </button>
                
                <button
                  type="button"
                  onClick={handleSubmit(handleEmail)}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-medium transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Send via Email
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
