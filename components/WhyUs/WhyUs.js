import MainStyles from '../../styles/MainStyles.module.css';
import styles from './WhyUs.module.css';
import { whyChooseUsData } from '../../data/data';
import Image from 'next/image';
import mainImage from '../../public/images/why_us_main_image_desktop.png';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <h2 className={MainStyles.heading}>Why Choose Us</h2>
      <p className={styles.section__text}>
        Many Ways To Better Serve Our Community
      </p>
      <div className={styles.section__container}>
        <div className={styles.section__container_image_main}>
          <Image
            src={mainImage}
            alt='doctor with paper and pen'
            layout='responsive'
            className={styles.image}
          />
          <div className={styles.section__container_image_left}></div>
          <div className={styles.section__container_image_right}></div>
          <div className={styles.section__container_background}></div>
        </div>
        <ul className={styles.section__container_list}>
          {whyChooseUsData.map(({ id, heading, text }) => (
            <li key={id} className={styles.section__container_list_item}>
              <h3 className={styles.section__container_list_item_heading}>
                {heading}
              </h3>
              <p className={styles.section__container_list_item_text}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
