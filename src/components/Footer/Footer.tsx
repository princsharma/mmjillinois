import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/constants/site";
import styles from "./Footer.module.css";

const LEGAL_LINKS = [
  { href: "#", label: "Terms & Conditions", title: "Terms and Conditions" },
  { href: "#", label: "Privacy Policy", title: "Privacy Policy" },
  { href: "#", label: "HIPAA Notice", title: "HIPAA Notice" },
  { href: "#", label: "Sitemap", title: "Sitemap" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link
              href="#top"
              className={styles.logo}
              aria-label={`${SITE.name} home`}
              title={`${SITE.name} — back to top`}
            >
              <Image
                src="/logo.webp"
                alt={`${SITE.name} logo — Medical Marijuana Card Illinois online`}
                title={`${SITE.name} logo`}
                width={520}
                height={150}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.tagline}>
              Connect with licensed Illinois physicians for your medical
              marijuana card evaluation — secure, fast, and fully compliant
              with the Illinois Medical Cannabis Patient Program.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className={styles.email}
              title="Email our Medical Marijuana Card Illinois support team"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {SITE.email}
            </a>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} title={link.title}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Legal</h3>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} title={link.title}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Get Started</h3>
            <ul>
              <li>
                <Link
                  href="#hero-form"
                  title="Apply for your Medical Marijuana Card Illinois"
                >
                  Apply for MMJ Card
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  title="Medical Marijuana Card Illinois pricing"
                >
                  View Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  title="How to get a Medical Marijuana Card Illinois online"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#conditions"
                  title="Qualifying conditions for Medical Marijuana Card Illinois"
                >
                  Qualifying Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className={styles.compliance}>
            This service is fully compliant with the Illinois Medical Cannabis
            Patient Program and meets all state-required guidelines for
            physician certification.
          </p>
        </div>
      </div>
    </footer>
  );
}
