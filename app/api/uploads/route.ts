import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { canManageInventory, ROLES } from '@/lib/roles';
import { z } from 'zod';

const stockSchema = z.object({
  productId: z.string().min(3),
  quantity: z.number().int().positive(),
  note: z.string().min(2).optional(),
  movementType: z.enum(['stock_receipt', 'stock_issue', 'stock_adjustment']),
});

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const role = (session.user as { role?: string }).role ?? 'customer';

  if (!canManageInventory(role as any)) {
    return NextResponse.json({ error: 'Forbidden: inventory access denied' }, { status: 403 });
  }

  const parseResult = stockSchema.safeParse(await request.json().catch(() => null));

  if (!parseResult.success) {
    return NextResponse.json({ error: 'Invalid stock update', details: parseResult.error.flatten() }, { status: 400 });
  }

  const payload = parseResult.data;

  return NextResponse.json({
    message: 'Inventory movement recorded in demo mode',
    stockUpdate: {
      productId: payload.productId,
      quantity: payload.quantity,
      movementType: payload.movementType,
      note: payload.note ?? 'manual stock change',
      actorRole: role,
      status: 'demo',
    },
  });
}

export async function GET() {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const role = (session.user as { role?: string }).role ?? 'customer';

  if (role !== ROLES.SUPER_ADMIN && role !== ROLES.BUSINESS_OWNER) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  return NextResponse.json({
    inventorySummary: {
      totalProducts: 146,
      lowStockItems: 8,
      totalValue: 4100000,
    },
    generatedAt: new Date().toISOString(),
  });
}
