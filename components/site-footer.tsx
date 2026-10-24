import Image from 'next/image';
import Link from 'next/link';
import { Camera, Globe2, MapPin, MessageCircle, Phone } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20261023-WA0026-pF6Vd6GiW23epYZI0yJAqVBfFRZYNk.jpg" alt="IMB tech logo" width={48} height={48} className="h-12 w-12 rounded-xl object-cover" />
            <div>
              <p className="text-lg font-black text-white">IMB tech</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Electrical services</p>
            </div>
          </div>
          <p className="text-sm text-slate-300">Business management software for electrical contractors, merchants, customers, and suppliers.</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/marketplace">Marketplace</Link></li>
            <li><Link href="/bookings">Bookings</Link></li>
            <li><Link href="/admin">Business dashboard</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/login">Customer login</Link></li>
            <li><Link href="/register">Create account</Link></li>
            <li><a href="tel:+2348000000000">Call support</a></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Reach us</p>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-2"><MapPin size={14}/> Lekki Phase 1, Lagos</div>
            <div className="flex items-center gap-2"><Phone size={14}/> +234 800 000 0000</div>
            <div className="flex items-center gap-2"><MessageCircle size={14}/> WhatsApp support</div>
          </div>
          <div className="mt-4 flex gap-3 text-slate-400">
            <Globe2 size={16} />
            <Camera size={16} />
            <MessageCircle size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
