export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Browse & Select Drinks",
      description:
        "Choose from our extensive collection of wines, spirits, beers, and more. Filter by category, price, or brand.",
      icon: "🍾",
    },
    {
      step: "2",
      title: "Order via Website / WhatsApp / Call",
      description:
        "Place your order through our website, WhatsApp, or give us a call. Multiple convenient ways to order.",
      icon: "📱",
    },
    {
      step: "3",
      title: "Pay & Enjoy in 30 Minutes",
      description: "Pay via Mpesa, card, or cash on delivery. Sit back and relax while we deliver to your doorstep.",
      icon: "🚚",
    },
  ]

  return (
    <section className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Getting your favorite drinks delivered is as easy as 1-2-3. Here's how simple it is:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-purple-900 rounded-full text-2xl font-bold mb-6">
                {step.step}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4">{step.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-purple-200 leading-relaxed">{step.description}</p>

              {/* Connector Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-yellow-500/30 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-purple-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Your Order Now
          </a>
        </div>
      </div>
    </section>
  )
}
