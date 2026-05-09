import { NextResponse } from 'next/server';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().trim().min(2, 'El nombre debe tener al menos 2 caracteres.'),
  phone: z
    .string()
    .trim()
    .transform((value: string) => value.replace(/\s+/g, ''))
    .pipe(
      z
        .string()
        .min(9, 'Introduce un teléfono válido.')
        .max(15, 'Introduce un teléfono válido.')
        .regex(/^\+?\d+$/, 'Introduce un teléfono válido.')
    ),
  message: z.string().trim().min(10, 'El mensaje debe tener al menos 10 caracteres.'),
  source: z.literal('home_form')
});

const jsonHeaders = {
  'Cache-Control': 'no-store'
};

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: 'Revisa los datos del formulario.',
          errors: result.error.flatten().fieldErrors
        },
        { status: 400, headers: jsonHeaders }
      );
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('[leads] N8N_WEBHOOK_URL is not configured.');
      return NextResponse.json(
        { message: 'El formulario no está configurado todavía. Inténtalo de nuevo más tarde.' },
        { status: 503, headers: jsonHeaders }
      );
    }

    const { name, phone, message, source } = result.data;
    const payload = {
      name,
      phone,
      message,
      source,
      createdAt: new Date().toISOString(),
      pageUrl: request.headers.get('referer') ?? request.headers.get('origin') ?? ''
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!response.ok) {
        console.error('[leads] n8n webhook responded with an error.', {
          status: response.status,
          statusText: response.statusText
        });

        return NextResponse.json(
          { message: 'No hemos podido enviar tu solicitud. Inténtalo de nuevo en unos minutos.' },
          { status: 502, headers: jsonHeaders }
        );
      }
    } finally {
      clearTimeout(timeout);
    }

    return NextResponse.json(
      { message: 'Solicitud enviada correctamente. Te contactaremos muy pronto.' },
      { status: 200, headers: jsonHeaders }
    );
  } catch (error) {
    console.error('[leads] Unexpected error while processing a lead.', error);

    return NextResponse.json(
      { message: 'Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.' },
      { status: 500, headers: jsonHeaders }
    );
  }
}
