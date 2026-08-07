"use client";

import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";
import Link from "next/link";

const values = [
  "Certified & experienced trainers",
  "Small batch sizes for personal attention",
  "Practical, conversation-focused learning",
  "Daily speaking practice sessions",
  "Flexible batch timings",
  "Industry-recognized certification",
];

export default function AboutSection() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image placeholder */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden bg-gradient-navy shadow-premium">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/30 gap-3">
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="h-8 w-8 text-white/50" />
                </div>
                <p className="text-sm">Academy Introduction Video</p>
              </div>
              {/* Gold accent */}
              <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-gold via-gold-light to-transparent rounded-full opacity-60" />
            </div>

            {/* Floating founder card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-premium p-5 w-52"
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-navy mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <p className="font-heading font-bold text-navy text-center text-sm">Founder &amp; Director</p>
              <p className="text-slate-500 text-xs text-center mt-1">Pravakta Academy</p>
              <div className="flex justify-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => <span key={i} className="text-gold text-xs">★</span>)}
              </div>
            </motion.div>

            {/* Experience badge */}
            <div className="absolute -top-4 -left-4 bg-gold rounded-2xl shadow-gold px-5 py-3 text-navy">
              <p className="font-heading font-extrabold text-2xl leading-none">10+</p>
              <p className="text-xs font-semibold">Years Exp.</p>
            </div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge-royal">About Pravakta Academy</span>
            <h2 className="section-title">
              Empowering India Through{" "}
              <span className="text-royal">Fluent English</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Pravakta Spoken English was founded with a single mission: to eliminate language barriers and empower every Indian to communicate confidently in English — whether in the classroom, boardroom, or on the global stage.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Over the past decade, we have trained 10,000+ students from diverse backgrounds, crafting personalized learning journeys that focus on practical conversation, critical thinking, and career growth. Our award-winning methodology blends classroom learning with real-world application to deliver measurable results.
            </p>

            {/* Values list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-2.5 text-slate-700 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  {v}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="btn-navy btn-lg">Our Story</Link>
              <Link href="/contact" className="btn-gold btn-lg">Book Free Demo</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
