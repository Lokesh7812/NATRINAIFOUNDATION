import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "All Projects", href: "/projects" },
      { label: "Community Hospital", href: "/projects/hospital" },
      { label: "Genesis Soccer School", href: "/projects/genesis-soccer" },
      { label: "52 Scholars Initiative", href: "/projects/52-scholars" },
      { label: "Hut to Home", href: "/projects/hut-to-home" },
    ],
  },
  { label: "Focus Areas", href: "/focus-areas" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/natrinai-logo.jpeg"
              alt="Natrinai Foundation"
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className={`font-bold text-lg leading-tight font-['Raleway'] transition-colors ${scrolled || menuOpen ? "text-[#0D5D42]" : "text-white drop-shadow"}`}>
                NATRINAI
              </p>
              <p className={`text-xs tracking-widest font-['Barlow'] transition-colors ${scrolled || menuOpen ? "text-[#123D6A]" : "text-white/90 drop-shadow"}`}>
                FOUNDATION
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium font-['Barlow'] transition-all duration-200 hover:bg-[#0D5D42]/10 ${
                      scrolled ? "text-gray-800" : "text-white drop-shadow"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#0D5D42]/5 hover:text-[#0D5D42] font-['Barlow'] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium font-['Barlow'] transition-all duration-200 hover:bg-[#0D5D42]/10 ${
                    location === link.href
                      ? scrolled ? "text-[#0D5D42] font-semibold" : "text-white font-semibold"
                      : scrolled ? "text-gray-700" : "text-white/90 drop-shadow"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/donate"
              className="ml-4 px-6 py-2.5 bg-[#D79A1E] text-white rounded-full text-sm font-semibold font-['Raleway'] hover:bg-[#c08918] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Donate Now
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled || menuOpen ? "text-gray-800" : "text-white"}`}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="px-4 py-3 text-sm font-semibold text-[#0D5D42] font-['Raleway'] uppercase tracking-wide">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-8 py-2.5 text-sm text-gray-600 hover:text-[#0D5D42] font-['Barlow']"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-gray-800 hover:text-[#0D5D42] font-['Barlow']"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/donate"
            className="mt-4 block text-center px-6 py-3 bg-[#D79A1E] text-white rounded-full text-sm font-semibold font-['Raleway'] hover:bg-[#c08918]"
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
