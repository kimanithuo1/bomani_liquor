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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 min-w-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-900 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-yellow-400 font-bold text-sm">B</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-purple-900 truncate">
              Bomani <span className="text-yellow-500">Liquor</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-purple-900 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-purple-900 transition-colors font-medium"
            >
              Shop
            </button>
            <a href="/menu" className="text-gray-700 hover:text-purple-900 transition-colors font-medium">
              Price List
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-purple-900 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <button
              onClick={() => scrollToSection("products")}
              className="bg-gradient-to-r from-purple-900 to-purple-800 text-white px-4 lg:px-6 py-2 rounded-full hover:from-purple-800 hover:to-purple-700 transition-all duration-300 text-sm lg:text-base font-semibold shadow-lg"
            >
              Order Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-900 p-2"
              aria-label="Toggle mobile menu"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t max-w-full overflow-hidden shadow-lg rounded-b-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-900 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-900 font-medium"
              >
                Shop
              </button>
              <a href="/menu" className="block px-3 py-2 text-gray-700 hover:text-purple-900 font-medium">
                Price List
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-purple-900 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block w-full text-left px-3 py-2 bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-lg mt-2 font-semibold"
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
