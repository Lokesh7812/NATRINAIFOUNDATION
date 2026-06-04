import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Target, Users, Shield, FileText } from "lucide-react";

const trustees = [
  { name: "Tharun Ayyavu Perumal", role: "Founder Trustee", initials: "TP" },
  { name: "Mohan das Vijayabalan", role: "Trustee", initials: "MV" },
  { name: "Deenathayalan Easwaran", role: "Trustee", initials: "DE" },
];

const objectives = [
  { area: "Education & Skill Development", items: ["Scholarships, educational support and career guidance", "Skill development and vocational training", "Nurturing future doctors, engineers and scientists"] },
  { area: "Sports Development", items: ["Identifying talent from underprivileged communities", "Coaching, infrastructure and exposure programs", "Streets to Stadium initiative"] },
  { area: "Women Empowerment", items: ["Education, skill development and livelihood programs", "Rights awareness and safety campaigns", "Economic independence programs"] },
  { area: "Environmental Conservation", items: ["Water conservation and pond/lake rejuvenation", "Rainwater harvesting programs", "Ecosystem restoration and biodiversity protection"] },
  { area: "Rural & Community Development", items: ["Rural livelihood and infrastructure programs", "Sanitation, drinking water and basic facilities", "Community housing and home construction"] },
  { area: "Health & Sanitation", items: ["Medical camps and health awareness programs", "Preventive healthcare and hygiene education", "24/7 rural hospital establishment"] },
  { area: "Technology & AI", items: ["AI and Robotics education programs", "Innovation labs and digital literacy", "Technology access for students and communities"] },
  { area: "Other Focus Areas", items: ["Mental health awareness and counselling", "Support for differently-abled persons", "Senior citizen welfare programs", "Cultural heritage preservation", "Wildlife and ecosystem conservation", "Film making and creative arts", "Disaster relief and rehabilitation"] },
];

const timeline = [
  { year: "2019–20", event: "Community service begins — coaching football, supporting students, planting trees in Puducherry and Tiruchirappalli." },
  { year: "2021", event: "Hut to Home pilot: first family's hut converted to a permanent home. 52 Scholars concept born." },
  { year: "2022", event: "Genesis Soccer School launched in Puducherry government schools. First MERO Trophy competition." },
  { year: "2023", event: "Natrinai Foundation formally registered as a charitable trust. 12A registration obtained." },
  { year: "2024", event: "80G certification received. Hospital project planning initiated. CSR partnerships established." },
  { year: "2025–26", event: "Land acquired for Natrinai Community Hospital. 52 Scholars milestone: 52 students in one year achieved." },
];

export default function About() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%"><defs><pattern id="dp" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dp)"/></svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-['Raleway']">Our Story, Our Purpose</h1>
            <p className="text-white/75 text-lg font-['Barlow'] max-w-2xl mx-auto leading-relaxed">
              We began as a group of passionate individuals doing community work long before we had a name. Today, Natrinai Foundation is a registered trust with a clear mission and a growing national footprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Our Story</span>
            <h2 className="text-3xl font-black text-[#0D5D42] mt-2 mb-5 font-['Raleway']">5 Years Before We Had a Name</h2>
            <p className="text-gray-600 leading-relaxed font-['Barlow'] mb-4">
              Long before we registered as Natrinai Foundation, our team was already doing the work. On weekends, we were on government school grounds coaching football. On weekdays, we were tracking down deserving students who could not afford college and arranging their admissions. We planted trees, organised medical camps, and helped families rebuild their homes.
            </p>
            <p className="text-gray-600 leading-relaxed font-['Barlow'] mb-4">
              We operated in the domains of sports, education, rural development and community hospitality — not because we had to, but because we saw the need and could not look away.
            </p>
            <p className="text-gray-600 leading-relaxed font-['Barlow']">
              In 2023, we formalised as Natrinai Foundation — a registered charitable trust under the Indian Trusts Act — to give our work the institutional structure, financial transparency and legal standing it deserved. Today we are 12A and 80G registered, working toward FCRA compliance, and scaling our programs across Tamil Nadu and Puducherry.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#0D5D42] text-white flex items-center justify-center text-xs font-bold font-['Barlow'] shrink-0">{i + 1}</div>
                    {i < timeline.length - 1 && <div className="w-0.5 bg-[#0D5D42]/20 flex-1 mt-1" />}
                  </div>
                  <div className="pb-4">
                    <p className="text-[#D79A1E] text-xs font-bold font-['Barlow'] mb-1">{item.year}</p>
                    <p className="text-gray-600 text-sm font-['Barlow'] leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {[
              {
                icon: BookOpen,
                label: "Our Vision",
                color: "#0D5D42",
                text: "To build an empowered, sustainable, and inclusive society through education, sports development, women empowerment, health and sanitation, environmental protection, and community development.",
              },
              {
                icon: Target,
                label: "Our Mission",
                color: "#123D6A",
                text: "To identify, nurture, and develop individuals from diverse sections of society into successful professionals — including doctors, engineers, sports personalities, filmmakers, and scientists — irrespective of caste, creed, religion, gender, or social status.",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: item.color + "15" }}>
                  <item.icon className="w-7 h-7" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-black mb-4 font-['Raleway']" style={{ color: item.color }}>{item.label}</h3>
                <p className="text-gray-600 leading-relaxed font-['Barlow']">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Our Objectives</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">What We Are Working Toward</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, i) => (
              <motion.div
                key={obj.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-7 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <h3 className="font-bold text-[#0D5D42] text-base mb-4 font-['Raleway']">{obj.area}</h3>
                <ul className="space-y-2">
                  {obj.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 font-['Barlow']">
                      <span className="text-[#5AAE3D] mt-1 shrink-0">›</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Governance</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 font-['Raleway']">Board of Trustees</h2>
            <p className="text-white/70 mt-3 font-['Barlow']">The trust is managed by a dedicated Board of Trustees who govern all programs, finances, and strategic decisions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
            {trustees.map((trustee, i) => (
              <motion.div
                key={trustee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/10"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D79A1E] to-[#c08918] flex items-center justify-center text-white text-2xl font-black font-['Raleway'] mx-auto mb-5">
                  {trustee.initials}
                </div>
                <p className="font-bold text-white text-base font-['Raleway']">{trustee.name}</p>
                <p className="text-[#D79A1E] text-sm mt-1 font-['Barlow']">{trustee.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: Shield, label: "12A Registration", desc: "Income tax exemption on trust income." },
              { icon: FileText, label: "80G Certification", desc: "Tax deduction for donors." },
              { icon: Users, label: "FCRA (Pending)", desc: "Enabling foreign contributions in future." },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur rounded-2xl border border-white/10">
                <item.icon className="w-5 h-5 text-[#D79A1E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-sm font-['Raleway']">{item.label}</p>
                  <p className="text-white/60 text-xs mt-1 font-['Barlow']">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0D5D42] font-['Raleway'] mb-4">Be Part of Our Journey</h2>
          <p className="text-gray-600 font-['Barlow'] mb-8">Support our programs, volunteer your time, or partner with us for CSR initiatives.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Raleway'] hover:bg-[#c08918] transition-all">
              Donate Now
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0D5D42] text-[#0D5D42] rounded-full font-semibold font-['Raleway'] hover:bg-[#0D5D42] hover:text-white transition-all">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
