import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap, Heart, Leaf, Users, Home as HomeIcon, Cpu, Brain, HandHeart,
  Accessibility, Music, TreePine, Waves, ArrowRight, ChevronDown,
  Shield, BarChart3, Globe, CheckCircle, Star
} from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

const focusAreas = [
  { icon: GraduationCap, label: "Education", desc: "Scholarships, skill development and career guidance for underprivileged youth.", color: "#0D5D42" },
  { icon: Users, label: "Sports", desc: "Identifying and nurturing sports talent through coaching and infrastructure.", color: "#123D6A" },
  { icon: Heart, label: "Healthcare", desc: "Medical camps, rural hospitals and preventive healthcare programs.", color: "#D79A1E" },
  { icon: HandHeart, label: "Women Empowerment", desc: "Economic independence, rights awareness and safety programs for women.", color: "#5AAE3D" },
  { icon: Leaf, label: "Environment", desc: "Tree plantation, water conservation and ecosystem restoration.", color: "#0D5D42" },
  { icon: HomeIcon, label: "Rural Development", desc: "Housing, sanitation and livelihood programs for rural communities.", color: "#123D6A" },
  { icon: Cpu, label: "Technology & AI", desc: "Innovation labs, AI education and digital literacy programs.", color: "#D79A1E" },
  { icon: Brain, label: "Mental Health", desc: "Awareness, counselling and emotional well-being support.", color: "#5AAE3D" },
  { icon: Users, label: "Senior Welfare", desc: "Community care and support programs for senior citizens.", color: "#0D5D42" },
  { icon: Accessibility, label: "Differently Abled", desc: "Education and empowerment for persons with disabilities.", color: "#123D6A" },
  { icon: Music, label: "Arts & Culture", desc: "Preserving cultural heritage and promoting creative arts.", color: "#D79A1E" },
  { icon: TreePine, label: "Wildlife", desc: "Biodiversity protection, ecosystem resilience and wildlife conservation.", color: "#5AAE3D" },
];

const projects = [
  {
    title: "Natrinai Community Hospital",
    category: "Healthcare",
    desc: "A 20-bed rural hospital in Serugudi, Tiruchirappalli — bringing 24/7 emergency, maternity and specialist care to 5 villages and 10,000+ residents.",
    budget: "₹4.5–5.5 Crore",
    href: "/projects/hospital",
    color: "#0D5D42",
  },
  {
    title: "Genesis Soccer School",
    category: "Sports",
    desc: "Building Puducherry's next generation of football champions through government school coaching, elite athlete pathways, and the MERO Trophy.",
    budget: "Fundraising Active",
    href: "/projects/genesis-soccer",
    color: "#123D6A",
  },
  {
    title: "Natrinai 52 Scholars Initiative",
    category: "Education",
    desc: "One scholar empowered every week — 52 individuals per year — through structured scholarships, mentorship, and career guidance.",
    budget: "Ongoing",
    href: "/projects/52-scholars",
    color: "#D79A1E",
  },
  {
    title: "Hut to Home Initiative",
    category: "Rural Development",
    desc: "Transforming unsafe huts into dignified, permanent homes for the most vulnerable rural families in Tamil Nadu.",
    budget: "25 Homes Planned",
    href: "/projects/hut-to-home",
    color: "#5AAE3D",
  },
];

const stats = [
  { label: "Students Supported", end: 2000, suffix: "+" },
  { label: "Communities Reached", end: 15, suffix: "+" },
  { label: "Athletes Mentored", end: 150, suffix: "+" },
  { label: "Trees Planted", end: 5000, suffix: "+" },
  { label: "Rural Families Impacted", end: 500, suffix: "+" },
  { label: "Projects Executed", end: 25, suffix: "+" },
];

