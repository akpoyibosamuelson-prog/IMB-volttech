import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSessionUser, encodeSessionUser, hashPassword, verifyPassword } from '@/lib/auth';
import { demoUsers, findUserByEmail } from '@/lib/demo-users';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: string; email?: string; password?: string; role?: string };
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const role = (body.role || 'CUSTOMER') as 'SUPER_ADMIN' | 'BUSINESS_OWNER' | 'STAFF' | 'WHOLESALER' | 'RETAILER' | 'CUSTOMER';

    if (!name || !email || password.length < 8) {
      return NextResponse.json({ error: 'Name, valid email, and a password of at least 8 characters are required.' }, { status: 400 });
    }

    if (findUserByEmail(email)) {
      return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 409 });
    }

    const newUser = {
      id: `u-${Date.now()}`,
      name,
      email,
      passwordHash: hashPassword(password),
      role,
    };

    demoUsers.push(newUser);
    const sessionToken = encodeSessionUser({ id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role });
    cookies().set('voltbiz_session', sessionToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({
      ok: true,
      user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
    });
  } catch {
    return NextResponse.json({ error: 'Unable to create the account.' }, { status: 500 });
  }
}
