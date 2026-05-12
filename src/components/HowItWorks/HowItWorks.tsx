import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { STEPS } from "@/data/steps";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section
      className={styles.section}
      id="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <svg
        className={styles.deco}
        viewBox="0 0 1440 800"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M720 50 C720 50 300 100 200 400 C100 700 400 750 720 750 C1040 750 1340 700 1240 400 C1140 100 720 50 720 50Z"
          fill="#52b788"
        />
      </svg>
      <Reveal>
        <div className={styles.headerWrap}>
          <SectionHeader
            variant="dark"
            tag="Simple Process"
            title={
              <span id="how-it-works-title">
                How to Get an Illinois
                <br />
                Medical Marijuana Card Online
              </span>
            }
            description="Get your medical marijuana evaluation with our licensed physicians before proceeding with state registration through the Illinois Department of Health (IDPH)."
          />
        </div>
      </Reveal>
      <div className={styles.gridWrap}>
        <div className={styles.line} aria-hidden="true" />
        <ol className={styles.grid}>
          {STEPS.map((step) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.bubble}>
                <Icon name={step.icon} size={30} strokeWidth={2.5} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.cta}>
        <Link href="#hero-form" className={styles.btn}>
          Consult With an IL MMJ Doctor
          <Icon name="arrow-right" size={18} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
