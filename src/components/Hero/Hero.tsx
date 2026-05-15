import Link from "next/link";
import HeroForm from "@/forms/HeroForm/HeroForm";
import HeroParticles from "@/components/HeroParticles/HeroParticles";
import Icon from "@/components/Icon/Icon";
import { HERO_TRUST } from "@/data/trust";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <HeroParticles />
      <svg
        className={styles.bgCircles}
        viewBox="0 0 1440 900"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="1100" cy="300" r="350" fill="#52b788" />
        <circle cx="200" cy="700" r="200" fill="#52b788" />
        <circle cx="700" cy="100" r="120" fill="#e9c46a" />
      </svg>

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.pulseDot} aria-hidden="true" />
            Illinois Licensed Physicians · State Compliant
          </div>
          <h1 className={styles.title} id="hero-title">
            Apply for an <em>Illinois</em>
            <br />
            Medical{" "}
            <span className={styles.underlineText}>Marijuana Card</span>
            <br />
            Online Today
          </h1>
          <p className={styles.desc}>
            Get evaluated by a licensed Illinois medical marijuana doctor
            through our secure telehealth platform. Attend your evaluation
            conveniently from home. Our process is fully compliant with the
            Illinois Medical Cannabis Patient Program and meets all
            state-required guidelines for physician certification.
          </p>
          <div className={styles.trustRow}>
            {HERO_TRUST.map((chip) => (
              <div key={chip.label} className={styles.trustChip}>
                <Icon name={chip.icon} size={15} strokeWidth={2.5} />
                {chip.label}
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Link
              href="#hero-form"
              className={styles.btnHero}
              title="Start your Medical Marijuana Card Illinois application"
            >
              <Icon name="calendar" size={20} strokeWidth={2.5} />
              Start My Evaluation Now
            </Link>
            <Link
              href="#how-it-works"
              className={styles.btnGhost}
              title="How to get a Medical Marijuana Card Illinois online"
            >
              How it works
              <Icon name="chevron-down" size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <HeroForm />
          <div className={styles.floatingBadge} aria-hidden="true">
            <Icon name="check" size={22} strokeWidth={2.5} />
            <div>
              <div className={styles.fbTitle}>98% Approval Rate</div>
              <div className={styles.fbSub}>5,000+ patients served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
