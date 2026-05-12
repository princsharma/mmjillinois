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
      "Online consultation with licensed physician",
      "Medical marijuana recommendation",
      "Personalized treatment guidance",
      "100% money-back if not approved",
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
      "Quick renewal consultation",
      "Updated MMJ certification",
      "Treatment plan guidance",
      "Same-day appointments available",
      "24/7 Support",
    ],
    ctaLabel: "Renew Your MMJ Card",
  },
];
