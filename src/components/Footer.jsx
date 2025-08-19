export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Bomani <span className="text-yellow-400">Liquor</span>
            </h3>
            <p className="text-purple-200 mb-6">Made for Nairobi Nights</p>
            <p className="text-sm text-purple-300">
              Your trusted partner for fast, reliable alcohol delivery across Nairobi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-purple-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-purple-200 hover:text-white transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-purple-200 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-purple-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  Whisky & Scotch
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  Wine & Champagne
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  Beer & Lager
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  Vodka & Gin
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span>📱</span>
                <span className="text-purple-200">+254 705 494 795</span>
              </div>
              <div className="flex items-center gap-3">
                <span>✉️</span>
                <span className="text-purple-200">orders@bomaniliquor.co.ke</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📍</span>
                <span className="text-purple-200">Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Facebook"
                >
                  <span className="text-white">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-white">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                  aria-label="TikTok"
                >
                  <span className="text-white">🎵</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm">© {currentYear} Bomani Liquor. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-purple-300 hover:text-white text-sm transition-colors">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
