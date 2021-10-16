import MainStyles from '../../styles/MainStyles.module.css';
import styles from './MoreAboutUs.module.css';
import { moreAboutUsData } from '../../data/data';
import Image from 'next/image';
import doctorImageDesktop from '../../public/images/group.jpg';

export default function MoreAboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={MainStyles.heading}>More About Us</h2>
        <p className={styles.section__text}>
          Our office, provides you with an estimate before each treatment so you
          can be financially prepared, whether it applies to full procedure or
          copayment.
        </p>
        <div className={styles.image_text__container}>
          <div className={styles.section__image}>
            <Image
              src={doctorImageDesktop}
              alt='doctor ellen'
              layout='responsive'
              className={styles.image}
            />
          </div>
          <ul className={styles.section__list}>
            {moreAboutUsData.map(({ id, text }) => (
              <li key={id} className={styles.section__list_item}>
                <p className={styles.section__list_item_text}>
                  <span className={styles.section__list_item_text_span}>
                    &#10003;
                  </span>{' '}
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
