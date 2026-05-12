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
      "Consult with a board-certified Illinois MMJ doctor online who is fully aligned with state medical cannabis regulations.",
  },
  {
    num: "02",
    icon: "clock",
    title: "Convenient Evaluations",
    description:
      "Our streamlined online consultation process allows you to complete your MMJ evaluation securely, with no delays and a hassle-free experience.",
  },
  {
    num: "03",
    icon: "home",
    title: "Trusted Platform",
    description:
      "Illinois residents count on us for professional medical marijuana evaluations delivered through a secure, dependable process.",
  },
  {
    num: "04",
    icon: "dollar",
    title: "Honest Pricing",
    description:
      "We provide clear, upfront pricing with no hidden fees, ensuring a transparent and trustworthy experience for Illinois patients.",
  },
  {
    num: "05",
    icon: "lock",
    title: "HIPAA-Compliant",
    description:
      "Our secure platform protects your personal and medical information in accordance with HIPAA privacy standards.",
  },
  {
    num: "06",
    icon: "support",
    title: "24/7 Patient Support",
    description:
      "Our dedicated support team is available whenever you need assistance, helping ensure a smooth and stress-free evaluation experience.",
  },
];
