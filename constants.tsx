import { Deal, Testimonial, FAQItem } from './types';
import { Smartphone, ShoppingBag, Shirt, Monitor } from 'lucide-react';

export const WHATSAPP_LINK = "https://whatsapp.com"; // Placeholder link

export const SAMPLE_DEALS: Deal[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB",
    originalPrice: 9899,
    discountPrice: 7299,
    discountPercentage: 26,
    image: "https://picsum.photos/400/400?random=1",
    category: "Eletrônicos"
  },
  {
    id: 2,
    title: "Smart TV 55' 4K UHD",
    originalPrice: 3299,
    discountPrice: 1899,
    discountPercentage: 42,
    image: "https://picsum.photos/400/400?random=2",
    category: "TV e Vídeo"
  },
  {
    id: 3,
    title: "Air Fryer Digital 4L",
    originalPrice: 699,
    discountPrice: 299,
    discountPercentage: 57,
    image: "https://picsum.photos/400/400?random=3",
    category: "Eletrodomésticos"
  },
  {
    id: 4,
    title: "Kit 3 Camisetas Básicas",
    originalPrice: 149,
    discountPrice: 59,
    discountPercentage: 60,
    image: "https://picsum.photos/400/400?random=4",
    category: "Moda"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ana Clara Silva",
    avatar: "https://picsum.photos/100/100?random=10",
    text: "Gente, eu nunca consegui pegar essas promoções relâmpago, mas com o grupo eu consegui comprar minha geladeira nova com 1.200 reais de desconto!",
    savedAmount: "R$ 1.200"
  },
  {
    id: 2,
    name: "Rafael Mendes",
    avatar: "https://picsum.photos/100/100?random=11",
    text: "O melhor é que não tem spam. Só mandam oferta boa mesmo. Comprei meu monitor gamer pela metade do preço.",
    savedAmount: "R$ 850"
  },
  {
    id: 3,
    name: "Juliana Costa",
    avatar: "https://picsum.photos/100/100?random=12",
    text: "Já estou em 3 grupos de ofertas, mas esse é o único que manda os bugs de preço na hora que acontece. Recomendo demais!",
    savedAmount: "R$ 430"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Preciso pagar para entrar?",
    answer: "Não! O grupo é 100% gratuito. Nossa missão é ajudar você a economizar."
  },
  {
    question: "O grupo é aberto para conversas?",
    answer: "Não, o grupo é silenciado. Apenas os administradores enviam as ofertas para não encher seu celular de notificações desnecessárias."
  },
  {
    question: "Como vocês acham essas ofertas?",
    answer: "Temos um sistema que monitora as grandes lojas 24 horas por dia e uma equipe que verifica se o desconto é real antes de postar."
  },
  {
    question: "É seguro comprar pelos links?",
    answer: "Sim! Só divulgamos links de lojas grandes e confiáveis (Amazon, Magalu, Mercado Livre, etc)."
  }
];

export const FEATURES = [
  {
    icon: <Smartphone className="w-6 h-6 text-brand-600" />,
    title: "Notificações em Tempo Real",
    description: "Seja o primeiro a saber quando o preço cair."
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-brand-600" />,
    title: "Curadoria de Ofertas",
    description: "Não enviamos 'metade do dobro'. Apenas descontos reais."
  },
  {
    icon: <Monitor className="w-6 h-6 text-brand-600" />,
    title: "Bugs de Preço",
    description: "Erros de estagiário e promoções relâmpago chegam primeiro aqui."
  },
  {
    icon: <Shirt className="w-6 h-6 text-brand-600" />,
    title: "Variedade de Lojas",
    description: "Monitoramos mais de 50 grandes e-commerces do Brasil."
  }
];