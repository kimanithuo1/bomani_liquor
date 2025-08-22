import Header from "../src/components/Header"
import Hero from "../src/components/Hero"
import WhyChooseUs from "../src/components/WhyChooseUs"
import ProductHighlights from "../src/components/ProductHighlights"
import ProductCatalog from "../src/components/ProductCatalog"
import HowItWorks from "../src/components/HowItWorks"
import Testimonials from "../src/components/Testimonials"
import ContactCTA from "../src/components/ContactCTA"
import Footer from "../src/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhyChooseUs />
      <ProductHighlights />
      <div id="catalog">
        <ProductCatalog />
      </div>
      <HowItWorks />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </div>
  )
}
