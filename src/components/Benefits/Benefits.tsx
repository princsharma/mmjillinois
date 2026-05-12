import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { BENEFITS } from "@/data/benefits";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <section className={styles.section} aria-labelledby="benefits-title">
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="Card Benefits"
            title={
              <span id="benefits-title">
                Benefits of Your Illinois
                <br />
                Medical Marijuana Card
              </span>
            }
            description="With a valid Illinois medical marijuana card, patients can access medical cannabis through state-licensed dispensaries under the Illinois Medical Cannabis Patient Program. The program ensures regulated access, physician oversight, and legal protection for qualifying patients."
          />
        </Reveal>
        <div className={styles.grid}>
          {BENEFITS.map((benefit, idx) => (
            <Reveal key={benefit.title} delay={idx * 0.1}>
              <article className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon name={benefit.icon} size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <span className={styles.tag}>{benefit.tag}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
