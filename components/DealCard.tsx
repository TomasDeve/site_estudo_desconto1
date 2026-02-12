import React from 'react';
import { Deal } from '../types';
import { TrendingDown, ExternalLink } from 'lucide-react';

interface DealCardProps {
  deal: Deal;
}

export const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10 flex items-center gap-1">
          <TrendingDown className="w-3 h-3" />
          -{deal.discountPercentage}%
        </span>
        <img 
          src={deal.image} 
          alt={deal.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">{deal.category}</span>
        <h3 className="text-gray-900 font-medium text-lg leading-tight mb-2 line-clamp-2">{deal.title}</h3>
        
        <div className="mt-auto pt-2">
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm line-through decoration-red-400">{formatCurrency(deal.originalPrice)}</span>
            <span className="text-brand-700 text-2xl font-bold">{formatCurrency(deal.discountPrice)}</span>
          </div>
          <div className="mt-3 w-full py-2 bg-gray-50 text-gray-600 text-sm font-medium rounded-lg flex items-center justify-center gap-2 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
            Ver Oferta <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};