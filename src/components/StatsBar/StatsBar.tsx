import Icon from "@/components/Icon/Icon";
import { STATS } from "@/data/stats";
import styles from "./StatsBar.module.css";

export default function StatsBar() {
  return (
    <section className={styles.bar} aria-label="Key statistics">
      <div className={styles.inner}>
        {STATS.map((stat) => (
          <div key={stat.label} className={styles.cell}>
            <div className={styles.icon}>
              <Icon name={stat.icon} size={28} strokeWidth={2} />
            </div>
            <span className={styles.num}>{stat.value}</span>
            <span className={styles.lbl}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
