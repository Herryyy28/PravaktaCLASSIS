"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 5000);
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

            {success && (
              <div className="flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-xl mb-6">
                <CheckCircle className="h-5 w-5 shrink-0" />
                <p className="text-sm font-medium">Thank you! We'll contact you within 2 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                  <input {...register("name")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition" placeholder="Your full name" />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number *</label>
                  <input {...register("phone")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition" placeholder="+91 XXXXX XXXXX" />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Course Interested In *</label>
                <select {...register("course")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 transition bg-white">
                  <option value="">Select a course</option>
                  <option value="basic">Basic Spoken English</option>
                  <option value="advanced">Advanced Spoken English</option>
                  <option value="ielts">IELTS Preparation</option>
                  <option value="pte">PTE Academic</option>
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

              <button type="submit" disabled={loading} className="btn-navy btn-lg w-full sm:w-auto">
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Enquiry</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
