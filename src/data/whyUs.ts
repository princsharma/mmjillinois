export type WhyUsItem = {
  num: string;
  icon: "shield-check" | "clock" | "home" | "dollar" | "lock" | "support";
  title: string;
  description: string;
};

export const WHY_US: WhyUsItem[] = [
  {
    num: "01",
    icon: "shield-check",
    title: "Board-Certified Doctors",
    description:
      "Consult with a board-certified Illinois MMJ doctor online, fully aligned with state medical cannabis regulations and committed to patient care excellence.",
  },
  {
    num: "02",
    icon: "clock",
    title: "Convenient Evaluations",
    description:
      "Our streamlined online consultation allows you to complete your MMJ evaluation securely with no delays and a completely hassle-free experience.",
  },
  {
    num: "03",
    icon: "home",
    title: "Trusted Platform",
    description:
      "Illinois residents rely on us for professional medical marijuana evaluations delivered through a secure, state-compliant, and dependable process.",
  },
  {
    num: "04",
    icon: "dollar",
    title: "Honest Pricing",
    description:
      "Clear, upfront pricing with absolutely no hidden fees — ensuring a transparent and trustworthy experience for every Illinois patient.",
  },
  {
    num: "05",
    icon: "lock",
    title: "HIPAA-Compliant",
    description:
      "Your personal and medical information is fully protected in accordance with HIPAA privacy standards on our secure, encrypted platform.",
  },
  {
    num: "06",
    icon: "support",
    title: "24/7 Patient Support",
    description:
      "Our dedicated support team is available around the clock whenever you need assistance, ensuring a smooth and stress-free evaluation experience.",
  },
];
