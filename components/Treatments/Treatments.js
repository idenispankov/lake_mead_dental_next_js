import styles from './Treatments.module.css';

export default function Treatments() {
  return (
    <section className={styles.section}>
      <div className={styles.section__background_image}>
        <div className={styles.section__background_overlay}>
          <h2 className={styles.section__heading}>Our Treatments</h2>
          <p className={styles.section__text}>
            Many ways to better serve our Summerlin, Las Vegas Community
          </p>
        </div>
      </div>
    </section>
  );
}
