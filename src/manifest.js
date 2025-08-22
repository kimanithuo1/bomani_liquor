export default function manifest() {
  return {
    name: "Bomani Liquor - Fast Alcohol Delivery Nairobi",
    short_name: "Bomani Liquor",
    description: "Order wines, whiskies, beers & more online. Fast 30-minute delivery across Nairobi.",
    start_url: "/",
    display: "standalone",
    background_color: "#2C1A47",
    theme_color: "#2C1A47",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
