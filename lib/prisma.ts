import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function ensureDemoData() {
  const demoUser = await prisma.user.upsert({
    where: { email: 'demo@voltbiz.app' },
    update: {},
    create: {
      name: 'Demo User',
      email: 'demo@voltbiz.app',
      passwordHash: 'demo-hash',
      role: 'CUSTOMER',
    },
  });

  return { demoUser };
}

export default prisma;
