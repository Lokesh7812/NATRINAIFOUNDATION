import { motion } from "framer-motion";
import { Link } from "wouter";
import { Trophy, Users, MapPin, Target, CheckCircle, ArrowRight, Star, Camera } from "lucide-react";
import { useState } from "react";

const programs = [
  { title: "Government School Program", desc: "Weekly football coaching sessions in 5+ government schools in Puducherry, reaching students who would never otherwise access professional training." },
  { title: "Elite Athlete Pathway", desc: "Identifying standout talent for intensive training, exposure to state-level tournaments, and pathways toward professional football clubs." },
  { title: "Coach Development", desc: "Training local coaches with modern methodologies and UEFA-inspired coaching principles to ensure quality beyond Natrinai's direct involvement." },
  { title: "MERO Trophy", desc: "An annual inter-school football tournament that has grown into Puducherry's most anticipated youth football event, with 12+ schools competing." },
  { title: "Training Centre", desc: "Planning a dedicated football training facility with synthetic turf, gymnasium, and video analysis room for elite athlete development." },
  { title: "Streets to Stadium", desc: "Talent scouting in urban and rural streets — finding the next generation of Indian footballers from communities that mainstream scouts never visit." },
];

const outcomes = [
  "150+ students coached annually across government schools",
  "12+ schools participating in the annual MERO Trophy",
  "6 athletes have represented their district in state competitions",
  "3 coaches trained and certified through the program",
  "1 athlete received a state-level scholarship",
  "Plans for permanent training centre underway",
];

const sportsPhotos = [
  { src: "/images/sports/IMG-20220102-WA0054.jpg", caption: "Team Training Session" },
  { src: "/images/sports/IMG-20220130-WA0021.jpg", caption: "Youth Players on the Field" },
  { src: "/images/sports/IMG-20220130-WA0093.jpg", caption: "Match Day Action" },
  { src: "/images/sports/IMG-20221026-WA0025.jpg", caption: "Coaching Drills" },
  { src: "/images/sports/IMG-20230408-WA0013.jpg", caption: "School Tournament" },
  { src: "/images/sports/IMG-20230409-WA0011.jpg", caption: "MERO Trophy 2023" },
  { src: "/images/sports/IMG-20230917-WA0046.jpg", caption: "Elite Pathway Training" },
  { src: "/images/sports/IMG-20231217-WA0031.jpg", caption: "Year-End Tournament" },
  { src: "/images/sports/IMG-20231217-WA0032.jpg", caption: "Award Ceremony" },
  { src: "/images/sports/IMG-20240124-WA0012.jpg", caption: "Skill Development Camp" },
  { src: "/images/sports/IMG-20240124-WA0088.jpg", caption: "Champion Athletes" },
  { src: "/images/sports/IMG-20240503-WA0010_1.jpg", caption: "Inter-School Championship" },
  { src: "/images/sports/IMG-20250511-WA0017.jpg", caption: "2025 Training Batch" },
  { src: "/images/sports/IMG-20250514-WA0030.jpg", caption: "Streets to Stadium" },
  { src: "/images/sports/IMG-20250514-WA0050.jpg", caption: "Grassroots Football" },
  { src: "/images/sports/IMG-20250518-WA0006.jpg", caption: "Government School Programme" },
  { src: "/images/sports/IMG_20230327_165422-1.jpg", caption: "Coach Development" },
  { src: "/images/sports/P_20230716_074358.jpg", caption: "Field Training" },
  { src: "/images/sports/P_20230722_084050.jpg", caption: "Match Practice" },
  { src: "/images/sports/P_20230802_192748.jpg", caption: "Evening Training" },
  { src: "/images/sports/15.jpg", caption: "Team Lineup" },
  { src: "/images/sports/2.jpg", caption: "Dynamic Play" },
  { src: "/images/sports/29.jpg", caption: "Goal Celebration" },
  { src: "/images/sports/IMG20240922181042.jpg", caption: "Tournament Finals" },
  { src: "/images/sports/IMG20241018102656.jpg", caption: "Trophy Presentation" },
  { src: "/images/sports/P_20250423_162923.jpg", caption: "State Level Exposure" },
  { src: "/images/sports/P_20250514_181158.jpg", caption: "Warmup Drills" },
  { src: "/images/sports/P_20250815_102116_1.jpg", caption: "Independence Day Match" },
];

