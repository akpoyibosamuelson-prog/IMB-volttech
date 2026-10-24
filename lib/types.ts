export type FaqItem = { question: string; answer: string };
export type ProductItem = { id: string | number; name: string; category: string; description: string; wholesalePrice?: number; retailPrice?: number; stock: number };
export type ServiceItem = { name: string; category: string; description: string; price: number; duration: string; availability: string };
export type TestimonialItem = { quote: string; author: string; role: string };

export type BookingRecord = {
  id: string;
  service: string;
  reason: string;
  faultDescription: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  reference: string;
  status: string;
  createdAt: string;
};
