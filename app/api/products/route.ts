import { NextResponse } from 'next/server';
import { featuredProducts } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    products: featuredProducts,
    count: featuredProducts.length,
    message: 'Demo marketplace inventory data',
  });
}
