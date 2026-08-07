"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Who can join Pravakta Spoken English?", a: "Our courses are open to anyone aged 10 and above — school students, college students, working professionals, homemakers, and senior citizens. We have courses for every level from beginner to executive." },
  { q: "How much does the course fee cost?",    a: "Course fees vary depending on the program. We have affordable options starting at ₹2,999. Contact us for a detailed fee structure and ongoing scholarship offers for deserving students." },
  { q: "What are the available batch timings?", a: "We offer morning (7am–9am), afternoon (12pm–2pm), evening (6pm–8pm), and weekend batches. Both online and offline options are available for maximum flexibility." },
  { q: "Will I get a certificate after the course?", a: "Yes! Upon successful completion and passing the assessment, you will receive a Pravakta Academy completion certificate recognized by our corporate partners." },
  { q: "Do you offer online classes?",          a: "Absolutely. We offer 100% online, offline, and hybrid batches. Our online classes use interactive video tools and are as effective as our in-person sessions." },
  { q: "How does the franchise program work?",  a: "Our franchise model gives you exclusive territory rights, a complete setup guide, trained faculty, marketing support, and ongoing operational assistance. Investment starts from ₹5 Lakhs." },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-py bg-slate-50">
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <span className="badge-royal">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub text-center">Everything you need to know before enrolling.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
              >
                <span className="font-heading font-semibold text-navy text-base">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-royal" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
