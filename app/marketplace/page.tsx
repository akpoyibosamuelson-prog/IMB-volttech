'use client';

import { useMemo, useState } from 'react';
import { Search, ShoppingCart, SlidersHorizontal } from 'lucide-react';
import { featuredProducts } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export default function MarketplacePage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(1);

  const categories = ['All', ...new Set(featuredProducts.map((product) => product.category))];

  const filteredProducts = useMemo(() => {
    return featuredProducts.filter((product) => {
      const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [search, selectedCategory]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Marketplace</div>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Electrical materials for homes and businesses</h1>
        </div>
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <ShoppingCart className="h-5 w-5 text-slate-600" />
          <span className="font-medium text-slate-700">Cart {cartCount}</span>
        </div>
      </div>

      <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-lg">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="Search by product name or keyword" />
        </div>

        <div className="flex items-center gap-3">
          <SlidersHorizontal className="h-5 w-5 text-slate-500" />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setSelectedCategory(category)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-blue-100 text-4xl font-black text-blue-700">
              {product.name.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{product.category}</div>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{product.name}</h3>
              </div>
              <div className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">{product.stock > 0 ? 'In stock' : 'Low stock'}</div>
            </div>
            <div className="mt-4 text-sm text-slate-600">{product.description}</div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <div>
                <div className="text-2xl font-black text-slate-900">{formatCurrency(product.retailPrice)}</div>
                <div className="text-xs text-slate-500">Wholesale from {formatCurrency(product.wholesalePrice)}</div>
              </div>
              <button type="button" onClick={() => setCartCount((count) => count + 1)} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
