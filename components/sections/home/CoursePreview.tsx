"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, BarChart, ChevronRight } from "lucide-react";

const courses = [
  {
    category: "english",
    id: "basic",
    title: "Basic Spoken English",
    desc: "Build a solid foundation in grammar, vocabulary, and everyday conversational English from scratch.",
    duration: "2 Months", level: "Beginner",
    highlights: ["Grammar Basics", "Vocabulary", "Pronunciation", "Confidence Building"],
    color: "from-blue-500 to-blue-700", badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    category: "english",
    id: "advanced",
    title: "Advanced Spoken English",
    desc: "Take your English to the next level with fluency training, accent coaching, and advanced communication skills.",
    duration: "3 Months", level: "Intermediate",
    highlights: ["Fluency Training", "Accent Coaching", "Public Speaking", "Leadership Comm."],
    color: "from-purple-500 to-purple-700", badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "english",
    id: "grammar",
    title: "Grammar Mastery",
    desc: "Comprehensive grammar from basics to advanced with practical application in everyday spoken and written English.",
    duration: "6 Weeks", level: "All Levels",
    highlights: ["Tenses & Verbs", "Sentence Structure", "Punctuation", "Error Correction"],
    color: "from-green-500 to-green-700", badgeColor: "bg-green-100 text-green-700",
  },
  {
    category: "english",
    id: "corporate",
    title: "Corporate English",
    desc: "Professional English for business environments — emails, meetings, presentations, and client interactions.",
    duration: "4 Weeks", level: "Professional",
    highlights: ["Business Writing", "Presentations", "Email Etiquette", "Client Meetings"],
    color: "from-navy to-navy-700", badgeColor: "bg-slate-100 text-slate-700",
  },
  {
    category: "computer",
    id: "computer",
    title: "Basic Computer Classes",
    desc: "Learn fundamental computer skills including MS Office, internet browsing, typing, and digital literacy.",
    duration: "2 Months", level: "Beginner",
    highlights: ["MS Office", "Internet Browsing", "Typing", "Digital Literacy"],
    color: "from-sky-500 to-sky-700", badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    category: "computer",
    id: "advanced-computer",
    title: "Advanced Computer Skills",
    desc: "Master advanced software, accounting basics (Tally), graphic design fundamentals, and web concepts.",
    duration: "3 Months", level: "Intermediate",
    highlights: ["Advanced Software", "Tally (Accounting)", "Graphic Design", "Web Concepts"],
    color: "from-emerald-500 to-emerald-700", badgeColor: "bg-emerald-100 text-emerald-700",
  },
];

export default function CoursePreview() {
  const englishCourses = courses.filter((c) => c.category === "english");
  const computerCourses = courses.filter((c) => c.category === "computer");

  const CourseCard = ({ course, index }: { course: typeof courses[0], index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
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
  );

  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-royal">Our Programs</span>
          <h2 className="section-title">Courses For Every Goal</h2>
          <p className="section-sub text-center">
            From beginners to professionals, we have the perfect course to help you communicate with confidence and master digital skills.
          </p>
        </div>

        {/* English Section */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold font-heading text-navy">🗣️ Spoken English Programs</h3>
            <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {englishCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>

        {/* Computer Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold font-heading text-navy">💻 Computer Classes</h3>
            <div className="h-px bg-slate-200 flex-1 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {computerCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
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
