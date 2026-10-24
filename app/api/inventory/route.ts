import { NextResponse } from 'next/server';
import { getCurrentUser, requireRole } from '@/lib/server-auth';
import { demoInventory } from '@/lib/demo-store';

export async function GET() {
  const auth = await requireRole(['SUPER_ADMIN', 'BUSINESS_OWNER', 'STAFF', 'CUSTOMER', 'WHOLESALER', 'RETAILER']);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.user ? 403 : 401 });
  }

  return NextResponse.json({ inventory: demoInventory });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = (await request.json()) as { itemId?: string; quantity?: number }; 
  const itemId = String(payload.itemId || '');
  const quantity = Number(payload.quantity || 0);

  if (!itemId || !Number.isFinite(quantity) || quantity <= 0) {
    return NextResponse.json({ error: 'Valid itemId and quantity are required.' }, { status: 400 });
  }

  const item = demoInventory.find((entry) => entry.id === itemId);
  if (!item) {
    return NextResponse.json({ error: 'Inventory item not found.' }, { status: 404 });
  }

  if (item.quantity < quantity) {
    return NextResponse.json({ error: 'Not enough stock available for this request.' }, { status: 409 });
  }

  item.quantity -= quantity;
  item.lastUpdated = new Date().toISOString();

  return NextResponse.json({
    ok: true,
    item,
    message: `${quantity} units reserved from stock.`,
  });
}