const whySupportItems = [
  { icon: Shield, label: "Transparency", desc: "Full financial disclosure, annual reports and CSR compliance." },
  { icon: BarChart3, label: "Impact Tracking", desc: "Measurable outcomes for every program and initiative." },
  { icon: Globe, label: "Community Ownership", desc: "Beneficiaries are stakeholders, not just recipients." },
  { icon: CheckCircle, label: "Verified Beneficiaries", desc: "Rigorous selection to ensure aid reaches those who need it most." },
  { icon: Leaf, label: "Long-Term Sustainability", desc: "Corpus funds and CSR partnerships ensure lasting impact." },
  { icon: Star, label: "Professional Governance", desc: "Registered trust with independent board oversight." },
];

const stories = [
  {
    name: "Priya S.",
    location: "Puducherry",
    quote: "The 52 Scholars program paid for my first year of engineering college. Today I am an intern at a software firm. Natrinai Foundation changed the trajectory of my entire life.",
    role: "Scholar — Engineering Student",
  },
  {
    name: "Rajan M.",
    location: "Tiruchirappalli",
    quote: "Our village had no hospital nearby. When my mother had a medical emergency last year, we had to travel 15 km. With the new hospital, we feel safe for the first time.",
    role: "Community Member",
  },
  {
    name: "Ajay T.",
    location: "Puducherry",
    quote: "Coach found me playing barefoot on a street pitch. Three years later, I represented my district and received a state-level scholarship. Football gave me everything.",
    role: "Genesis Soccer School Athlete",
  },
];

