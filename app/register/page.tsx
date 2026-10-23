"use client";

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPageClient() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('CUSTOMER');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
    });

    const result = await response.json();
    setLoading(false);

    if (!response.ok) {
      setError(result.error || 'Could not create account.');
      return;
    }

    router.push('/dashboard');
    router.refresh();
  }

  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black text-slate-900">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">Select your role and start using VoltBiz</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
            <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="John Doe" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Role</label>
            <select value={role} onChange={(event) => setRole(event.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-3">
              <option value="CUSTOMER">Customer</option>
              <option value="BUSINESS_OWNER">Business owner</option>
              <option value="STAFF">Electrician / staff</option>
              <option value="WHOLESALER">Wholesaler</option>
              <option value="RETAILER">Retailer</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Create a strong password" />
          </div>
          {error ? <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">{error}</div> : null}
          <button type="submit" disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <div className="mt-5 text-center text-sm">
          <a href="/login" className="text-volt-700">Already have an account? Sign in</a>
        </div>
      </div>
    </div>
  );
}
