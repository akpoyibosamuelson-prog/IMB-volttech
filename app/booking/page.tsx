import { BookingForm } from '@/components/booking-form';

export default function BookingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Service booking</div>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Request an electrical service</h1>
        <p className="mt-4 text-lg text-slate-600">Tell us what you need, upload images, and set your preferred date and time.</p>
      </div>
      <BookingForm />
    </main>
  );
}
