// metadata.ts

/**
 * Metadata configuration for QuadTree.ai web application.
 * This includes SEO tags, icons for various devices, and custom font settings.
 */
export const metadata = {
  name: "QuadTree.ai",
  short_name: "QuadTree",
  description: "QuadTree.ai leverages advanced AI technologies to provide innovative software solutions, enhancing business efficiency and consumer engagement.",
  // Consolidated and refined keywords for SEO
  keywords: [
    "AI solutions", "AI technology", "healthcare AI", "EHR systems", "data analytics", "machine learning", "QuadTree.ai"
  ],
  // Updated author information
  author: "QuadTree AI Technologies Pvt Ltd",
  title: "QuadTree.ai - Revolutionizing the AI Landscape",
  icons: {
    favicon: "/icons/favicon.ico",
    android192: "/icons/android-chrome-192x192.png",
    android512: "/icons/android-chrome-512x512.png",
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/shortcut-icon.png"
  },
  manifest: "/icons/manifest.json",
  theme_color: "#ffffff",
  background_color: "#ffffff",
  display: "standalone",
  // Streamlined fonts with unique weights and styles as needed
  fonts: [
    "https://fonts.googleapis.com/css2?family=Capriola&family=Baumans&display=swap",
    "https://fonts.googleapis.com/css2?family=Lovers+Quarrel&family=Poppins:wght@300;400;600&display=swap",
  ]
};
