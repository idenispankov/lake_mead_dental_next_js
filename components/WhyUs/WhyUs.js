import styles from './WhyUs.module.css';
import { whyChooseUsData } from '../../data/data';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__heading}>Why Choose Us</h2>
      <p className={styles.section__text}>
        Many Ways To Better Serve Our Community
      </p>
      <div className={styles.section__container}>
        <div className={styles.section__container_image_main}>
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
