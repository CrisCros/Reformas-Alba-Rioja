import { companyInfo, navItems } from '@/data/siteData';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-100/70 bg-white/90 backdrop-blur">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#inicio" className="text-sm font-bold tracking-wide text-brand-900 sm:text-base">
          {companyInfo.name}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-brand-700 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-brand-900 sm:text-sm"
        >
          Pide presupuesto
        </a>
      </div>
    </header>
  );
}
