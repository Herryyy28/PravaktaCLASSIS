import type { Metadata } from "next";
import HeroSlider from "@/components/sections/home/HeroSlider";
import AcademyHighlights from "@/components/sections/home/AcademyHighlights";
import AboutSection from "@/components/sections/home/AboutSection";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import CoursePreview from "@/components/sections/home/CoursePreview";
import LearningMethodology from "@/components/sections/home/LearningMethodology";
import FacultyPreview from "@/components/sections/home/FacultyPreview";
import StudentSuccess from "@/components/sections/home/StudentSuccess";
import LearningPlatform from "@/components/sections/home/LearningPlatform";
import ClassroomGallery from "@/components/sections/home/ClassroomGallery";
import TestimonialsCarousel from "@/components/sections/home/TestimonialsCarousel";
import FranchisePromo from "@/components/sections/home/FranchisePromo";
import HomeFAQ from "@/components/sections/home/HomeFAQ";
import Announcements from "@/components/sections/home/Announcements";
import ContactSection from "@/components/sections/home/ContactSection";

export const metadata: Metadata = {
  title: "Pravakta Spoken English | India's Premier English Coaching Institute",
  description:
    "Master English communication with Pravakta Academy. IELTS, PTE, Spoken English, Corporate Training & Franchise opportunities. 10,000+ students trained. Join today!",
  keywords: [
    "Spoken English Classes", "IELTS Coaching", "PTE Training", "English Speaking",
    "Pravakta Academy", "Best English Institute", "Franchise Opportunity",
  ],
};

export default function HomePage() {
  return (
    <>
      {/* 1. Full-Screen Hero Slider */}
      <HeroSlider />

      {/* 2. Academy Statistics */}
      <AcademyHighlights />

      {/* 3. About the Academy */}
      <AboutSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. English Courses */}
      <CoursePreview />

      {/* 6. Learning Methodology */}
      <LearningMethodology />

      {/* 7. Expert Faculty */}
      <FacultyPreview />

      {/* 8. Student Success */}
      <StudentSuccess />

      {/* 9. Learning Platform Software */}
      <LearningPlatform />

      {/* 10. Academy Gallery */}
      <ClassroomGallery />

      {/* 10. Student Testimonials */}
      <TestimonialsCarousel />

      {/* 11. Franchise Opportunity */}
      <FranchisePromo />

      {/* 12. FAQ */}
      <HomeFAQ />

      {/* 13. Announcements & Events */}
      <Announcements />

      {/* 14. Contact */}
      <ContactSection />
    </>
  );
}
