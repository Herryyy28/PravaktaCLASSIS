"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  { num: "01", title: "Admission",          desc: "Enroll online or walk in — quick and hassle-free admission process.", color: "bg-blue-500" },
  { num: "02", title: "Assessment",         desc: "Free proficiency test to place you in the right batch and level.", color: "bg-purple-500" },
  { num: "03", title: "Classroom Learning", desc: "Expert-led sessions combining grammar, vocabulary, and pronunciation.", color: "bg-green-500" },
  { num: "04", title: "Speaking Practice",  desc: "Daily structured speaking drills, role plays, and group activities.", color: "bg-amber-500" },
  { num: "05", title: "Weekly Activities",  desc: "Debates, presentations, extempore, and real-life communication exercises.", color: "bg-red-500" },
  { num: "06", title: "Mock Interviews",    desc: "Intensive HR mock sessions, GDs, and feedback from industry experts.", color: "bg-cyan-500" },
  { num: "07", title: "Certification",      desc: "Receive your internationally recognized Pravakta completion certificate.", color: "bg-indigo-500" },
  { num: "08", title: "Career Growth",      desc: "Placement guidance, resume help, and alumni network to launch your career.", color: "bg-navy" },
];

export default function LearningMethodology() {
  return (
    <section className="section-py bg-gradient-light">
      <div className="container">
        <div className="text-center mb-14">
          <span className="badge-royal">Our Methodology</span>
          <h2 className="section-title">Your Journey To English Mastery</h2>
          <p className="section-sub text-center">
            A structured, proven 8-step learning path designed to take you from beginner to confident communicator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <div className="card p-6 h-full">
                <div className={`h-12 w-12 rounded-full ${step.color} flex items-center justify-center text-white font-heading font-extrabold text-sm mb-5`}>
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>

              {/* Connector arrow for desktop */}
              {i % 4 !== 3 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowDown className="h-5 w-5 text-slate-300 -rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
