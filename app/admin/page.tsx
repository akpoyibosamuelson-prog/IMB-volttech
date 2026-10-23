import { Activity, ArrowUpRight, Wallet, UserCheck, PackageCheck, BriefcaseBusiness } from 'lucide-react';

const cards = [
  { label: 'Revenue', value: '₦18.6M', change: '+12.4%', icon: Wallet },
  { label: 'Bookings', value: '96', change: '+8.0%', icon: Activity },
  { label: 'Jobs active', value: '24', change: '+3 jobs', icon: BriefcaseBusiness },
  { label: 'Vendor orders', value: '43', change: '12 pending', icon: PackageCheck },
];

export default function AdminDashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Administration</div>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Business owner dashboard</h1>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-semibold text-white">
          Create report <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, change, icon: Icon }) => (
          <div key={label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <div className="rounded-2xl bg-blue-100 p-2 text-blue-700"><Icon className="h-5 w-5" /></div>
            </div>
            <div className="mt-5 text-3xl font-black text-slate-900">{value}</div>
            <div className="mt-2 text-sm font-medium text-emerald-600">{change}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Weekly performance</h2>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">This month</span>
          </div>
          <div className="mt-8 flex h-56 items-end gap-3">
            {[42, 58, 40, 74, 68, 82, 96].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-blue-600 to-blue-300" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Manager actions</h2>
          <div className="mt-6 space-y-3">
            {['Review pending quotations', 'Approve vendor applications', 'Dispatch urgent repair jobs', 'Check low-stock alerts'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                <span>{item}</span>
                <UserCheck className="h-4 w-4 text-blue-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
