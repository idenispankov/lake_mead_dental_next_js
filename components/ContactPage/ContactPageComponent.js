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
        {/* <div className={styles.map}></div> */}
        {/* <div className={styles.map}> */}
        <div>
          <iframe
            className={styles.map}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3219.80378237509!2d-115.25890964841449!3d36.19565360909538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0232bbba33d%3A0xdcaba2301eb4969e!2sLake%20Mead%20Dental!5e0!3m2!1sen!2sus!4v1631912052151!5m2!1sen!2sus'
          ></iframe>
        </div>
      </section>
      <ContactUs />
    </>
  );
}
