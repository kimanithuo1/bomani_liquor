import Header from "../../components/Header"
import Footer from "../../components/Footer"
import PriceListMenu from "../../components/PriceListMenu"

export const metadata = {
  title: "Price List & Menu - Bomani Liquor | Complete Alcohol Price Guide Nairobi",
  description:
    "Browse our complete price list and menu. Wines, whiskies, beers, vodka, gin & more. Fast delivery across Nairobi. Order via WhatsApp or call.",
  keywords: "alcohol prices nairobi, liquor price list kenya, wine prices, whisky prices, beer prices, vodka prices",
}

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-20">
        <PriceListMenu />
      </div>
      <Footer />
    </div>
  )
}
