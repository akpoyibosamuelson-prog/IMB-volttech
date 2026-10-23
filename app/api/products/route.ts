import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    products: [
      { id: 1, name: 'Cables & Wiring Kit', category: 'Wiring', retailPrice: 26000, wholesalePrice: 18000, stock: 144 },
      { id: 2, name: 'Circuit Breaker', category: 'Protection', retailPrice: 7200, wholesalePrice: 5500, stock: 89 },
      { id: 3, name: 'Smart LED Bulb Pack', category: 'Lighting', retailPrice: 5600, wholesalePrice: 4200, stock: 210 },
      { id: 4, name: 'Socket & Switch Set', category: 'Accessories', retailPrice: 9800, wholesalePrice: 6900, stock: 175 },
    ],
    count: 4,
    message: 'Demo marketplace inventory data',
  });
}

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    return NextResponse.json({
      message: 'Demo product added',
      product: payload,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid product payload' }, { status: 400 });
  }
}
