'use client';

import { FormEvent, useState } from 'react';

type ContactState = {
  name: string;
  phone: string;
  message: string;
};

const initialState: ContactState = {
  name: '',
  phone: '',
  message: ''
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactState>(initialState);
  const [feedback, setFeedback] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar tu solicitud.');
      }

      setFeedback('¡Solicitud enviada! Te contactaremos muy pronto.');
      setFormData(initialState);
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'Ha ocurrido un error inesperado.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="section-container py-12 sm:py-16">
      <div className="card-surface mx-auto max-w-4xl p-6 sm:p-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-brand-900 sm:text-4xl">Cuéntanos tu reforma</h2>
          <p className="mt-3 text-slate-600">
            Recibe una propuesta personalizada de nuestro equipo en menos de 24 horas laborables.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Nombre</span>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
              className="rounded-xl border border-blue-100 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
              placeholder="Tu nombre"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Teléfono</span>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
              className="rounded-xl border border-blue-100 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
              placeholder="600 123 456"
            />
          </label>
          <label className="flex flex-col gap-2 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">Mensaje</span>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
              className="rounded-xl border border-blue-100 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-100"
              placeholder="Cuéntanos qué necesitas reformar"
            />
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-900 disabled:cursor-not-allowed disabled:bg-brand-700/60"
            >
              {isSending ? 'Enviando...' : 'Solicitar presupuesto'}
            </button>
            {feedback ? <p className="mt-4 text-sm text-brand-700">{feedback}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
