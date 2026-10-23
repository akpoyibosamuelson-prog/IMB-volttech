import Link from 'next/link';
import { ShoppingCart, UserRound } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-volt-100 text-volt-700"><UserRound size={24} /></div>
          <h1 className="text-3xl font-black text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to access your dashboard</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
            <input type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="••••••••" />
          </div>
          <button type="button" className="btn-primary w-full">Login</button>
        </form>

        <div className="mt-5 flex items-center justify-between text-sm">
          <Link href="/register" className="text-volt-700">Create account</Link>
          <Link href="/" className="text-slate-600">Back home</Link>
        </div>
      </div>
    </div>
  );
}
