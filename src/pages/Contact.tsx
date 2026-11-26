import { useState } from "react";
import type { FormEvent } from "react";
import { useMeta } from "../lib/useMeta";
import { SITE } from "../content/site";
import { CvLink } from "../components/CvLink";

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
    <div className="page-wrap contact2">
      <div className="contact2-grid">
        <header className="contact2-head">
          <p className="phead-kicker mono">Contact</p>
          <h1 className="contact2-title">
            Let's <mark>talk.</mark>
          </h1>
          <p className="phead-intro">Roles, freelance projects and collaborations. Email is the quickest way to reach me.</p>

          <div className="contact2-card">
            <span className="tape" aria-hidden="true" />
            <p className="mono contact2-label">Email</p>
            <a href={`mailto:${SITE.email}`} className="contact2-email">
              {SITE.email}
            </a>
            <div className="contact2-actions mono">
              <button type="button" onClick={copy}>
                {copied ? "Copied" : "Copy email"}
              </button>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn &#8599;<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              <CvLink label="Download CV" />
            </div>
            <p className="visually-hidden" aria-live="polite">
              {copied ? "Email address copied" : ""}
            </p>
          </div>
        </header>

        <form className="contact2-form" noValidate onSubmit={submit} aria-describedby="form-note">
          <span className="tape" aria-hidden="true" />
          <p id="form-note" className="mono contact2-label">
            Sending opens your email app with the message ready to go.
          </p>
          <div className="nb-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} />
            {errors.name && (
              <p id="name-err" className="nb-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="nb-field">
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
              <p id="email-err" className="nb-error">
                {errors.email}
              </p>
            )}
          </div>
          <div className="nb-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-err" : undefined}
            />
            {errors.message && (
              <p id="message-err" className="nb-error">
                {errors.message}
              </p>
            )}
          </div>
          <button type="submit" className="contact2-send">
            Write the email
          </button>
          <p className="contact2-status" role="status">
            {sent ? `Your email app should have opened. If it didn't, write to ${SITE.email} directly.` : ""}
          </p>
        </form>
      </div>
    </div>
  );
}
