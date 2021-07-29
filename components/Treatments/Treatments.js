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
            A Full Denture is a removable appliance that replaces all of the
            missing teeth in the same arch.
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.implants}`}></div>
          <h3 className={styles.list__heading}>Implants</h3>
          <p className={styles.list__text}>
            Talk to one of our professionals to see if dental implants are an
            option for you.
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.whitening}`}></div>
          <h3 className={styles.list__heading}>Teeth Whitening</h3>
          <p className={styles.list__text}>
            There are many whitening options, from toothpastes, rinses and
            strips, to professional solutions such as Zoom in-office and
            take-home whitening.
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.cosmetics}`}></div>
          <h3 className={styles.list__heading}>Cosmetics</h3>
          <p className={styles.list__text}>
            We specialize in porcelain and composite veneers, smile makeover,
            dental implants, ​and teeth whitening! Elegant White Smiles For a
            Lifetime
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.crown}`}></div>
          <h3 className={styles.list__heading}>Crown & Bridges</h3>
          <p className={styles.list__text}>
            A crown is usually used to protect the tooth from a fracture. The
            crown is usually custom made in a laboratory
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.filling}`}></div>
          <h3 className={styles.list__heading}>Dental Filling</h3>
          <p className={styles.list__text}>
            A filling is a way to restore a decayed tooth to bring it back to
            its normal shape and function. First we will remove the decayed
            area, clean it up, and then fill the clean area with a filling
            material.
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.cleaning}`}></div>
          <h3 className={styles.list__heading}>Dental Cleaning</h3>
          <p className={styles.list__text}>
            There are no excuses for not having clean teeth! We provide thorough
            dental cleanings offering regular teeth cleaning and deep cleaning.
            ​We clean and care for your gums with expertise like no other!
          </p>
        </li>
        <li className={styles.list__item}>
          <div className={`${styles.list__icon} ${styles.root_canal}`}></div>
          <h3 className={styles.list__heading}>Root Canal</h3>
          <p className={styles.list__text}>
            During root canals, or endodontic treatment, the inflamed or
            infected nerve is removed and the inside of the tooth is carefully
            cleaned and disinfected. That area is then filled and sealed with a
            rubber-like material.
          </p>
        </li>
      </ul>
    </section>
  );
}
