"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-card/80 p-6 shadow-soft sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm text-slate-300">
            Name
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              placeholder="Jane Doe"
            />
          </label>

          <label className="grid gap-2 text-sm text-slate-300">
            Email
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              placeholder="jane@email.com"
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm text-slate-300">
          Subject
          <input
            required
            name="subject"
            type="text"
            className="h-12 rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            placeholder="Project inquiry"
          />
        </label>

        <label className="grid gap-2 text-sm text-slate-300">
          Message
          <textarea
            required
            name="message"
            rows={6}
            className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            placeholder="Tell me about your project, timeline, or idea."
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            Demo form UI. Connect it to Formspree, Resend, or your preferred backend later.
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#7bf0da] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Send message
          </button>
        </div>

        <p
          aria-live="polite"
          className={`text-sm ${submitted ? "text-accent" : "text-transparent"}`}
        >
          Thanks. The demo form is working locally and ready to be connected to a real endpoint.
        </p>
      </form>
    </div>
  );
}
