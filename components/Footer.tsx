import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex items-center gap-2 mb-6 text-white font-bold text-xl">
           Ofertas<span className="text-brand-500">VIP</span>
        </div>
        
        <p className="text-center text-sm mb-8 max-w-md">
          Participamos de diversos programas de afiliados. Ao comprar através dos nossos links, podemos receber uma comissão sem nenhum custo extra para você.
        </p>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Site Seguro & Verificado</span>
        </div>

        <div className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Ofertas VIP. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};