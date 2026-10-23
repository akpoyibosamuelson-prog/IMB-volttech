import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['customer', 'business_owner', 'electrician', 'wholesaler', 'retailer', 'super_admin']).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const result = loginSchema.safeParse(json);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid login payload', details: result.error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Demo login successful. Replace with secure authentication in production.',
      user: {
        email: result.data.email,
        role: result.data.role ?? 'customer',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}
