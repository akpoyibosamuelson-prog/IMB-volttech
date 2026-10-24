import type { ProductItem } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

export function ProductCard({ product }: { product: ProductItem }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-amber-100 text-3xl font-black text-amber-700">
        {product.name.slice(0, 2).toUpperCase()}
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{product.category}</span>
        <span className="text-xs font-medium text-emerald-600">{product.stock > 0 ? 'Available' : 'Low stock'}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{product.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{product.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
        <div>
          <div className="text-xl font-black text-slate-900">{formatCurrency(product.retailPrice ?? 0)}</div>
          <div className="text-xs text-slate-500">Wholesale: {formatCurrency(product.wholesalePrice ?? 0)}</div>
        </div>
        <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Add</button>
      </div>
    </div>
  );
}
