import Image from 'next/image';
import { galleryItems } from '@/data/siteData';

export function GallerySection() {
  return (
    <section id="galeria" className="section-container py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">Proyectos y acabados</h2>
          <p className="mt-2 max-w-xl text-slate-600">
            Zona preparada para mostrar fotos reales de trabajos finalizados. De momento incluye imágenes de
            referencia para visualizar el estilo.
          </p>
        </div>
      </div>
      <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <article
            key={item.src}
            className={`group relative overflow-hidden rounded-2xl ${
              index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:auto-rows-[260px]' : ''
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
          </article>
        ))}
      </div>
    </section>
  );
}
