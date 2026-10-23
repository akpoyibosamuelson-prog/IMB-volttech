import type { FaqItem, ProductItem, ServiceItem, TestimonialItem } from '@/lib/types';

export const services: ServiceItem[] = [
  {
    name: 'Electrical Repairs',
    category: 'Repair',
    description: 'Fix faulty circuits, damaged switches, and malfunctioning electrical points.',
    price: 25000,
    duration: '2-4 hours',
    availability: 'Available today',
  },
  {
    name: 'Electrical Installations',
    category: 'Installation',
    description: 'Install sockets, appliances, indoor and outdoor fittings with precision.',
    price: 40000,
    duration: 'Half-day',
    availability: 'Bookable this week',
  },
  {
    name: 'House Wiring',
    category: 'Wiring',
    description: 'Professional wiring upgrades for residential homes and apartments.',
    price: 85000,
    duration: '1-3 days',
    availability: 'By quote',
  },
  {
    name: 'Fault Diagnosis',
    category: 'Inspection',
    description: 'Systematic fault tracing and electrical safety assessment for difficult issues.',
    price: 18000,
    duration: '1-2 hours',
    availability: 'Open',
  },
];

export const featuredProducts: ProductItem[] = [
  {
    id: 1,
    name: 'Cables & Wiring Kit',
    category: 'Wiring',
    description: 'Durable electrical cable packs for residential and commercial wiring.',
    wholesalePrice: 18000,
    retailPrice: 26000,
    stock: 144,
  },
  {
    id: 2,
    name: 'Circuit Breaker',
    category: 'Protection',
    description: 'Reliable protection for electrical loads and panel circuits.',
    wholesalePrice: 5500,
    retailPrice: 7200,
    stock: 89,
  },
  {
    id: 3,
    name: 'Smart LED Bulb Pack',
    category: 'Lighting',
    description: 'Energy-efficient high-output lighting for offices and homes.',
    wholesalePrice: 4200,
    retailPrice: 5600,
    stock: 210,
  },
  {
    id: 4,
    name: 'Socket & Switch Set',
    category: 'Accessories',
    description: 'Modern socket and switch combinations for interior electrical upgrades.',
    wholesalePrice: 6900,
    retailPrice: 9800,
    stock: 175,
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: 'VoltBiz helped us maintain emergency power and install a safer residential wiring layout without the usual delays.',
    author: 'Teni Lawal',
    role: 'Homeowner',
  },
  {
    quote: 'The booking and follow-up process was very organized. The team was transparent and the job tracking was easy to follow.',
    author: 'Bamidele Arowosegbe',
    role: 'Facility Manager',
  },
  {
    quote: 'We were able to compare suppliers and restock our essential electrical materials without dealing with multiple spreadsheets.',
    author: 'Ifeoma Okafor',
    role: 'Retail Business Owner',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Do you support emergency electrical callouts?',
    answer: 'Yes. Emergency bookings are available with priority scheduling and service confirmation based on availability.',
  },
  {
    question: 'Can I upload pictures of the problem before booking?',
    answer: 'Yes. Customers can upload photos of faulty installations, damaged sockets, and electrical faults to improve assessment speed.',
  },
  {
    question: 'Can I order products for delivery?',
    answer: 'Yes. The marketplace supports delivery or collection options, with vendor fulfilment tracking and payment confirmation.',
  },
  {
    question: 'How does payment work?',
    answer: 'Payments may be processed for services and materials using secure bank transfer verification, cash on approval, or online payment integration in sandbox mode.',
  },
];
