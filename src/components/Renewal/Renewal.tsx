import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { RENEWAL_STEPS } from "@/data/renewal";
import styles from "./Renewal.module.css";

export default function Renewal() {
  return (
    <section className={styles.section} aria-labelledby="renewal-title">
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="Card Renewal"
            title={
              <span id="renewal-title">
                How to Renew Your Illinois
                <br />
                Medical Marijuana Card
              </span>
            }
            description="Renewing your Illinois medical marijuana card is completed online through the state portal, helping you maintain uninterrupted access to medical cannabis."
          />
        </Reveal>
        <ol className={styles.grid}>
          {RENEWAL_STEPS.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.1}>
              <li className={styles.card}>
                <div className={styles.numBadge}>{step.num}</div>
                <div className={styles.icon}>
                  <Icon name={step.icon} size={20} strokeWidth={2.5} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
