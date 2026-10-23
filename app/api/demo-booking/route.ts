import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bookingSchema = z.object({
  serviceName: z.string().min(2),
  customerName: z.string().min(2),
  address: z.string().min(6),
  preferredDate: z.string().min(1),
  description: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = bookingSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid booking payload', details: parsed.error.flatten() }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Demo booking created successfully',
      bookingReference: `VB-${Date.now().toString().slice(-8)}`,
      status: 'pending',
      booking: parsed.data,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
}
