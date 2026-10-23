import { NextResponse } from 'next/server';
import { getCurrentUser } from '@/lib/server-auth';
import { demoBookings, demoInventory } from '@/lib/demo-store';

export async function POST(request: Request) {
  const user = getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const payload = (await request.json()) as { service?: string; reason?: string; address?: string; preferredDate?: string; preferredTime?: string; faultDescription?: string };
  const service = String(payload.service || '').trim();
  const reason = String(payload.reason || '').trim();
  const address = String(payload.address || '').trim();
  const preferredDate = String(payload.preferredDate || '').trim();
  const preferredTime = String(payload.preferredTime || '').trim();
  const faultDescription = String(payload.faultDescription || '').trim();

  if (!service || !reason || !address || !preferredDate || !preferredTime || !faultDescription) {
    return NextResponse.json({ error: 'All booking fields are required.' }, { status: 400 });
  }

  const bookingRef = `VB-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
  const newBooking = {
    id: crypto.randomUUID(),
    bookingRef,
    service,
    reason,
    faultDescription,
    address,
    preferredDate,
    preferredTime,
    status: 'pending',
    customerEmail: user.email,
    createdAt: new Date().toISOString(),
  };

  demoBookings.push(newBooking);

  return NextResponse.json({
    ok: true,
    booking: newBooking,
    message: 'Booking submitted successfully.',
  });
}
