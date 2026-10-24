import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/bookings/:path*'],
};
