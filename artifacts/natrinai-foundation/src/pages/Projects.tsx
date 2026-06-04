import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Healthcare", "Sports", "Education", "Rural Development", "Environment", "Technology", "Women Empowerment"];

const projects = [
  {
    title: "Natrinai Community Hospital",
    category: "Healthcare",
    status: "Fundraising",
    location: "Serugudi, Tiruchirappalli",
    desc: "A 20-bed charitable rural hospital providing 24/7 emergency, maternity and specialist care to 5 villages and 10,000+ residents. Total project cost: ₹4.5–5.5 Crore.",
    href: "/projects/hospital",
    color: "#0D5D42",
    tags: ["Healthcare", "Infrastructure"],
  },
  {
    title: "Genesis Soccer School",
    category: "Sports",
    status: "Active",
    location: "Puducherry",
    desc: "A structured football development program in government schools — from grassroots coaching to elite athlete pathways and the annual MERO Trophy.",
    href: "/projects/genesis-soccer",
    color: "#123D6A",
    tags: ["Sports", "Youth"],
  },
  {
    title: "Natrinai 52 Scholars Initiative",
    category: "Education",
    status: "Active",
    location: "Tamil Nadu & Puducherry",
    desc: "One scholar supported every week of the year — 52 individuals annually — through scholarships, mentorship and career guidance in partnership with Dr. Abdul Kalam Dream Foundation.",
    href: "/projects/52-scholars",
    color: "#D79A1E",
    tags: ["Education", "Scholarship"],
  },
  {
    title: "Hut to Home Initiative",
    category: "Rural Development",
    status: "Active",
    location: "Rural Tamil Nadu",
    desc: "Transforming fragile huts into safe, dignified permanent homes for rural families. 25 homes are currently planned in the next phase.",
    href: "/projects/hut-to-home",
    color: "#5AAE3D",
    tags: ["Housing", "Rural"],
  },
  {
    title: "Natrinai Tree Plantation Drive",
    category: "Environment",
    status: "Ongoing",
    location: "Puducherry & Tamil Nadu",
    desc: "Large-scale community tree plantation drives with awareness campaigns on environmental conservation and ecosystem restoration.",
    href: "/projects",
    color: "#0D5D42",
    tags: ["Environment", "Community"],
  },
  {
    title: "Digital Literacy Program",
    category: "Technology",
    status: "Planning",
    location: "Rural Tamil Nadu",
    desc: "Bridging the digital divide by providing technology access, computer training and AI literacy to students and communities in underserved areas.",
    href: "/projects",
    color: "#123D6A",
    tags: ["Technology", "Education"],
  },
  {
    title: "Women Empowerment Workshops",
    category: "Women Empowerment",
    status: "Active",
    location: "Tamil Nadu",
    desc: "Skill development, rights awareness and economic independence workshops for women across rural Tamil Nadu.",
    href: "/projects",
    color: "#D79A1E",
    tags: ["Women", "Skills"],
  },
  {
    title: "Rural Medical Camps",
    category: "Healthcare",
    status: "Ongoing",
    location: "Multiple Districts",
    desc: "Periodic free medical camps offering general medicine, dental, eye care, and health awareness to rural communities without healthcare access.",
    href: "/projects",
    color: "#5AAE3D",
    tags: ["Healthcare", "Community"],
  },
];

const statusColors: Record<string, string> = {
  Active: "#5AAE3D",
  Ongoing: "#0D5D42",
  Fundraising: "#D79A1E",
  Planning: "#123D6A",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects.filter((p) =>
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%"><defs><pattern id="dp3" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dp3)"/></svg>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Space_Grotesk']">Our Work</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-['Syne']">All Projects</h1>
            <p className="text-white/75 text-lg font-['Plus_Jakarta_Sans'] max-w-xl mx-auto">
              Explore our programs across healthcare, education, sports, rural development, environment, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-20 bg-white z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold font-['Space_Grotesk'] transition-all ${
                  activeCategory === cat
                    ? "bg-[#0D5D42] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/ /g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link href={proj.href} className="group block h-full">
                  <div className="h-full bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="h-1.5 w-full" style={{ backgroundColor: proj.color }} />
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold font-['Space_Grotesk']" style={{ backgroundColor: proj.color + "15", color: proj.color }}>
                          {proj.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold font-['Space_Grotesk'] bg-gray-100" style={{ color: statusColors[proj.status] }}>
                          {proj.status}
                        </span>
                      </div>
                      <h3 className="font-black text-gray-900 text-lg mb-2 font-['Syne'] group-hover:text-[#0D5D42] transition-colors leading-snug">{proj.title}</h3>
                      <p className="text-xs text-gray-400 mb-3 font-['Plus_Jakarta_Sans']">{proj.location}</p>
                      <p className="text-gray-600 text-sm leading-relaxed font-['Plus_Jakarta_Sans'] mb-5">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {proj.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-50 rounded-lg text-xs text-gray-500 font-['Plus_Jakarta_Sans']">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-sm font-semibold transition-all" style={{ color: proj.color }}>
                        View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
