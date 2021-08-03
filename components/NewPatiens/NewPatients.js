import styles from './NewPatients.module.css';
// import Button from '../Button/Button';
import Link from 'next/link';

export default function NewPatients() {
  return (
    <section className={styles.section}>
      <Link href='/patient_information_form_2.docx' download='docx'>
        <a className={styles.button}>New Patien Form</a>
      </Link>
      <div className={styles.header__container}>
        <h2 className={styles.section__heading}>Now Accepting New Patients</h2>
        <p className={styles.section__text}>
          Come experience a new kind of dental care, where you are always put
          first.
        </p>
        <div className={styles.section__image}>
          <span className={styles.section__circle}></span>
          <span className={styles.section__square}></span>
          <span className={styles.section__star_green}></span>
          <span className={styles.section__star_red_left}></span>
          <span className={styles.section__star_red_right}></span>
        </div>
      </div>
      <div className={styles.grid__container}>
        <div className={styles.grid__item_container}>
          <div className={`${styles.grid__item_image} ${styles.treat}`}></div>
          <h3 className={styles.grid__item_heading}>
            We Treat You As A Person
          </h3>
          <p className={styles.grid__item_text}>
            Our entire business is based upon your complete satisfaction.
            Blending old fashioned service with state of the art technology. Our
            team takes the time to really get to know you.
          </p>
        </div>
      </div>

      <div className={styles.grid__container}>
        <div className={styles.grid__item_container}>
          <div
            className={`${styles.grid__item_image} ${styles.difference}`}
          ></div>
          <h3 className={styles.grid__item_heading}>We Make The Difference</h3>
          <p className={styles.grid__item_text}>
            Our doctors and assistants in Las Vegas & Henderson will explain
            every dental procedure, will answer any question you may have, and
            will address any concerns that may bother you.
          </p>
        </div>
      </div>

      <div className={styles.grid__container}>
        <div className={styles.grid__item_container}>
          <div className={`${styles.grid__item_image} ${styles.service}`}></div>
          <h3 className={styles.grid__item_heading}>
            We Provide the best service
          </h3>
          <p className={styles.grid__item_text}>
            Finding a dentist in Las Vegas and Henderson who cares for your
            teeth and mouth is vital to preserve your overall health and
            appearance.
          </p>
        </div>
      </div>
    </section>
  );
}
