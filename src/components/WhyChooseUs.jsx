export default function WhyChooseUs() {
  const features = [
    {
      icon: "⚡",
      title: "Fast 30-Minute Delivery",
      description: "Get your favorite drinks delivered to your doorstep in 30 minutes or less across Nairobi.",
    },
    {
      icon: "💳",
      title: "Multiple Payment Options",
      description: "Pay conveniently via Mpesa, credit card, or cash on delivery. Your choice, your convenience.",
    },
    {
      icon: "🍾",
      title: "1000+ Drinks to Choose From",
      description: "Extensive selection of wines, whiskies, beers, vodkas, gins, and premium spirits.",
    },
    {
      icon: "🎁",
      title: "Gifts & Extras Available",
      description: "Perfect gift wrapping and extras like mixers, snacks, and party essentials.",
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Why Choose Bomani Liquor?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another liquor store. We're your trusted partner for fast, reliable, and convenient alcohol
            delivery in Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
