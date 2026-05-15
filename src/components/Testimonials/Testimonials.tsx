import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <Reveal>
          <SectionHeader
            tag="Patient Reviews"
            title={
              <span id="testimonials-title">Hear from Patients Like You</span>
            }
            description="See how patients describe their experience, from clear guidance to feeling supported at every step of the evaluation."
          />
        </Reveal>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.1}>
              <article className={styles.card} aria-labelledby={`testimonial-${idx}-name`}>
                <div
                  className={styles.stars}
                  role="img"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className={styles.text}>“{t.text}”</blockquote>
                <div className={styles.divider} />
                <footer className={styles.person}>
                  <div className={styles.ava} aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <h3 id={`testimonial-${idx}-name`} className={styles.name}>
                      {t.name}
                    </h3>
                    <div className={styles.loc}>
                      <Icon name="pin" size={12} strokeWidth={2} />
                      {t.location}
                    </div>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
