import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Reformas Alba Rioja | Reformas Profesionales en La Rioja',
  description:
    'Empresa especializada en reformas integrales, cocinas, baños y rehabilitación de viviendas en La Rioja.',
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
