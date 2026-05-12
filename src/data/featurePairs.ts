import type { IconName } from "@/components/Icon/Icon";

export type FeaturePair = {
  icon: IconName;
  title: string;
  subtitle: string;
};

export const CONNECT_DOCTOR_FEATURES: FeaturePair[] = [
  {
    icon: "clock",
    title: "24 Hour Appointments",
    subtitle: "Quick Scheduling Available",
  },
  {
    icon: "lock",
    title: "100% Confidential",
    subtitle: "HIPAA-compliant Platform",
  },
  {
    icon: "user",
    title: "Licensed Doctors",
    subtitle: "Board-Certified Physicians",
  },
];

export const BOTTOM_CTA_FEATURES: FeaturePair[] = [
  {
    icon: "clock",
    title: "Same-Day Appointments",
    subtitle: "Get started immediately with our flexible scheduling",
  },
  {
    icon: "monitor",
    title: "100% Online Process",
    subtitle: "No in-person visits required",
  },
  {
    icon: "user",
    title: "Licensed Physicians",
    subtitle: "Board-Certified medical marijuana doctors",
  },
];
