import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSessionUser } from '@/lib/auth';

export async function GET() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('voltbiz_session')?.value;
  const user = decodeSessionUser(sessionToken);

  if (!user) {
    return NextResponse.json({ authenticated: false });
  }

  return NextResponse.json({ authenticated: true, user });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('voltbiz_session');
  return NextResponse.json({ ok: true });
}
