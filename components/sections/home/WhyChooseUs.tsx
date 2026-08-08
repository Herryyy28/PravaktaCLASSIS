"use client";

import { motion } from "framer-motion";
import {
  Users, Mic, Clock, BookOpen, Globe, Award,
  TrendingUp, Briefcase, Heart, MessageSquare,
} from "lucide-react";

const features = [
  { icon: Award,         title: "Certified Trainers",           desc: "All our trainers hold internationally recognized teaching certifications.", color: "bg-blue-50 text-blue-600" },
  { icon: Mic,           title: "Practical English",            desc: "Hands-on conversational practice every single day, not just grammar drills.", color: "bg-purple-50 text-purple-600" },
  { icon: Users,         title: "Small Batches",                desc: "Max 10–15 students per batch to ensure personalised attention for everyone.", color: "bg-green-50 text-green-600" },
  { icon: MessageSquare, title: "Daily Speaking Practice",      desc: "Structured daily practice sessions that build fluency and confidence rapidly.", color: "bg-amber-50 text-amber-600" },
  { icon: Briefcase,     title: "Interview Preparation",        desc: "Dedicated modules for HR rounds, Group Discussions, and corporate interviews.", color: "bg-red-50 text-red-600" },
  { icon: Heart,         title: "Affordable Fees",              desc: "World-class English training at tuition fees that are accessible to all.", color: "bg-pink-50 text-pink-600" },
  { icon: Clock,         title: "Flexible Timings",             desc: "Morning, afternoon, evening, and weekend batches to fit your busy lifestyle.", color: "bg-cyan-50 text-cyan-600" },
  { icon: TrendingUp,    title: "Placement Guidance",           desc: "Career counselling, resume building, and placement assistance post-course.", color: "bg-indigo-50 text-indigo-600" },
  { icon: Globe,         title: "Computer Classes",        desc: "Master digital skills from basic operations to advanced accounting and design software.", color: "bg-teal-50 text-teal-600" },
  { icon: BookOpen,      title: "Real-Life Communication",      desc: "Role plays, debates, presentations — we prepare you for the real world.", color: "bg-orange-50 text-orange-600" },
];

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-slate-50">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-gold">Why Choose Us</span>
          <h2 className="section-title">The Pravakta Difference</h2>
          <p className="section-sub text-center">
            We don't just teach English — we build confident communicators ready to shine in any environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card p-6 group cursor-default"
            >
              <div className={`h-12 w-12 rounded-xl ${f.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-semibold text-navy mb-2 text-base">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
