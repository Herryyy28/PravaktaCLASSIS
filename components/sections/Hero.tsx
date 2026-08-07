"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 pt-24 pb-32 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
            Welcome to Pravakta Academy
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Master English, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Master Your Future
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Join Pravakta Spoken English and embark on a journey of confident communication. 
            Our expert-led courses are designed to help you succeed globally.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/courses" className="btn-primary w-full sm:w-auto">
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-outline border-slate-700 bg-transparent text-white hover:bg-slate-800 w-full sm:w-auto">
              <PlayCircle className="mr-2 h-4 w-4" />
              Book Free Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
