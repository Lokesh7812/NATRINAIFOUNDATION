import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, Users, CheckCircle, ArrowRight, MapPin, Heart } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

const criteria = [
  "Families living in single-room thatched huts or severely damaged structures",
  "Annual income below the poverty line",
  "No existing government housing scheme benefits",
  "Priority to families with elderly, differently-abled, or single women heads",
  "Long-term residents with community ties and land rights",
];

const process = [
  { step: "01", label: "Community Survey", desc: "Natrinai volunteers conduct door-to-door surveys to identify the most vulnerable families in each village." },
  { step: "02", label: "Selection & Verification", desc: "Beneficiaries are selected based on need criteria and verified with community leaders and government records." },
  { step: "03", label: "Construction Planning", desc: "Licensed architects and engineers design safe, durable homes tailored to the family's land and local building standards." },
  { step: "04", label: "Build & Handover", desc: "Homes are constructed with quality materials and formally handed over to the family with all legal documentation." },
];

const budget = [
  { item: "Foundation & Structure", cost: "₹1,20,000" },
  { item: "Walls (brick/block)", cost: "₹80,000" },
  { item: "Roof (RCC / Mangalore)", cost: "₹60,000" },
  { item: "Doors, Windows & Fixtures", cost: "₹40,000" },
  { item: "Electrical & Plumbing", cost: "₹30,000" },
  { item: "Plastering & Finishing", cost: "₹20,000" },
];

export default function HutToHome() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#5AAE3D] to-[#0D5D42] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg width="100%" height="100%"><defs><pattern id="dphh" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dphh)"/></svg></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-['Plus_Jakarta_Sans'] mb-6 transition-colors">
              ← All Projects
            </Link>
            <span className="block text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk'] mb-3">Rural Development</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-['Syne'] mb-5 leading-tight">
              Hut to Home Initiative
            </h1>
            <p className="text-white/85 text-lg font-['Plus_Jakarta_Sans'] max-w-2xl leading-relaxed mb-8">
              Transforming fragile thatched huts into safe, dignified, permanent homes for the most vulnerable rural families in Tamil Nadu. Because everyone deserves shelter.
            </p>
            <div className="flex items-center gap-3 text-white/60 text-sm font-['Plus_Jakarta_Sans'] mb-8">
              <MapPin className="w-4 h-4 text-[#D79A1E]" />
              Rural Tamil Nadu — 25 homes planned in Phase 2
            </div>
            <Link href="/donate" className="inline-flex items-center gap-2 px-7 py-3 bg-[#D79A1E] text-white rounded-full font-bold font-['Syne'] hover:bg-[#c08918] transition-all">
              Donate a Home <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 1, suffix: " Pilot", label: "Home Completed (Pilot)", color: "#5AAE3D" },
            { value: 25, suffix: " Homes", label: "Phase 2 Target", color: "#0D5D42" },
            { value: 500, suffix: "+", label: "Families Need Help", color: "#D79A1E" },
            { value: 3, suffix: " Lakh", label: "Avg. Cost per Home (₹)", color: "#123D6A" },
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

      {/* PROBLEM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-red-500 font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">The Challenge</span>
            <h2 className="text-2xl font-black text-gray-900 mt-2 mb-5 font-['Syne']">Hundreds of Families in Fragile Shelter</h2>
            <p className="text-gray-600 leading-relaxed font-['Plus_Jakarta_Sans'] mb-5">
              Across rural Tamil Nadu, hundreds of families live in single-room thatched huts that collapse in monsoons, flood in rains, and provide no real protection from the elements. Many are elderly, differently-abled, or headed by single women — among the most vulnerable people in our communities.
            </p>
            <p className="text-gray-600 leading-relaxed font-['Plus_Jakarta_Sans']">
              Government housing schemes exist but are slow, inaccessible, and often bypass the most marginalised. The Hut to Home Initiative fills that gap — acting fast, with community validation, and 100% donor accountability.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="bg-[#5AAE3D]/10 rounded-3xl p-8">
              <Heart className="w-8 h-8 text-[#5AAE3D] mb-4" />
              <h3 className="font-black text-[#0D5D42] text-lg font-['Syne'] mb-3">Pilot Success Story</h3>
              <p className="text-gray-700 text-sm font-['Plus_Jakarta_Sans'] leading-relaxed mb-4">
                In our pilot phase, we transformed the home of an elderly widow living alone in a severely damaged hut in rural Tiruchirappalli District. Within 45 days, she had a permanent 2-room home with a proper roof, door, and electricity connection.
              </p>
              <p className="text-gray-600 text-sm font-['Plus_Jakarta_Sans'] italic">
                "For the first time in 30 years, I can sleep without worrying about the roof falling. This is not just a house — it is my dignity."
              </p>
              <p className="text-[#5AAE3D] text-xs font-semibold font-['Space_Grotesk'] mt-2">— Pilot beneficiary, Tiruchirappalli</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENEFICIARY CRITERIA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Selection</span>
            <h2 className="text-3xl font-black text-[#0D5D42] mt-2 font-['Syne']">Beneficiary Selection Criteria</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {criteria.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 p-5 bg-gray-50 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-[#5AAE3D] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-['Plus_Jakarta_Sans']">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Our Process</span>
            <h2 className="text-3xl font-black text-[#0D5D42] mt-2 font-['Syne']">From Survey to Handover in 60 Days</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#5AAE3D] text-white flex items-center justify-center text-xl font-black font-['Syne'] mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 font-['Syne']">{p.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-['Plus_Jakarta_Sans']">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUDGET */}
      <section className="py-20 bg-[#0D5D42]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Cost Breakdown</span>
            <h2 className="text-3xl font-black text-white mt-2 font-['Syne']">₹3 Lakh Builds One Home</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {budget.map((item, i) => (
              <motion.div
                key={item.item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex justify-between items-center p-5 bg-white/10 rounded-xl"
              >
                <span className="text-white/80 text-sm font-['Plus_Jakarta_Sans']">{item.item}</span>
                <span className="font-bold text-[#D79A1E] font-['Syne']">{item.cost}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-[#D79A1E] rounded-xl flex justify-between items-center">
            <span className="text-white font-bold font-['Syne']">Total per Home</span>
            <span className="text-white font-black text-xl font-['Syne']">~₹3,50,000</span>
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section className="py-20 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <Home className="w-12 h-12 text-[#5AAE3D] mx-auto mb-5" />
          <h2 className="text-3xl font-black text-[#0D5D42] font-['Syne'] mb-4">Donate a Home Today</h2>
          <p className="text-gray-600 font-['Plus_Jakarta_Sans'] mb-8">₹3,50,000 builds a family a permanent home. You can donate the full amount, or contribute toward a home with any amount — we will combine contributions to complete each house.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Syne'] hover:bg-[#c08918] transition-all">
              Donate a Home — ₹3.5 Lakh
            </Link>
            <Link href="/donate" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0D5D42] text-[#0D5D42] rounded-full font-semibold font-['Syne'] hover:bg-[#0D5D42] hover:text-white transition-all">
              Contribute Any Amount <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
