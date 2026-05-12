import Link from "next/link";
import { SITE } from "@/constants/site";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { href: "#", label: "Terms & Conditions" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "HIPAA Notice" },
  { href: "#", label: "Sitemap" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <p>
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        <br />
        This service is fully compliant with the Illinois Medical Cannabis
        Patient Program and meets all state-required guidelines for physician
        certification.
        <br />
        {FOOTER_LINKS.map((link, idx) => (
          <span key={link.label}>
            <Link href={link.href}>{link.label}</Link>
            {idx < FOOTER_LINKS.length - 1 ? " · " : null}
          </span>
        ))}
      </p>
    </footer>
  );
}
