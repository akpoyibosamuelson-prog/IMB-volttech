import { createHash, timingSafeEqual } from 'node:crypto';

export type AppRole =
  | 'SUPER_ADMIN'
  | 'BUSINESS_OWNER'
  | 'STAFF'
  | 'WHOLESALER'
  | 'RETAILER'
  | 'CUSTOMER';

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: AppRole;
};

const SESSION_SECRET = process.env.NEXTAUTH_SECRET || 'voltbiz-demo-secret-key';

export function hashPassword(password: string) {
  return createHash('sha256').update(password + SESSION_SECRET).digest('hex');
}

export function verifyPassword(password: string, expectedHash: string) {
  const hash = hashPassword(password);
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(expectedHash, 'hex');
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function encodeSessionUser(user: SessionUser) {
  const payload = Buffer.from(JSON.stringify(user)).toString('base64url');
  const signature = createHash('sha256').update(`${payload}.${SESSION_SECRET}`).digest('hex');
  return `${payload}.${signature}`;
}

export function decodeSessionUser(token?: string | null): SessionUser | null {
  if (!token) return null;
  const [payload, signature] = token.split('.');
  if (!payload || !signature) return null;
  const expected = createHash('sha256').update(`${payload}.${SESSION_SECRET}`).digest('hex');
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as SessionUser;
    return parsed;
  } catch {
    return null;
  }
}

export const isAllowedRole = (role: AppRole, allowedRoles: AppRole[]) => allowedRoles.includes(role);
