import { Clock3, Hammer, Home, Lightbulb, Plug, ShieldCheck, Wrench } from 'lucide-react';

export const demoServices = [
  { name: 'Electrical repairs', description: 'Resolve faults, breaker issues, and damaged circuits.', price: '₦18,500', icon: <Wrench size={22} /> },
  { name: 'Electrical installations', description: 'New power setups for homes, shops, and commercial spaces.', price: '₦35,000', icon: <Home size={22} /> },
  { name: 'House wiring', description: 'Full wiring upgrades and safety-compliant rewiring.', price: '₦52,000', icon: <Plug size={22} /> },
  { name: 'Generator support', description: 'Generator wiring, faults, and maintenance support.', price: '₦28,000', icon: <Hammer size={22} /> },
];

export const demoProducts = [
  { id: 'prod-1', name: 'Copper cable 2.5mm', category: 'Cables', description: 'High-quality copper cable for residential use.', price: 9200, priceNumber: 9200, stock: 'In stock', icon: '⚡' },
  { id: 'prod-2', name: 'MCB Breaker 20A', category: 'Protection', description: 'Circuit protection for light and appliance circuits.', price: 5400, priceNumber: 5400, stock: 'Low stock', icon: '🔌' },
  { id: 'prod-3', name: 'LED Panel Light', category: 'Lighting', description: 'Energy-saving lighting for commercial and domestic spaces.', price: 12800, priceNumber: 12800, stock: 'In stock', icon: '💡' },
  { id: 'prod-4', name: 'Switch Socket', category: 'Fittings', description: 'Durable power plug and switch set for residential use.', price: 4200, priceNumber: 4200, stock: 'Available', icon: '🔧' },
];

export const testimonials = [
  { name: 'Amina A.', role: 'Homeowner', quote: 'The booking flow was smooth and the team arrived promptly. The platform made tracking the work easy.' },
  { name: 'Tunde M.', role: 'Business owner', quote: 'Our service requests, material buy-ins, and job approvals are now visible in one place.' },
  { name: 'Ifeanyi D.', role: 'Contractor', quote: 'VoltBiz helped us manage inventory and customer requests without confusion or double entry.' },
];

export const faqs = [
  { question: 'How do I book an electrical service?', answer: 'Choose a service, describe the issue, upload photos, and submit the booking request. Our team confirms availability and cost.' },
  { question: 'Can I buy materials from the marketplace?', answer: 'Yes. Customers, electricians, and retailers can browse and purchase electrical materials with a cart and checkout flow.' },
  { question: 'Do you support WhatsApp updates?', answer: 'The platform is designed to support WhatsApp Business updates when the necessary provider configuration is enabled.' },
  { question: 'Is the system secure?', answer: 'The production design uses role-based access control, verification for payment webhooks, and environment-protected secrets.' },
];
