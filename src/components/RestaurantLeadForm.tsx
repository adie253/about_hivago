import { useState } from "react";
import { api, ApiError } from "@/lib/api";
import "./Forms.css";

export const DAILY_ORDER_OPTIONS = [
  { value: 50,   label: "Up to 50 orders/day" },
  { value: 200,  label: "50–200 orders/day" },
  { value: 500,  label: "200–500 orders/day" },
  { value: 1000, label: "500+ orders/day" },
];

type FormState = {
  restaurantName: string;
  ownerName: string;
  phone: string;
  city: string;
  dailyOrders: number;
};

export function RestaurantLeadForm() {
  const [form, setForm] = useState<FormState>({
    restaurantName: "",
    ownerName: "",
    phone: "",
    city: "",
    dailyOrders: 50,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setErrorMsg(null);

    try {
      await api<{ id: string }>("/api/restaurant-leads", {
        method: "POST",
        body: JSON.stringify({ ...form, source: "restaurant-landing" }),
      });
      setStatus("success");
    } catch (err) {
      if (err instanceof ApiError) {
        if (err.status === 400) setErrors(err.fieldErrors);
        else if (err.status === 409) setErrorMsg("This number is already registered with us.");
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
          <h3>Partnership Request Received!</h3>
          <p>Our team will reach out shortly to discuss the next steps.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="marketing-form card">
      <div className="form-header">
        <h2 className="heading-lg">Partner with Hivago</h2>
        <p>Boost your sales and reach more customers today.</p>
      </div>

      <div className="form-grid">
        <Field label="Restaurant name" error={errors.restaurantName}>
          <input 
            className={`form-input ${errors.restaurantName ? 'has-error' : ''}`} 
            maxLength={200}
            placeholder="e.g. The Spicy Bistro"
            value={form.restaurantName}
            onChange={(e) => setForm({ ...form, restaurantName: e.target.value })}
            required 
          />
        </Field>

        <Field label="Owner name" error={errors.ownerName}>
          <input 
            className={`form-input ${errors.ownerName ? 'has-error' : ''}`} 
            maxLength={200}
            placeholder="e.g. Jane Smith"
            value={form.ownerName}
            onChange={(e) => setForm({ ...form, ownerName: e.target.value })}
            required 
          />
        </Field>
      </div>

      <div className="form-grid">
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

        <Field label="City" error={errors.city}>
          <input 
            className={`form-input ${errors.city ? 'has-error' : ''}`} 
            maxLength={100}
            placeholder="e.g. New Delhi"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            required 
          />
        </Field>
      </div>

      <Field label="Avg daily orders" error={errors.dailyOrders}>
        <div className="select-wrapper">
          <select
            className={`form-input ${errors.dailyOrders ? 'has-error' : ''}`}
            value={form.dailyOrders}
            onChange={(e) => setForm({ ...form, dailyOrders: Number(e.target.value) })}
          >
            {DAILY_ORDER_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </Field>

      {errorMsg && <div className="status-message error animate-shake">{errorMsg}</div>}

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="btn-primary form-submit"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <span className="spinner"></span> Submitting…
          </span>
        ) : "Get early access"}
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
