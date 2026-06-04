import { motion } from "framer-motion";
import { Link } from "wouter";
import { GraduationCap, Calendar, Users, BookOpen, CheckCircle, ArrowRight, Star } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

const pillars = [
  { icon: GraduationCap, label: "Scholarships", desc: "Full financial support for tuition, books, and related educational expenses for deserving students." },
  { icon: BookOpen, label: "Career Guidance", desc: "Mentorship from professionals in medicine, engineering, law, and business to chart the right path." },
  { icon: Users, label: "Mentorship System", desc: "Every scholar is paired with a dedicated mentor who stays engaged throughout the academic journey." },
  { icon: Calendar, label: "Weekly Model", desc: "One individual is identified, evaluated, and enrolled every week — creating a rhythm of impact across the year." },
  { icon: Star, label: "Skill Development", desc: "Beyond academics — communication, digital skills, and professional readiness workshops." },
  { icon: CheckCircle, label: "Transparency", desc: "Donors can track exactly which scholar their contribution is supporting, with regular progress updates." },
];

const steps = [
  { step: "01", title: "Community Identification", desc: "Natrinai volunteers and community leaders identify deserving candidates each week through school visits, community contacts, and recommendations." },
  { step: "02", title: "Evaluation & Selection", desc: "Candidates are evaluated on academic potential, financial need, and personal motivation. One scholar is selected every week." },
  { step: "03", title: "Support Package Design", desc: "A customised support package is designed — college admission assistance, fees, books, and career mentorship." },
  { step: "04", title: "Ongoing Mentorship", desc: "The scholar receives regular mentorship, progress tracking, and ongoing support throughout their educational journey." },
];

export default function Scholars() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#D79A1E] to-[#c08918] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><svg width="100%" height="100%"><defs><pattern id="dpsc" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dpsc)"/></svg></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-['Inter'] mb-6 transition-colors">
              ← All Projects
            </Link>
            <span className="block text-white/80 font-semibold text-sm tracking-widest uppercase font-['Montserrat'] mb-3">Education Project</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-['Poppins'] mb-5 leading-tight">
              Natrinai 52 Scholars Initiative
            </h1>
            <p className="text-white/85 text-lg font-['Inter'] max-w-2xl leading-relaxed mb-8">
              One scholar empowered every week of the year. 52 lives transformed every year. A simple, radical model of educational justice — because talent is everywhere, but opportunity is not.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#D79A1E] rounded-full font-bold font-['Poppins'] hover:bg-white/90 transition-all">
                Support a Scholar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 52, suffix: "/year", label: "Scholars Supported", color: "#D79A1E" },
            { value: 2000, suffix: "+", label: "Total Beneficiaries", color: "#0D5D42" },
            { value: 100, suffix: "%", label: "Scholar Completion Rate", color: "#123D6A" },
            { value: 1, suffix: "/week", label: "New Scholar Enrolled", color: "#5AAE3D" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
            >
              <p className="text-3xl font-black font-['Poppins']" style={{ color: stat.color }}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-sm mt-1 font-['Inter']">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Montserrat']">The Model</span>
            <h2 className="text-3xl font-black text-[#0D5D42] mt-2 mb-5 font-['Poppins']">52 Weeks. 52 Lives Changed.</h2>
            <p className="text-gray-600 leading-relaxed font-['Inter'] mb-4">
              The 52 Scholars Initiative is Natrinai Foundation's flagship education program — built on a deceptively simple premise: identify one deserving individual every single week and give them the educational support they need to succeed.
            </p>
            <p className="text-gray-600 leading-relaxed font-['Inter'] mb-4">
              Over the course of a year, that adds up to 52 scholars — young men and women from underserved communities who would otherwise never see the inside of a professional college or career pathway.
            </p>
            <p className="text-gray-600 leading-relaxed font-['Inter']">
              In partnership with the <strong className="text-[#0D5D42]">Dr. Abdul Kalam Dream Foundation</strong>, we have built a mentorship and tracking ecosystem that ensures every scholar receives not just a scholarship, but the guidance and network to make the most of it.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-5 bg-white rounded-2xl border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D79A1E] text-white flex items-center justify-center font-black text-sm font-['Poppins'] shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1 font-['Poppins']">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-['Inter']">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Montserrat']">Program Pillars</span>
            <h2 className="text-3xl font-black text-[#0D5D42] mt-2 font-['Poppins']">A Complete Support System</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-[#D79A1E]/5 border border-[#D79A1E]/15 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D79A1E]/15 flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-[#D79A1E]" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 font-['Poppins']">{pillar.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-['Inter']">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="py-16 bg-[#0D5D42] text-center">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase font-['Montserrat'] mb-4">In Partnership With</p>
            <h3 className="text-2xl font-black text-white font-['Poppins'] mb-3">Dr. Abdul Kalam Dream Foundation</h3>
            <p className="text-white/70 font-['Inter'] text-base">Together, we are building the mentorship infrastructure that transforms scholarship recipients into India's next generation of doctors, engineers, scientists, and leaders.</p>
          </motion.div>
        </div>
      </section>

      {/* DONOR CTA */}
      <section className="py-20 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0D5D42] font-['Poppins'] mb-4">Fund a Scholar's Future</h2>
          <p className="text-gray-600 font-['Inter'] mb-8">₹12,000 supports one scholar for a full year. Your contribution can be the reason someone becomes a doctor, engineer, or scientist.</p>
          <Link href="/donate" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Poppins'] hover:bg-[#c08918] transition-all text-lg">
            Support a Scholar — ₹12,000/year <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
