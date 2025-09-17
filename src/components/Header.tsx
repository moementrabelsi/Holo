import React, { useState, useEffect } from "react";
import logo from "../assets/Picture1.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#home", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Réalisations" },
    { href: "#about", label: "Qui sommes-nous" },
    { href: "#prestations", label: "Prestations" },
    { href: "#partners", label: "Partenaires" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Holog'art"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Holog'art
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-red-600"
                    : "text-white hover:text-red-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("#contact")}
              className="text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#FF204E" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#e01d45")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#FF204E")
              }
            >
              Devis gratuit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-6 pt-2">
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                  style={{ backgroundColor: "#FF204E" }}
                >
                  Devis gratuit
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
