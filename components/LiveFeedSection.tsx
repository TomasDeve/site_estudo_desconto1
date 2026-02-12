import React from 'react';
import { SAMPLE_DEALS } from '../constants';
import { DealCard } from './DealCard';

export const LiveFeedSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50" id="ofertas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              O que está rolando agora 🔥
            </h2>
            <p className="mt-2 text-gray-600">
              Estas são algumas das ofertas que enviamos hoje no grupo.
            </p>
          </div>
          <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Atualizado há 2 minutos
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_DEALS.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Muitas dessas ofertas já expiraram.</p>
          <p className="font-medium text-brand-700">Entre no grupo para pegar as próximas!</p>
        </div>
      </div>
    </section>
  );
};