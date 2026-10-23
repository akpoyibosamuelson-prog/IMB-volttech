import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSessionUser } from '@/lib/auth';

export function getCurrentUser() {
  const token = cookies().get('voltbiz_session')?.value;
  return decodeSessionUser(token);
}

export function requireRole(allowedRoles: string[]) {
  const user = getCurrentUser();
  if (!user) {
    return { user: null, error: 'Unauthorized' } as const;
  }
  if (!allowedRoles.includes(user.role)) {
    return { user, error: 'Forbidden' } as const;
  }
  return { user, error: null } as const;
}
