import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const volunteerAreas = [
  "Education & Tutoring", "Sports Coaching", "Healthcare Support", "Rural Development",
  "Environmental Activities", "Technology & AI", "Photography & Media", "Fundraising",
  "Event Management", "Legal & Compliance", "Finance & Accounting", "Other"
];

export default function Contact() {
  const [contactSent, setContactSent] = useState(false);
  const [volunteerSent, setVolunteerSent] = useState(false);

  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [volunteerForm, setVolunteerForm] = useState({
    name: "", email: "", phone: "", location: "", area: "", skills: "", message: ""
  });

  function handleContact(e: React.FormEvent) {
    e.preventDefault();
    setContactSent(true);
  }

  function handleVolunteer(e: React.FormEvent) {
    e.preventDefault();
    setVolunteerSent(true);
  }

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 text-sm font-['Barlow'] outline-none focus:border-[#0D5D42] focus:ring-1 focus:ring-[#0D5D42]/20 transition-all";
  const labelCls = "block text-sm font-semibold text-gray-700 font-['Barlow'] mb-1.5";

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg width="100%" height="100%"><defs><pattern id="dpc" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dpc)"/></svg></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Barlow']">Reach Out</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-['Raleway']">Contact Us</h1>
            <p className="text-white/75 text-lg font-['Barlow'] max-w-xl mx-auto">
              Whether you want to donate, partner, volunteer, or simply learn more — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* CONTACT INFO */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: "Natrinai Foundation, Puducherry, Tamil Nadu, India — 605 001" },
                { icon: Mail, label: "Email", value: "info@natrinaifoundation.org" },
                { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-[#0D5D42]/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#0D5D42]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm font-['Raleway'] mb-1">{item.label}</p>
                    <p className="text-gray-600 text-sm font-['Barlow']">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="p-6 bg-[#0D5D42] rounded-2xl text-white">
                <p className="font-bold font-['Raleway'] mb-2">CSR Partnerships</p>
                <p className="text-white/75 text-sm font-['Barlow'] mb-3">Partner with us for your CSR program. We offer custom project alignment, regular reporting, and site visits.</p>
                <p className="text-[#D79A1E] text-sm font-semibold font-['Barlow']">csr@natrinaifoundation.org</p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100">
                <p className="font-bold text-gray-900 font-['Raleway'] mb-3 text-sm">Follow Us</p>
                <div className="flex gap-3">
                  {["Facebook", "Twitter", "Instagram", "YouTube", "LinkedIn"].map((s) => (
                    <a key={s} href="#" className="px-3 py-2 bg-gray-100 hover:bg-[#0D5D42] hover:text-white text-gray-600 rounded-lg text-xs font-semibold font-['Barlow'] transition-all">
                      {s.substring(0, 2)}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* FORMS */}
          <div className="lg:col-span-2 space-y-7">
            {/* CONTACT FORM */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-black text-[#0D5D42] font-['Raleway'] mb-6">Send Us a Message</h2>
              {contactSent ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle className="w-14 h-14 text-[#5AAE3D] mb-4" />
                  <p className="text-xl font-black text-[#0D5D42] font-['Raleway'] mb-2">Message Received!</p>
                  <p className="text-gray-500 font-['Barlow'] text-sm">We will get back to you within 24–48 hours.</p>
                  <button onClick={() => setContactSent(false)} className="mt-5 text-[#0D5D42] text-sm font-semibold font-['Barlow'] underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Full Name *</label>
                      <input required type="text" className={inputCls} placeholder="Your full name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} data-testid="input-contact-name" />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address *</label>
                      <input required type="email" className={inputCls} placeholder="your@email.com" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} data-testid="input-contact-email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Phone Number</label>
                      <input type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} data-testid="input-contact-phone" />
                    </div>
                    <div>
                      <label className={labelCls}>Subject *</label>
                      <input required type="text" className={inputCls} placeholder="Donation / Partnership / Volunteer..." value={contactForm.subject} onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} data-testid="input-contact-subject" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Message *</label>
                    <textarea required rows={4} className={inputCls} placeholder="Tell us how you'd like to engage with Natrinai Foundation..." value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} data-testid="input-contact-message" />
                  </div>
                  <button type="submit" className="flex items-center gap-2 px-7 py-3.5 bg-[#0D5D42] text-white rounded-xl font-bold font-['Raleway'] hover:bg-[#0a4a35] transition-all" data-testid="button-contact-submit">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* VOLUNTEER FORM */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-black text-[#0D5D42] font-['Raleway'] mb-2">Become a Volunteer</h2>
              <p className="text-gray-500 text-sm font-['Barlow'] mb-6">Join our volunteer network and contribute your time and skills to our programs.</p>
              {volunteerSent ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle className="w-14 h-14 text-[#5AAE3D] mb-4" />
                  <p className="text-xl font-black text-[#0D5D42] font-['Raleway'] mb-2">Thank You for Volunteering!</p>
                  <p className="text-gray-500 font-['Barlow'] text-sm">Our team will reach out to you within 3–5 working days.</p>
                  <button onClick={() => setVolunteerSent(false)} className="mt-5 text-[#0D5D42] text-sm font-semibold font-['Barlow'] underline">Submit another application</button>
                </div>
              ) : (
                <form onSubmit={handleVolunteer} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Full Name *</label>
                      <input required type="text" className={inputCls} placeholder="Your full name" value={volunteerForm.name} onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })} data-testid="input-vol-name" />
                    </div>
                    <div>
                      <label className={labelCls}>Email Address *</label>
                      <input required type="email" className={inputCls} placeholder="your@email.com" value={volunteerForm.email} onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })} data-testid="input-vol-email" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Phone Number *</label>
                      <input required type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" value={volunteerForm.phone} onChange={(e) => setVolunteerForm({ ...volunteerForm, phone: e.target.value })} data-testid="input-vol-phone" />
                    </div>
                    <div>
                      <label className={labelCls}>City / Location *</label>
                      <input required type="text" className={inputCls} placeholder="Puducherry, Chennai..." value={volunteerForm.location} onChange={(e) => setVolunteerForm({ ...volunteerForm, location: e.target.value })} data-testid="input-vol-location" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Area of Interest *</label>
                    <select required className={inputCls} value={volunteerForm.area} onChange={(e) => setVolunteerForm({ ...volunteerForm, area: e.target.value })} data-testid="select-vol-area">
                      <option value="">Select an area</option>
                      {volunteerAreas.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Skills & Qualifications</label>
                    <input type="text" className={inputCls} placeholder="E.g. Doctor, Teacher, Developer, Coach..." value={volunteerForm.skills} onChange={(e) => setVolunteerForm({ ...volunteerForm, skills: e.target.value })} data-testid="input-vol-skills" />
                  </div>
                  <div>
                    <label className={labelCls}>Message</label>
                    <textarea rows={3} className={inputCls} placeholder="Tell us why you want to volunteer and how you can contribute..." value={volunteerForm.message} onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })} data-testid="input-vol-message" />
                  </div>
                  <button type="submit" className="flex items-center gap-2 px-7 py-3.5 bg-[#5AAE3D] text-white rounded-xl font-bold font-['Raleway'] hover:bg-[#4a9633] transition-all" data-testid="button-vol-submit">
                    <Send className="w-4 h-4" /> Apply to Volunteer
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
