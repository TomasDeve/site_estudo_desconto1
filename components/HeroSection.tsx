import React from 'react';
import { MessageCircle, ShieldCheck, Star } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_LINK } from '../constants';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-900 min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 opacity-90"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-brand-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-white tracking-wide">+150 ofertas postadas hoje</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
        >
          Pare de perder dinheiro <br className="hidden md:block"/>
          em <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-green-300">compras online</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
        >
          Receba os melhores descontos, cupons secretos e bugs de preço diretamente no seu WhatsApp. É grátis e sem spam.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
            <Button fullWidth pulse className="gap-2 text-xl py-5 shadow-brand-500/20">
              <MessageCircle className="w-6 h-6" />
              Entrar no Grupo VIP
            </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm md:text-base"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-500" />
            <span>Links Verificados</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-brand-500" />
            <span>+15k Membros</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
};