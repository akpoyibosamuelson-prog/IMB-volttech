import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-black text-slate-900">Create your account</h1>
          <p className="mt-2 text-sm text-slate-500">Select your role and start managing electrical services</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Full name</label>
            <input type="text" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="John Doe" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
            <input type="email" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Role</label>
            <select className="w-full rounded-xl border border-slate-200 px-4 py-3">
              <option>Customer</option>
              <option>Electrician</option>
              <option>Wholesaler</option>
              <option>Retailer</option>
              <option>Business owner</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
            <input type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Create a strong password" />
          </div>
          <button type="button" className="btn-primary w-full">Create account</button>
        </form>

        <div className="mt-5 text-center text-sm">
          <Link href="/login" className="text-volt-700">Already have an account? Sign in</Link>
        </div>
      </div>
    </div>
  );
}
