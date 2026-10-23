export type ServiceItem = {
  name: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  availability: string;
};

export type ProductItem = {
  id: number;
  name: string;
  category: string;
  description: string;
  wholesalePrice: number;
  retailPrice: number;
  stock: number;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
