import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { LiveFeedSection } from './components/LiveFeedSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <LiveFeedSection />
        <TestimonialsSection />
        <div className="bg-gray-900 py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Não perca mais nenhuma oferta</h2>
            <p className="text-gray-300 mb-8">Junte-se a mais de 15.000 pessoas que economizam todos os dias.</p>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg transform hover:scale-105">
                Quero Economizar Agora
              </button>
            </a>
          </div>
        </div>
        <FAQSection />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;