import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, MapPin, Users, Building2, ArrowRight, CheckCircle, Stethoscope, Ambulance, FlaskConical, Baby } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

const services = [
  { icon: Stethoscope, label: "General Medicine", desc: "24/7 OPD and inpatient care for common illnesses and chronic conditions." },
  { icon: Heart, label: "Emergency Care", desc: "Round-the-clock emergency unit with ambulance response." },
  { icon: Baby, label: "Maternity & Child Health", desc: "Labor & delivery room, antenatal care, pediatric OPD." },
  { icon: Building2, label: "Orthopedic Care", desc: "Fracture management, joint care and rehabilitation." },
  { icon: FlaskConical, label: "Laboratory & Pharmacy", desc: "In-house diagnostic lab, blood storage and 24/7 pharmacy." },
  { icon: Ambulance, label: "Ambulance Support", desc: "Equipped ambulances for emergency transport within and beyond the cluster." },
];

const costBreakdown = [
  { label: "Land Acquisition", amount: "₹30 Lakh" },
  { label: "Construction & Civil Work", amount: "₹1.5 Crore" },
  { label: "Medical Equipment", amount: "₹1 Crore" },
  { label: "Ambulances (×2)", amount: "₹30 Lakh" },
  { label: "Pharmacy & Lab Setup", amount: "₹35 Lakh" },
  { label: "Utilities & Solar Power", amount: "₹35 Lakh" },
  { label: "Furniture & IT Systems", amount: "₹25 Lakh" },
  { label: "Working Capital", amount: "₹50 Lakh" },
];

const phases = [
  { phase: "Phase 1", label: "20-Bed Hospital", desc: "Establish the core 20-bed rural community hospital with emergency, maternity, general medicine and basic diagnostics.", status: "Active" },
  { phase: "Phase 2", label: "Expand to 50 Beds + ICU", desc: "Scale capacity with ICU, specialist outreach clinics and expanded diagnostic facilities.", status: "Planned" },
  { phase: "Phase 3", label: "Cancer Screening Unit", desc: "Add oncology screening and early intervention capabilities for rural populations.", status: "Future" },
];

const villages = ["Serugudi", "Soorampatti", "Pappapatti", "Paithamarai", "Thumbalam"];

