import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: string;
};

const SESSION_COOKIE = 'volt_session';
const SECRET = process.env.AUTH_SECRET || 'local-dev-auth-secret-change-me';

export function signSessionToken(user: SessionUser) {
  const payload = Buffer.from(JSON.stringify(user)).toString('base64url');
  const signature = createHmac('sha256', SECRET).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

export function verifySessionToken(token?: string | null): SessionUser | null {
  if (!token) return null;

  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;

  const expected = createHmac('sha256', SECRET).update(payload).digest('base64url');
  const actual = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (actual.length !== expectedBuffer.length) return null;

  try {
    if (!timingSafeEqual(actual, expectedBuffer)) return null;
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as SessionUser;
    return parsed;
  } catch {
    return null;
  }
}

export function setSessionCookie(user: SessionUser) {
  cookies().set(SESSION_COOKIE, signSessionToken(user), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24,
  });
}

export function clearSessionCookie() {
  cookies().set(SESSION_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
}

export function getCurrentUser(): SessionUser | null {
  const token = cookies().get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}
