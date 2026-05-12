"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroParticles.module.css";

const PARTICLE_COUNT = 18;

type ParticleSpec = {
  size: number;
  left: number;
  duration: number;
  delay: number;
};

function buildParticles(): ParticleSpec[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    size: Math.random() * 80 + 20,
    left: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
  }));
}

export default function HeroParticles() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const particles = buildParticles();
    const frag = document.createDocumentFragment();
    for (const p of particles) {
      const el = document.createElement("div");
      el.className = styles.particle;
      el.style.width = `${p.size}px`;
      el.style.height = `${p.size}px`;
      el.style.left = `${p.left}%`;
      el.style.animationDuration = `${p.duration}s`;
      el.style.animationDelay = `${p.delay}s`;
      frag.appendChild(el);
    }
    node.appendChild(frag);
    return () => {
      node.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.particles}
      aria-hidden="true"
    />
  );
}
