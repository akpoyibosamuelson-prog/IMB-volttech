import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    revenue: 0,
    bookings: 0,
    customers: 0,
    message: 'Reports are ready for live data.',
  });
}
