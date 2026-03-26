"use client";

import { useState } from "react";

const inputStyles =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const labelStyles = "block text-sm font-medium mb-1.5";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    material: "",
    form: "",
    grade: "",
    quantity: "",
    notes: "",
    referral: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
          <svg
            className="h-6 w-6 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="font-heading text-2xl font-bold uppercase text-foreground">
          Quote Request Submitted
        </h2>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll review your request and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelStyles}>
          Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="company" className={labelStyles}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelStyles}>
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelStyles}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="material" className={labelStyles}>
          Material
        </label>
        <select
          id="material"
          name="material"
          value={form.material}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select a material</option>
          <option value="Steel">Steel</option>
          <option value="Aluminum">Aluminum</option>
          <option value="Copper">Copper</option>
          <option value="Brass">Brass</option>
          <option value="Stainless Steel">Stainless Steel</option>
          <option value="Titanium">Titanium</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="form" className={labelStyles}>
          Form
        </label>
        <select
          id="form"
          name="form"
          value={form.form}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select a form</option>
          <option value="Sheet">Sheet</option>
          <option value="Plate">Plate</option>
          <option value="Bar">Bar</option>
          <option value="Disc">Disc</option>
          <option value="Custom Shape">Custom Shape</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="grade" className={labelStyles}>
          Grade / Alloy
        </label>
        <input
          id="grade"
          name="grade"
          type="text"
          value={form.grade}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="quantity" className={labelStyles}>
          Quantity
        </label>
        <input
          id="quantity"
          name="quantity"
          type="text"
          value={form.quantity}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="notes" className={labelStyles}>
          Dimensions / Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={form.notes}
          onChange={handleChange}
          className={inputStyles}
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="referral" className={labelStyles}>
          How did you hear about us?
        </label>
        <select
          id="referral"
          name="referral"
          value={form.referral}
          onChange={handleChange}
          className={inputStyles}
        >
          <option value="">Select an option</option>
          <option value="Google">Google</option>
          <option value="Social Media">Social Media</option>
          <option value="Referral">Referral</option>
          <option value="Trade Show">Trade Show</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-md bg-primary py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Submit Quote Request
        </button>
      </div>
    </form>
  );
}
