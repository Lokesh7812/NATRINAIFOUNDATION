import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, BarChart3, CheckCircle, Copy, Smartphone, Building2 } from "lucide-react";

const impactItems: Record<string, string[]> = {
  Education: ["₹500 buys books for one student for a term", "₹1,000 supports one student for a month", "₹12,000 funds one scholar for the year", "₹50,000 sponsors one scholar for full course"],
  Sports: ["₹500 covers training equipment for one athlete", "₹2,500 sponsors one student at MERO Trophy", "₹25,000 sponsors a team for the tournament", "₹1,00,000 sponsors the MERO Trophy event"],
  "Hospital Project": ["₹1,000 buys medicines for 10 patients", "₹5,000 covers emergency care for one patient", "₹25,000 equips one diagnostic test kit", "₹50,000 sponsors one hospital bed"],
  "Housing Project": ["₹5,000 buys bricks for a home foundation", "₹25,000 covers roofing for one home", "₹1,00,000 contributes toward a full home", "₹3,50,000 builds one complete home"],
  "General Fund": ["₹500 supports general operations", "₹1,000 helps reach one more beneficiary", "₹5,000 funds a medical camp for 50 people", "₹25,000 sponsors a community program"],
};

const allocationData = [
  { label: "Direct Programs & Beneficiaries", pct: 85, color: "#0D5D42" },
  { label: "Administration & Operations", pct: 10, color: "#123D6A" },
  { label: "Outreach & Awareness", pct: 5, color: "#D79A1E" },
];

