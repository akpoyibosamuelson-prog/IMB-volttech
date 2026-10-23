import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';

export async function POST(request: NextRequest) {
  const signature = request.headers.get('x-webhook-signature') ?? request.headers.get('x-paystack-signature');
  const payload = await request.text();
  const secret = process.env.PAYSTACK_SECRET_KEY || process.env.FLUTTERWAVE_SECRET_KEY;

  if (!secret) {
    return NextResponse.json({ error: 'Webhook signing secret not configured.' }, { status: 501 });
  }

  if (!signature) {
    return NextResponse.json({ error: 'Missing webhook signature.' }, { status: 401 });
  }

  const expectedSignature = crypto.createHmac('sha256', secret).update(payload).digest('hex');

  if (signature !== expectedSignature) {
    return NextResponse.json({ error: 'Invalid webhook signature.' }, { status: 401 });
  }

  try {
    const parsed = JSON.parse(payload);

    return NextResponse.json({
      message: 'Webhook received and verified in sandbox-safe mode.',
      status: 'processed',
      reference: parsed?.reference ?? 'unknown-reference',
      event: parsed?.event ?? 'payment-event',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Malformed webhook payload.' }, { status: 400 });
  }
}
