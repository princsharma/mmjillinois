import Link from "next/link";
import Image from "next/image";
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
            <Link
              href="#top"
              className={styles.logo}
              aria-label={`${SITE.name} home`}
            >
              <Image
                src="/logo.webp"
                alt={SITE.name}
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
