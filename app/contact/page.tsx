export default function ContactPage() {
  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <span className="badge">Contact</span>
        <h1 className="mt-4 text-3xl font-black text-slate-900">Talk to the VoltBiz support team</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
            <p className="mt-3 text-xl font-bold text-slate-900">+234 800 000 0000</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">WhatsApp</p>
            <p className="mt-3 text-xl font-bold text-slate-900">+234 800 000 0000</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 md:col-span-2">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Address</p>
            <p className="mt-3 text-xl font-bold text-slate-900">Lekki Phase 1, Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}
