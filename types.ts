export interface Deal {
  id: number;
  title: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
  category: string;
  discountPercentage: number;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  savedAmount: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}