import type { LucideIcon } from 'lucide-react';
import {
  Bath,
  Brush,
  Plug,
  CookingPot,
  Building2,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

export type Slide = {
  src: string;
  alt: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type GalleryItem = {
  src: string;
  alt: string;
};

export const companyInfo = {
  name: 'Reformas Alba Rioja',
  phone: '+34 654 854 145',
  whatsappPhone: '34654854145',
  email: 'info@reformasalbarioja.es',
  address: 'Calle Gran Vía 25, 26001 Logroño, La Rioja',
  schedule: 'Lunes a Viernes · 08:30 - 19:00'
};

export const navItems = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' }
];

export const heroSlides: Slide[] = [
  {
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1600&q=80',
    alt: 'Salón moderno reformado con acabados premium'
  },
  {
    src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cocina contemporánea blanca y azul'
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Baño moderno con iluminación elegante'
  }
];

export const services: Service[] = [
  {
    title: 'Reformas integrales',
    description: 'Transformamos viviendas y locales completos con planificación, diseño y ejecución llave en mano.',
    icon: Building2
  },
  {
    title: 'Cocinas',
    description: 'Diseños funcionales y actuales con materiales de alta durabilidad para tu cocina ideal.',
    icon: CookingPot
  },
  {
    title: 'Baños',
    description: 'Renovamos tu baño con soluciones modernas, confortables y eficientes en espacio.',
    icon: Bath
  },
  {
    title: 'Pintura',
    description: 'Acabados impecables en interior y exterior con combinaciones cromáticas profesionales.',
    icon: Brush
  },
  {
    title: 'Electricidad',
    description: 'Instalaciones y mejoras eléctricas seguras, adaptadas a normativa y ahorro energético.',
    icon: Plug
  }
];

export const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Espacio interior moderno y luminoso'
  },
  {
    src: 'https://images.unsplash.com/photo-1617104551722-3b2d513664c8?auto=format&fit=crop&w=1000&q=80',
    alt: 'Detalle de cocina reformada con isla'
  },
  {
    src: 'https://images.unsplash.com/photo-1616627452094-a9f8ef1c70f9?auto=format&fit=crop&w=1000&q=80',
    alt: 'Salón minimalista tras reforma'
  },
  {
    src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
    alt: 'Baño con ducha a ras de suelo'
  }
];

export const socialLinks = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'LinkedIn', icon: Linkedin }
];

export const whatsappMessage = encodeURIComponent(
  'Hola, me gustaría solicitar presupuesto para una reforma con Reformas Alba Rioja.'
);
