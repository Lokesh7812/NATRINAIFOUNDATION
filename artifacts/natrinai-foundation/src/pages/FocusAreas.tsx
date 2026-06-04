import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  GraduationCap, Heart, Leaf, Users, Home as HomeIcon, Cpu, Brain, HandHeart,
  Accessibility, Music, TreePine, Waves, Globe, Microscope, Film,
  ShieldAlert, Smartphone, ArrowRight
} from "lucide-react";

const areas = [
  {
    icon: GraduationCap, label: "Education & Skill Development", color: "#0D5D42",
    short: "Scholarships, vocational training, and career guidance for students from all backgrounds.",
    details: [
      "Provide scholarships, educational support, and career guidance to deserving students",
      "Promote skill development and vocational training for employability",
      "Nurture individuals toward careers in medicine, engineering, and sciences",
      "Partner with institutions for mentorship and placement support",
    ]
  },
  {
    icon: Users, label: "Sports Development", color: "#123D6A",
    short: "Talent identification, coaching, and the 'Streets to Stadium' initiative for youth athletes.",
    details: [
      "Identify and develop sports talent from underprivileged communities",
      "Provide professional coaching, infrastructure, and tournament exposure",
      "Streets to Stadium: discover footballers from streets, villages, and schools",
      "Genesis Soccer School: structured football program in government schools",
    ]
  },
  {
    icon: Heart, label: "Healthcare & Sanitation", color: "#D79A1E",
    short: "Rural hospitals, medical camps, preventive healthcare, and hygiene education.",
    details: [
      "Establish charitable rural hospitals for communities without healthcare access",
      "Organize free medical camps offering general medicine, dental, and eye care",
      "Promote hygiene, sanitation, and preventive healthcare awareness",
      "Improve maternal and child health outcomes in underserved areas",
    ]
  },
  {
    icon: HandHeart, label: "Women Empowerment", color: "#5AAE3D",
    short: "Economic independence, rights awareness, and safety programs for women.",
    details: [
      "Provide skill development and livelihood programs for women",
      "Promote awareness on legal rights, health, and personal safety",
      "Support economic independence through microenterprise training",
      "Run workshops on self-defence, digital literacy, and financial planning",
    ]
  },
  {
    icon: Leaf, label: "Environmental Conservation", color: "#0D5D42",
    short: "Tree plantation, water conservation, and ecosystem restoration programs.",
    details: [
      "Large-scale tree plantation drives across Tamil Nadu and Puducherry",
      "Water conservation: rejuvenation of ponds, lakes, and rivers",
      "Rainwater harvesting awareness and implementation programs",
      "Community-led environmental campaigns in schools and colleges",
    ]
  },
  {
    icon: HomeIcon, label: "Rural & Community Development", color: "#123D6A",
    short: "Housing, infrastructure, sanitation, and livelihood for rural communities.",
    details: [
      "Hut to Home: transforming fragile huts into permanent homes",
      "Improve sanitation, drinking water, and basic facilities in villages",
      "Rural livelihood programs: agriculture, dairy, and animal husbandry",
      "Infrastructure support for underserved rural communities",
    ]
  },
  {
    icon: Cpu, label: "Technology & Artificial Intelligence", color: "#D79A1E",
    short: "AI education, innovation labs, robotics, and digital literacy for students.",
    details: [
      "Promote AI and Robotics education in schools and colleges",
      "Establish innovation labs for hands-on technology learning",
      "Digital literacy programs for students and communities",
      "Technology access programs for rural and underserved populations",
    ]
  },
  {
    icon: Brain, label: "Mental Health & Well-being", color: "#5AAE3D",
    short: "Awareness, counselling, and emotional support for individuals and communities.",
    details: [
      "Mental health awareness campaigns in schools and workplaces",
      "Free counselling services for individuals in distress",
      "Training community volunteers as mental health first responders",
      "Reduce stigma around mental health through education",
    ]
  },
  {
    icon: Users, label: "Senior Citizen Welfare", color: "#0D5D42",
    short: "Community care, health support, and welfare programs for senior citizens.",
    details: [
      "Regular health check-up camps for senior citizens",
      "Community care programs connecting seniors with volunteers",
      "Recreational and social engagement activities for the elderly",
      "Support for isolated seniors without family care networks",
    ]
  },
  {
    icon: Accessibility, label: "Support for Differently-Abled", color: "#123D6A",
    short: "Education, skill development, and empowerment for persons with disabilities.",
    details: [
      "Educational support and assistive technology for differently-abled students",
      "Skill development programs tailored to individual abilities",
      "Advocacy for rights, accessibility, and inclusion in communities",
      "Partnerships with specialists for rehabilitation and support services",
    ]
  },
  {
    icon: Music, label: "Arts, Culture & Heritage", color: "#D79A1E",
    short: "Preserving traditional arts, cultural heritage, and supporting creative talents.",
    details: [
      "Preserve and promote regional cultural heritage and performing arts",
      "Training workshops in film making, photography, and creative arts",
      "Support for traditional artisans and cultural practitioners",
      "Youth exposure to India's classical arts and indigenous knowledge",
    ]
  },
  {
    icon: TreePine, label: "Wildlife & Ecosystem Conservation", color: "#5AAE3D",
    short: "Biodiversity protection, ecosystem resilience, and wildlife habitat preservation.",
    details: [
      "Wildlife conservation awareness programs in schools and communities",
      "Ecosystem restoration and biodiversity monitoring initiatives",
      "Campaigns against poaching, deforestation, and habitat destruction",
      "Partnerships with forest departments and conservation NGOs",
    ]
  },
  {
    icon: Globe, label: "Agriculture, Dairy & Livestock", color: "#0D5D42",
    short: "Sustainable farming, dairy development, and animal husbandry training.",
    details: [
      "Promote sustainable and organic farming practices",
      "Dairy farming support and livestock development programs",
      "Training in modern animal husbandry for rural farmers",
      "Market linkage support for smallholder farmers",
    ]
  },
  {
    icon: Film, label: "Film Making & Creative Arts", color: "#123D6A",
    short: "Training, workshops, and exposure for aspiring filmmakers and creative artists.",
    details: [
      "Film making workshops and mentorship for young creators",
      "Scriptwriting, direction, and production training programs",
      "Exposure to industry professionals through events and internships",
      "Support for documentary films on social issues",
    ]
  },
  {
    icon: ShieldAlert, label: "Disaster Relief", color: "#D79A1E",
    short: "Emergency relief, rehabilitation, and community resilience during natural disasters.",
    details: [
      "Rapid relief operations during floods, cyclones, and droughts",
      "Post-disaster rehabilitation: homes, livelihoods, and health",
      "Community disaster preparedness and first-response training",
      "Partnerships with government agencies for coordinated relief",
    ]
  },
  {
    icon: Microscope, label: "Research & Innovation", color: "#5AAE3D",
    short: "Encouraging knowledge development, social research, and community innovation.",
    details: [
      "Support community-level research and social innovation projects",
      "Partner with universities for development-focused research",
      "Document and share learnings from Natrinai programs nationally",
      "Foster a culture of evidence-based practice in all programs",
    ]
  },
];

