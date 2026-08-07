"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Laptop, Tablet, Smartphone, PlayCircle, BookOpen,
  Mic, ClipboardList, BarChart3, FileText, Upload,
  Globe, Wifi, WifiOff, AlignLeft, CheckSquare, ArrowRight,
} from "lucide-react";

const features = [
  { icon: Laptop,        title: "Learn Via Our Software",      desc: "Access the full Pravakta learning platform from any browser—no downloads needed.",     color: "bg-blue-50 text-blue-600" },
  { icon: Wifi,          title: "Live Learning Support",        desc: "Join scheduled live sessions with your trainer directly inside the platform.",          color: "bg-purple-50 text-purple-600" },
  { icon: WifiOff,       title: "Offline Access",              desc: "Download lessons and study materials for offline practice without internet.",             color: "bg-green-50 text-green-600" },
  { icon: AlignLeft,     title: "Daily English Practice",      desc: "Structured daily exercises that build fluency, confidence, and habit effortlessly.",     color: "bg-amber-50 text-amber-600" },
  { icon: PlayCircle,    title: "Video Lessons",               desc: "HD video lessons by our expert trainers, available anytime to revisit and review.",      color: "bg-red-50 text-red-600" },
  { icon: CheckSquare,   title: "Practice Exercises",          desc: "Interactive quizzes and drills after every lesson to reinforce what you've learned.",    color: "bg-cyan-50 text-cyan-600" },
  { icon: BookOpen,      title: "Grammar & Vocabulary",        desc: "Dedicated modules covering English grammar rules and vocabulary building exercises.",    color: "bg-indigo-50 text-indigo-600" },
  { icon: Mic,           title: "Speaking Practice",           desc: "AI-powered voice exercises and pronunciation drills to sharpen your speaking skills.",   color: "bg-pink-50 text-pink-600" },
  { icon: ClipboardList, title: "Mock Tests",                  desc: "Timed full-length mock tests that simulate the real exam experience for IELTS & PTE.",  color: "bg-orange-50 text-orange-600" },
  { icon: BarChart3,     title: "Progress Tracking",           desc: "Visual dashboards showing your growth, scores, and areas that need improvement.",       color: "bg-teal-50 text-teal-600" },
  { icon: FileText,      title: "Study Materials",             desc: "Downloadable PDFs, notes, and reference sheets curated by our expert faculty.",         color: "bg-violet-50 text-violet-600" },
  { icon: Upload,        title: "Assignment Access",           desc: "Submit assignments digitally and receive detailed feedback directly from your trainer.", color: "bg-lime-50 text-lime-600" },
  { icon: Globe,         title: "Anytime, Anywhere",           desc: "Study at your own pace—during a commute, lunch break, or late at night from home.",     color: "bg-sky-50 text-sky-600" },
  { icon: Smartphone,    title: "All Devices Compatible",      desc: "Perfectly optimized for mobile phones, tablets, and laptops with a seamless experience.",color: "bg-rose-50 text-rose-600" },
];

// ── Device Mockup Components ──────────────────────────────────────────────────

function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Screen */}
      <div className="relative bg-slate-800 rounded-t-xl rounded-b-none pt-3 px-3 pb-0 shadow-2xl">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-3 bg-slate-700 rounded-full h-4 flex items-center px-3">
            <span className="text-slate-400 text-xs">pravaktaacademy.com/learn</span>
          </div>
        </div>
        {/* Screen content */}
        <div className="rounded-t-lg overflow-hidden bg-navy h-52">
          {/* Nav bar inside */}
          <div className="flex items-center justify-between bg-navy-700 px-4 py-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded bg-gold/80" />
              <span className="text-white text-xs font-bold">Pravakta LMS</span>
            </div>
            <div className="h-6 w-16 rounded-full bg-gold/70 flex items-center justify-center">
              <span className="text-navy text-[9px] font-bold">Dashboard</span>
            </div>
          </div>
          {/* Dashboard content */}
          <div className="p-3 grid grid-cols-3 gap-2">
            {[
              { label: "Lessons",  val: "24", color: "bg-blue-500" },
              { label: "Tests",    val: "8",  color: "bg-purple-500" },
              { label: "Score",    val: "87%",color: "bg-green-500" },
            ].map((c) => (
              <div key={c.label} className="bg-white/10 rounded-lg p-2 text-center">
                <p className={`font-bold text-base text-white`}>{c.val}</p>
                <p className="text-white/60 text-[9px]">{c.label}</p>
              </div>
            ))}
            {/* Progress bars */}
            <div className="col-span-3 space-y-1.5 mt-1">
              {[80, 65, 92].map((p, i) => (
                <div key={i} className="bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: `${p}%` }} />
                </div>
              ))}
            </div>
            {/* Video thumb */}
            <div className="col-span-3 bg-white/10 rounded-lg h-12 flex items-center justify-center gap-2 mt-1">
              <PlayCircle className="h-5 w-5 text-gold" />
              <span className="text-white/80 text-[10px]">Advanced Speaking — Lesson 7</span>
            </div>
          </div>
        </div>
      </div>
      {/* Base */}
      <div className="bg-slate-700 h-3 rounded-b-sm mx-4" />
      <div className="bg-slate-600 h-2 rounded-b-lg mx-0" />
    </div>
  );
}

