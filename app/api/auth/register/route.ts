import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    if (!payload.email || !payload.password) {
      return NextResponse.json({ error: 'email and password are required' }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Demo registration completed. Replace with secure auth in production.',
      user: {
        email: payload.email,
        role: payload.role || 'customer',
        createdAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid registration payload' }, { status: 400 });
  }
}
