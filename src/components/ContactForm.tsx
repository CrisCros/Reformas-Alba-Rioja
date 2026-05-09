'use client';

import { FormEvent, useState } from 'react';

type ContactState = {
  name: string;
  phone: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactState, string>>;

type Feedback = {
  type: 'success' | 'error';
  message: string;
} | null;

const initialState: ContactState = {
  name: '',
  phone: '',
  message: ''
};

const inputBaseClass =
  'rounded-xl border bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-2 disabled:cursor-not-allowed disabled:opacity-70';

const getFieldClass = (hasError: boolean) =>
  `${inputBaseClass} ${
    hasError
      ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
      : 'border-blue-100 focus:border-brand-500 focus:ring-brand-100'
  }`;

const validateForm = (data: ContactState) => {
  const errors: FieldErrors = {};
  const cleanPhone = data.phone.replace(/\s+/g, '');

  if (data.name.trim().length < 2) {
    errors.name = 'Introduce tu nombre con al menos 2 caracteres.';
  }

  if (!/^\+?\d{9,15}$/.test(cleanPhone)) {
    errors.phone = 'Introduce un teléfono válido.';
  }

  if (data.message.trim().length < 10) {
    errors.message = 'Cuéntanos un poco más: mínimo 10 caracteres.';
  }

  return {
    errors,
    cleanData: {
      name: data.name.trim(),
      phone: cleanPhone,
      message: data.message.trim()
    }
  };
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactState>(initialState);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [isSending, setIsSending] = useState(false);

  const updateField = (field: keyof ContactState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    setFeedback(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const { errors, cleanData } = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setFeedback({ type: 'error', message: 'Revisa los campos marcados antes de enviar.' });
      return;
    }

    setIsSending(true);
    setFeedback(null);
    setFieldErrors({});

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...cleanData,
          source: 'home_form'
        })
      });

      const data = (await response.json().catch(() => null)) as {
        message?: string;
        errors?: Record<string, string[]>;
      } | null;

      if (!response.ok) {
        const nextErrors: FieldErrors = {};

        if (data?.errors) {
          (['name', 'phone', 'message'] as Array<keyof ContactState>).forEach((field) => {
            const message = data.errors?.[field]?.[0];

            if (message) {
              nextErrors[field] = message;
            }
          });
        }

        setFieldErrors(nextErrors);
        throw new Error(data?.message ?? 'No se pudo enviar tu solicitud.');
      }

      setFeedback({ type: 'success', message: data?.message ?? '¡Solicitud enviada! Te contactaremos muy pronto.' });
      setFormData(initialState);
    } catch (error) {
      setFeedback({
        type: 'error',
        message: error instanceof Error ? error.message : 'Ha ocurrido un error inesperado.'
      });
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
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Nombre</span>
            <input
              type="text"
              autoComplete="name"
              required
              minLength={2}
              value={formData.name}
              onChange={(event) => updateField('name', event.target.value)}
              className={getFieldClass(Boolean(fieldErrors.name))}
              placeholder="Tu nombre"
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? 'name-error' : undefined}
              disabled={isSending}
            />
            {fieldErrors.name ? <p id="name-error" className="text-xs font-medium text-red-600">{fieldErrors.name}</p> : null}
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">Teléfono</span>
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              onBlur={() => setFormData((prev) => ({ ...prev, phone: prev.phone.replace(/\s+/g, '') }))}
              className={getFieldClass(Boolean(fieldErrors.phone))}
              placeholder="600 123 456"
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
              disabled={isSending}
            />
            {fieldErrors.phone ? <p id="phone-error" className="text-xs font-medium text-red-600">{fieldErrors.phone}</p> : null}
          </label>
          <label className="flex flex-col gap-2 sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">Mensaje</span>
            <textarea
              required
              minLength={10}
              rows={5}
              value={formData.message}
              onChange={(event) => updateField('message', event.target.value)}
              className={getFieldClass(Boolean(fieldErrors.message))}
              placeholder="Cuéntanos qué necesitas reformar"
              aria-invalid={Boolean(fieldErrors.message)}
              aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              disabled={isSending}
            />
            {fieldErrors.message ? (
              <p id="message-error" className="text-xs font-medium text-red-600">{fieldErrors.message}</p>
            ) : null}
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-900 disabled:cursor-not-allowed disabled:translate-y-0 disabled:bg-brand-700/60"
            >
              {isSending ? 'Enviando solicitud...' : 'Solicitar presupuesto'}
            </button>
            {feedback ? (
              <p
                role="status"
                className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                  feedback.type === 'success'
                    ? 'border-emerald-100 bg-emerald-50 text-emerald-700'
                    : 'border-red-100 bg-red-50 text-red-700'
                }`}
              >
                {feedback.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
