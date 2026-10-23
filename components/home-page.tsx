"use client";

import Link from 'next/link';
import { ArrowRight, BadgeCheck, Bolt, Building2, Car, CheckCircle2, Clock3, Download, Gauge, Home, MessageSquareQuote, ShieldCheck, ShoppingCart, Star, Tools, Truck, Wrench } from 'lucide-react';
import { demoServices, demoProducts, faqs, testimonials } from '@/lib/demo-data';

export function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-volt-900 text-white">
        <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <span className="badge border-volt-500 bg-volt-500/10 text-volt-100">Trusted electrical business platform</span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight md:text-5xl">
              Smart electrical services and materials for homes, businesses, and contractors.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200">
              VoltBiz helps clients book repairs, manage jobs, buy materials, track stock, and pay securely from one connected system.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/bookings" className="btn-primary bg-volt-500 hover:bg-volt-400">Book a service</Link>
              <Link href="/marketplace" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20">Shop materials</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Same-day support</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Real-time stock visibility</div>
              <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400"/> Secure payments</div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur-sm">
            <div className="rounded-[28px] bg-white p-5 text-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">Today</p>
                  <p className="text-xl font-bold">Service overview</p>
                </div>
                <div className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Live</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Pending bookings</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">14</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Open jobs</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">8</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Inventory alerts</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">6</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Mtd revenue</p>
                  <p className="mt-2 text-3xl font-bold text-slate-900">₦2.8M</p>
                </div>
              </div>
              <div className="mt-4 rounded-2xl bg-volt-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Next appointment</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">House wiring review</p>
                  </div>
                  <div className="rounded-full bg-volt-600 px-3 py-1 text-xs font-semibold text-white">10:30 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container-shell">
          <div className="mb-10 flex items-end justify-between gap-3">
            <div>
              <span className="badge">Our services</span>
              <h2 className="section-title mt-4">Electrical services designed around real business needs</h2>
            </div>
            <Link href="/bookings" className="hidden items-center gap-2 text-sm font-semibold text-volt-700 md:inline-flex">
              Book now <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {demoServices.map((service) => (
              <div key={service.name} className="card-surface">
                <div className="mb-4 inline-flex rounded-xl bg-volt-50 p-3 text-volt-700">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-sm font-medium text-slate-500">From</span>
                  <span className="text-lg font-bold text-slate-900">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="badge">Materials marketplace</span>
              <h2 className="section-title mt-4">Quality electrical materials for contractors and homeowners</h2>
            </div>
            <Link href="/marketplace" className="btn-primary">Browse marketplace</Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {demoProducts.map((product) => (
              <div key={product.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-4xl font-black text-slate-500">
                  {product.icon}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      {product.category}
                    </span>
                    <span className="text-sm font-semibold text-emerald-600">{product.stock}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{product.name}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500">Retail</p>
                      <p className="text-xl font-bold text-slate-900">{product.price}</p>
                    </div>
                    <button className="rounded-full bg-volt-600 px-4 py-2 text-sm font-semibold text-white">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="text-center">
            <span className="badge">How it works</span>
            <h2 className="section-title mt-4">A complete workflow from request to completion</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              ['1', 'Request service', 'Select the service, explain the issue, and upload photos.'],
              ['2', 'Get quote', 'Receive pricing, inspection requirements, and material suggestions.'],
              ['3', 'Approve & track', 'Confirm the appointment and monitor job progress in real time.'],
              ['4', 'Complete & pay', 'Close out the job, confirm completion, and receive invoices.'],
            ].map(([number, title, copy]) => (
              <div key={number} className="card-surface text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-volt-100 text-lg font-black text-volt-700">{number}</div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container-shell">
          <div className="text-center">
            <span className="badge border-volt-500 bg-volt-500/10 text-volt-100">Why customers choose VoltBiz</span>
            <h2 className="section-title mt-4 text-white">Everything your electrical business needs in one platform</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              [<ShieldCheck key="shield" className="text-volt-300" />, 'Secure records', 'Protected customer, supplier, and payment data.'],
              [<Truck key="truck" className="text-volt-300" />, 'Efficient delivery', 'Track orders, materials, and job fulfilment.'],
              [<Building2 key="business" className="text-volt-300" />, 'Business operations', 'Manage services, staff, inventory, and financial reporting.'],
              [<Gauge key="gauge" className="text-volt-300" />, 'Operational visibility', 'See live bookings, jobs, and outstanding balances.'],
            ].map(([icon, title, copy]) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-800 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-volt-500/10 p-3">{icon}</div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <div className="mb-10 text-center">
            <span className="badge">Testimonials</span>
            <h2 className="section-title mt-4">Trusted by customers and businesses</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="card-surface">
                <div className="mb-4 flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, index) => <Star key={index} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm leading-7 text-slate-600">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="container-shell">
          <div className="text-center">
            <span className="badge">FAQ</span>
            <h2 className="section-title mt-4">Frequently asked questions</h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">{item.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell rounded-[32px] bg-gradient-to-r from-volt-600 to-volt-700 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="badge border-white/20 bg-white/10 text-white">Ready to get started?</span>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">Need a fast, reliable electrical partner?</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/bookings" className="btn-primary bg-white text-volt-700 hover:bg-slate-100">Book a service</Link>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
