"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, TrendingUp, Headphones, Megaphone, Download, ArrowRight } from "lucide-react";

const benefits = [
  { icon: CheckCircle, title: "Proven Brand", desc: "Leverage 10+ years of established brand recognition and trust in the education sector." },
  { icon: TrendingUp, title: "High ROI", desc: "Education is recession-proof. Enjoy excellent returns with minimal operational risk." },
  { icon: Headphones, title: "Complete Training", desc: "We train your faculty and staff with our proven teaching methodology from day one." },
  { icon: Megaphone, title: "Marketing Support", desc: "Get digital marketing, branding, leads, and promotional materials from our team." },
];

export default function FranchisePromo() {
  return (
    <section className="section-py overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-royal-dark" />
      <div className="absolute top-0 right-0 h-96 w-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-royal/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="badge-gold">Franchise Opportunity</span>
            <h2 className="section-title text-white">
              Own a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                Profitable Business
              </span>{" "}
              in Education
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Join the Pravakta Franchise Family and build a successful, meaningful business in your city. We provide everything you need — from training and technology to marketing and ongoing support.
            </p>

            <div className="space-y-5 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-gold/20 p-2.5 rounded-lg shrink-0">
                    <b.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-white mb-0.5">{b.title}</h3>
                    <p className="text-white/60 text-sm">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/franchise" className="btn-gold btn-lg">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="btn-outline-white btn-lg flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Brochure
              </button>
            </div>
          </motion.div>

          {/* Right – stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { num: "2+", label: "Active Franchises", emoji: "🏢" },
              { num: "₹50K+", label: "Starting Investment", emoji: "💰" },
              { num: "30%+", label: "Avg. Annual ROI", emoji: "📈" },
              { num: "100%", label: "Training Provided", emoji: "🎓" },
              { num: "15+", label: "Cities Available", emoji: "📍" },
              { num: "24/7", label: "Ongoing Support", emoji: "🤝" },
            ].map((item) => (
              <div key={item.label} className="card-glass rounded-2xl p-6 text-center">
                <p className="text-3xl mb-2">{item.emoji}</p>
                <p className="font-heading text-2xl font-extrabold text-gold">{item.num}</p>
                <p className="text-white/60 text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
