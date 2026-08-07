"use client";

import { motion } from "framer-motion";
import { Trophy, GraduationCap, TrendingUp, Star } from "lucide-react";

const highlights = [
  { icon: GraduationCap, num: "2,000+", label: "Certified Students",     color: "text-blue-500",   bg: "bg-blue-50" },
  { icon: TrendingUp,    num: "87%",     label: "Placement Success Rate",  color: "text-green-500",  bg: "bg-green-50" },
  { icon: Trophy,        num: "150+",    label: "Awards & Recognitions",   color: "text-amber-500",  bg: "bg-amber-50" },
  { icon: Star,          num: "4.9/5",   label: "Average Student Rating",  color: "text-purple-500", bg: "bg-purple-50" },
];

const stories = [
  { name: "Kavya R.", role: "Marketing Executive", before: "Couldn't speak a sentence in English", after: "Leads international client meetings confidently", color: "from-blue-500 to-blue-700" },
  { name: "Aditya M.", role: "Software Engineer, MNC", before: "Fear of speaking in English at workplace", after: "Got promoted as Team Lead after 6 months", color: "from-green-500 to-green-700" },
  { name: "Meena S.", role: "BPO Team Manager", before: "Struggled with fluency in customer calls", after: "Consistently the top performer in team", color: "from-purple-500 to-purple-700" },
];

export default function StudentSuccess() {
  return (
    <section className="section-py bg-gradient-light">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-gold">Student Success</span>
          <h2 className="section-title">Transforming Lives, One Student At A Time</h2>
          <p className="section-sub text-center">Real results from real students who changed their careers with Pravakta.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 text-center"
            >
              <div className={`h-14 w-14 ${h.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <h.icon className={`h-7 w-7 ${h.color}`} />
              </div>
              <p className={`font-heading text-3xl font-extrabold ${h.color} mb-1`}>{h.num}</p>
              <p className="text-slate-500 text-sm">{h.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Before & After Cards */}
        <h3 className="font-heading text-2xl font-bold text-center text-navy mb-8">Before &amp; After Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card overflow-hidden"
            >
              <div className={`h-20 bg-gradient-to-r ${s.color} flex items-center px-6`}>
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-white font-heading font-bold">
                  {s.name[0]}
                </div>
                <div className="ml-4">
                  <p className="font-heading font-bold text-white">{s.name}</p>
                  <p className="text-white/70 text-xs">{s.role}</p>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-red-500 mb-1">❌ BEFORE</p>
                  <p className="text-slate-600 text-sm">{s.before}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-xs font-bold text-green-600 mb-1">✅ AFTER</p>
                  <p className="text-slate-600 text-sm">{s.after}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
