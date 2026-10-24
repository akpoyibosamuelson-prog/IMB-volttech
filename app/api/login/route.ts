import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { encodeSessionUser, verifyPassword } from '@/lib/auth';
import { demoUsers, findUserByEmail } from '@/lib/demo-users';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string; password?: string };
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');

    if (!email || !password || password.length < 8) {
      return NextResponse.json({ error: 'A valid email and password are required.' }, { status: 400 });
    }

    const user = findUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: 'No account was found with that email address.' }, { status: 401 });
    }

    const isValid = verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json({ error: 'Incorrect password.' }, { status: 401 });
    }

    const sessionToken = encodeSessionUser({ id: user.id, name: user.name, email: user.email, role: user.role });
    const cookieStore = await cookies();
    cookieStore.set('voltbiz_session', sessionToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return NextResponse.json({
      ok: true,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    });
  } catch {
    return NextResponse.json({ error: 'Unable to log in.' }, { status: 500 });
  }
}
