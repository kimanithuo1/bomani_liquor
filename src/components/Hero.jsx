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

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/nairobi-alcohol-delivery.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Nairobi's Fastest Online
          <span className="text-yellow-400"> Liquor Delivery</span>
          <br />
          <span className="text-3xl md:text-5xl">30 Mins or Less</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Order wines, whiskies, beers & more – pay via Mpesa, card, or cash on delivery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProducts}
            className="bg-yellow-500 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Shop Now
          </button>

          <a
            href="https://wa.me/254705494795"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            WhatsApp Order
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⚡</span>
            <span>30-Min Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">💳</span>
            <span>Mpesa & Card</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">🍾</span>
            <span>1000+ Products</span>
          </div>
        </div>
      </div>
    </section>
  )
}
