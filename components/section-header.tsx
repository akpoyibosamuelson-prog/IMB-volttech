export function SectionHeader({ eyebrow, title, subtitle, light = false }: { eyebrow?: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <div className={`text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-blue-200' : 'text-blue-600'}`}>{eyebrow}</div> : null}
      <h2 className={`mt-3 text-3xl font-black sm:text-4xl ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {subtitle ? <p className={`mt-4 text-lg ${light ? 'text-slate-200' : 'text-slate-600'}`}>{subtitle}</p> : null}
    </div>
  );
}
