import { useState } from "react";
import { api, ApiError } from "@/lib/api";
import "./Forms.css";

type FormState = {
  name: string;
  email: string;
  phone: string;
};

export function WaitlistForm({ source }: { source?: string }) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMsg(null);

    try {
      await api<{ id: string }>("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({ ...form, source: source ?? "landing" }),
      });
      setStatus("success");
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 400) setErrors(err.fieldErrors);
        else if (err.status === 409) setErrorMsg(err.body.message); // already signed up
        else if (err.status === 429) setErrorMsg("Too many tries. Please wait a minute.");
        else setErrorMsg("Something went wrong. Please try again.");
      } else {
        setErrorMsg("An unexpected error occurred.");
      }
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="status-message success animate-fade-in">
        <div className="status-icon">✓</div>
        <div>
          <h3>You're on the list!</h3>
          <p>We'll be in touch with you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="marketing-form card">
      <div className="form-header">
        <h2 className="heading-lg">Join the Waitlist</h2>
        <p>Be the first to experience the future of food delivery.</p>
      </div>

      <Field label="Your name" error={errors.name}>
        <input
          className={`form-input ${errors.name ? 'has-error' : ''}`}
          placeholder="e.g. John Doe"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          maxLength={200}
          required
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          className={`form-input ${errors.email ? 'has-error' : ''}`}
          placeholder="e.g. john@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </Field>

      <Field label="Phone (10 digits)" error={errors.phone}>
        <input
          inputMode="numeric"
          pattern="[0-9]{10}"
          className={`form-input ${errors.phone ? 'has-error' : ''}`}
          placeholder="e.g. 9876543210"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
          required
        />
      </Field>

      {errorMsg && <div className="status-message error animate-shake">{errorMsg}</div>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary form-submit"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <span className="spinner"></span> Joining…
          </span>
        ) : "Join waitlist"}
      </button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="form-field">
      <label className="field-label">{label}</label>
      {children}
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}
