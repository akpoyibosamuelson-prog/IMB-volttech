import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const defaultAdmin = await prisma.user.upsert({
    where: { email: 'admin@voltbiz.com' },
    update: {},
    create: {
      name: 'VoltBiz Administrator',
      email: 'admin@voltbiz.com',
      passwordHash: await bcrypt.hash('Admin123!', 10),
      role: 'SUPER_ADMIN',
      phone: '+2348000000000',
    },
  });

  const customer = await prisma.user.upsert({
    where: { email: 'customer@voltbiz.com' },
    update: {},
    create: {
      name: 'Demo Customer',
      email: 'customer@voltbiz.com',
      passwordHash: await bcrypt.hash('Customer123!', 10),
      role: 'CUSTOMER',
      phone: '+2348123456789',
    },
  });

  await prisma.service.upsert({
    where: { id: 'svc-installation' },
    update: {},
    create: {
      id: 'svc-installation',
      name: 'Electrical Installation',
      description: 'Professional electrical installation for homes, offices, and retail spaces.',
      category: 'Installation',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      priceType: 'estimated',
      estimateMin: 15000,
      estimateMax: 45000,
      durationMinutes: 240,
      availability: 'Mon-Sat',
      inspectionRequirements: 'Site inspection required before final quote.',
      isActive: true,
    },
  });

  await prisma.service.upsert({
    where: { id: 'svc-repair' },
    update: {},
    create: {
      id: 'svc-repair',
      name: 'Electrical Repair',
      description: 'Fast repair and diagnosis services for faulty wiring, sockets, and power systems.',
      category: 'Repair',
      imageUrl: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80',
      priceType: 'fixed',
      fixedPrice: 9000,
      durationMinutes: 120,
      availability: 'Mon-Sun',
      inspectionRequirements: 'Fault photos and site access required.',
      isActive: true,
    },
  });

  await prisma.product.upsert({
    where: { sku: 'CABLE-2.5MM' },
    update: {},
    create: {
      name: '2.5mm Electrical Cable',
      description: 'Copper electrical cable for general wiring and installations.',
      category: 'Cables',
      sku: 'CABLE-2.5MM',
      imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      purchaseCost: 850,
      retailPrice: 1200,
      wholesalePrice: 980,
      stock: 32,
      minStock: 12,
      active: true,
      vendorId: defaultAdmin.id,
    },
  });

  await prisma.product.upsert({
    where: { sku: 'MCB-16A' },
    update: {},
    create: {
      name: '16A Miniature Circuit Breaker',
      description: 'Reliable circuit breaker for branch protection.',
      category: 'Protection',
      sku: 'MCB-16A',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      purchaseCost: 1600,
      retailPrice: 2200,
      wholesalePrice: 1850,
      stock: 18,
      minStock: 10,
      active: true,
      vendorId: defaultAdmin.id,
    },
  });

  await prisma.booking.upsert({
    where: { bookingRef: 'VB-1001' },
    update: {},
    create: {
      bookingRef: 'VB-1001',
      reason: 'Kitchen wiring upgrade',
      description: 'Need to replace old sockets and add new lighting circuits.',
      address: '12 Opebi Road, Ikeja, Lagos',
      preferredDate: '2026-11-09',
      preferredTime: '10:00',
      status: 'PENDING',
      fee: 15000,
      serviceId: 'svc-installation',
      customerId: customer.id,
      images: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    },
  });

  console.log('Seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
