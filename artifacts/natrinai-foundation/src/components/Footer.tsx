import { Link } from "wouter";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D5D42] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/natrinai-logo.jpeg" alt="Natrinai Foundation" className="h-14 w-14 object-contain bg-white rounded-full p-1" />
              <div>
                <p className="font-bold text-xl font-['Raleway']">NATRINAI</p>
                <p className="text-xs tracking-widest text-white/70 font-['Barlow']">FOUNDATION</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed font-['Barlow'] mb-3">
              Empowering Youth. Enriching Communities.
            </p>
            <p className="text-[#D79A1E] text-sm font-medium font-['Barlow']">
              நல் செய், நலம்தர
            </p>
            <div className="flex gap-3 mt-5">
              {["fb", "tw", "ig", "yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D79A1E] flex items-center justify-center transition-colors text-xs font-bold"
                >
                  {s === "fb" ? "f" : s === "tw" ? "t" : s === "ig" ? "in" : "yt"}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-[#D79A1E] mb-5 font-['Barlow']">Quick Links</p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Projects", href: "/projects" },
                { label: "Focus Areas", href: "/focus-areas" },
                { label: "Donate", href: "/donate" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/75 hover:text-white text-sm font-['Barlow'] transition-colors flex items-center gap-1">
                    <span className="text-[#5AAE3D]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-[#D79A1E] mb-5 font-['Barlow']">Our Projects</p>
            <ul className="space-y-3">
              {[
                { label: "Community Hospital", href: "/projects/hospital" },
                { label: "Genesis Soccer School", href: "/projects/genesis-soccer" },
                { label: "52 Scholars Initiative", href: "/projects/52-scholars" },
                { label: "Hut to Home", href: "/projects/hut-to-home" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/75 hover:text-white text-sm font-['Barlow'] transition-colors flex items-center gap-1">
                    <span className="text-[#5AAE3D]">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-sm uppercase tracking-widest text-[#D79A1E] mt-7 mb-4 font-['Barlow']">Compliance</p>
            <div className="flex flex-wrap gap-2">
              {["12A Registered", "80G Certified", "FCRA Pending"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 font-['Barlow']">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-[#D79A1E] mb-5 font-['Barlow']">Contact Us</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#5AAE3D] mt-0.5 shrink-0" />
                <span className="text-white/75 text-sm font-['Barlow']">Natrinai Foundation, Puducherry, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#5AAE3D] shrink-0" />
                <a href="mailto:info@natrinaifoundation.org" className="text-white/75 hover:text-white text-sm font-['Barlow'] transition-colors">
                  info@natrinaifoundation.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#5AAE3D] shrink-0" />
                <span className="text-white/75 text-sm font-['Barlow']">+91 XXXXX XXXXX</span>
              </li>
            </ul>
            <a
              href="https://natrinaifoundation.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-1 text-[#D79A1E] hover:text-[#e6b030] text-sm font-['Barlow'] transition-colors"
            >
              natrinaifoundation.org <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs font-['Barlow'] text-center md:text-left">
            &copy; {new Date().getFullYear()} Natrinai Foundation. All rights reserved. A charitable trust registered under the Indian Trusts Act.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Annual Report"].map((item) => (
              <a key={item} href="#" className="text-white/40 hover:text-white/70 text-xs font-['Barlow'] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
