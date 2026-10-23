import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/server-auth';
import { demoInventory } from '@/lib/demo-store';

export async function GET() {
  const auth = requireRole(['SUPER_ADMIN', 'BUSINESS_OWNER', 'STAFF']);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.user ? 403 : 401 });
  }

  return NextResponse.json({ inventory: demoInventory });
}
