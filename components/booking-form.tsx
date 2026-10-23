'use client';

import { FormEvent, useState } from 'react';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      serviceName: form.get('serviceName'),
      customerName: form.get('customerName'),
      address: form.get('address'),
      preferredDate: form.get('preferredDate'),
      description: form.get('description'),
    };

    try {
      const response = await fetch('/api/demo-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      setSubmitted(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <form onSubmit={handleSubmit} className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Service</label>
            <select name="serviceName" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white">
              <option>Electrical repairs</option>
              <option>House wiring</option>
              <option>Generator maintenance</option>
              <option>Lighting installation</option>
              <option>Emergency electrical request</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Customer name</label>
            <input name="customerName" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="Your name" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Service address</label>
            <input name="address" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="Street / apartment / estate" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Preferred date</label>
            <input type="date" name="preferredDate" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Preferred time</label>
            <input type="time" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Describe the issue</label>
            <textarea name="description" rows={5} className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="Explain the fault, required work, or inspection need." />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Upload images</label>
            <input type="file" multiple className="block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600" />
          </div>
        </div>

        <button type="submit" className="mt-8 w-full rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Submit booking request</button>

        {submitted ? (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            Booking request created successfully. Your reference will be issued after review.
          </div>
        ) : null}
      </form>

      <aside className="rounded-[32px] border border-slate-200 bg-slate-900 p-6 text-white shadow-soft">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">Booking summary</div>
        <div className="mt-6 space-y-5">
          <div>
            <div className="text-sm text-slate-300">Estimated service fee</div>
            <div className="mt-2 text-4xl font-black">₦25,000</div>
          </div>
          <div className="rounded-2xl bg-slate-800 p-4">
            <div className="text-sm text-slate-300">Included</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>• Inspection and assessment</li>
              <li>• Fault diagnosis</li>
              <li>• Scheduling confirmation</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-blue-600/20 p-4 text-sm text-blue-100">Business operating hours: Mon-Sat, 8:00 AM - 6:00 PM.</div>
        </div>
      </aside>
    </div>
  );
}
