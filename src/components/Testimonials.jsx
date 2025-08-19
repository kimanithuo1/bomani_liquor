export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      location: "Westlands, Nairobi",
      rating: 5,
      text: "Amazing service! Ordered Johnnie Walker for my husband's birthday and it arrived in 25 minutes. The delivery guy was professional and the packaging was perfect.",
      avatar: "/images/african-woman-smiling.png",
    },
    {
      name: "Michael Ochieng",
      location: "Karen, Nairobi",
      rating: 5,
      text: "Best liquor delivery in Nairobi! Great prices, fast delivery, and excellent customer service. I've been using Bomani Liquor for all my party needs.",
      avatar: "/images/african-man-professional.jpeg",
    },
    {
      name: "Grace Muthoni",
      location: "Kilimani, Nairobi",
      rating: 5,
      text: "Reliable and convenient! Love that I can pay via Mpesa. The wine selection is fantastic and delivery is always on time. Highly recommend!",
      avatar: "/images/african-woman-business.png",
    },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Stars */}
              <div className="flex items-center mb-4">{renderStars(testimonial.rating)}</div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-purple-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <div className="font-bold text-purple-900">4.9/5 Rating</div>
              <div className="text-sm text-gray-600">From 500+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
