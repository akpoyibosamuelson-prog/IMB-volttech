import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const registerSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['customer', 'business_owner', 'electrician', 'wholesaler', 'retailer']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = registerSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid registration payload', details: parsed.error.flatten() }, { status: 400 });
    }

    return NextResponse.json({
      message: 'Demo registration completed. Replace with secure auth in production.',
      user: {
        firstName: parsed.data.firstName,
        lastName: parsed.data.lastName,
        email: parsed.data.email,
        role: parsed.data.role ?? 'customer',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
