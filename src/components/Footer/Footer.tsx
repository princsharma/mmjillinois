import Link from "next/link";
import { NAV_LINKS, SITE } from "@/constants/site";
import styles from "./Footer.module.css";

const LEGAL_LINKS = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "HIPAA Notice" },
  { href: "#", label: "Sitemap" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="#top" className={styles.logo} aria-label={`${SITE.name} home`}>
              <svg
                className={styles.logoIcon}
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  fill="rgba(82,183,136,0.12)"
                  stroke="rgba(82,183,136,0.3)"
                  strokeWidth="1"
                />
                <path
                  d="M20 6C20 6 10 12 10 21C10 27.6 14.5 33 20 33C25.5 33 30 27.6 30 21C30 12 20 6 20 6Z"
                  fill="#52b788"
                  opacity="0.7"
                />
                <path
                  d="M20 10C20 10 14 15 14 21C14 24.8 16.7 28 20 28C23.3 28 26 24.8 26 21C26 15 20 10 20 10Z"
                  fill="#95d5b2"
                />
                <line x1="20" y1="16" x2="20" y2="31" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="22" x2="17" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="26" x2="23" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {SITE.shortName}
            </Link>
            <p className={styles.tagline}>
              Connect with licensed Illinois physicians for your medical
              marijuana card evaluation — secure, fast, and fully compliant
              with the Illinois Medical Cannabis Patient Program.
            </p>
            <a href={`mailto:${SITE.email}`} className={styles.email}>
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
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Legal</h3>
            <ul>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Get Started</h3>
            <ul>
              <li>
                <Link href="#hero-form">Apply for MMJ Card</Link>
              </li>
              <li>
                <Link href="#pricing">View Pricing</Link>
              </li>
              <li>
                <Link href="#how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="#conditions">Qualifying Conditions</Link>
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
