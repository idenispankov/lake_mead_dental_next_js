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
            We Are Providers For Most Major Insurance Companies
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
      <p className={styles.insurance__text}>
        ​Insurance Plans In Las Vegas & Henderson:{' '}
      </p>
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
      <div className={styles.options__container}>
        <h2 className={styles.options__heading}>
          What are the Differences between Insurance Options
        </h2>
        <p className={styles.options__text}>
          Insurances divide into Indemnity plans, PPO plans, Self-funded plans,
          and HMO plans.{' '}
        </p>
        <h2 className={styles.options__heading}>Indemnity</h2>
        <p className={styles.options__text}>
          Plans that do not have any particular fee schedule for covered
          procedures. Prices and copayments for procedures depend on the fees
          charged by each particular dentist. There is no restriction on the
          choice of dentist; however, some dentists might ask for a payment from
          the patient and then provide the patient with special forms to be
          reimbursed by the insurance company.{' '}
        </p>
        <h2 className={styles.options__heading}>PPO</h2>
        <p className={styles.options__text}>
          PPO plans have a panel of dentists who are preferred providers for
          that particular insurance. Fees for each covered procedure are
          contracted between the insurance company and dentist, which is usually
          much lower than dentists’ customary fees. Therefore, copayments for
          the same procedures do not vary among dentists in the same geographic
          area and are much lower if the procedure is done at the preferred
          provider office. A list of providers can be found on the insurance
          company website. Our Dental Offices in Las Vegas and Henderson are
          providers for all PPO plans.{' '}
        </p>
        <h2 className={styles.options__heading}>Self-funded</h2>
        <p className={styles.options__text}>
          plans are usually based on the individual union. Most of these plans
          choose their own coverage for each procedure and use various insurance
          companies as their administrators. Most of these plans are PPO plans;
          however, these particular plans can only be used at preferred provider
          offices. We are proud to inform that we have a special contract with
          UNIONS 14, 711, AND 986, RESULTING IN ZERO COPAYMENTS TO THE PATIENT
          FOR COVERED PROCEDURES WITHIN THE YEARLY MAXIMUM PROVIDED BY UNION.
          <br />
          <br />
          Who knows better what insurance plan is most favorable for a patient’s
          needs, given the option, than the staff that has dealt with dental
          insurance for years. PLEASE DO NOT HESITATE TO MAKE AN APPOINTMENT
          WITH OUR OFFICE MANAGER OR ONE OF OUR TREATMENT COORDINATORS TO
          DISCUSS THE BEST OPTION FOR EACH INDIVIDUAL TREATMENT PLAN.{' '}
        </p>
      </div>
    </section>
  );
}
