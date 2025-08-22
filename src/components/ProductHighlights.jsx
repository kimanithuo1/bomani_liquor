"use client"

import { useState, useMemo } from "react"
import productsData from "../data/products.json"

export default function ProductHighlights() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(productsData.products.map((product) => product.category))]
    return ["All", ...uniqueCategories.sort()]
  }, [])

  const featuredProducts = useMemo(() => {
    let filtered = productsData.products

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Get products with premium tags or high ratings, limit to 6
    return filtered
      .filter(
        (product) =>
          product.tags.includes("premium") || product.tags.includes("bestseller") || product.tags.includes("popular"),
      )
      .slice(0, 6)
  }, [selectedCategory])

  const handleOrderNow = (product) => {
    const message = `Hi! I'd like to order ${product.name} (${product.size}) for KES ${product.price.toLocaleString()}`
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our most popular drinks, carefully selected for quality and taste.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-900 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-purple-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="h-64 bg-gradient-to-br from-purple-100 to-teal-100 flex items-center justify-center">
                <img
                  src={`/abstract-geometric-shapes.png?key=siww7&height=200&width=150&query=${product.name} bottle alcohol`}
                  alt={`${product.name} - Premium ${product.category.toLowerCase()} available for fast delivery in Nairobi`}
                  className="h-48 w-auto object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <span className="text-sm text-gray-500">{product.size}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-900">KES {product.price.toLocaleString()}</div>
                  <button
                    onClick={() => handleOrderNow(product)}
                    className="bg-yellow-500 text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                    aria-label={`Order ${product.name} for KES ${product.price.toLocaleString()} via WhatsApp`}
                  >
                    Order Now
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {product.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#catalog"
            className="bg-purple-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-800 transition-colors inline-block"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
