"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { inquiry, site } from "@/content/site";
import { emptyInquiry, validateInquiry, type Inquiry, type InquiryErrors } from "@/lib/inquiry";
import { Button } from "@/components/Button";
import { Horseshoe } from "@/components/illustrations/Marks";
import { EASE, Reveal } from "@/components/motion/primitives";

type Status = "idle" | "submitting" | "success" | "error";

const control =
  "w-full rounded-xl bg-ivory/[0.06] px-4 text-ivory ring-1 ring-inset ring-ivory/20 transition-[box-shadow,background-color] duration-500 placeholder:text-ivory/55 hover:ring-ivory/35 focus:bg-ivory/[0.09] focus:outline-none focus:ring-2 focus:ring-gold aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-gold/80";

function Field({
  id,
  label,
  optional,
  error,
  hint,
  children,
  className = "",
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-[0.9375rem] text-ivory/90">
        {label}
        {optional && <span className="text-sm text-ivory/60">Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-sm text-ivory/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-2 text-sm text-gold">
          <svg viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" />
            <path d="M8 4.5v4.2M8 11h.01" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export function InquiryForm({ number = "08" }: { number?: string } = {}) {
  const [values, setValues] = useState<Inquiry>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Inquiry, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof Inquiry) => (e: { target: { value: string } }) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (touched[k]) setErrors(validateInquiry(next));
  };
  const blur = (k: keyof Inquiry) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validateInquiry(values));
  };

  const a11y = (k: keyof Inquiry, hint = false) => {
    const err = touched[k] ? errors[k] : undefined;
    return {
      id: `f-${k}`,
      name: k,
      "aria-invalid": err ? true : undefined,
      "aria-describedby": err ? `f-${k}-error` : hint ? `f-${k}-hint` : undefined,
    };
  };
  const shownError = (k: keyof Inquiry) => (touched[k] ? errors[k] : undefined);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validateInquiry(values);
    setErrors(errs);
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
    const first = Object.keys(errs)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`#f-${first}`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setValues(emptyInquiry);
      setTouched({});
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" data-tone="dark" aria-labelledby="contact-title" className="section-y relative isolate overflow-hidden bg-silk text-ivory/90">
      <div className="grain -z-10" />
      <div
        aria-hidden="true"
        className="absolute -left-[25%] bottom-[-35%] -z-10 aspect-square w-[70vw] max-w-[56rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--gold)_10%,transparent),transparent)]"
      />
      <div className="container-x grid-12 gap-y-14">
        <div className="col-span-12 lg:col-span-5">
          <Reveal className="flex items-center gap-4" y={12}>
            <span className="numeral text-lg text-gold" aria-hidden="true">
              {number}
            </span>
            <span className="h-px w-14 bg-ivory/25" aria-hidden="true" />
          </Reveal>
          <Reveal>
            <h2 id="contact-title" className="display mt-8 text-h2 text-ivory">
              {inquiry.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[30rem] text-lead text-ivory/60">{inquiry.intro}</p>
            <p className="mt-8 max-w-[30rem] border-l border-gold/60 pl-5 leading-relaxed text-ivory/90">{inquiry.priceNote}</p>
            <dl className="mt-12 grid gap-6 border-t border-ivory/12 pt-8 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <dt className="label text-ivory/60">Call</dt>
                <dd className="mt-2">
                  <a href={site.phoneHref} className="link-draw inline-flex min-h-11 items-center text-ivory">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-ivory/60">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="link-draw inline-block py-3 leading-snug text-ivory">
                    {site.email.split("@")[0]}@<wbr />
                    {site.email.split("@")[1]}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label text-ivory/60">Barn hours</dt>
                <dd className="mt-2 text-ivory/90">{site.hours}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="col-span-12 lg:col-span-6 lg:col-start-7">
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="ok"
                ref={successRef}
                tabIndex={-1}
                role="status"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: EASE }}
                className="flex min-h-[28rem] flex-col items-start justify-center rounded-[1.25rem] p-8 ring-1 ring-inset ring-ivory/12 focus:outline-none sm:p-12"
              >
                <Horseshoe className="size-12 text-gold" />
                <h3 className="display mt-8 text-h3 text-ivory">{inquiry.success.title}</h3>
                <p className="mt-4 max-w-[28rem] text-ivory/60">{inquiry.success.body}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="link-draw mt-10 inline-flex min-h-11 items-center text-[0.9375rem] text-ivory"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                ref={formRef}
                noValidate
                onSubmit={onSubmit}
                aria-label="Trial lesson request"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="grid gap-x-5 gap-y-6 sm:grid-cols-2"
              >
                <Field id="f-name" label="Your name" error={shownError("name")} className="sm:col-span-2">
                  <input {...a11y("name")} autoComplete="name" className={`${control} h-12`} value={values.name} onChange={set("name")} onBlur={blur("name")} />
                </Field>
                <Field id="f-email" label="Email" error={shownError("email")}>
                  <input {...a11y("email")} type="email" inputMode="email" autoComplete="email" className={`${control} h-12`} value={values.email} onChange={set("email")} onBlur={blur("email")} />
                </Field>
                <Field id="f-phone" label="Phone" optional error={shownError("phone")}>
                  <input {...a11y("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="(000) 000-0000" className={`${control} h-12`} value={values.phone} onChange={set("phone")} onBlur={blur("phone")} />
                </Field>
                <Field id="f-riderAge" label="Rider's age" error={shownError("riderAge")} hint="Riders start from age 5.">
                  <input {...a11y("riderAge", true)} type="text" inputMode="numeric" className={`${control} h-12`} value={values.riderAge} onChange={set("riderAge")} onBlur={blur("riderAge")} />
                </Field>
                <Field id="f-experience" label="Experience level" error={shownError("experience")}>
                  <div className="relative">
                    <select {...a11y("experience")} className={`${control} h-12 appearance-none pr-10 [&>option]:bg-navy`} value={values.experience} onChange={set("experience")} onBlur={blur("experience")}>
                      <option value="" disabled>
                        Choose one
                      </option>
                      {inquiry.experienceLevels.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <Chevron />
                  </div>
                </Field>
                <Field id="f-program" label="Preferred program" optional className="sm:col-span-2">
                  <div className="relative">
                    <select {...a11y("program")} className={`${control} h-12 appearance-none pr-10 [&>option]:bg-navy`} value={values.program} onChange={set("program")}>
                      <option value="">Not sure yet</option>
                      {inquiry.programOptions.slice(1).map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                    <Chevron />
                  </div>
                </Field>
                <Field id="f-message" label="Anything we should know?" optional error={shownError("message")} className="sm:col-span-2">
                  <textarea {...a11y("message")} rows={4} className={`${control} min-h-32 resize-y py-3`} value={values.message} onChange={set("message")} onBlur={blur("message")} placeholder="Goals, preferred days, questions…" />
                </Field>

                <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-ivory/60">We reply within one business day.</p>
                  <Button type="submit" variant="gold" arrow magnetic disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending…" : "Request a trial lesson"}
                  </Button>
                </div>
                {status === "error" && (
                  <p role="alert" className="text-sm text-gold sm:col-span-2">
                    Your request did not send. Check your connection and try again, or call us at {site.phone}.
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-ivory/60" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
