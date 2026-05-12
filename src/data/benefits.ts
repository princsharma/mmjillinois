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
      "Medical cannabis in Illinois is taxed at just 1%–2.25% and exempt from 10%–25% excise taxes — significantly more affordable than recreational purchases.",
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
      "Purchase lab-tested medical cannabis products from state-licensed dispensaries across all of Illinois.",
    tag: "Statewide Access",
  },
  {
    icon: "shield-check",
    title: "Full Legal Protection",
    description:
      "A valid Illinois medical marijuana card allows patients to legally purchase, possess, and use cannabis for approved conditions in full compliance with state law.",
    tag: "Legally Protected",
  },
];
