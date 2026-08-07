"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Loader2, CheckCircle, Target, TrendingUp, Handshake, Headphones, MapPin, Calendar, Activity } from "lucide-react";

const franchiseSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(2, "City is required"),
  investment: z.string().min(1, "Please select an investment range"),
});

type FranchiseData = z.infer<typeof franchiseSchema>;

export default function FranchisePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FranchiseData>({
    resolver: zodResolver(franchiseSchema),
  });

  const onSubmit = async (data: FranchiseData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const benefits = [
    { title: "Proven Business Model", icon: Target, desc: "Replicate our successful operational model for quick setup and low risk." },
    { title: "High ROI Potential", icon: TrendingUp, desc: "Education is an evergreen sector with excellent return on investment." },
    { title: "Marketing Support", icon: Handshake, desc: "Get comprehensive branding, digital marketing, and lead generation support." },
    { title: "Training & Tech Support", icon: Headphones, desc: "We provide complete faculty training and an operational tech stack." },
  ];

  const existingFranchises = [
    { city: "Surat, Gujarat", name: "Surat Premium Center", established: "2021", status: "Active & Growing" },
    { city: "Valsad, Gujarat", name: "Valsad City Center", established: "2023", status: "Active & Growing" },
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4">Franchise Opportunities</h1>
          <p className="text-lg text-slate-600">
            Partner with Pravakta Spoken English and build a successful business while transforming lives through education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-8">Why Partner With Us?</h2>
            <div className="space-y-6">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600 shrink-0">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Apply for Franchise</h3>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5" />
                  <p>Application submitted! Our team will contact you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input {...register("name")} className="w-full rounded-md border border-slate-300 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input {...register("phone")} className="w-full rounded-md border border-slate-300 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input {...register("email")} type="email" className="w-full rounded-md border border-slate-300 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Preferred City / Location</label>
                  <input {...register("city")} className="w-full rounded-md border border-slate-300 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500" />
                  {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Available Investment</label>
                  <select {...register("investment")} className="w-full rounded-md border border-slate-300 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500">
                    <option value="">Select an option</option>
                    <option value="5-10L">₹5 Lakhs - ₹10 Lakhs</option>
                    <option value="10-20L">₹10 Lakhs - ₹20 Lakhs</option>
                    <option value="20L+">Above ₹20 Lakhs</option>
                  </select>
                  {errors.investment && <p className="mt-1 text-sm text-red-500">{errors.investment.message}</p>}
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-secondary w-full">
                  {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...</> : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Existing Franchises Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Growing Network</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join our rapidly expanding family of successful franchise centers delivering quality English education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingFranchises.map((center, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-navy text-white rounded-xl flex items-center justify-center mb-5">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{center.name}</h3>
                <div className="space-y-3 mt-4">
                  <div className="flex items-center text-sm text-slate-600">
                    <MapPin className="h-4 w-4 text-gold mr-2" />
                    {center.city}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Calendar className="h-4 w-4 text-gold mr-2" />
                    Established in {center.established}
                  </div>
                  <div className="flex items-center text-sm text-green-600 font-medium bg-green-50 w-fit px-3 py-1 rounded-full mt-2">
                    <Activity className="h-4 w-4 mr-1.5" />
                    {center.status}
                  </div>
                </div>
              </div>
            ))}
            
            {/* CTA Card for New Franchise */}
            <div className="bg-gradient-navy p-6 rounded-2xl shadow-sm flex flex-col justify-center items-center text-center text-white min-h-[250px]">
              <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">Your City Next?</h3>
              <p className="text-white/70 text-sm mb-4">Bring Pravakta Academy to your city and start your journey today.</p>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gold text-sm font-semibold hover:text-white transition-colors uppercase tracking-wider">
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
