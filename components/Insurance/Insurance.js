/* eslint-disable react/no-unescaped-entities */
import styles from './Insurance.module.css';
import { useState } from 'react';
import Image from 'next/image';
import imageMobile from '../../public/images/insurance_image_mobile.png';
import imageDesktop from '../../public/images/insurance_image_desktop.png';
import insuranceData, { inputsData } from '../../data/insuranceData';

export default function Insurance() {
  const [value, setValue] = useState([]);

  const handleClick = (e) => {
    console.log(e.target.value);
    setValue(insuranceData.filter((item) => item[0] === e.target.value));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image__container_mobile}>
          <Image
            src={imageMobile}
            alt='insurance'
            width={350}
            height={180}
            className={styles.image}
            layout='responsive'
          />
        </div>
        <div className={styles.image__container_desktop}>
          <Image
            src={imageDesktop}
            alt='insurance'
            width={565}
            height={502}
            className={styles.image}
            layout='responsive'
          />
        </div>
        <div className={styles.text__container}>
          <p className={styles.container__subheading}>Insurance/financing</p>
          <h1 className={styles.container__heading}>
            We Are Preferred Providers For The Following Insurance Plans In Las
            Vegas & Henderson :
          </h1>
          <p className={styles.container__text}>
            Who knows better than the staff that has dealt with dental insurance
            for years on what insurance plan is most favorable for a patient's
            needs, given the option? Do not hesitate to make an appointment with
            our office manager or one of our treatment coordinators to discuss
            the best option for each individual treatment plan.
          </p>
          <div className={styles.buttons__container}>
            <a href='tel:7023041234' className={styles.button}>
              Call Now Las Vegas
            </a>
            <a href='tel:7026173333' className={styles.button}>
              Call Now Green Valley
            </a>
          </div>
        </div>
      </div>
      <div className={styles.search__container}>
        {inputsData.map((item) => (
          <input
            key={item}
            className={styles.input}
            type='button'
            value={item}
            onClick={handleClick}
          />
        ))}
      </div>
      <ul className={styles.search__list}>
        {value.map((item) => (
          <li key={item} className={styles.list__item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
