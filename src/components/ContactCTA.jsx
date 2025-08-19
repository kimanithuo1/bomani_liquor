"use client"

import { useState } from "react"

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderDetails: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hi! I'm ${formData.name}. Phone: ${formData.phone}. Order: ${formData.orderDetails}`
    const whatsappUrl = `https://wa.me/254705494795?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Info */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Order? Let's Get Started!</h2>
            <p className="text-xl text-teal-100 mb-8">
              Contact us through any of these convenient methods and get your drinks delivered in 30 minutes.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="https://wa.me/254705494795"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-600 hover:bg-green-700 px-6 py-4 rounded-xl transition-colors"
              >
                <span className="text-2xl">📱</span>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-green-100">+254 705 494 795</div>
                </div>
              </a>

              <a
                href="tel:+254705494795"
                className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl transition-colors"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-blue-100">+254 705 494 795</div>
                </div>
              </a>

              <a
                href="mailto:orders@bomaniliquor.co.ke"
                className="flex items-center gap-4 bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-xl transition-colors"
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-purple-100">orders@bomaniliquor.co.ke</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side - Order Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Quick Order Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+254 705 494 795"
                />
              </div>

              <div>
                <label htmlFor="orderDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Order Details
                </label>
                <textarea
                  id="orderDetails"
                  name="orderDetails"
                  value={formData.orderDetails}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us what you'd like to order..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-900 text-white py-4 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
              >
                Send Order via WhatsApp
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4 text-center">
              We'll respond within 5 minutes and confirm your delivery time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
