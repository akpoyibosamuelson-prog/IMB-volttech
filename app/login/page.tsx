export const metadata = {
  title: 'Login | VoltBiz',
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-180px)] max-w-6xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft lg:grid-cols-2">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-800 p-8 text-white">
          <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">VoltBiz</div>
          <h1 className="mt-6 text-4xl font-black">Welcome back</h1>
          <p className="mt-4 text-slate-200">Sign in to manage services, inventory, appointments, orders, and job updates.</p>
          <div className="mt-10 space-y-4 text-sm text-slate-200">
            <div>• Access your customer dashboard</div>
            <div>• Review quotations and order history</div>
            <div>• Track assignments and delivery status</div>
          </div>
        </div>

        <div className="p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900">Sign in</h2>
          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
              <input type="email" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <input type="password" className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600"><input type="checkbox" /> Remember me</label>
              <a href="/register" className="text-blue-700 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">Sign in</button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-600">Don’t have an account? <a href="/register" className="font-semibold text-blue-700">Create one</a></div>
        </div>
      </div>
    </main>
  );
}
