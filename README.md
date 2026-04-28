# Reformas Alba Rioja · Web corporativa

Base inicial de web profesional y responsive creada con **Next.js + TypeScript + TailwindCSS**, orientada a captación de clientes.

## Stack

- Next.js (App Router)
- TypeScript
- TailwindCSS
- lucide-react (iconos)

## Secciones incluidas

- Hero principal con slider automático y transición suave
- Formulario rápido de contacto (con endpoint mock en `/api/contact`)
- Botón flotante de WhatsApp
- Cards de servicios
- Galería preparada para imágenes reales futuras
- Footer completo con datos de empresa y redes

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Despliegue en Vercel

1. Crear repositorio y subir este proyecto.
2. Importar el repo en Vercel.
3. Framework detectado automáticamente como Next.js.
4. Deploy.

## Personalización rápida

Toda la información editable (teléfono, WhatsApp, textos, servicios, imágenes) está centralizada en:

- `src/data/siteData.ts`
