import styles from './NewPatients.module.css';
import Link from 'next/link';
import Image from 'next/image';
import mainImage from '../../public/images/new_patients_1.jpg';
import treatImage from '../../public/images/we_treat_you_1.jpg';
import differenceImage from '../../public/images/difference_1.jpg';
import serviceImage from '../../public/images/service_1.jpg';

export default function NewPatients() {
  return (
    <section className={styles.section}>
      <Link href='/new_patients_form.pdf' download='pdf'>
        <a target='_blank' rel='noreferrer noopener' className={styles.button}>
          New Patien Form
        </a>
      </Link>
      <div className={styles.header__container}>
        <div className={styles.header__text_container}>
          <h2 className={styles.section__heading}>
            Now Accepting New Patients
          </h2>
          <p className={styles.section__text}>
            Come experience a new kind of dental care, where you are always put
            first.
          </p>
        </div>
        <div className={styles.section__image}>
          <Image
            src={mainImage}
            alt='Two people are talking, happy customer and office representative'
            layout='responsive'
            className={styles.image}
            priority={true}
          />
          <span className={styles.section__circle}></span>
          <span className={styles.section__square}></span>
          <span className={styles.section__star_green}></span>
          <span className={styles.section__star_red_left}></span>
          <span className={styles.section__star_red_right}></span>
        </div>
      </div>
      <div className={styles.grid__container}>
        <div className={styles.grid__item_container}>
          <div className={`${styles.grid__item_image} ${styles.treat}`}>
            <Image
              src={treatImage}
              alt='Two people are talking, happy customer and office representative'
              layout='responsive'
              className={styles.image}
              priority={true}
            />
          </div>
          <h3 className={styles.grid__item_heading}>
            We Treat You As A Person
          </h3>
          <p className={styles.grid__item_text}>
            Our entire business is based upon your complete satisfaction.
            Blending old fashioned service with state of the art technology. Our
            team takes the time to really get to know you.
          </p>
        </div>

        <div className={styles.grid__item_container}>
          <div className={`${styles.grid__item_image} ${styles.difference}`}>
            <Image
              src={differenceImage}
              alt='Dental assistance in a process of a taking a X-ray for a patient'
              layout='responsive'
              className={styles.image}
              priority={true}
            />
          </div>
          <h3 className={styles.grid__item_heading}>We Make The Difference</h3>
          <p className={styles.grid__item_text}>
            Our doctors and assistants in Las Vegas & Henderson will explain
            every dental procedure, will answer any question you may have, and
            will address any concerns that may bother you.
          </p>
        </div>

        <div className={styles.grid__item_container}>
          <div className={`${styles.grid__item_image} ${styles.service}`}>
            <Image
              src={serviceImage}
              alt='A process of a dental procedure for a patient'
              layout='responsive'
              className={styles.image}
              priority={true}
            />
          </div>
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
