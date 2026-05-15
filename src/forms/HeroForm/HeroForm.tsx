"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  heroFormSchema,
  type HeroFormValues,
} from "@/schemas/heroForm.schema";
import Icon from "@/components/Icon/Icon";
import { HEALLY, STATE_CONFIG } from "@/constants/site";
import styles from "./HeroForm.module.css";

function toBase64Url(input: string): string {
  return btoa(input)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function pushGtmEvent(event: string, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length >= 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length >= 4) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
}

export default function HeroForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<HeroFormValues>({
    resolver: zodResolver(heroFormSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      terms: undefined,
      marketingOptIn: false,
    },
  });

  const phoneField = register("phone");

  const onSubmit = async (data: HeroFormValues) => {
    setSubmitError(null);
    try {
      const nameParts = data.fullName.trim().split(/\s+/);
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ") || "";

      const payload = {
        first_name: firstName,
        last_name: lastName,
        email: data.email,
        phone: data.phone,
        state: STATE_CONFIG.stateAbbr,
        state_of_evaluation: STATE_CONFIG.stateAbbr,
        timezone: STATE_CONFIG.timezone,
        city: STATE_CONFIG.city,
        extra_data: {
          "contact[contact_type]": "Web Form",
          "product[name]": HEALLY.productName,
          utm_source: HEALLY.utmSource,
        },
      };

      const preset = toBase64Url(JSON.stringify(payload));

      pushGtmEvent("heallyValidatedSubmit", {
        utm_source: HEALLY.utmSource,
      });

      const url = `${HEALLY.prefillUrl}?redirect=sched&preset=${preset}&utm_source=${HEALLY.utmSource}`;
      window.location.assign(url);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={styles.wrapper} id="hero-form">
      <div className={styles.floatingBadge2} aria-hidden="true">
        <Icon name="clock" size={16} strokeWidth={2.5} />
        Same-Day Appointments
      </div>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerIcon}>
            <Icon name="doc" size={22} strokeWidth={2.5} />
          </div>
          <div>
            <div className={styles.cardTitle}>Get Started Today</div>
            <div className={styles.cardSubtitle}>
              Start your medical marijuana card Illinois application
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="MMJ card evaluation request"
        >
          <div className={styles.field}>
            <label htmlFor="fullName">Full Name *</label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              {...register("fullName")}
            />
            {errors.fullName && (
              <span id="fullName-error" className={styles.error} role="alert">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="Enter your email address"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <span id="email-error" className={styles.error} role="alert">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={12}
              placeholder="999-999-9999"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...phoneField}
              onChange={(e) => {
                e.target.value = formatPhone(e.target.value);
                phoneField.onChange(e);
              }}
            />
            {errors.phone && (
              <span id="phone-error" className={styles.error} role="alert">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className={styles.checkboxRow}>
            <input
              id="terms"
              type="checkbox"
              aria-invalid={!!errors.terms}
              aria-describedby={errors.terms ? "terms-error" : undefined}
              {...register("terms")}
            />
            <label htmlFor="terms">
              I accept the{" "}
              <a href="#" rel="nofollow" title="Terms and Conditions">
                Terms and Conditions
              </a>{" "}
              *
            </label>
          </div>
          {errors.terms && (
            <span id="terms-error" className={styles.error} role="alert">
              {errors.terms.message}
            </span>
          )}

          <div className={styles.checkboxRow}>
            <input
              id="marketingOptIn"
              type="checkbox"
              {...register("marketingOptIn")}
            />
            <label htmlFor="marketingOptIn">
              I agree to receive emails with educational updates and latest
              offers.
            </label>
          </div>

          {submitError && (
            <p className={styles.error} role="alert">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting || !isValid}
            aria-busy={isSubmitting}
          >
            <Icon name="calendar" size={18} strokeWidth={2.5} />
            {isSubmitting ? "Submitting…" : "Apply for Your MMJ Card"}
          </button>
        </form>
      </div>
    </div>
  );
}