export default function FocusAreas() {
  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#5AAE3D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg width="100%" height="100%"><defs><pattern id="dpf" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dpf)"/></svg></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Montserrat']">Our Work</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-['Poppins']">All Focus Areas</h1>
            <p className="text-white/75 text-lg font-['Inter'] max-w-2xl mx-auto">
              Natrinai Foundation works across 16 domains of human development — addressing every dimension of community well-being with structured programs and measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {areas.map((area, i) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.07 }}
                className="group bg-white rounded-3xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ backgroundColor: area.color + "15" }}>
                    <area.icon className="w-6 h-6" style={{ color: area.color }} />
                  </div>
                  <h3 className="font-black text-gray-900 text-base font-['Poppins'] leading-snug">{area.label}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed font-['Inter'] mb-5">{area.short}</p>
                <ul className="space-y-2">
                  {area.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-gray-600 font-['Inter']">
                      <span className="mt-1 shrink-0" style={{ color: area.color }}>›</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D5D42] text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black text-white font-['Poppins'] mb-4">Support Any Focus Area</h2>
          <p className="text-white/70 font-['Inter'] mb-8">Choose a cause that resonates with you and make a donation today. All contributions are 80G tax deductible.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate" className="px-8 py-4 bg-[#D79A1E] text-white rounded-full font-bold font-['Poppins'] hover:bg-[#c08918] transition-all">
              Donate Now
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold font-['Poppins'] hover:bg-white/10 transition-all">
              Volunteer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
