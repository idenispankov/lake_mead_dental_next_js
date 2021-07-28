/* eslint-disable react/no-unescaped-entities */
import styles from './AboutDoctor.module.css';
import Button from '../Button/Button';

export default function MeetDoctor({
  sectionHeadingText,
  sectionText,
  sectionTextSpan,
  firstText,
  secondText,
  secondButtonStyle,
}) {
  return (
    <section>
      <div className={styles.section}>
        <span className={styles.section__image_dots} />
        <span className={styles.section__image_lines} />
        <div className={styles.section__image}></div>
        <div className={styles.section__text_container}>
          <h3 className={styles.section__heading}>{sectionHeadingText}</h3>
          <p className={styles.section__text}>
            <span className={styles.section__text_span}>{sectionText}</span>
            {sectionTextSpan}
          </p>
          <p className={styles.section__text}>{firstText}</p>
          <p className={styles.section__text}>{secondText}</p>
          <Button
            linkTo='/meet-the-doctors'
            buttonText='Meet Our Doctors'
            customButtonStyles={`${styles.button} ${secondButtonStyle}`}
          />
        </div>
      </div>
    </section>
  );
}
