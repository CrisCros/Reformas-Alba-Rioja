import { services } from '@/data/siteData';

export function ServiceCards() {
  return (
    <section id="servicios" className="section-container py-12 sm:py-16">
      <div className="mb-8 max-w-2xl space-y-3">
        <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">Servicios que elevan cada espacio</h2>
        <p className="text-slate-600">
          Ofrecemos soluciones integrales para que tu proyecto de reforma sea fluido, elegante y duradero.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="card-surface p-6">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-brand-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
