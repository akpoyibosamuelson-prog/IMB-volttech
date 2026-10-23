import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    if (!payload.email || !payload.password) {
      return NextResponse.json({ error: 'email and password are required' }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Demo login successful. Replace with secure server-side auth in production.',
      user: {
        email: payload.email,
        role: payload.role || 'customer',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid login payload' }, { status: 400 });
  }
}
