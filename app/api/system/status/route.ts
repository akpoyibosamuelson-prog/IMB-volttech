import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/server-auth';

export async function GET() {
  const auth = requireRole(['SUPER_ADMIN', 'BUSINESS_OWNER', 'STAFF']);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.user ? 403 : 401 });
  }

  return NextResponse.json({
    environment: process.env.NODE_ENV || 'development',
    status: 'demo-mode',
    features: ['invoice generation', 'booking pipeline', 'inventory alerts', 'payment sandbox'],
  });
}