export default function Hospital() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg width="100%" height="100%"><defs><pattern id="dph" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dph)"/></svg></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-['Plus_Jakarta_Sans'] mb-6 transition-colors">
              ← All Projects
            </Link>
            <span className="block text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk'] mb-3">Healthcare Project</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-['Syne'] mb-5 leading-tight">
              Natrinai Community Hospital
            </h1>
            <p className="text-white/75 text-lg font-['Plus_Jakarta_Sans'] max-w-2xl leading-relaxed mb-8">
              A 20-bed charitable rural hospital in Serugudi, Tiruchirappalli — bringing 24/7 emergency, maternity, and specialist care to 5 villages and 10,000 residents who currently travel 15 km for basic treatment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/donate" className="px-7 py-3 bg-[#D79A1E] text-white rounded-full font-bold font-['Syne'] hover:bg-[#c08918] transition-all">
                Sponsor a Hospital Bed
              </Link>
              <Link href="/donate" className="px-7 py-3 bg-white/10 border border-white/20 text-white rounded-full font-semibold font-['Syne'] hover:bg-white/20 transition-all">
                Donate to Hospital
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY STATS */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 20, suffix: " Beds", label: "Initial Capacity", color: "#0D5D42" },
            { value: 10000, suffix: "+", label: "Residents Served", color: "#123D6A" },
            { value: 5, suffix: " Villages", label: "Coverage Area", color: "#D79A1E" },
            { value: 15, suffix: " km", label: "Nearest Hospital", color: "#5AAE3D" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
            >
              <p className="text-3xl font-black font-['Syne']" style={{ color: stat.color }}>
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-500 text-sm mt-1 font-['Plus_Jakarta_Sans']">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">The Problem</span>
            <h2 className="text-2xl font-black text-gray-900 mt-2 mb-5 font-['Syne']">Healthcare Is a 15 km Drive Away</h2>
            <ul className="space-y-3">
              {[
                "5 rural villages — Serugudi cluster — have no full-scale hospital within 10–15 km",
                "~8,000–10,000 residents depend on small health centres for primary care",
                "Emergency patients must travel long distances for treatment",
                "No 24/7 maternity, surgical or diagnostic facilities locally",
                "Critical time loss during obstetric and trauma emergencies",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-600 font-['Plus_Jakarta_Sans']">
                  <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs shrink-0 mt-0.5">✕</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <span className="text-[#0D5D42] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Our Solution</span>
            <h2 className="text-2xl font-black text-gray-900 mt-2 mb-5 font-['Syne']">A Fully Equipped Rural Hospital</h2>
            <ul className="space-y-3">
              {[
                "20-bed (expandable to 50-bed) charitable community hospital",
                "24/7 emergency care with ambulance bay",
                "Maternity and child health with dedicated labor room",
                "Diagnostics: in-house laboratory and blood storage",
                "Solar-powered with generator backup for uninterrupted care",
                "Funded through corpus, CSR, donations and government schemes",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-600 font-['Plus_Jakarta_Sans']">
                  <CheckCircle className="w-5 h-5 text-[#0D5D42] shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* COVERAGE VILLAGES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-5 h-5 text-[#0D5D42]" />
            <h2 className="text-xl font-black text-gray-900 font-['Syne']">Villages in Coverage Area (5 km radius)</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {villages.map((v) => (
              <span key={v} className="px-5 py-2.5 bg-[#0D5D42]/10 text-[#0D5D42] rounded-full font-semibold font-['Space_Grotesk'] text-sm">{v}</span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-4 font-['Plus_Jakarta_Sans']">Location: Serugudi, Tiruchirappalli District, Tamil Nadu — 2 acres of land, ~50 cents built-up area</p>
        </div>
      </section>

      {/* CLINICAL SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Clinical Services</span>
            <h2 className="text-3xl font-black text-[#0D5D42] mt-2 font-['Syne']">Comprehensive Rural Healthcare</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D5D42]/10 flex items-center justify-center mb-4">
                  <svc.icon className="w-6 h-6 text-[#0D5D42]" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 font-['Syne']">{svc.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT COST */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Project Budget</span>
            <h2 className="text-3xl font-black text-[#0D5D42] mt-2 font-['Syne']">Total Estimated Cost: ₹4.5 – 5.5 Crore</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {costBreakdown.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex justify-between items-center p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <span className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">{item.label}</span>
                <span className="font-bold text-[#0D5D42] font-['Syne'] text-sm">{item.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Implementation Roadmap</span>
            <h2 className="text-3xl font-black text-white mt-2 font-['Syne']">3 Phases of Growth</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-7 bg-white/10 backdrop-blur rounded-3xl border border-white/10"
              >
                <span className="text-[#D79A1E] text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">{p.phase}</span>
                <h3 className="text-lg font-black text-white mt-2 mb-3 font-['Syne']">{p.label}</h3>
                <p className="text-white/70 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">{p.desc}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold font-['Space_Grotesk'] ${p.status === "Active" ? "bg-[#5AAE3D]/20 text-[#5AAE3D]" : p.status === "Planned" ? "bg-[#D79A1E]/20 text-[#D79A1E]" : "bg-white/10 text-white/60"}`}>
                  {p.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="py-20 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0D5D42] font-['Syne'] mb-4">Help Build This Hospital</h2>
          <p className="text-gray-600 font-['Plus_Jakarta_Sans'] mb-8">Sponsor a hospital bed (₹50,000), donate for equipment, or become a CSR partner. Every contribution saves lives.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Syne'] hover:bg-[#c08918] transition-all">
              Sponsor a Bed — ₹50,000
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0D5D42] text-[#0D5D42] rounded-full font-semibold font-['Syne'] hover:bg-[#0D5D42] hover:text-white transition-all">
              CSR Partnership <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
