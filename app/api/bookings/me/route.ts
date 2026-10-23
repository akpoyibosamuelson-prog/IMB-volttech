import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/server-auth';
import { demoBookings } from '@/lib/demo-store';

export async function GET() {
  const user = getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const myBookings = demoBookings.filter((booking) => booking.customerEmail === user.email);
  return NextResponse.json({ bookings: myBookings });
}
