export type PricingPlan = {
  popular: boolean;
  title: string;
  subtitle: string;
  price: number;
  icon: "doc" | "refresh";
  features: string[];
  ctaLabel: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    popular: true,
    title: "New MMJ Card",
    subtitle: "Complete evaluation & certification",
    price: 149,
    icon: "doc",
    features: [
      "Online consultation with a licensed physician",
      "Medical Marijuana Recommendation",
      "Personalized treatment guidance",
      "100% money-back guarantee if not approved",
      "24/7 Support",
    ],
    ctaLabel: "Apply Your MMJ Card",
  },
  {
    popular: false,
    title: "Card Renewal",
    subtitle: "Annual card renewal",
    price: 129,
    icon: "refresh",
    features: [
      "Quick Renewal Consultation",
      "Updated MMJ Certification",
      "Treatment Plan Guidance",
      "Same-day Appointments Available",
      "24/7 Support",
    ],
    ctaLabel: "Renew Your MMJ Card Now",
  },
];
