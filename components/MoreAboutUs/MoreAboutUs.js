import styles from './MoreAboutUs.module.css';

export default function MoreAboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <h2 className={styles.section__heading}>More About Us</h2>
        <p className={styles.section__text}>
          Our office, provides you with an estimate before each treatment so you
          can be financially prepared, whether it applies to full procedure or
          copayment.
        </p>
        <div className={styles.image_text__container}>
          <div className={styles.section__image}></div>

          <ul className={styles.section__list}>
            <li className={styles.section__list_item}>
              <p className={styles.section__list_item_text}>
                <span className={styles.section__list_item_text_span}>
                  &#187;
                </span>{' '}
                25 years of experience
              </p>
            </li>
            <li className={styles.section__list_item}>
              <p className={styles.section__list_item_text}>
                <span className={styles.section__list_item_text_span}>
                  &#187;
                </span>{' '}
                Same-day denture repair
              </p>
            </li>
            <li className={styles.section__list_item}>
              <p className={styles.section__list_item_text}>
                <span className={styles.section__list_item_text_span}>
                  &#187;
                </span>{' '}
                Most insurances accepted
              </p>
            </li>
            <li className={styles.section__list_item}>
              <p className={styles.section__list_item_text}>
                <span className={styles.section__list_item_text_span}>
                  &#187;
                </span>{' '}
                Extended hours
              </p>
            </li>
            <li className={styles.section__list_item}>
              <p className={styles.section__list_item_text}>
                <span className={styles.section__list_item_text_span}>
                  &#187;
                </span>{' '}
                Second location in Henderson
              </p>
            </li>
            <li className={styles.section__list_item}>
              <p className={styles.section__list_item_text}>
                <span className={styles.section__list_item_text_span}>
                  &#187;
                </span>{' '}
                In-House financing
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
