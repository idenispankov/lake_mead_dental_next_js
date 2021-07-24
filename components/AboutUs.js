import styles from '../styles/AboutUs.module.css';
import Button from './Button';

export default function AboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.section__image}></div>
      <div className={styles.section__image_dots}></div>
      <div className={styles.section__text_container}>
        <h2 className={styles.section__text_container_heading}>
          Learn More About Us
        </h2>
        <p className={styles.section__text_container_text}>
          Our office, provides you with an estimate before each treatment so you
          can be financially prepared, whether it applies to full procedure or
          copayment. We gladly check and bill your insurance for each covered
          procedure. We accept all major credit cards: MasterCard, Visa ,
          Discover, American Express, and all debit cards. ​
        </p>
        <div className={styles.list__container}>
          <ul className={styles.list__container__list}>
            <li className={styles.list__item}>
              <span className={styles.list__item_span}>&radic;</span> 25 Years
              Of Experience
            </li>
            <li className={styles.list__item}>
              <span className={styles.list__item_span}>&radic;</span> Most
              Insurances Accepted
            </li>
            <li className={styles.list__item}>
              {' '}
              <span className={styles.list__item_span}>&radic;</span> 2nd
              Location in Green Valley, Henderson
            </li>
          </ul>
          <ul className={styles.list__container__list}>
            <li className={styles.list__item}>
              {' '}
              <span className={styles.list__item_span}>&radic;</span> Same Day
              Denture Repair
            </li>
            <li className={styles.list__item}>
              {' '}
              <span className={styles.list__item_span}>&radic;</span> Extended
              Hours
            </li>
            <li className={styles.list__item}>
              {' '}
              <span className={styles.list__item_span}>&radic;</span> In House
              Financing
            </li>
          </ul>
        </div>
        <Button
          linkTo='/insurance'
          buttonText='COVID-19 Office Sterilization Protocols'
        />
      </div>
    </section>
  );
}
