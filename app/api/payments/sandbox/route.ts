import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const paymentSchema = z.object({
  amount: z.number().positive(),
  paymentMethod: z.enum(['bank_transfer', 'cash', 'online', 'sandbox']),
  reference: z.string().min(3),
  customerEmail: z.string().email().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const result = paymentSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid payment payload', details: result.error.flatten() }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Sandbox payment accepted. Replace with verified payment gateway integration in production.',
      status: 'pending_verification',
      amount: result.data.amount,
      paymentMethod: result.data.paymentMethod,
      reference: result.data.reference,
      gateway: 'sandbox-mode',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid payment request' }, { status: 400 });
  }
}
