import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    if (!payload.serviceName || !payload.customerName) {
      return NextResponse.json({ error: 'serviceName and customerName are required' }, { status: 400 });
    }

    const bookingReference = `VB-${Date.now().toString().slice(-8)}`;

    return NextResponse.json({
      message: 'Demo booking received successfully',
      bookingReference,
      status: 'pending',
      payload,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }
}
