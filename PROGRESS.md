import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function GET(request: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const role = (session.user as { role?: string }).role ?? 'customer';

  if (!['super_admin', 'business_owner'].includes(role)) {
    return NextResponse.json({ error: 'Forbidden: financial reports require admin access.' }, { status: 403 });
  }

  const searchParams = request.nextUrl.searchParams;
  const from = searchParams.get('from') ?? '2026-01-01';
  const to = searchParams.get('to') ?? '2026-12-31';

  return NextResponse.json({
    summary: {
      revenue: 18500000,
      expenses: 8100000,
      paid: 14700000,
      outstanding: 3800000,
      estimatedProfit: 10400000,
    },
    filter: { from, to },
    generatedBy: session.user.email,
    message: 'Demo report generated. Production version should read from the database and apply access checks.',
  });
}
