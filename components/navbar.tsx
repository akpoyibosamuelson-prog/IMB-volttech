import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/booking', label: 'Book a service' },
  { href: '/marketplace', label: 'Marketplace' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-soft">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">VoltBiz</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Electrical services</div>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Log in</Link>
          <Link href="/register" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Sign up</Link>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-full border border-slate-200 p-2 md:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-3">
              <Link href="/login" className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700">Log in</Link>
              <Link href="/register" className="flex-1 rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white">Sign up</Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
