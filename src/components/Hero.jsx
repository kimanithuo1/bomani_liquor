"use client"

export default function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-teal-700"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/abstract-geometric-shapes.png')`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
          Nairobi's Fastest Online
          <span className="text-yellow-400"> Liquor Delivery</span>
          <br />
          <span className="text-3xl md:text-5xl">30 Mins or Less</span>
        </h1>

        <p
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Order wines, whiskies, beers & more – pay via Mpesa, card, or cash on delivery.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-purple-900 px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Shop Now
          </button>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-lg"
          >
            WhatsApp Order
          </a>
        </div>

        <div
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium">30-Min Delivery</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path
                  fillRule="evenodd"
                  d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium">Mpesa & Card</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-purple-900" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-medium">1000+ Products</span>
          </div>
        </div>
      </div>
    </section>
  )
}
