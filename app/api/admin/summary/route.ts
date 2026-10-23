import { NextResponse } from 'next/server';
import { getCurrentUser, requireRole } from '@/lib/server-auth';
import { demoBookings, demoInventory } from '@/lib/demo-store';

export async function GET() {
  const auth = requireRole(['SUPER_ADMIN', 'BUSINESS_OWNER', 'STAFF', 'CUSTOMER']);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.user ? 403 : 401 });
  }

  return NextResponse.json({
    user: auth.user,
    bookings: demoBookings,
    inventory: demoInventory,
    summary: {
      totalBookings: demoBookings.length,
      lowStockItems: demoInventory.filter((item) => item.quantity <= item.minStockLevel).length,
      inventoryValue: demoInventory.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
    },
  });
}
