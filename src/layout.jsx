import { Inter, Poppins } from "next/font/google"
import "./index.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Bomani Liquor - Nairobi's Fastest Online Liquor Delivery | 30 Minutes or Less",
  description:
    "Order wines, whiskies, beers & more online. Fast 30-minute delivery across Nairobi. Pay via Mpesa, card, or cash on delivery. 1000+ drinks available.",
  keywords:
    "liquor delivery nairobi, alcohol delivery kenya, wine delivery, whisky delivery, beer delivery, mpesa payment, fast delivery",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2C1A47" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
