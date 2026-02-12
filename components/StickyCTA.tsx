import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40 md:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.1)]"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button fullWidth pulse className="gap-2 shadow-none">
              <MessageCircle className="w-5 h-5" />
              Entrar no Grupo Agora
            </Button>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};