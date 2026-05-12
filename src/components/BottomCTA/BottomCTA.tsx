import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { CTA_CHIPS } from "@/data/trust";
import styles from "./BottomCTA.module.css";

export default function BottomCTA() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <svg
        className={styles.deco}
        viewBox="0 0 1440 800"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M720 -100C720 -100 200 100 100 400C0 700 300 850 720 850C1140 850 1440 700 1340 400C1240 100 720 -100 720 -100Z"
          fill="#52b788"
        />
      </svg>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <Icon name="calendar" size={14} strokeWidth={2.5} />
          Get Started Today
        </div>
        <h2 id="cta-title" className={styles.title}>
          Consult with Your
          <br />
          Doctor Today
        </h2>
        <p className={styles.desc}>
          Attend a secure online consultation with an experienced Illinois
          medical cannabis physician. Same-day appointments available — no
          in-person visits required, 100% online process.
        </p>
        <div className={styles.chips}>
          {CTA_CHIPS.map((chip) => (
            <div key={chip.label} className={styles.chip}>
              <Icon name={chip.icon} size={16} strokeWidth={2.5} />
              {chip.label}
            </div>
          ))}
        </div>
        <Link href="#hero-form" className={styles.btn}>
          <Icon name="calendar" size={20} strokeWidth={2.5} />
          Book Your Appointment Now
        </Link>
      </div>
    </section>
  );
}
