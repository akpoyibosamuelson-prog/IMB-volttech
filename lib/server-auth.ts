import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSessionUser } from '@/lib/auth';

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get('voltbiz_session')?.value;
  return decodeSessionUser(token);
}

export async function requireRole(allowedRoles: string[]) {
  const user = await getCurrentUser();
  if (!user) {
    return { user: null, error: 'Unauthorized' } as const;
  }
  if (!allowedRoles.includes(user.role)) {
    return { user, error: 'Forbidden' } as const;
  }
  return { user, error: null } as const;
}
