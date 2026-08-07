"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    gradient: "from-navy via-navy-700 to-royal-dark",
    badge: "Welcome to Pravakta Academy",
    headline: "Master English,",
    highlight: "Master Your Future",
    subline:
      "Join India's premium spoken English coaching institute. Expert-led, practical, and transformative learning from day one.",
    cta1: { label: "Enroll Now",       href: "/contact" },
    cta2: { label: "Book Free Demo",   href: "/contact" },
    tag: "🏫 Academy Excellence",
  },
  {
    id: 2,
    gradient: "from-[#06172a] via-[#0a2d5a] to-[#1a56db]",
    badge: "10,000+ Students Trained",
    headline: "Confidence in",
    highlight: "Every Conversation",
    subline:
      "Our immersive classroom sessions and daily speaking practice build unstoppable confidence in every student.",
    cta1: { label: "See Courses",      href: "/courses" },
    cta2: { label: "Book Free Demo",   href: "/contact" },
    tag: "🎓 Student Success",
  },
  {
    id: 3,
    gradient: "from-[#0f2850] via-[#0a1f44] to-[#16304f]",
    badge: "Certified Expert Trainers",
    headline: "Learn From",
    highlight: "The Best Faculty",
    subline:
      "Our highly qualified trainers bring years of industry experience to every class, guiding you to fluency with personalized attention.",
    cta1: { label: "Meet Our Faculty", href: "/faculty" },
    cta2: { label: "Enroll Now",       href: "/contact" },
    tag: "👨‍🏫 Expert Faculty",
  },
  {
    id: 4,
    gradient: "from-[#0d1b2a] via-[#1a3a5c] to-[#0a1f44]",
    badge: "IELTS · PTE · Spoken English",
    headline: "Crack IELTS & PTE",
    highlight: "With Expert Guidance",
    subline:
      "Achieve your target band score with our intensive preparation program, real mock tests, and personalised feedback sessions.",
    cta1: { label: "IELTS / PTE",      href: "/courses#ielts" },
    cta2: { label: "Book Free Demo",   href: "/contact" },
    tag: "🌍 Global Opportunities",
  },
  {
    id: 5,
    gradient: "from-[#1a0a00] via-[#3d1f00] to-[#0a1f44]",
    badge: "Franchise Opportunities",
    headline: "Partner With Us &",
    highlight: "Build Your Empire",
    subline:
      "Own a profitable Pravakta franchise. Low investment, high returns, complete support, and an exclusive territory waiting for you.",
    cta1: { label: "Apply for Franchise", href: "/franchise" },
    cta2: { label: "Download Brochure",   href: "#" },
    tag: "🏢 Business Partnership",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isAutoplay) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isAutoplay, current]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
        />
      </AnimatePresence>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-royal/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h1v40H0zm40 0h-1v40h1zM0 0v1h40V0zm0 40v-1h40v1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-6"
            >
              ✨ {slide.badge}
            </motion.span>

            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              {slide.headline}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                {slide.highlight}
              </span>
            </h1>

            {/* Subline */}
            <p className="text-lg sm:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed">
              {slide.subline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href={slide.cta1.href} className="btn-gold btn-lg">
                {slide.cta1.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={slide.cta2.href} className="btn-outline-white btn-lg">
                {slide.cta2.label}
              </Link>
            </div>

            {/* Tag */}
            <p className="mt-8 text-white/50 text-sm font-medium">{slide.tag}</p>
          </motion.div>
        </AnimatePresence>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-10">
          {[
            { num: "10+",   label: "Years Experience" },
            { num: "10K+",  label: "Students Trained" },
            { num: "95%",   label: "Satisfaction Rate" },
            { num: "20+",   label: "Franchise Centers" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-gold">{s.num}</p>
              <p className="text-white/60 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-gold" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
