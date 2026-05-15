import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { CERT_BADGES } from "@/data/trust";
import styles from "./Doctors.module.css";

const SPECIALTIES = [
  "Chronic Pain",
  "PTSD",
  "Fibromyalgia",
  "Arthritis",
  "Migraines",
  "+50 more",
];

export default function Doctors() {
  return (
    <section className={styles.section} aria-labelledby="doctors-title">
      <div className={styles.inner}>
        <Reveal direction="left" className={styles.illustration}>
          <div className={styles.visual}>
            <div className={styles.avatarRow}>
              <div className={styles.avatar} aria-hidden="true">
                DR
              </div>
              <div className={styles.info}>
                <h4>Dr. Rebecca S., M.D.</h4>
                <p>Illinois Medical Cannabis Specialist</p>
                <div className={styles.ratingRow}>
                  <span className={styles.stars} aria-label="Rated 4.9 out of 5 stars">
                    ★★★★★
                  </span>
                  <span className={styles.ratingTxt}>4.9 · 850+ consultations</span>
                </div>
              </div>
            </div>

            <div className={styles.consultBlock}>
              <div className={styles.liveRow}>
                <div className={styles.liveDot} aria-hidden="true" />
                <span className={styles.liveLabel}>Live Consultation Active</span>
              </div>
              <div className={styles.consultInner}>
                <Icon name="video" size={32} strokeWidth={2} />
                <span>Secure video consultation in progress</span>
              </div>
            </div>

            <div className={styles.specialties}>
              {SPECIALTIES.map((s) => (
                <span key={s} className={styles.specTag}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.statFloat}>
            <div className={styles.bigN}>24h</div>
            <div>
              <div className={styles.statTitle}>Avg. Turnaround</div>
              <small>Doctor approval time</small>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className={styles.text}>
          <SectionHeader
            align="left"
            tag="Our Medical Team"
            title={
              <span id="doctors-title">
                Expert Care from Licensed Illinois Medical Professionals
              </span>
            }
          />
          <p>
            Our network of experienced physicians specializes in medical
            cannabis evaluations to help patients obtain an Illinois medical
            marijuana card, ensuring every patient receives personalized
            attention and comprehensive guidance throughout the application
            process. Each doctor is fully licensed in Illinois and stays up to
            date with the latest state regulations.
          </p>
          <p>
            We understand that seeking medical cannabis treatment is a
            significant decision. That&apos;s why our doctors take the time to
            thoroughly review your medical history, answer all your questions,
            and provide clear recommendations based on your individual health
            needs and qualifying conditions.
          </p>
          <div className={styles.badges}>
            {CERT_BADGES.map((badge) => (
              <div key={badge.label} className={styles.badge}>
                <Icon name={badge.icon} size={16} strokeWidth={2.5} />
                {badge.label}
              </div>
            ))}
          </div>
          <Link
            href="#hero-form"
            className={styles.btn}
            title="Start your Medical Marijuana Card Illinois application"
          >
            Start Your Journey Today
            <Icon name="arrow-right" size={18} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
