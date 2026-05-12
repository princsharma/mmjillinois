export type Benefit = {
  icon: "tag" | "home" | "store" | "shield-check";
  title: string;
  description: string;
  tag: string;
};

export const BENEFITS: Benefit[] = [
  {
    icon: "tag",
    title: "Lower Taxes on Purchases",
    description:
      "Medical cannabis in Illinois is taxed at just 1%–2.25% and is exempt from 10%–25% excise taxes, making it significantly more affordable than recreational purchases.",
    tag: "Save More",
  },
  {
    icon: "home",
    title: "Home Cultivation Rights",
    description:
      "Registered patients are allowed to grow up to five cannabis plants at home for personal medical use, as permitted by Illinois law.",
    tag: "Grow at Home",
  },
  {
    icon: "store",
    title: "Licensed Dispensaries",
    description:
      "Patients can purchase lab-tested medical cannabis products from state-licensed dispensaries across Illinois.",
    tag: "Statewide Access",
  },
  {
    icon: "shield-check",
    title: "Legal Protection",
    description:
      "A valid Illinois medical marijuana card allows patients to legally purchase, possess, and use cannabis for approved conditions in compliance with state regulations.",
    tag: "Legally Protected",
  },
];
