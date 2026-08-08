import { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore our Spoken English and Computer preparation courses.",
};

const courses = [
  {
    id: "basic",
    title: "Basic Spoken English",
    description: "Perfect for beginners looking to build a strong foundation in grammar, vocabulary, and basic communication.",
    duration: "2 Months",
    mode: "Hybrid",
    level: "Beginner",
    features: [
      "Fundamental Grammar Rules",
      "Vocabulary Building",
      "Basic Conversational Practice",
      "Confidence Building Exercises",
    ],
    color: "blue",
  },
  {
    id: "advanced",
    title: "Advanced Spoken English",
    description: "For intermediate speakers who want to achieve fluency, improve pronunciation, and master public speaking.",
    duration: "3 Months",
    mode: "Hybrid",
    level: "Intermediate",
    features: [
      "Advanced Grammar & Idioms",
      "Accent Neutralization",
      "Public Speaking & Presentations",
      "Group Discussions & Debates",
    ],
    color: "amber",
  },
  {
    id: "computer",
    title: "Computer Classes",
    description: "Targeted strategies and practice to help you achieve your desired computer skills for studying or working.",
    duration: "2-3 Months",
    mode: "Offline",
    level: "Beginner - Advanced",
    features: ["MS Office", "Typing", "Internet Surfing", "Tally ERP", "Graphic Design"],
    color: "emerald",
  },
];

export default function CoursesPage() {
  return (
    <div className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Training Programs</h1>
          <p className="text-lg text-slate-600">
            Choose from our range of expertly crafted courses designed to meet your specific learning goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
              <div className={`h-2 w-full bg-${course.color}-500`} />
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-slate-600 mb-6 flex-1">{course.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.mode}</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">What you'll learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle className={`h-4 w-4 text-${course.color}-500 shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={`/contact?course=${course.id}`} className="btn-outline w-full mt-auto">
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
