import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: 'IMB tech',
    environment: process.env.NODE_ENV || 'development',
    status: 'demo-mode',
  });
}
