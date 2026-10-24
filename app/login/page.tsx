"use client";

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPageClient() {
  const router = useRouter();
  const [email, setEmail] = useState('customer@voltbiz.demo');
  const [password, setPassword] = useState('Customer123!');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(result.error || 'Could not sign in.');
      return;
    }

    router.push('/dashboard');
    router.refresh();
  }

  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-volt-100 text-volt-700">IMB</div>
          <h1 className="text-3xl font-black text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Use the demo credentials to access the dashboard</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="••••••••" />
          </div>
          {error ? <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'Signing in...' : 'Login'}
          </button>
        </form>

        <div className="mt-5 flex items-center justify-between text-sm">
          <a href="/register" className="text-volt-700">Create account</a>
          <a href="/" className="text-slate-600">Back home</a>
        </div>

        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600">
          Demo accounts: admin@voltbiz.demo / Admin123!, owner@voltbiz.demo / Owner123!, customer@voltbiz.demo / Customer123!
        </div>
      </div>
    </div>
  );
}
