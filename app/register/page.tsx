export const metadata = {
  title: 'Register | VoltBiz',
};

export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-180px)] max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
        <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 p-8 text-white">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-100">VoltBiz</div>
          <h1 className="mt-6 text-4xl font-black">Create your account</h1>
          <p className="mt-4 text-amber-50">Register as a customer, contractor, wholesaler, or retailer to access the tools you need.</p>
          <div className="mt-10 space-y-4 text-sm text-amber-50">
            <div>• Customer bookings and service requests</div>
            <div>• Marketplace purchasing and order tracking</div>
            <div>• Vendor and staff operational dashboards</div>
          </div>
        </div>
        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">Register</h2>
          <form className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                <input type="text" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="Jane" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                <input type="text" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="Adele" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Business or account type</label>
              <select className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white">
                <option>Customer</option>
                <option>Electrical business owner</option>
                <option>Electrician / Staff</option>
                <option>Wholesaler</option>
                <option>Retailer</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="Create a strong password" />
            </div>
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">Create account</button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-600">Already registered? <a href="/login" className="font-semibold text-blue-700">Log in</a></div>
        </div>
      </div>
    </main>
  );
}