const news = [
  { date: "May 2026", category: "Education", title: "52nd Scholar of 2026 Enrolled — Engineering Seat Secured", desc: "Natrinai Foundation completes its milestone of supporting 52 scholars in a single year for the first time." },
  { date: "Apr 2026", category: "Sports", title: "Genesis Soccer School Wins Regional MERO Trophy", desc: "Six young athletes from government schools clinched the regional championship, earning state-level exposure." },
  { date: "Mar 2026", category: "Healthcare", title: "Hospital Project Land Acquisition Completed in Serugudi", desc: "Groundwork for the 20-bed community hospital is now underway with structural work beginning this quarter." },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [donationAmount, setDonationAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [donationCategory, setDonationCategory] = useState("General Fund");

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-gradient-to-br from-[#0D5D42] via-[#0a4a35] to-[#123D6A]"
        />
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#5AAE3D]/10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#D79A1E]/10 blur-3xl" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center pt-28 pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#D79A1E]/20 text-[#D79A1E] rounded-full text-xs font-semibold tracking-widest font-['Barlow'] mb-6 uppercase">
              Sports &bull; Education &bull; Environment
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight font-['Raleway'] mb-6"
          >
            Building Futures Through{" "}
            <span className="text-[#5AAE3D]">Education</span>,{" "}
            <span className="text-[#D79A1E]">Sports</span>,{" "}
            Healthcare &amp; Community
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-['Barlow'] mb-10"
          >
            Natrinai Foundation is dedicated to creating sustainable social impact by empowering
            individuals and communities across India through education, sports, healthcare,
            environmental initiatives, and rural development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#D79A1E] text-base mb-10 font-medium font-['Barlow']"
          >
            Empowering Youth. Enriching Communities. &nbsp;|&nbsp; நல் செய், நலம்தர
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/donate"
              className="px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Raleway'] hover:bg-[#c08918] transition-all shadow-lg hover:shadow-xl text-base"
              data-testid="link-donate-hero"
            >
              Donate Now
            </Link>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-full font-semibold font-['Raleway'] hover:bg-white/20 transition-all border border-white/20 text-base"
            >
              Become a Partner
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 bg-[#5AAE3D]/20 backdrop-blur text-white rounded-full font-semibold font-['Raleway'] hover:bg-[#5AAE3D]/30 transition-all border border-[#5AAE3D]/30 text-base"
            >
              Explore Projects
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* IMPACT NUMBERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Our Impact</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">5 Years of Tangible Change</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto font-['Barlow']">Every number represents a real life transformed, a community strengthened, a future secured.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <p className="text-3xl sm:text-4xl font-black text-[#0D5D42] font-['Raleway']">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="text-xs text-gray-500 mt-2 font-['Barlow'] leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%"><defs><pattern id="dots2" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots2)"/></svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-5 font-['Raleway']">
              Rooted in Service,<br/>Driven by Purpose
            </h2>
            <p className="text-white/80 text-base leading-relaxed font-['Barlow'] mb-5">
              For 5–6 years before becoming a registered trust, our team was already deep in community service — coaching football on government school grounds, enrolling underprivileged students in college, planting trees, and building houses for the rural poor.
            </p>
            <p className="text-white/80 text-base leading-relaxed font-['Barlow'] mb-8">
              Natrinai Foundation was established to give formal structure, financial transparency, and institutional credibility to what was always a heartfelt mission. Today, with 12A and 80G registration, we operate across education, sports, healthcare, rural development and beyond.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3 bg-[#D79A1E] text-white rounded-full font-semibold font-['Raleway'] hover:bg-[#c08918] transition-all">
              Learn Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { label: "Vision", value: "Empowered, sustainable, inclusive society" },
              { label: "Mission", value: "Nurture individuals into professionals from all walks of life" },
              { label: "Founded", value: "Serving communities since 2019, formally registered as Natrinai Foundation" },
              { label: "Reach", value: "Tamil Nadu, Puducherry and expanding nationally" },
            ].map((item) => (
              <div key={item.label} className="p-5 bg-white/10 backdrop-blur rounded-2xl border border-white/10">
                <p className="text-[#D79A1E] text-xs font-semibold uppercase tracking-wide font-['Barlow'] mb-2">{item.label}</p>
                <p className="text-white text-sm leading-snug font-['Barlow']">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">12 Focus Areas, One Mission</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto font-['Barlow']">A comprehensive approach to human development — addressing every dimension of community well-being.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: area.color + "15" }}
                >
                  <area.icon className="w-5 h-5" style={{ color: area.color }} />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2 font-['Raleway']">{area.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-['Barlow']">{area.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: area.color }}>
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/focus-areas" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#0D5D42] text-[#0D5D42] rounded-full font-semibold font-['Raleway'] hover:bg-[#0D5D42] hover:text-white transition-all">
              View All Focus Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Featured Projects</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">Initiatives Creating Real Change</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto font-['Barlow']">From building hospitals to training athletes, each project is engineered for long-term, measurable impact.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={proj.href} className="group block h-full">
                  <div className="h-full rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-400">
                    <div className="h-3 w-full" style={{ backgroundColor: proj.color }} />
                    <div className="p-8">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-['Barlow'] mb-4"
                        style={{ backgroundColor: proj.color + "15", color: proj.color }}
                      >
                        {proj.category}
                      </span>
                      <h3 className="text-xl font-black text-gray-900 mb-3 font-['Raleway'] group-hover:text-[#0D5D42] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-['Barlow'] mb-6">{proj.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-['Barlow']">Budget: <span className="font-semibold text-gray-600">{proj.budget}</span></span>
                        <span className="flex items-center gap-1 text-sm font-semibold transition-all" style={{ color: proj.color }}>
                          View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SUPPORT US */}
      <section className="py-20 bg-[#f8fdf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Why Support Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">Your Trust Is Our Foundation</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {whySupportItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D5D42]/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-[#0D5D42]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 font-['Raleway']">{item.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed font-['Barlow']">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Make a Difference</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">Support Our Mission Today</h2>
            <p className="text-gray-500 mt-3 font-['Barlow']">Your contribution — however big or small — creates a ripple of change that lasts a lifetime.</p>
          </motion.div>

          <div className="bg-gradient-to-br from-[#0D5D42] to-[#123D6A] rounded-3xl p-8 sm:p-10 text-white">
            <div className="mb-6">
              <p className="text-white/70 text-sm font-['Barlow'] mb-3">Select an amount</p>
              <div className="grid grid-cols-4 gap-3">
                {[500, 1000, 2500, 5000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setDonationAmount(amt); setCustomAmount(""); }}
                    className={`py-3 rounded-xl font-bold font-['Raleway'] text-sm transition-all ${
                      donationAmount === amt ? "bg-[#D79A1E] text-white" : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                    data-testid={`button-amount-${amt}`}
                  >
                    ₹{amt.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter custom amount (₹)"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setDonationAmount("custom"); }}
                className="mt-3 w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 font-['Barlow'] text-sm outline-none focus:border-[#D79A1E]"
                data-testid="input-custom-amount"
              />
            </div>

            <div className="mb-6">
              <p className="text-white/70 text-sm font-['Barlow'] mb-3">Donate toward</p>
              <div className="flex flex-wrap gap-2">
                {["Education", "Sports", "Hospital Project", "Housing Project", "General Fund"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setDonationCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold font-['Barlow'] transition-all ${
                      donationCategory === cat ? "bg-[#5AAE3D] text-white" : "bg-white/10 hover:bg-white/20 text-white/80"
                    }`}
                    data-testid={`button-category-${cat.toLowerCase().replace(/ /g, "-")}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/donate"
              className="block w-full text-center py-4 bg-[#D79A1E] hover:bg-[#c08918] rounded-xl font-bold text-white font-['Raleway'] transition-all text-base shadow-lg"
              data-testid="link-donate-cta"
            >
              Proceed to Donate — {donationCategory}
            </Link>

            <p className="text-white/40 text-xs text-center mt-4 font-['Barlow']">
              Tax exempt under 80G of the Income Tax Act, 1961
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">Lives Changed, Futures Built</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {stories.map((story, i) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-[#D79A1E] text-4xl mb-4 font-serif">"</div>
                <p className="text-gray-700 text-sm leading-relaxed font-['Barlow'] italic mb-6">{story.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D5D42] to-[#5AAE3D] flex items-center justify-center text-white font-bold text-sm font-['Raleway']">
                    {story.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm font-['Raleway']">{story.name}</p>
                    <p className="text-gray-400 text-xs font-['Barlow']">{story.role} &bull; {story.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <p className="text-center text-gray-400 text-xs font-semibold tracking-widest uppercase font-['Barlow'] mb-10">
            Partners &amp; Supporters
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["CSR Partner", "Educational Institution", "Government Body", "NGO Alliance", "Corporate Sponsor", "Media Partner", "Research Partner", "Healthcare Partner"].map((partner) => (
              <div key={partner} className="px-6 py-3 bg-gray-50 rounded-xl border border-gray-200 text-gray-400 text-xs font-['Barlow'] font-semibold tracking-wide hover:border-[#0D5D42]/30 hover:text-[#0D5D42] transition-all cursor-pointer">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS & UPDATES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Latest Updates</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D5D42] mt-2 font-['Raleway']">News &amp; Announcements</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {news.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="h-2 w-full bg-gradient-to-r from-[#0D5D42] to-[#5AAE3D]" />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#0D5D42]/10 text-[#0D5D42] rounded-full text-xs font-semibold font-['Barlow']">{article.category}</span>
                    <span className="text-gray-400 text-xs font-['Barlow']">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-3 font-['Raleway'] group-hover:text-[#0D5D42] transition-colors leading-snug">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-['Barlow']">{article.desc}</p>
                  <div className="mt-5 flex items-center gap-1 text-[#0D5D42] text-sm font-semibold font-['Barlow'] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#0D5D42] to-[#123D6A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white font-['Raleway'] mb-5">
              Join Us in Building a Better India
            </h2>
            <p className="text-white/75 text-lg font-['Barlow'] mb-8 max-w-2xl mx-auto">
              Whether you are a donor, CSR partner, volunteer, or simply someone who cares — there is a place for you in the Natrinai family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/donate" className="px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Raleway'] hover:bg-[#c08918] transition-all shadow-lg">
                Donate Now
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold font-['Raleway'] hover:bg-white/20 transition-all">
                Volunteer With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
