'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const budgets = ['Under $10k', '$10k – $30k', '$30k – $80k', '$80k+', 'Prefer to discuss'];

const fieldClass =
  'block w-full rounded-xl border border-line bg-white px-5 py-3.5 text-body-sm ' +
  'text-ink placeholder:text-gray-400 outline-none transition-all duration-fast ' +
  'focus:border-amber focus:ring-2 focus:ring-amber/20';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('submitting');
    await new Promise((r) => setTimeout(r, 900));
    setState('success');
  };

  if (state === 'success') {
    return (
      <div className="flex min-h-[24rem] flex-col items-center justify-center gap-5 rounded-2xl border border-amber/30 bg-amber-wash p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber text-white">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h2 className="text-h4 font-semibold text-ink">Message received</h2>
        <p className="text-body-sm text-body">
          We will review your brief and get back to you within one business day.
        </p>
        <Button onClick={() => setState('idle')} variant="outline" size="sm">
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name" type="text" placeholder="Your name" required />
        <Field label="Email" id="email" type="email" placeholder="you@company.com" required />
      </div>
      <Field label="Company (optional)" id="company" type="text" placeholder="Your company" />

      <div>
        <label htmlFor="project-type" className="mb-2 block text-caption font-medium uppercase tracking-label text-muted">Project type</label>
        <select id="project-type" name="projectType" defaultValue="" className={cn(fieldClass, 'cursor-pointer')}>
          <option value="" disabled>Select a project type</option>
          <option value="new-product">New product or MVP</option>
          <option value="business-system">Business system or ERP</option>
          <option value="ai-automation">AI or automation</option>
          <option value="modernization">Rescue or modernization</option>
          <option value="consultancy">Technical consultancy</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-caption font-medium uppercase tracking-label text-muted">
          Budget range
        </label>
        <select
          id="budget"
          name="budget"
          defaultValue=""
          className={cn(fieldClass, 'cursor-pointer')}
        >
          <option value="" disabled>Select a range</option>
          {budgets.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-caption font-medium uppercase tracking-label text-muted">
          Your project <span aria-hidden className="text-amber">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you building, what is the biggest constraint, and what is the timeline?"
          required
          className={cn(fieldClass, 'resize-none')}
        />
      </div>

      {state === 'error' && (
        <p role="alert" className="text-body-sm text-red-500">
          Something went wrong. Please email us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" arrow disabled={state === 'submitting'}>
        {state === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>

      <p className="text-center text-micro text-muted">
        No obligation. We reply within one business day.
      </p>
    </form>
  );
}

function Field({
  label, id, type, placeholder, required,
}: {
  label: string; id: string; type: string; placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-caption font-medium uppercase tracking-label text-muted">
        {label} {required && <span aria-hidden className="text-amber">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className={fieldClass}
      />
    </div>
  );
}
