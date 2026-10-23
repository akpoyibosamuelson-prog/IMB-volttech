import { ArrowRight, BadgeCheck, Building2, CheckCircle2, CircleDollarSign, CreditCard, ShieldCheck, Truck, Wrench } from 'lucide-react';
import Link from 'next/link';
import { services, featuredProducts, faqs, testimonials } from '@/lib/data';
import { ServiceCard } from '@/components/service-card';
import { ProductCard } from '@/components/product-card';
import { SectionHeader } from '@/components/section-header';

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
                <BadgeCheck className="h-4 w-4" />
                Trusted electrical services and materials partner
              </div>
              <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl">
                Smarter electrical operations for customers, teams, and suppliers.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-200">
                VoltBiz manages bookings, quotations, inventory, vendor supply chains, job tracking, and customer payments in one place.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/booking" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-300">
                  Book a service
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/marketplace" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Shop materials
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-200">
                <div>
                  <div className="text-2xl font-bold text-white">2,400+</div>
                  <div>Jobs completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98.6%</div>
                  <div>Customer satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div>Support response</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-600/20 p-4">
                  <Wrench className="h-8 w-8 text-blue-200" />
                  <div className="mt-4 text-sm text-blue-100">Service bookings</div>
                  <div className="mt-1 text-3xl font-bold text-white">320</div>
                </div>
                <div className="rounded-2xl bg-amber-500/20 p-4">
                  <CircleDollarSign className="h-8 w-8 text-amber-200" />
                  <div className="mt-4 text-sm text-amber-100">Monthly revenue</div>
                  <div className="mt-1 text-3xl font-bold text-white">₦8.4M</div>
                </div>
                <div className="rounded-2xl bg-green-500/15 p-4 sm:col-span-2">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm text-green-100">Inventory health</div>
                      <div className="mt-1 text-2xl font-bold text-white">94% stocked</div>
                    </div>
                    <CheckCircle2 className="h-8 w-8 text-green-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Services" title="Electrical services built for reliability and speed" subtitle="From emergency callouts to planned installations, every service is configured for pricing, scheduling, and fulfilment workflows." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Marketplace" title="Electrical materials from trusted vendors" subtitle="Browse materials by category, compare rate tiers, and place orders for delivery or collection." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="How it works" title="Simple and transparent from first booking to final payment" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: '1. Book a service', description: 'Choose an electrical service, attach images, and submit your service address and schedule.', icon: Wrench },
            { title: '2. Receive quotation', description: 'The business reviews the request, confirms eligibility, and sends a quote or estimate.', icon: CreditCard },
            { title: '3. Track progress', description: 'Follow your appointment, job progress, materials used, and payment status all in one dashboard.', icon: Truck },
          ].map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-2xl bg-blue-100 p-3 text-blue-700"><Icon className="h-6 w-6" /></div>
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why VoltBiz" title="Built for business growth and operational control" subtitle="No more siloed spreadsheets, separate supplier conversations, or inconsistent job paperwork." light />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: 'Secure role access', description: 'Protect critical business data with role-based permissions.', icon: ShieldCheck },
              { title: 'Inventory visibility', description: 'Monitor stock, stock movements, and low-stock alerts in real time.', icon: Building2 },
              { title: 'Pricing control', description: 'Manage wholesale, retail, and service-specific pricing rules.', icon: CircleDollarSign },
              { title: 'Customer trust', description: 'Keep booking, payment, and job progress visible to the right users.', icon: CheckCircle2 },
            ].map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-blue-700/30 p-3 text-blue-200"><Icon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Testimonials" title="What clients say" subtitle="Trusted by homeowners, property managers, and commercial businesses." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-4">
                <div className="font-bold text-slate-900">{item.author}</div>
                <div className="text-sm text-slate-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Frequently asked questions" title="Everything you need to know before getting started" />
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <div className="font-semibold text-slate-900">{faq.question}</div>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-soft md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.24em] text-blue-100">Need an electrician now?</div>
              <h2 className="mt-3 text-3xl font-black">Book a reliable technician or purchase materials today.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/booking" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-blue-700">Request booking</Link>
              <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white">WhatsApp us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Contact</div>
            <h3 className="mt-2 text-3xl font-black text-slate-900">Talk to the VoltBiz team</h3>
            <p className="mt-4 text-slate-600">For support, quotations, supply orders, or urgent request coordination.</p>
            <div className="mt-6 space-y-3 text-slate-700">
              <div>Phone: +234 800 000 0000</div>
              <div>Email: hello@voltbiz.ng</div>
              <div>Address: 24 Powerline Road, Lekki Phase 1, Lagos</div>
            </div>
          </div>
          <div className="rounded-3xl bg-slate-100 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Business hours</div>
            <div className="mt-5 space-y-3 text-slate-700">
              <div className="flex justify-between border-b border-slate-200 pb-2"><span>Monday - Friday</span><span>8:00 AM - 6:00 PM</span></div>
              <div className="flex justify-between border-b border-slate-200 pb-2"><span>Saturday</span><span>9:00 AM - 4:00 PM</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>Emergency only</span></div>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 font-semibold text-white">
              <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
              WhatsApp availability: Online
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
