"use client";

import { motion } from "framer-motion";
import { Calendar, Bell, ChevronRight } from "lucide-react";

const announcements = [
  { tag: "New Batch",        color: "bg-blue-100 text-blue-700",   title: "Spoken English – August Batch Starting",   date: "August 15, 2026",   desc: "Limited seats available for morning, evening & weekend batches. Early bird discount active now." },
  { tag: "Workshop",         color: "bg-purple-100 text-purple-700", title: "Power Speaking Workshop",                date: "August 20, 2026",   desc: "One-day intensive workshop on presentation skills, body language, and public speaking techniques." },
  { tag: "Admissions Open",  color: "bg-green-100 text-green-700", title: "Computer Batch 2026 – Enrolments Open",      date: "August 25, 2026",   desc: "New Computer Classes batch starting soon with flexible options. Book your free trial class." },
  { tag: "Event",            color: "bg-amber-100 text-amber-700", title: "English Olympiad 2026",                  date: "September 5, 2026", desc: "Annual inter-batch English competition — debates, extempore, and quiz. Cash prizes and certificates." },
  { tag: "Seminar",          color: "bg-red-100 text-red-700",     title: "Career English Seminar",                 date: "September 10, 2026", desc: "Free seminar on using English to accelerate career growth. Open to all students and alumni." },
  { tag: "Kids Special",     color: "bg-pink-100 text-pink-700",   title: "Kids Spoken English – New Batch",        date: "September 1, 2026", desc: "Fun, game-based English learning for children aged 6–14. Weekend batches available." },
];

export default function Announcements() {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-gold">Latest Updates</span>
          <h2 className="section-title">Announcements & Events</h2>
          <p className="section-sub text-center">Stay up to date with upcoming batches, workshops, and competitions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card p-6 flex flex-col group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${a.color}`}>{a.tag}</span>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <Calendar className="h-3.5 w-3.5" />
                  {a.date}
                </div>
              </div>
              <h3 className="font-heading font-bold text-navy mb-2 group-hover:text-royal transition-colors">
                {a.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{a.desc}</p>
              <button className="flex items-center gap-1 text-royal text-sm font-semibold mt-4 hover:gap-2 transition-all">
                Register / Learn More <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-navy btn-lg flex items-center gap-2 mx-auto">
            <Bell className="h-4 w-4" />
            Get Notified for All Events
          </button>
        </div>
      </div>
    </section>
  );
}
