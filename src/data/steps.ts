export type Step = {
  icon: "user" | "calendar" | "video" | "shield-check";
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    icon: "user",
    title: "Create Your Account",
    description:
      "Sign up and provide your basic information to begin your medical marijuana card Illinois evaluation process.",
  },
  {
    icon: "calendar",
    title: "Schedule Your Appointment",
    description:
      "Choose a convenient time to speak with our licensed medical cannabis doctor for your health evaluation.",
  },
  {
    icon: "video",
    title: "Attend MMJ Evaluation",
    description:
      "Consult with a licensed Illinois MMJ doctor through a secure video or audio consultation to review your medical history and determine eligibility based on qualifying conditions.",
  },
  {
    icon: "shield-check",
    title: "State Registration",
    description:
      "If approved, use your physician certification to apply through the Illinois Medical Cannabis Patient Program, pay the state fee of $50–$125 depending on card duration, and complete your medical cannabis card in Illinois application.",
  },
];
