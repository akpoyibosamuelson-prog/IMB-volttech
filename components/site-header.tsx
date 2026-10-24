import Link from 'next/link';
import { Menu, MessageCircle, Phone } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Bookings', href: '/bookings' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Admin', href: '/admin' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-volt-500 to-volt-700 font-black text-white">
            IMB
          </div>
          <div>
            <p className="text-lg font-black tracking-tight text-slate-900">IMB tech</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Electrical Services</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="btn-secondary">
            Login
          </Link>
          <Link href="/register" className="btn-primary">
            Sign up
          </Link>
        </div>

        <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 md:hidden" aria-label="Open menu">
          <Menu size={18} />
        </button>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-3 md:hidden">
        <a href="tel:+2348000000000" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
          <Phone size={14} /> +234 800 000 0000
        </a>
        <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white">
          <MessageCircle size={14} /> WhatsApp
        </a>
      </div>
    </header>
  );
}