export default function GenesisSoccer() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? sportsPhotos : sportsPhotos.slice(0, 9);

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#123D6A] to-[#0D5D42] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg width="100%" height="100%"><defs><pattern id="dps" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dps)"/></svg></div>
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[#5AAE3D]/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-['Barlow'] mb-6 transition-colors">
              ← All Projects
            </Link>
            <span className="block text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow'] mb-3">Sports Project</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white font-['Raleway'] mb-5 leading-tight">
              Genesis Soccer School
            </h1>
            <p className="text-white/75 text-lg font-['Barlow'] max-w-2xl leading-relaxed mb-8">
              Building Puducherry's next generation of football champions — from government school grounds to stadium pitches. The "Streets to Stadium" initiative that is rewriting the futures of young athletes.
            </p>
            <div className="flex items-center gap-3 text-white/60 text-sm font-['Barlow'] mb-8">
              <MapPin className="w-4 h-4 text-[#D79A1E]" />
              Puducherry, India
            </div>
            <Link href="/donate" className="inline-flex items-center gap-2 px-7 py-3 bg-[#D79A1E] text-white rounded-full font-bold font-['Raleway'] hover:bg-[#c08918] transition-all">
              Become a Sponsor <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Project Vision</span>
            <h2 className="text-3xl font-black text-[#123D6A] mt-2 mb-5 font-['Raleway']">From Streets to Stadiums</h2>
            <p className="text-gray-600 leading-relaxed font-['Barlow'] mb-4">
              India has millions of young footballers who play on streets, beaches, and open fields — but very few ever get discovered. Genesis Soccer School is a structured talent identification and development program embedded within government schools, where talent exists but opportunity does not.
            </p>
            <p className="text-gray-600 leading-relaxed font-['Barlow'] mb-6">
              Our coaches work with students weekly, identifying those with potential and enrolling them in the elite pathway program — a bridge between the school ground and a professional football career.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: "150+", desc: "Students coached" },
                { icon: Trophy, label: "MERO Trophy", desc: "Annual tournament" },
                { icon: Star, label: "6 Athletes", desc: "State-level representation" },
                { icon: Target, label: "5+ Schools", desc: "Program coverage" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 bg-[#123D6A]/5 rounded-xl">
                  <item.icon className="w-5 h-5 text-[#123D6A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#123D6A] text-sm font-['Raleway']">{item.label}</p>
                    <p className="text-gray-500 text-xs font-['Barlow']">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="bg-gradient-to-br from-[#123D6A] to-[#0D5D42] rounded-3xl p-8 text-white">
              <Trophy className="w-10 h-10 text-[#D79A1E] mb-5" />
              <h3 className="text-xl font-black font-['Raleway'] mb-3">The MERO Trophy</h3>
              <p className="text-white/75 text-sm font-['Barlow'] leading-relaxed mb-6">
                Our annual inter-school football tournament has grown into Puducherry's most anticipated youth football event — 12+ schools, hundreds of young players, and a celebration of the beautiful game.
              </p>
              <div className="space-y-3">
                {["12+ schools participate", "Government school focus", "Professional refereeing", "State scouts in attendance"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2 text-sm text-white/80 font-['Barlow']">
                    <CheckCircle className="w-4 h-4 text-[#5AAE3D] shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="inline-flex items-center gap-2 text-[#123D6A] font-semibold text-sm tracking-widest uppercase font-['Barlow']">
              <Camera className="w-4 h-4" /> Match Gallery
            </span>
            <h2 className="text-3xl font-black text-[#123D6A] mt-2 font-['Raleway']">Our Players in Action</h2>
            <p className="text-gray-500 text-sm font-['Barlow'] mt-2 max-w-xl mx-auto">
              From training grounds to tournament finals — a glimpse into the journey of our young football champions.
            </p>
          </motion.div>

          {/* Hero photo row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-4">
            {/* Large featured photo */}
            <motion.div
              className="lg:col-span-8 relative overflow-hidden rounded-2xl cursor-pointer group"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setLightbox(0)}
            >
              <img
                src={sportsPhotos[0].src}
                alt={sportsPhotos[0].caption}
                className="w-full h-80 lg:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-['Barlow'] text-base font-semibold">{sportsPhotos[0].caption}</span>
              </div>
              <div className="absolute top-4 left-4 bg-[#D79A1E] text-white text-xs font-bold px-3 py-1 rounded-full font-['Barlow']">
                Featured
              </div>
            </motion.div>

            {/* 2 stacked right photos */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {[1, 2].map((idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group flex-1"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setLightbox(idx)}
                >
                  <img
                    src={sportsPhotos[idx].src}
                    alt={sportsPhotos[idx].caption}
                    className="w-full h-48 lg:h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-['Barlow'] text-sm font-semibold">{sportsPhotos[idx].caption}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Masonry-style grid for remaining photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {visiblePhotos.slice(3).map((photo, i) => (
              <motion.div
                key={photo.src}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.08 }}
                onClick={() => setLightbox(i + 3)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    i % 5 === 0 ? "h-56" : i % 3 === 0 ? "h-44" : "h-48"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white font-['Barlow'] text-xs font-semibold leading-tight">{photo.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show more / less toggle */}
          {sportsPhotos.length > 9 && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#123D6A] text-white rounded-full font-bold font-['Raleway'] hover:bg-[#0D2B4E] transition-all"
              >
                {showAll ? "Show Less" : `View All ${sportsPhotos.length} Photos`}
                <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "rotate-90" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={sportsPhotos[lightbox].src}
              alt={sportsPhotos[lightbox].caption}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-white/80 text-center mt-3 font-['Barlow'] text-sm">
              {sportsPhotos[lightbox].caption}
              <span className="text-white/40 ml-3 text-xs">({lightbox + 1} / {sportsPhotos.length})</span>
            </p>
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/50 hover:text-white text-4xl font-bold transition-colors"
              onClick={() => setLightbox((lightbox - 1 + sportsPhotos.length) % sportsPhotos.length)}
            >‹</button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/50 hover:text-white text-4xl font-bold transition-colors"
              onClick={() => setLightbox((lightbox + 1) % sportsPhotos.length)}
            >›</button>
            <button
              className="absolute -top-12 right-0 text-white/50 hover:text-white text-2xl font-bold transition-colors"
              onClick={() => setLightbox(null)}
            >✕</button>
          </motion.div>
        </div>
      )}

      {/* PROGRAMS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Program Components</span>
            <h2 className="text-3xl font-black text-[#123D6A] mt-2 font-['Raleway']">A Complete Football Ecosystem</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-2 h-8 bg-[#123D6A] rounded-full mb-4" />
                <h3 className="font-bold text-gray-900 text-base mb-2 font-['Raleway']">{prog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-['Barlow']">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 bg-[#123D6A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Impact</span>
            <h2 className="text-3xl font-black text-white mt-2 font-['Raleway']">What We Have Achieved</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-3 p-5 bg-white/10 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-[#5AAE3D] shrink-0 mt-0.5" />
                <span className="text-white/85 text-sm font-['Barlow']">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR CTA */}
      <section className="py-20 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#123D6A] font-['Raleway'] mb-4">Sponsor the Next Football Champion</h2>
          <p className="text-gray-600 font-['Barlow'] mb-8">Your sponsorship funds coaching sessions, tournament costs, equipment, and travel for young athletes who cannot afford it themselves.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Raleway'] hover:bg-[#c08918] transition-all">
              Become a Sponsor
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#123D6A] text-[#123D6A] rounded-full font-semibold font-['Raleway'] hover:bg-[#123D6A] hover:text-white transition-all">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
