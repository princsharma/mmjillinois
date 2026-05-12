"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Reveal from "@/components/Reveal/Reveal";
import { FAQS } from "@/data/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <svg
        className={styles.deco}
        width="600"
        height="600"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M200 20C200 20 40 80 40 200C40 310 110 380 200 380C290 380 360 310 360 200C360 80 200 20 200 20Z"
          fill="#52b788"
        />
      </svg>
      <Reveal className={styles.inner}>
        <SectionHeader
          tag="FAQ"
          title={
            <span id="faq-title">Frequently Asked Questions</span>
          }
          description="Everything you need to know about getting your medical marijuana card in Illinois."
        />
        <div className={styles.list}>
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;
            return (
              <div
                key={item.question}
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={styles.btn}
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  {item.question}
                  <span className={styles.qIcon} aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={styles.body}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
