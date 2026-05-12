import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { CONDITIONS } from "@/data/conditions";
import styles from "./Conditions.module.css";

export default function Conditions() {
  return (
    <section
      className={styles.section}
      id="conditions"
      aria-labelledby="conditions-title"
    >
      <Reveal>
        <div className={styles.headerRow}>
          <div>
            <SectionHeader
              align="left"
              tag="Eligibility"
              title={
                <span id="conditions-title">
                  Qualifying Conditions for a Medical Marijuana Card in
                  Illinois
                </span>
              }
              description="To be eligible, you must have at least one of the debilitating conditions listed below, as defined in the Compassionate Use of Medical Cannabis Pilot Program Act."
            />
          </div>
          <div className={styles.highlight}>
            <div className={styles.highlightIcon}>
              <Icon name="shield-check" size={24} />
            </div>
            <div>
              <h4>Not sure if you qualify?</h4>
              <p>
                Our licensed doctors will review your medical history during the
                consultation and confirm your eligibility based on your specific
                condition.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 className={styles.subheading}>Approved Conditions Include:</h3>
        <ul className={styles.grid}>
          {CONDITIONS.map((cond) => (
            <li key={cond.name} className={styles.pill}>
              <span className={styles.icon}>
                <Icon name={cond.variant} size={12} strokeWidth={2.5} />
              </span>
              {cond.name}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
