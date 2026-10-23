import { ArrowRight, BellRing, BriefcaseBusiness, CalendarClock, CreditCard, PackageCheck, UserCircle2 } from 'lucide-react';

const summary = [
  { label: 'Upcoming bookings', value: '8', icon: CalendarClock },
  { label: 'Active jobs', value: '4', icon: BriefcaseBusiness },
  { label: 'Pending payments', value: '₦620k', icon: CreditCard },
  { label: 'Material requests', value: '12', icon: PackageCheck },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Customer portal</div>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Your dashboard</h1>
        </div>
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
          <BellRing className="h-4 w-4 text-slate-600" />
          <span className="text-sm text-slate-700">2 new notifications</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {summary.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{label}</span>
              <div className="rounded-2xl bg-blue-100 p-2 text-blue-700"><Icon className="h-5 w-5" /></div>
            </div>
            <div className="mt-5 text-3xl font-black text-slate-900">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">Recent activity</h2>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">View all <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="mt-6 space-y-4">
            {[
              'Booking VR-2048 confirmed for 12th October at 10:00 AM',
              'Quotation approved for a two-bedroom wiring project',
              'Delivery update: electrical fittings package shipped',
            ].map((event, index) => (
              <div key={index} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="mt-1 rounded-full bg-blue-100 p-2 text-blue-700"><UserCircle2 className="h-4 w-4" /></div>
                <div className="text-slate-700">{event}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Profile snapshot</h2>
          <div className="mt-6 rounded-2xl bg-slate-100 p-4">
            <div className="font-bold text-slate-900">Jane Adele</div>
            <div className="mt-1 text-slate-600">Customer / Homeowner</div>
            <div className="mt-4 text-sm text-slate-700">Lekki Phase 1, Lagos</div>
          </div>
          <button className="mt-6 w-full rounded-full bg-slate-900 px-4 py-3 font-semibold text-white">Manage profile</button>
        </div>
      </div>
    </main>
  );
}
