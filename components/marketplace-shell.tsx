"use client";

import { useEffect, useMemo, useState } from 'react';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { demoProducts } from '@/lib/demo-data';

export function MarketplaceShell() {
  const [items, setItems] = useState(demoProducts);
  const [cart, setCart] = useState<Array<{ id: string; name: string; price: number; quantity: number }>>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('voltbiz-cart') ?? '[]');
    setCart(stored);
  }, []);

  const addToCart = (product: (typeof demoProducts)[number]) => {
    const updated = [...cart];
    const existing = updated.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      updated.push({ id: product.id, name: product.name, price: product.priceNumber, quantity: 1 });
    }
    setCart(updated);
    localStorage.setItem('voltbiz-cart', JSON.stringify(updated));
  };

  const updateQty = (id: string, amount: number) => {
    const updated = cart
      .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item))
      .filter((item) => item.quantity > 0);
    setCart(updated);
    localStorage.setItem('voltbiz-cart', JSON.stringify(updated));
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart],
  );

  return (
    <div className="container-shell py-16">
      <div className="mb-8 flex items-end justify-between gap-3">
        <div>
          <span className="badge">Marketplace</span>
          <h2 className="mt-4 text-3xl font-black text-slate-900">Wholesale and retail electrical materials</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700">
          <ShoppingCart size={16} /> {cart.reduce((count, item) => count + item.quantity, 0)} items
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((product) => (
            <div key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-4xl font-black text-slate-500">
                {product.icon}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">{product.category}</span>
                  <span className="text-xs font-semibold text-emerald-600">{product.stock}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{product.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">From</p>
                    <p className="text-xl font-black text-slate-900">₦{product.priceNumber.toLocaleString()}</p>
                  </div>
                  <button onClick={() => addToCart(product)} className="btn-primary">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Cart</h3>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">{cart.length} lines</span>
          </div>

          <div className="space-y-4">
            {cart.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">Your shopping cart is empty.</div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-slate-800">{item.name}</p>
                    <button onClick={() => updateQty(item.id, -item.quantity)} className="text-slate-500"><Trash2 size={15} /></button>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1">
                      <button onClick={() => updateQty(item.id, -1)} className="rounded-full bg-slate-100 p-1"><Minus size={12} /></button>
                      <span className="min-w-6 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="rounded-full bg-slate-100 p-1"><Plus size={12} /></button>
                    </div>
                    <p className="font-bold text-slate-900">₦{(item.quantity * item.price).toLocaleString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>Subtotal</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
              <span>Delivery</span>
              <span>₦{cart.length ? 1200 : 0}</span>
            </div>
            <div className="mt-4 flex items-center justify-between text-xl font-black text-slate-900">
              <span>Total</span>
              <span>₦{(total + (cart.length ? 1200 : 0)).toLocaleString()}</span>
            </div>
            <button className="mt-6 w-full btn-primary">Proceed to checkout</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
