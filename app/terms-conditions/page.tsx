import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function TermsAndConditions() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container max-w-4xl prose prose-slate">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the Pravakta Spoken English website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Course Enrollment</h2>
            <p>Enrollment in our courses is subject to availability and eligibility requirements. We reserve the right to refuse enrollment or cancel admission if incorrect information is provided.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Refund Policy</h2>
            <p>Course fees are non-refundable once the course has commenced. In case of cancellation before the commencement of the batch, a partial refund may be processed as per management discretion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Intellectual Property</h2>
            <p>All study materials, videos, and content provided during the course are the intellectual property of Pravakta Academy and are for personal use only. Unauthorized distribution is strictly prohibited.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
