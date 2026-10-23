import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { decodeSessionUser } from '@/lib/auth';

export function middleware(request: NextRequest) {
  const authPaths = ['/admin', '/dashboard', '/bookings'];
  const pathname = request.nextUrl.pathname;
  const isProtected = authPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  if (!isProtected) {
    return NextResponse.next();
  }

  const token = request.cookies.get('voltbiz_session')?.value;
  const user = decodeSessionUser(token);
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname.startsWith('/admin') && user.role !== 'SUPER_ADMIN' && user.role !== 'BUSINESS_OWNER') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/bookings/:path*'],
};
