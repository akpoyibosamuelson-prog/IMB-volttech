import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const bookingPayloadSchema = z.object({
  serviceName: z.string().min(2),
  customerName: z.string().min(2),
  address: z.string().min(6),
  preferredDate: z.string().min(1),
  description: z.string().min(10).optional().or(z.literal('')),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const result = bookingPayloadSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        {
          error: 'Invalid booking payload',
          details: result.error.flatten(),
        },
        { status: 400 }
      );
    }

    const bookingReference = `VB-${Date.now().toString().slice(-8)}`;

    return NextResponse.json({
      message: 'Demo booking created successfully',
      bookingReference,
      status: 'pending',
      booking: result.data,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON document' }, { status: 400 });
  }
}
