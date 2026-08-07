"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Riya Patel",
    course: "Advanced Spoken English",
    profession: "HR Manager, TCS",
    rating: 5,
    review: "Pravakta transformed my career completely. I was terrified of speaking in meetings, and now I lead presentations for global clients. The daily speaking practice is what makes the real difference!",
    initials: "RP",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Arjun Mehta",
    course: "IELTS Preparation",
    profession: "Graduate Student, UK",
    rating: 5,
    review: "I achieved Band 8.0 in IELTS on my first attempt! The mock tests and personalized feedback from my trainer were exceptional. If you want IELTS success, this is the only place to be.",
    initials: "AM",
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Sneha Reddy",
    course: "Corporate English",
    profession: "Sales Executive, HDFC",
    rating: 5,
    review: "The corporate communication module literally changed how I interact with clients. My confidence has sky-rocketed and I recently got promoted. Pravakta is worth every rupee invested!",
    initials: "SR",
    color: "from-green-500 to-green-700",
  },
  {
    name: "Vikram Singh",
    course: "Public Speaking",
    profession: "Entrepreneur",
    rating: 5,
    review: "From being someone who could barely speak in public, I now deliver keynote speeches at industry events. The transformation Pravakta brought in me is simply unbelievable. Highly recommend!",
    initials: "VS",
    color: "from-amber-500 to-amber-700",
  },
  {
    name: "Pooja Sharma",
    course: "Basic Spoken English",
    profession: "Receptionist, 5-Star Hotel",
    rating: 5,
    review: "As a first-generation English learner, I was very nervous. The faculty here are incredibly patient and supportive. Within 2 months I was speaking English confidently with foreign guests at work!",
    initials: "PS",
    color: "from-red-500 to-red-700",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-royal">Student Testimonials</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-sub text-center">Real stories from real people who transformed their communication and careers.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center"
            >
              <Quote className="h-10 w-10 text-gold mx-auto mb-6 opacity-60" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold fill-current" />
                ))}
              </div>

              <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 font-medium italic">
                "{t.review}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-heading font-bold text-lg`}>
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="font-heading font-bold text-navy">{t.name}</p>
                  <p className="text-royal text-sm font-medium">{t.course}</p>
                  <p className="text-slate-500 text-xs">{t.profession}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev}             className="h-11 w-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-royal hover:text-royal transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-navy" : "w-2 bg-slate-300"}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next}             className="h-11 w-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-royal hover:text-royal transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
