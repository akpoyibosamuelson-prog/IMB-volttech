import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="text-lg font-black text-white">IMB tech</div>
          <p className="mt-3 text-sm text-slate-400">Electrical services, inventory, and material ordering built for modern businesses in Nigeria.</p>
        </div>
        <div>
          <div className="font-bold text-white">Company</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/booking">Book a service</Link></li>
            <li><Link href="/marketplace">Marketplace</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white">Support</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://wa.me/2348000000000">WhatsApp</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-white">Legal</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Privacy policy</li>
            <li>Terms of use</li>
            <li>Refund policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-400">© 2026 IMB tech. Powered for modern electrical commerce.</div>
    </footer>
  );
}
