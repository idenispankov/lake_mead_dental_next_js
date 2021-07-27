/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/MeetDoctor.module.css';
import Button from './Button';

export default function MeetDoctor() {
  return (
    <section className={styles.section}>
      <div className={styles.section__image}></div>
      <div className={styles.section__text_container}>
        <h3 className={styles.section__heading}>Meet Dr. Ellen</h3>
        <p className={styles.section__text}>
          <span className={styles.section__text_span}>
            Dr. Ellen Piyevsky, DDS
          </span>
          Lake Mead Dental & Wigwam Dental
        </p>
        <p className={styles.section__text}>
          Dr Ellen graduated from USC School of Dentistry in 1995. She moved to
          Las Vegas 4 years after graduating and opened the doors of Wigwam
          Dental Care and Lake Mead Dental. Since then, she has been providing
          quality dentistry to every single one of her patients. Her passion for
          art and sculpture guides her into her love for cosmetic dentistry and
          full mouth reconstruction.
        </p>
        <p className={styles.section__text}>
          Dr Ellen says: "Our mission is to provide our patients with the most
          positive dental experience possible, combined with personalized care
          in a modern, comfortable environment. Learn More...
        </p>
        <Button linkTo='meet-the-doctors' buttonText='Meet Our Doctors' />
      </div>
    </section>
  );
}
