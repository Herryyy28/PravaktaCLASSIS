"use client";

import { motion } from "framer-motion";

// Gallery items: 12 cards in masonry-like layout using varying heights
const galleryItems = [
  { label: "Main Classroom",      color: "from-blue-400 to-blue-600",    h: "h-48", emoji: "🏫" },
  { label: "Speaking Activity",   color: "from-purple-400 to-purple-600", h: "h-64", emoji: "🎙️" },
  { label: "Group Discussion",    color: "from-green-400 to-green-600",   h: "h-48", emoji: "💬" },
  { label: "Smart Class",         color: "from-amber-400 to-amber-600",   h: "h-72", emoji: "📺" },
  { label: "IELTS Workshop",      color: "from-red-400 to-red-600",       h: "h-48", emoji: "📚" },
  { label: "Award Ceremony",      color: "from-cyan-400 to-cyan-600",     h: "h-56", emoji: "🏆" },
  { label: "Graduation Day",      color: "from-indigo-400 to-indigo-600", h: "h-64", emoji: "🎓" },
  { label: "Student Interaction", color: "from-pink-400 to-pink-600",     h: "h-48", emoji: "🤝" },
  { label: "Seminar Hall",        color: "from-teal-400 to-teal-600",     h: "h-56", emoji: "🎤" },
  { label: "Reception Area",      color: "from-orange-400 to-orange-600", h: "h-48", emoji: "🏢" },
  { label: "Certificate Day",     color: "from-emerald-400 to-emerald-600", h: "h-64", emoji: "📜" },
  { label: "Fun Activities",      color: "from-yellow-400 to-yellow-600", h: "h-48", emoji: "🎉" },
];

export default function ClassroomGallery() {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-royal">Academy Life</span>
          <h2 className="section-title">Inside Pravakta Academy</h2>
          <p className="section-sub text-center">
            A glimpse into our vibrant classrooms, activities, and learning environment.
          </p>
        </div>

        {/* Masonry grid using CSS columns */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`break-inside-avoid rounded-2xl overflow-hidden ${item.h} relative group cursor-pointer`}
            >
              {/* Placeholder gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} flex flex-col items-center justify-center`}>
                <span className="text-4xl mb-2">{item.emoji}</span>
                <span className="text-white/70 text-xs font-medium">{item.label}</span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-sm text-center px-4">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/gallery" className="btn-royal btn-lg">View Full Gallery</a>
        </div>
      </div>
    </section>
  );
}
