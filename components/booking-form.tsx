"use client";

import { useEffect, useMemo, useState } from 'react';
import { CalendarDays, Camera, CheckCircle2, Clock3, MapPin, ShieldCheck, UploadCloud } from 'lucide-react';
import { demoServices } from '@/lib/demo-data';

const initialValues = {
  service: demoServices[0].name,
  reason: '',
  faultDescription: '',
  address: '',
  preferredDate: '',
  preferredTime: '',
};

export function BookingForm() {
  const [form, setForm] = useState(initialValues);
  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectedService = useMemo(
    () => demoServices.find((service) => service.name === form.service) ?? demoServices[0],
    [form.service],
  );

  const handleChange = (field: keyof typeof initialValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const required = [form.reason, form.faultDescription, form.address, form.preferredDate, form.preferredTime];

    if (required.some((value) => !value.trim())) {
      setError('Please complete all booking details before submitting.');
      return;
    }

    const reference = `VB-${Math.random().toString(36).slice(2, 9).toUpperCase()}`;
    setBookingRef(reference);
    setError(null);

    const saved = JSON.parse(localStorage.getItem('voltbiz-bookings') ?? '[]');
    saved.push({
      id: crypto.randomUUID(),
      service: form.service,
      reason: form.reason,
      faultDescription: form.faultDescription,
      address: form.address,
      preferredDate: form.preferredDate,
      preferredTime: form.preferredTime,
      reference,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('voltbiz-bookings', JSON.stringify(saved));
  };

  return (
    <div className="container-shell py-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card-surface">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-volt-50 p-3 text-volt-700"><CalendarDays size={24} /></div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Service booking</p>
              <h2 className="text-3xl font-black text-slate-900">Schedule your electrical request</h2>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Select service</label>
              <select value={form.service} onChange={(e) => handleChange('service', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-volt-500 focus:outline-none">
                {demoServices.map((service) => (
                  <option key={service.name} value={service.name}>{service.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Reason for appointment</label>
              <input value={form.reason} onChange={(e) => handleChange('reason', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-volt-500 focus:outline-none" placeholder="e.g. recurring power outage in kitchen" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Describe the fault or work required</label>
              <textarea value={form.faultDescription} onChange={(e) => handleChange('faultDescription', e.target.value)} rows={4} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-volt-500 focus:outline-none" placeholder="Tell us what is faulty or what kind of work is needed." />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Upload images</label>
              <div className="flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-slate-500">
                <div className="text-center">
                  <UploadCloud className="mx-auto mb-2" size={28} />
                  <p className="text-sm font-medium">Upload photos of the faulty item or installation</p>
                  <p className="text-xs text-slate-400">PNG, JPG, and JPEG up to 10MB</p>
                </div>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Service address</label>
              <input value={form.address} onChange={(e) => handleChange('address', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-volt-500 focus:outline-none" placeholder="House number / street / area" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Preferred date</label>
                <input type="date" value={form.preferredDate} onChange={(e) => handleChange('preferredDate', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-volt-500 focus:outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Preferred time</label>
                <input type="time" value={form.preferredTime} onChange={(e) => handleChange('preferredTime', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 focus:border-volt-500 focus:outline-none" />
              </div>
            </div>

            {error && <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>}

            <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div>
                <p className="text-sm text-slate-500">Estimated fee</p>
                <p className="text-2xl font-black text-slate-900">{selectedService.price}</p>
              </div>
              <button type="submit" className="btn-primary">Submit booking</button>
            </div>
          </form>
        </div>

        <aside className="space-y-5">
          <div className="card-surface">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Booking summary</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="rounded-xl bg-volt-100 p-2 text-volt-700"><ShieldCheck size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Service</p>
                  <p className="font-semibold text-slate-900">{selectedService.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="rounded-xl bg-volt-100 p-2 text-volt-700"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900">{form.address || 'Awaiting service address'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                <div className="rounded-xl bg-volt-100 p-2 text-volt-700"><Clock3 size={20} /></div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Preferred time</p>
                  <p className="font-semibold text-slate-900">{form.preferredDate || 'TBD'} · {form.preferredTime || 'TBD'}</p>
                </div>
              </div>
            </div>
          </div>

          {bookingRef ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">Booking confirmed</p>
              <h3 className="mt-3 text-3xl font-black text-emerald-900">{bookingRef}</h3>
              <p className="mt-2 text-sm text-emerald-800">Your service request has been received and is awaiting confirmation from our team.</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="mb-3 flex items-center gap-2 text-slate-700"><Camera size={18} /> <span className="font-semibold">Image-based material requests</span></div>
              <p className="text-sm leading-6 text-slate-600">Upload a photo of a component, switch, breaker, cable, or fitting and our team can recommend the right stock and quote.</p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
