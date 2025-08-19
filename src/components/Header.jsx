"use client"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-purple-900">
              Bomani <span className="text-yellow-500">Liquor</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-purple-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-purple-900 transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-gray-700 hover:text-purple-900 transition-colors"
            >
              Categories
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-purple-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("products")}
              className="bg-purple-900 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection("why-choose-us")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
              >
                Categories
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-900"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-3 py-2 bg-purple-900 text-white rounded-lg mt-2"
              >
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
