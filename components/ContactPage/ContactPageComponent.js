import MainStyles from '../../styles/MainStyles.module.css';
import styles from './ContactPageComponent.module.css';
import Image from 'next/image';
import phoneIcon from '../../public/images/contact_phone_icon.svg';
import mapIcon from '../../public/images/contact_map_icon.svg';
import emailIcon from '../../public/images/contact_email_icon.svg';
import ContactUs from '../ContactUs/ContactUs';

export default function ContactPageComponent() {
  return (
    <>
      <section className={styles.section}>
        <h1 className={MainStyles.heading}>Contact Us</h1>
        <p className={styles.section__text}>
          We want you to feel like you are part of our family.
        </p>
        <div className={styles.container}>
          <div className={styles.overlay}>
            <h2 className={styles.container__heading}>
              Here are the three ways You can contact us
            </h2>
            <ul className={styles.container__list}>
              <li className={styles.container__list_item}>
                <div className={styles.icon}>
                  <Image src={phoneIcon} alt='phone icon' />
                </div>
                <p className={styles.list__text}>Phone Number</p>
                <a href='tel:7023041234' className={styles.contact__phone_link}>
                  (702) 304-1234
                </a>
              </li>
              <li className={styles.container__list_item}>
                <div className={styles.icon}>
                  <Image src={mapIcon} alt='phone icon' />
                </div>
                <p className={styles.list__text}>Postal Address</p>
                <p className={styles.contact__address}>
                  ​7481 W. Lake Mead blvd. Ste 100 Las Vegas, NV 89128
                </p>
              </li>
              <li className={styles.container__list_item}>
                <div className={styles.icon}>
                  <Image src={emailIcon} alt='phone icon' />
                </div>
                <p className={styles.list__text}>Email</p>
                <a
                  href='mailto:lakemeaddental@gmail.com'
                  className={styles.contact__email}
                >
                  lakemeaddental@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.map}></div>
      </section>
      <ContactUs />
    </>
  );
}
