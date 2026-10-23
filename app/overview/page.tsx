import { SectionHeader } from '@/components/section-header';

export default function OverviewPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader eyebrow="Overview" title="Operational dashboard" subtitle="A summary of bookings, jobs, product flow, and financial health." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"><div className="text-sm text-slate-500">Service revenue</div><div className="mt-4 text-3xl font-black text-slate-900">₦4.2M</div></div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"><div className="text-sm text-slate-500">Material sales</div><div className="mt-4 text-3xl font-black text-slate-900">₦2.7M</div></div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"><div className="text-sm text-slate-500">Net margin</div><div className="mt-4 text-3xl font-black text-slate-900">₦1.6M</div></div>
      </div>
    </main>
  );
}
