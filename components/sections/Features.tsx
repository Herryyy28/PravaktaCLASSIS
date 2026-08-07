"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Clock, Award, Globe, Mic } from "lucide-react";

const features = [
  {
    name: "Expert Faculty",
    description: "Learn from industry professionals with years of experience in teaching English.",
    icon: Users,
  },
  {
    name: "Interactive Classes",
    description: "Engage in practical, conversation-focused sessions that build real-world skills.",
    icon: Mic,
  },
  {
    name: "Flexible Timings",
    description: "Choose from online, offline, or hybrid batches that fit your busy schedule.",
    icon: Clock,
  },
  {
    name: "Comprehensive Curriculum",
    description: "From basic grammar to advanced public speaking, we cover it all.",
    icon: BookOpen,
  },
  {
    name: "Global Opportunities",
    description: "Prepare for IELTS/PTE to unlock study and work opportunities abroad.",
    icon: Globe,
  },
  {
    name: "Recognized Certification",
    description: "Earn a valuable certificate upon successful completion of your course.",
    icon: Award,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Why Choose Pravakta Spoken English</h2>
          <p className="text-slate-600 text-lg">
            We provide a holistic learning environment focused on practical communication skills and confidence building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.name}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
