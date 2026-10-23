import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/server-auth';

export async function GET() {
  const auth = requireRole(['SUPER_ADMIN', 'BUSINESS_OWNER', 'STAFF']);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.user ? 403 : 401 });
  }

  return NextResponse.json({
    status: 'sandbox',
    note: 'This payment flow is configured for sandbox/test mode until production credentials are provided.',
    provider: 'Paystack or Flutterwave-ready',
  });
}
