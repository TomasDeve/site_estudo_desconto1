import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-600 text-white p-1.5 rounded-lg">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-gray-900' : 'text-gray-900 lg:text-white'}`}>
            Ofertas<span className="text-brand-600">VIP</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#como-funciona" className={`text-sm font-medium hover:text-brand-600 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
            Como funciona
          </a>
          <a href="#depoimentos" className={`text-sm font-medium hover:text-brand-600 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
            Depoimentos
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button className="py-2 px-4 text-sm">Entrar no Grupo</Button>
          </a>
        </div>
      </div>
    </header>
  );
};