import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCatalog } from "./components/ProductCatalog";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { CompanyProfileSection } from "./components/CompanyProfileSection";
import { ProcessManufacturingSection } from "./components/ProcessManufacturingSection";
import { SustainabilitySection } from "./components/SustainabilitySection";
import { FacilityVisitSection } from "./components/FacilityVisitSection";
import { Footer } from "./components/Footer";
import { QuickContactFloating } from "./components/QuickContactFloating";
import { InquiryModal } from "./components/InquiryModal";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { SiteLoadReveal } from "./components/SiteLoadReveal";
import { Product, PRODUCTS } from "./data/products";

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Aluminium Block");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Synchronize dedicated product page with URL hash and browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#product-") || hash.startsWith("#/product/")) {
        const id = hash.replace("#product-", "").replace("#/product/", "");
        const matched = PRODUCTS.find((p) => p.id === id);
        if (matched) {
          setSelectedProduct(matched);
          return;
        }
      }
      setSelectedProduct(null);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    window.location.hash = `product-${product.id}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCatalog = () => {
    setSelectedProduct(null);
    window.location.hash = "products";
    setTimeout(() => {
      const el = document.getElementById("products");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#24303e] flex flex-col font-sans selection:bg-[#f24b00] selection:text-white">
      {/* Extraordinary Cinematic Foundry Load Reveal */}
      <SiteLoadReveal />

      {/* Top Metallurgical Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Header */}
      <Header onRequestQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {selectedProduct ? (
          /* DEDICATED FULL PRODUCT DETAIL PAGE (NOT A POPUP) */
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackToCatalog}
            onSelectProduct={handleSelectProduct}
            onRequestQuote={handleOpenQuote}
          />
        ) : (
          /* FULL HOMEPAGE CATALOG & FOUNDRY SECTIONS */
          <>
            {/* Unified Hero Section with Integrated Key Metrics */}
            <Hero onRequestQuote={() => handleOpenQuote()} />

            {/* 10-Product Industrial Catalog */}
            <ProductCatalog onSelectProduct={handleSelectProduct} />

            {/* Company Profile, Vision, Mission & Foundry Heritage */}
            <CompanyProfileSection onRequestQuote={() => handleOpenQuote()} />

            {/* Process & Inside Manufacturing Unified Section */}
            <ProcessManufacturingSection />

            {/* Sustainability & White Coal Biomass Fuel */}
            <SustainabilitySection />

            {/* "Visit Dishant Industries" & Official Google Maps Location */}
            <FacilityVisitSection />
          </>
        )}
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Quick Action Speed Dial for Calling & WhatsApp */}
      <QuickContactFloating />

      {/* RFQ & Inquiries Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultProduct={selectedService}
      />
    </div>
  );
}
