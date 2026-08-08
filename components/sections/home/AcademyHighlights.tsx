"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Briefcase, Building2, Star, TrendingUp } from "lucide-react";

const stats = [
  { icon: Award, value: 15, suffix: "+", label: "Years of Excellence", color: "text-gold" },
  { icon: Users, value: 6000, suffix: "+", label: "Students Trained", color: "text-royal-light" },
  { icon: TrendingUp, value: 5, suffix: "+", label: "Successful Professionals", color: "text-green-400" },
  { icon: Briefcase, value: 100, suffix: "+", label: "Corporate Trainings", color: "text-purple-400" },
  { icon: Building2, value: 2, suffix: "+", label: "Franchise Centers", color: "text-gold" },
  { icon: Star, value: 95, suffix: "%", label: "Student Satisfaction", color: "text-royal-light" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-extrabold">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function AcademyHighlights() {
  return (
    <section className="py-20 bg-navy overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-royal blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-14">
          <span className="badge-gold">Our Achievements</span>
          <h2 className="section-title text-white">Numbers That Speak For Themselves</h2>
          <p className="section-sub text-white/60">
            A decade of transforming lives through the power of effective English communication.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass p-6 text-center rounded-2xl hover:scale-105 transition-transform"
            >
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className={`${stat.color} mb-2`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/60 text-sm leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
