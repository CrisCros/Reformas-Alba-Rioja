import { heroSlides } from '@/data/siteData';
import { HeroSlider } from './HeroSlider';

export function Hero() {
  return (
    <section id="inicio" className="section-container py-10 sm:py-14 lg:py-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Reformas de alta calidad
          </span>
          <h1 className="text-4xl font-bold leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
            Espacios renovados con estilo, precisión y confianza.
          </h1>
          <p className="max-w-xl text-base text-slate-600 sm:text-lg">
            En Reformas Alba Rioja convertimos ideas en resultados. Diseñamos y ejecutamos reformas modernas
            para viviendas y negocios, cuidando cada detalle desde el primer día.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-900"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Ver servicios
            </a>
          </div>
        </div>
        <HeroSlider slides={heroSlides} />
      </div>
    </section>
  );
}
