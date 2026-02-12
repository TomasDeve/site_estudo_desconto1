import React from 'react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Quem entra, economiza
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl relative">
              <div className="absolute -top-4 -right-4 bg-green-100 text-brand-800 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                Economizou {t.savedAmount}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <div className="flex text-yellow-400 text-xs">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};