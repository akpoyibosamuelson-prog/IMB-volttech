import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['customer', 'business_owner', 'electrician', 'wholesaler', 'retailer', 'super_admin']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = loginSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid login payload', details: parsed.error.flatten() }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Demo login successful. Replace with secure server-side auth in production.',
      user: {
        email: parsed.data.email,
        role: parsed.data.role ?? 'customer',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
