import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Pravakta Academy's mission, vision, and teaching philosophy.",
};

export default function AboutPage() {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Pravakta Academy</h1>
          <p className="text-lg text-slate-600">
            We are dedicated to transforming lives by empowering individuals with the confidence and skills required to communicate effectively in English on a global stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Mission</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              To empower individuals with the confidence and skills required to communicate effectively in English, fostering personal and professional growth globally. We strive to provide high-quality education that is accessible and impactful.
            </p>
          </div>
          <div className="bg-amber-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Our Vision</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              To be the leading spoken English training institute recognized for excellence, innovation, and transforming lives through language proficiency. We envision a world where language barriers do not hold anyone back from achieving their dreams.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Teaching Philosophy</h2>
          <div className="prose prose-lg mx-auto text-slate-600">
            <p>
              At Pravakta Academy, we believe that language learning should be an engaging, practical, and tailored experience. Every individual learns differently, which is why our methodology focuses on:
            </p>
            <ul>
              <li><strong>Immersive Experiences:</strong> Creating an environment where English is naturally adopted.</li>
              <li><strong>Interactive Sessions:</strong> Focusing heavily on speaking, listening, and real-time conversation rather than rote learning.</li>
              <li><strong>Continuous Feedback:</strong> Providing constructive, personalized feedback to help students overcome their unique challenges.</li>
            </ul>
            <p>
              Our experienced faculty members are not just teachers; they are mentors committed to your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
