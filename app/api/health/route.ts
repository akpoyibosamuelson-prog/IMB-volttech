import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: 'VoltBiz',
    environment: process.env.NODE_ENV || 'development',
    status: 'demo-mode',
  });
}