function TabletMockup() {
  return (
    <div className="relative w-36 mx-auto">
      <div className="bg-slate-800 rounded-2xl p-2 shadow-xl">
        <div className="bg-navy rounded-xl overflow-hidden h-48">
          <div className="bg-navy-700 px-2 py-1.5 flex justify-between items-center border-b border-white/10">
            <span className="text-white text-[8px] font-bold">My Courses</span>
            <div className="h-4 w-4 rounded-full bg-gold/80" />
          </div>
          <div className="p-2 space-y-1.5">
            {["Spoken English", "Grammar Pro", "IELTS Prep"].map((c) => (
              <div key={c} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2 py-1.5">
                <div className="h-3 w-3 rounded bg-gold/70 shrink-0" />
                <span className="text-white text-[8px]">{c}</span>
              </div>
            ))}
            <div className="bg-royal/30 rounded-lg p-1.5 text-center mt-1">
              <p className="text-white/90 text-[8px] font-bold">Today's Practice</p>
              <p className="text-gold text-[9px] font-bold mt-0.5">Day 14 🔥</p>
            </div>
          </div>
        </div>
        {/* Home button */}
        <div className="flex justify-center mt-1">
          <div className="h-3 w-3 rounded-full border-2 border-slate-600" />
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="relative w-24 mx-auto">
      <div className="bg-slate-800 rounded-3xl p-1.5 shadow-xl">
        {/* Notch */}
        <div className="flex justify-center mb-1">
          <div className="h-3 w-12 rounded-full bg-slate-900" />
        </div>
        <div className="bg-navy rounded-2xl overflow-hidden h-44">
          <div className="bg-royal/30 px-2 py-2 text-center border-b border-white/10">
            <span className="text-white text-[7px] font-bold">Pravakta App</span>
          </div>
          <div className="p-2 space-y-1">
            <div className="bg-gold/20 rounded-lg p-1.5 text-center">
              <p className="text-gold text-[8px] font-bold">Good Morning! 👋</p>
              <p className="text-white/60 text-[7px]">Continue Learning</p>
            </div>
            {["📖 Lesson 7", "🎤 Practice", "📝 Test", "📊 Progress"].map((item) => (
              <div key={item} className="bg-white/10 rounded-lg px-2 py-1 flex items-center gap-1">
                <span className="text-white text-[7px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Home bar */}
        <div className="flex justify-center mt-1">
          <div className="h-1 w-10 rounded-full bg-slate-600" />
        </div>
      </div>
    </div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────

export default function LearningPlatform() {
  return (
    <section className="section-py bg-white overflow-hidden">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="badge-royal">Exclusive Learning Software</span>
          <h2 className="section-title">
            Learn Anytime with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-navy">
              Pravakta's Exclusive Learning Software
            </span>
          </h2>
          <p className="section-sub text-center">
            At Pravakta Spoken English, students don't just learn in the classroom—they also
            continue their learning journey through our exclusive software, making English
            practice simple, flexible, and accessible anytime.
          </p>
        </motion.div>

        {/* ── Device Mockups ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-20"
        >
          {/* Glow behind devices */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
            <div className="h-48 w-48 rounded-full bg-gold/10 blur-2xl" />
          </div>

          {/* Gradient platform base */}
          <div className="relative bg-gradient-to-br from-navy via-navy-700 to-royal rounded-3xl p-8 md:p-12 shadow-premium">
            {/* Top label */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2">
              <span className="bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full shadow">
                🎓 Pravakta Learning Platform — Live
              </span>
            </div>

            {/* Devices arranged responsively */}
            <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8 pt-6">
              {/* Tablet – left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="hidden md:block self-center"
              >
                <TabletMockup />
              </motion.div>

              {/* Laptop – center (hero device) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="w-full max-w-sm mx-auto md:mx-0"
              >
                <LaptopMockup />
              </motion.div>

              {/* Mobile – right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hidden md:block self-center"
              >
                <MobileMockup />
              </motion.div>
            </div>

            {/* Feature pills at the bottom */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {["Mobile Ready", "Offline Access", "Live Classes", "Progress Tracker", "AI Practice", "Mock Tests"].map((pill) => (
                <span key={pill} className="card-glass text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  ✓ {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Feature Cards Grid ── */}
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl font-bold text-navy">
            Everything You Need to Master English — In One Platform
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-16">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="card p-4 text-center group cursor-default xl:col-span-1"
            >
              <div className={`h-11 w-11 rounded-xl ${feat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <feat.icon className="h-5 w-5" />
              </div>
              <h4 className="font-heading font-semibold text-navy text-xs leading-snug mb-1">{feat.title}</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed hidden sm:block">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Stats Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-navy via-navy-700 to-royal rounded-3xl p-8 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { num: "14+",   label: "Learning Features",   emoji: "⚡" },
            { num: "100%",  label: "Mobile Compatible",   emoji: "📱" },
            { num: "24/7",  label: "Content Access",      emoji: "🌐" },
            { num: "Free",  label: "With Enrollment",     emoji: "🎁" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl mb-1">{s.emoji}</p>
              <p className="font-heading text-2xl font-extrabold text-gold">{s.num}</p>
              <p className="text-white/60 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/courses" className="btn-royal btn-lg w-full sm:w-auto">
            <Laptop className="h-5 w-5" />
            Explore Our Learning Platform
          </Link>
          <Link href="/contact" className="btn-gold btn-lg w-full sm:w-auto">
            Join Pravakta Spoken English
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
