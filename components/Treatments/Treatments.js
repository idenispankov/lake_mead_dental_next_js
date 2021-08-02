/* eslint-disable react/no-unescaped-entities */
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
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.emergency}`}></div>
          <h3 className={styles.list__heading}>Emergency</h3>
          <p className={styles.list__text}>
            We offer same-day emergency appointments!
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.dentures}`}></div>
          <h3 className={styles.list__heading}>Dentures</h3>
          <p className={styles.list__text}>
            There are several types of partial dentures that are available to
            patients
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.implants}`}></div>
          <h3 className={styles.list__heading}>Implants</h3>
          <p className={styles.list__text}>
            Dental implants are replacement tooth roots made of titanium
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.whitening}`}></div>
          <h3 className={styles.list__heading}>Teeth Whitening</h3>
          <p className={styles.list__text}>
            Many whitening options, from toothpastes to professional solutions
            such as Zoom
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.cosmetics}`}></div>
          <h3 className={styles.list__heading}>Cosmetics</h3>
          <p className={styles.list__text}>
            We make your dream smile a reality using modern dental techniques
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.crown}`}></div>
          <h3 className={styles.list__heading}>Crown & Bridges</h3>
          <p className={styles.list__text}>
            A crown is usually used to protect the tooth from a fracture
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.filling}`}></div>
          <h3 className={styles.list__heading}>Dental Filling</h3>
          <p className={styles.list__text}>
            A filling is a way to restore a decayed tooth to bring it back to
            its normal shape and function
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.cleaning}`}></div>
          <h3 className={styles.list__heading}>Dental Cleaning</h3>
          <p className={styles.list__text}>
            We provide thorough dental cleanings, offering regular teeth
            cleaning and deep cleaning
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.root_canal}`}></div>
          <h3 className={styles.list__heading}>Root Canal</h3>
          <p className={styles.list__text}>
            The inflamed or infected nerve is removed and the inside of the
            tooth is carefully cleaned and disinfected
          </p>
        </li>
      </ul>
    </section>
  );
}
