"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, BarChart, ChevronRight } from "lucide-react";

const courses = [
  {
    id: "basic",
    title: "Basic Spoken English",
    desc: "Build a solid foundation in grammar, vocabulary, and everyday conversational English from scratch.",
    duration: "2 Months", level: "Beginner",
    highlights: ["Grammar Basics", "Vocabulary", "Pronunciation", "Confidence Building"],
    color: "from-blue-500 to-blue-700", badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "advanced",
    title: "Advanced Spoken English",
    desc: "Take your English to the next level with fluency training, accent coaching, and advanced communication skills.",
    duration: "3 Months", level: "Intermediate",
    highlights: ["Fluency Training", "Accent Coaching", "Public Speaking", "Leadership Comm."],
    color: "from-purple-500 to-purple-700", badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "grammar",
    title: "Grammar Mastery",
    desc: "Comprehensive grammar from basics to advanced with practical application in everyday spoken and written English.",
    duration: "6 Weeks", level: "All Levels",
    highlights: ["Tenses & Verbs", "Sentence Structure", "Punctuation", "Error Correction"],
    color: "from-green-500 to-green-700", badgeColor: "bg-green-100 text-green-700",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    desc: "Intensive preparation for all 4 IELTS modules with expert strategies, mock tests, and personalized feedback.",
    duration: "2 Months", level: "Intermediate+",
    highlights: ["All 4 Modules", "Mock Tests", "Band Strategies", "Expert Feedback"],
    color: "from-amber-500 to-amber-700", badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "pte",
    title: "PTE Academic",
    desc: "Targeted PTE training with real software practice, score predictor tools, and certified trainer support.",
    duration: "6 Weeks", level: "Intermediate+",
    highlights: ["AI Scoring", "Speaking Tasks", "Writing Templates", "Score Booster"],
    color: "from-red-500 to-red-700", badgeColor: "bg-red-100 text-red-700",
  },
  {
    id: "interview",
    title: "Interview Skills",
    desc: "Master HR interviews, group discussions, and corporate communication to land your dream job.",
    duration: "4 Weeks", level: "All Levels",
    highlights: ["Mock Interviews", "Body Language", "GD Practice", "Resume English"],
    color: "from-cyan-500 to-cyan-700", badgeColor: "bg-cyan-100 text-cyan-700",
  },
  {
    id: "public-speaking",
    title: "Public Speaking",
    desc: "Overcome stage fright and become a confident, compelling speaker in any public or professional setting.",
    duration: "6 Weeks", level: "All Levels",
    highlights: ["Stage Confidence", "Speech Delivery", "Storytelling", "Debate & MUNs"],
    color: "from-indigo-500 to-indigo-700", badgeColor: "bg-indigo-100 text-indigo-700",
  },
  {
    id: "corporate",
    title: "Corporate English",
    desc: "Professional English for business environments — emails, meetings, presentations, and client interactions.",
    duration: "4 Weeks", level: "Professional",
    highlights: ["Business Writing", "Presentations", "Email Etiquette", "Client Meetings"],
    color: "from-navy to-navy-700", badgeColor: "bg-slate-100 text-slate-700",
  },
  {
    id: "kids",
    title: "Kids English",
    desc: "Fun, interactive English sessions for children that build language skills through games, stories, and songs.",
    duration: "3 Months", level: "Kids (6–14)",
    highlights: ["Phonics", "Storytelling", "Games & Songs", "Creative Writing"],
    color: "from-pink-500 to-pink-700", badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    id: "business",
    title: "Business Communication",
    desc: "Strategic communication skills for entrepreneurs and executives to lead teams, clients, and boardrooms.",
    duration: "6 Weeks", level: "Executive",
    highlights: ["Negotiation", "Leadership Comm.", "Cross-Cultural", "Boardroom Skills"],
    color: "from-teal-500 to-teal-700", badgeColor: "bg-teal-100 text-teal-700",
  },
];

export default function CoursePreview() {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-royal">Our Programs</span>
          <h2 className="section-title">English Courses For Every Goal</h2>
          <p className="section-sub text-center">
            From beginners to professionals, we have the perfect course to help you communicate with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.slice(0, 8).map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="card overflow-hidden flex flex-col group"
            >
              {/* Gradient Header */}
              <div className={`h-28 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
                <h3 className="font-heading font-bold text-white text-center text-base px-4 leading-snug">
                  {course.title}
                </h3>
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.badgeColor}`}>
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{course.desc}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                  <span className="flex items-center gap-1"><BarChart className="h-3.5 w-3.5" />{course.level}</span>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {course.highlights.map((h) => (
                    <span key={h} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{h}</span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Link href={`/courses#${course.id}`} className="btn-royal flex-1 py-2 text-xs">Enroll Now</Link>
                  <Link href={`/courses#${course.id}`} className="btn-outline-white border-slate-200 text-navy flex-1 py-2 text-xs hover:bg-slate-50">Details</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses" className="btn-navy btn-lg">
            View All Courses
            <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
