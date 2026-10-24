"use client";

import { Activity, AlertTriangle, CreditCard, NotebookPen, Package, PackageCheck, ReceiptText, Users } from 'lucide-react';

const cards = [
  { label: 'Revenue', value: '₦4.6M', icon: CreditCard },
  { label: 'Expenses', value: '₦1.9M', icon: ReceiptText },
  { label: 'Inventory', value: '1,280', icon: Package },
  { label: 'Customers', value: '542', icon: Users },
];

const tableRows = [
  ['VB-4XZJQ7', 'House wiring', 'Amina T', 'Confirmed', '₦58,000'],
  ['VB-6KLM09', 'Generator maintenance', 'Tunde A', 'Assigned', '₦72,500'],
  ['VB-9SOD22', 'Fault diagnosis', 'Fola O', 'In progress', '₦34,000'],
];

export function AdminDashboard() {
  return (
    <div className="container-shell py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="badge">Business owner dashboard</span>
          <h2 className="mt-4 text-3xl font-black text-slate-900">Operations and financial overview</h2>
        </div>
        <button className="btn-primary">New report</button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="card-surface">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <div className="rounded-xl bg-volt-50 p-2 text-volt-700"><Icon size={18} /></div>
            </div>
            <p className="text-3xl font-black text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="card-surface">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Recent bookings</h3>
            <button className="text-sm font-semibold text-volt-700">Export</button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Ref</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Customer</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([ref, service, customer, status, amount]) => (
                  <tr key={ref} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{ref}</td>
                    <td className="px-4 py-3 text-slate-700">{service}</td>
                    <td className="px-4 py-3 text-slate-700">{customer}</td>
                    <td className="px-4 py-3"><span className="rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-700">{status}</span></td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-5">
          <div className="card-surface">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="text-amber-500" size={18} />
              <h3 className="text-lg font-bold text-slate-900">Low stock alerts</h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>4 core cable – 12 rolls remaining</li>
              <li>MCB breakers – 6 units remaining</li>
              <li>Socket outlets – 9 units remaining</li>
            </ul>
          </div>

          <div className="card-surface">
            <div className="mb-4 flex items-center gap-2">
              <NotebookPen className="text-volt-700" size={18} />
              <h3 className="text-lg font-bold text-slate-900">Quick actions</h3>
            </div>
            <div className="space-y-3 text-sm">
              <button className="w-full rounded-xl bg-slate-100 py-3 font-semibold text-slate-800">Manage services</button>
              <button className="w-full rounded-xl bg-slate-100 py-3 font-semibold text-slate-800">Review stock</button>
              <button className="w-full rounded-xl bg-slate-100 py-3 font-semibold text-slate-800">Approve vendor app</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
