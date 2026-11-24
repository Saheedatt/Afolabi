import { useState } from "react";
import type { FormEvent } from "react";
import { useMeta } from "../lib/useMeta";
import { SITE } from "../content/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * The form does not post to a server. On submit it validates, then opens the visitor's email app
 * with the message ready to send to SITE.email. That is a real, working route with no third-party service.
 * To receive messages without the visitor's email app, connect a form service (see README).
 */
export function Contact() {
  useMeta("Contact", "Get in touch with Saheedat Afolabi about roles, freelance work or collaborations.");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please add a valid email address.";
    if (message.length < 10) next.message = "Please write a little more (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    const subject = encodeURIComponent(`Hello from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="contact wrap">
      <header className="contact-head">
        <p className="mono page-kicker">Contact</p>
        <h1 className="page-title">
          Let's <span className="serif">talk.</span>
        </h1>
        <p className="page-intro">Roles, freelance projects and collaborations. Email is the quickest way to reach me.</p>
        <div className="contact-direct">
          <a href={`mailto:${SITE.email}`} className="contact-email">
            {SITE.email}
          </a>
          <div className="contact-actions mono">
            <button type="button" onClick={copy}>
              {copied ? "Copied" : "Copy email"}
            </button>
            <a href={SITE.linkedin} target="_blank" rel="noreferrer">
              LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
          <p className="visually-hidden" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </p>
        </div>
      </header>

      <form className="contact-form" noValidate onSubmit={submit} aria-describedby="form-note">
        <p id="form-note" className="mono form-note">
          Sending opens your email app with the message ready to go.
        </p>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
          {errors.name && (
            <p id="name-err" className="field-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
          />
          {errors.email && (
            <p id="email-err" className="field-error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-err" : undefined}
          />
          {errors.message && (
            <p id="message-err" className="field-error">
              {errors.message}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-solid">
          Write the email
        </button>
        <p className="form-status" role="status">
          {sent ? `Your email app should have opened. If it didn't, write to ${SITE.email} directly.` : ""}
        </p>
      </form>
    </section>
  );
}
