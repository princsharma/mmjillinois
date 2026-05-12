export type RenewalStep = {
  num: number;
  icon: "login" | "doc" | "check";
  title: string;
  description: string;
};

export const RENEWAL_STEPS: RenewalStep[] = [
  {
    num: 1,
    icon: "login",
    title: "Login Your Patient Portal",
    description:
      "Log in to your Illinois Medical Cannabis Patient Program account and begin your renewal application before your card expires.",
  },
  {
    num: 2,
    icon: "doc",
    title: "Update Certification (If Required)",
    description:
      "If your physician certification has expired, consult with a licensed Illinois medical marijuana doctor to renew your eligibility.",
  },
  {
    num: 3,
    icon: "check",
    title: "Submit Renewal Application",
    description:
      "Complete your renewal application online, pay the state fee ($50–$125), and submit it for approval to keep your card active.",
  },
];
