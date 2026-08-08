import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about Pravakta Spoken English courses.",
};

const faqs = [
  {
    question: "Do you offer online classes?",
    answer: "Yes, we offer flexible learning modes including 100% online, offline, and hybrid batches so you can choose what works best for your schedule."
  },
  {
    question: "How do I know which level is right for me?",
    answer: "Before you enroll, we conduct a free assessment test to evaluate your current proficiency. Based on the results, our counselors will recommend the most suitable course."
  },
  {
    question: "Will I get a certificate after completing the course?",
    answer: "Absolutely! Upon successful completion of your course and passing the final assessment, you will receive a recognized certificate from Pravakta Academy."
  },
  {
    question: "What is the batch size?",
    answer: "To ensure personalized attention, we keep our batch sizes small. Typical batches consist of 10-15 students."
  },
  {
    question: "Do you provide materials for Computer Classes?",
    answer: "Yes, all Computer class students receive comprehensive, up-to-date study materials, including practical exercises, software notes, and digital shortcuts."
  }
];

export default function FAQPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-slate-600">
            Find answers to some of the most common questions about our academy and courses.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
              <p className="text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
