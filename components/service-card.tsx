import type { ServiceItem } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-4 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-slate-100 text-3xl font-black text-blue-700">
        {service.name.slice(0, 2).toUpperCase()}
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">{service.category}</span>
        <span className="text-xs font-medium text-emerald-600">{service.availability}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold text-slate-900">{service.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{service.description}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
        <div>
          <div className="text-xl font-black text-slate-900">{formatCurrency(service.price)}</div>
          <div className="text-xs text-slate-500">{service.duration}</div>
        </div>
        <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Book now</button>
      </div>
    </div>
  );
}
