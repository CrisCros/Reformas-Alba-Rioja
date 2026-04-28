import { companyInfo, navItems, socialLinks } from '@/data/siteData';

export function Footer() {
  return (
    <footer className="mt-10 bg-brand-900 text-blue-100">
      <div className="section-container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">{companyInfo.name}</p>
          <p className="text-sm text-blue-100/90">Reformas modernas en La Rioja para hogares y negocios.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{companyInfo.address}</li>
            <li>{companyInfo.phone}</li>
            <li>{companyInfo.email}</li>
            <li>{companyInfo.schedule}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Enlaces rápidos</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Síguenos</h3>
          <div className="mt-3 flex gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blue-300/30 text-blue-100 transition hover:border-blue-100 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-blue-300/20 py-4 text-center text-xs text-blue-200/80">
        © {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
