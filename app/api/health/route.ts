import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'VoltBiz API',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
}
