# Delight Tourism — Siliguri's Premier Himalayan Travel Partner

Delight Tourism is a modern, high-performance Single Page Application (SPA) built to serve as the premier digital storefront for Siliguri's most trusted travel agency. Established in 2017, the agency specializes in curating bespoke Himalayan tours, primarily covering Darjeeling, Sikkim, and North East India.

## 🚀 Live Demo & Repository
- **GitHub**: [CyberSparkx/Delight-Tourism](https://github.com/CyberSparkx/Delight-Tourism)
- **Status**: Production-Ready

## ✨ Key Features
- **Immersive User Experience**: Smooth scroll-triggered reveal animations powered by **GSAP (ScrollTrigger)** for an elegant, premium feel.
- **Dynamic Content**: Auto-rotating hero slider, interactive testimonial carousels (Swiper.js), and elegantly styled grid layouts.
- **Smart Booking Flow**: Centralized `#booking` form with URL parameter parsing (`?pkg=`, `?type=senior-citizen`) for quick and user-friendly lead generation.
- **Enterprise-Grade SEO**: Fully optimized with Schema.org (JSON-LD), Open Graph metadata, canonical routing, and proper semantic HTML tags to dominate local search results.
- **Responsive & Dynamic Design**: Built Mobile-First with Tailwind CSS, utilizing a bespoke brand design system with Custom Fonts, Deep Blues (`#1a1a2e`), and Gold Accents (`#c9a96e`).
- **Performance Optimized**: Zero-router SPA configuration means lightning-fast navigation, coupled with natively compressed image assets and a custom scrollbar.

## 🛠️ Tech Stack
- **Framework**: React 18 
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (Utility-First styling)
- **Animations**: GSAP (GreenSock)
- **Carousels**: Swiper.js
- **SEO/Metadata**: HTML5, JSON-LD, OpenGraph

## 📦 Local Installation
To run this project locally, execute the following commands in your terminal:

```bash
# 1. Clone the repository
git clone https://github.com/CyberSparkx/Delight-Tourism.git

# 2. Navigate into the directory
cd delight-tourism

# 3. Install NPM dependencies
npm install

# 4. Start the development server
npm run dev
```

Visit the local host URL (typically `http://localhost:5173`) in your browser to view the application.

## 🗺️ Project Architecture
```text
delight-tourism/
├── public/                 # Static assets, Favicon, SEO root files (sitemap, robots.txt)
├── src/
│   ├── components/         # Modular React UI Components (Hero, Navbar, BookingForm)
│   ├── data/               # Static dataset configurations (packages.js, fleet.js)
│   ├── hooks/              # Custom React Hooks (e.g., useScrollReveal)
│   ├── App.jsx             # Main SPA Orchestrator
│   ├── index.css           # Global Tailwind directives & custom generic styles
│   └── main.jsx            # React root injection
├── index.html              # HTML shell & SEO Metadata
└── tailwind.config.js      # Core brand tokens (Colors, Typography)
```

## 📜 Copyright
© 2026 Delight Tourism. All Rights Reserved. Managed by Kushum Parijat.
