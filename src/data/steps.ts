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
    title: "Schedule Appointment",
    description:
      "Choose a convenient time to speak with our licensed medical cannabis doctor for your health evaluation.",
  },
  {
    icon: "video",
    title: "Attend MMJ Evaluation",
    description:
      "Consult with a licensed Illinois MMJ doctor via secure video or audio to review your medical history and determine eligibility.",
  },
  {
    icon: "shield-check",
    title: "State Registration",
    description:
      "Use your physician certification to apply through the Illinois Medical Cannabis Patient Program and pay the state fee of $50–$125.",
  },
];