export default function Donate() {
  const [amount, setAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [category, setCategory] = useState("General Fund");
  const [copied, setCopied] = useState(false);

  const finalAmount = amount === "custom" ? (parseInt(customAmount) || 0) : amount;

  function copyUPI() {
    navigator.clipboard.writeText("natrinaifoundation@upi").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-[#0D5D42] to-[#123D6A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><svg width="100%" height="100%"><defs><pattern id="dpd" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1.5" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(#dpd)"/></svg></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[#D79A1E] font-semibold text-sm tracking-widest uppercase font-['Montserrat']">Support Our Mission</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-5 font-['Poppins']">Make a Donation</h1>
            <p className="text-white/75 text-lg font-['Inter'] max-w-2xl mx-auto">
              Every rupee you give goes toward educating a student, healing a patient, sheltering a family, or nurturing a sports champion. Tax exempt under 80G of the Income Tax Act, 1961.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Shield, label: "12A Registered" },
              { icon: CheckCircle, label: "80G Certified" },
              { icon: BarChart3, label: "85% to Programs" },
              { icon: Shield, label: "Transparent Accounts" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-gray-600 font-['Montserrat']">
                <item.icon className="w-4 h-4 text-[#0D5D42]" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* DONATION FORM */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-7">
                <h2 className="text-xl font-black text-[#0D5D42] font-['Poppins'] mb-6">Choose Your Contribution</h2>

                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-['Inter'] mb-3">Select amount</p>
                  <div className="grid grid-cols-4 gap-3">
                    {[500, 1000, 2500, 5000].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => { setAmount(amt); setCustomAmount(""); }}
                        className={`py-3 rounded-xl font-bold font-['Poppins'] text-sm transition-all ${
                          amount === amt ? "bg-[#0D5D42] text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        data-testid={`button-donate-${amt}`}
                      >
                        ₹{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter custom amount (₹)"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount("custom"); }}
                    className="mt-3 w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 font-['Inter'] text-sm outline-none focus:border-[#0D5D42] transition-colors"
                    data-testid="input-donate-custom"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 text-sm font-['Inter'] mb-3">Donate toward</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(impactItems).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold font-['Montserrat'] transition-all ${
                          category === cat ? "bg-[#0D5D42] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        data-testid={`button-cat-${cat.toLowerCase().replace(/ /g, "-")}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {finalAmount > 0 && (
                  <div className="mb-6 p-4 bg-[#0D5D42]/5 rounded-xl border border-[#0D5D42]/10">
                    <p className="text-[#0D5D42] text-xs font-semibold font-['Montserrat'] mb-2">YOUR IMPACT</p>
                    <ul className="space-y-1">
                      {impactItems[category].map((item) => (
                        <li key={item} className="text-gray-600 text-xs font-['Inter'] flex items-start gap-2">
                          <span className="text-[#5AAE3D] shrink-0">›</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* PAYMENT METHODS */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-black text-[#0D5D42] font-['Poppins'] mb-6">Payment Methods</h2>

                <div className="space-y-5">
                  {/* UPI */}
                  <div className="p-6 rounded-2xl bg-[#0D5D42]/5 border border-[#0D5D42]/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="w-5 h-5 text-[#0D5D42]" />
                      <h3 className="font-bold text-[#0D5D42] font-['Poppins']">UPI Payment</h3>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                      <span className="text-gray-800 text-sm font-mono flex-1">natrinaifoundation@upi</span>
                      <button
                        onClick={copyUPI}
                        className="flex items-center gap-1 px-3 py-1.5 bg-[#0D5D42] text-white rounded-lg text-xs font-semibold font-['Montserrat'] hover:bg-[#0a4a35] transition-colors"
                        data-testid="button-copy-upi"
                      >
                        <Copy className="w-3 h-3" />
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <p className="text-gray-500 text-xs mt-3 font-['Inter']">Open any UPI app (GPay, PhonePe, Paytm, BHIM) and send to the above UPI ID.</p>
                  </div>

                  {/* Bank Transfer */}
                  <div className="p-6 rounded-2xl bg-[#123D6A]/5 border border-[#123D6A]/10">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className="w-5 h-5 text-[#123D6A]" />
                      <h3 className="font-bold text-[#123D6A] font-['Poppins']">Bank Transfer / NEFT / RTGS</h3>
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "Account Name", value: "Natrinai Foundation" },
                        { label: "Account Number", value: "XXXXXXXXXXXX" },
                        { label: "IFSC Code", value: "XXXXXX0XXXXX" },
                        { label: "Bank", value: "State Bank of India" },
                        { label: "Branch", value: "Puducherry Main Branch" },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between text-sm">
                          <span className="text-gray-500 font-['Inter']">{row.label}</span>
                          <span className="font-semibold text-gray-800 font-['Inter']">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs mt-3 font-['Inter']">Please email your transaction receipt to info@natrinaifoundation.org for 80G receipt.</p>
                  </div>

                  {/* Cheque */}
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                    <p className="text-gray-700 text-sm font-['Inter']">
                      <span className="font-bold">Cheque / DD:</span> Payable to <span className="font-bold text-[#0D5D42]">"Natrinai Foundation"</span> — mail to our Puducherry office address.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* ALLOCATION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm"
            >
              <h3 className="font-black text-[#0D5D42] font-['Poppins'] mb-5">Where Your Money Goes</h3>
              <div className="space-y-4">
                {allocationData.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-600 font-['Inter']">{item.label}</span>
                      <span className="font-bold font-['Poppins']" style={{ color: item.color }}>{item.pct}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TAX BENEFIT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-[#0D5D42] rounded-3xl p-7 text-white"
            >
              <Shield className="w-8 h-8 text-[#D79A1E] mb-4" />
              <h3 className="font-black font-['Poppins'] mb-3">Tax Deduction Under 80G</h3>
              <p className="text-white/75 text-sm font-['Inter'] leading-relaxed mb-4">
                All donations to Natrinai Foundation are eligible for 50% tax deduction under Section 80G of the Income Tax Act, 1961.
              </p>
              <div className="space-y-2">
                {["Send your PAN number with the donation", "We will issue an 80G receipt within 7 days", "Valid for individual and corporate donors"].map((pt) => (
                  <div key={pt} className="flex items-start gap-2 text-xs text-white/70 font-['Inter']">
                    <CheckCircle className="w-3.5 h-3.5 text-[#5AAE3D] shrink-0 mt-0.5" />
                    {pt}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm"
            >
              <h3 className="font-black text-[#0D5D42] font-['Poppins'] mb-3">Need Help?</h3>
              <p className="text-gray-600 text-sm font-['Inter'] mb-4">For large donations, CSR partnerships, or any queries about your contribution:</p>
              <div className="space-y-2 text-sm font-['Inter']">
                <p className="text-gray-700"><span className="font-semibold">Email:</span> info@natrinaifoundation.org</p>
                <p className="text-gray-700"><span className="font-semibold">Phone:</span> +91 XXXXX XXXXX</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
