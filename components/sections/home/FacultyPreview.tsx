"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Linkedin } from "lucide-react";

const faculty = [
  { name: "Priya Sharma",    role: "Lead English Trainer",   exp: "12 Years", spec: "Basic & Corporate English", lang: "Hindi · English · Marathi", initials: "PS", color: "from-blue-500 to-blue-700" },
  { name: "Rahul Verma",     role: "Spoken English Expert",  exp: "8 Years",  spec: "Phonetics & Accent Training", lang: "Hindi · English",          initials: "RV", color: "from-purple-500 to-purple-700" },
  { name: "Anjali Desai",    role: "Computer Master Trainer",     exp: "7 Years",  spec: "Computer & Communication Skills",  lang: "Hindi · English · Gujarati", initials: "AD", color: "from-amber-500 to-amber-700" },
  { name: "Suresh Kumar",    role: "Corporate Trainer",      exp: "10 Years", spec: "Business English & GD/PI",    lang: "Hindi · English · Telugu",   initials: "SK", color: "from-green-500 to-green-700" },
];

export default function FacultyPreview() {
  return (
    <section className="section-py bg-navy">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-gold">Expert Faculty</span>
          <h2 className="section-title text-white">Meet Your Mentors</h2>
          <p className="section-sub text-white/60">
            Learn from certified professionals who are passionate about transforming your communication skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              {/* Photo placeholder */}
              <div className={`h-56 bg-gradient-to-br ${f.color} relative flex items-center justify-center`}>
                <div className="h-24 w-24 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center">
                  <span className="font-heading font-extrabold text-white text-3xl">{f.initials}</span>
                </div>
                <a
                  href="#"
                  className="absolute bottom-4 right-4 h-9 w-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  aria-label={`${f.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-white text-lg">{f.name}</h3>
                <p className="text-gold text-sm font-semibold mb-3">{f.role}</p>
                <div className="space-y-1.5 text-white/60 text-xs">
                  <p>📚 {f.exp} Experience</p>
                  <p>🎯 {f.spec}</p>
                  <p>🌐 {f.lang}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/faculty" className="btn-gold btn-lg">Meet All Faculty</Link>
        </div>
      </div>
    </section>
  );
}
