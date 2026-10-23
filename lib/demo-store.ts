export type BookingStoreItem = {
  id: string;
  bookingRef: string;
  service: string;
  reason: string;
  faultDescription: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  status: 'pending' | 'confirmed' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
  customerEmail: string;
  createdAt: string;
};

export type InventoryItem = {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  minStockLevel: number;
  unitPrice: number;
  lastUpdated: string;
};

export const demoBookings: BookingStoreItem[] = [];

export const demoInventory: InventoryItem[] = [
  { id: 'inv-1', name: 'Copper Cable 2.5mm', sku: 'CAB-25-01', category: 'Cables', quantity: 18, minStockLevel: 8, unitPrice: 9200, lastUpdated: new Date().toISOString() },
  { id: 'inv-2', name: 'MCB Breaker 20A', sku: 'MCB-20-01', category: 'Protection', quantity: 6, minStockLevel: 10, unitPrice: 5400, lastUpdated: new Date().toISOString() },
  { id: 'inv-3', name: 'LED Panel Light', sku: 'LED-12-01', category: 'Lighting', quantity: 24, minStockLevel: 10, unitPrice: 12800, lastUpdated: new Date().toISOString() },
  { id: 'inv-4', name: 'Switch Socket', sku: 'SW-01', category: 'Fittings', quantity: 14, minStockLevel: 8, unitPrice: 4200, lastUpdated: new Date().toISOString() },
];

export const demoProducts = [
  { id: 'prod-1', name: 'Copper cable 2.5mm', category: 'Cables', description: 'High-quality copper cable for residential use.', price: 9200, stock: 'In stock', icon: '⚡' },
  { id: 'prod-2', name: 'MCB breaker 20A', category: 'Protection', description: 'Circuit protection for light and appliance circuits.', price: 5400, stock: 'Low stock', icon: '🔌' },
  { id: 'prod-3', name: 'LED panel light', category: 'Lighting', description: 'Energy-saving lighting for commercial and domestic spaces.', price: 12800, stock: 'In stock', icon: '💡' },
  { id: 'prod-4', name: 'Switch socket', category: 'Fittings', description: 'Durable power plug and switch set for residential use.', price: 4200, stock: 'Available', icon: '🔧' },
];
