import { Metadata } from "next";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Faculty",
  description: "Meet the expert trainers at Pravakta Spoken English.",
};

const faculty = [
  {
    id: 1,
    name: "John Doe",
    role: "Senior English Trainer",
    experience: "10+ years",
    bio: "Specializes in IELTS training and corporate communication. Former IELTS examiner with British Council.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Spoken English Expert",
    experience: "8 years",
    bio: "Expert in accent neutralization and building confidence in public speaking for adult learners.",
  },
  {
    id: 3,
    name: "Robert Chen",
    role: "PTE Master Trainer",
    experience: "5 years",
    bio: "Focuses on advanced grammar and test strategies. Consistently produces high-scoring students.",
  },
];

export default function FacultyPage() {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Expert Faculty</h1>
          <p className="text-lg text-slate-600">
            Learn from the best in the industry. Our trainers are certified professionals dedicated to your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div key={member.id} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="h-64 w-full bg-slate-200 relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                  Photo Placeholder
                </div>
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="#" className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-50 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-500 mb-4 border border-slate-200">
                  {member.experience} exp.
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
