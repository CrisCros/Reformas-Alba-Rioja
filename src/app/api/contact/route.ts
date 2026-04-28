import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  phone: string;
  message: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.phone || !body.message) {
    return NextResponse.json({ message: 'Faltan campos obligatorios.' }, { status: 400 });
  }

  return NextResponse.json({
    message: 'Solicitud recibida correctamente. Endpoint listo para conectar a un CRM o email provider.'
  });
}
