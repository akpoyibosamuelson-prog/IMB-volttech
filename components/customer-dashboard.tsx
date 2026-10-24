"use client";

import { useEffect, useState } from 'react';
import { ArrowUpRight, Bell, BriefcaseBusiness, DollarSign, PackageCheck, ShoppingBag, TrendingUp } from 'lucide-react';

const statCards = [
  { label: 'Revenue', value: '₦2.8M', change: '+18%', icon: DollarSign },
  { label: 'Bookings', value: '148', change: '+12%', icon: BriefcaseBusiness },
  { label: 'Low stock', value: '6 items', change: 'Needs action', icon: PackageCheck },
  { label: 'Orders', value: '42', change: '+9%', icon: ShoppingBag },
];

const recentBookings = [
  { ref: 'VB-4XZJQ7', service: 'House wiring', customer: 'Amina T', status: 'Confirmed', amount: '₦58,000' },
  { ref: 'VB-6KLM09', service: 'Generator maintenance', customer: 'Tunde A', status: 'Assigned', amount: '₦72,500' },
  { ref: 'VB-9SOD22', service: 'Fault diagnosis', customer: 'Fola O', status: 'In progress', amount: '₦34,000' },
];

export function CustomerDashboard() {
  const [bookings, setBookings] = useState<Array<Record<string, string>>>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('voltbiz-bookings') ?? '[]');
    setBookings(data);
  }, []);

  return (
    <div className="container-shell py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="badge">Customer dashboard</span>
          <h2 className="mt-4 text-3xl font-black text-slate-900">Your service and order activity</h2>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
          <Bell size={14} /> 3 new updates
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map(({ label, value, change, icon: Icon }) => (
          <div key={label} className="card-surface">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <div className="rounded-xl bg-volt-50 p-2 text-volt-700"><Icon size={18} /></div>
            </div>
            <p className="text-3xl font-black text-slate-900">{value}</p>
            <p className="mt-2 text-sm font-medium text-emerald-600">{change}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="card-surface">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Service bookings</h3>
            <button className="text-sm font-semibold text-volt-700">View history</button>
          </div>

          <div className="space-y-4">
            {bookings.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-6 text-sm text-slate-500">No bookings have been created yet.</div>
            ) : (
              bookings.map((booking) => (
                <div key={String(booking.reference)} className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-bold text-slate-900">{booking.service}</p>
                    <p className="text-sm text-slate-500">{String(booking.reference)} · {String(booking.address)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">{String(booking.status)}</span>
                    <span className="text-sm font-semibold text-slate-700">{String(booking.preferredDate)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="space-y-5">
          <div className="card-surface">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Recent invoices</p>
            <div className="mt-4 space-y-3">
              {[
                ['INV-1024', '₦68,000', 'Paid'],
                ['INV-1023', '₦32,750', 'Pending'],
              ].map(([number, amount, state]) => (
                <div key={number} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
                  <div>
                    <p className="font-semibold text-slate-900">{number}</p>
                    <p className="text-xs text-slate-500">{state}</p>
                  </div>
                  <p className="font-bold text-slate-900">{amount}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-surface">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">Support</p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>Need help with an appointment? Contact the team through WhatsApp or the main support line.</p>
              <p className="font-semibold text-slate-900">+234 800 000 0000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
