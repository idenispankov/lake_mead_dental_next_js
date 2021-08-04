/* eslint-disable react/no-unescaped-entities */
import styles from './MeetOurDoctors.module.css';
import Image from 'next/image';
import doctorImage from '../../public/images/doctor_ellen_desktop.jpg';

export default function MeetOurDoctors() {
  return (
    <section className={styles.section}>
      <h1 className={styles.section__heading}>Meet The Doctors</h1>
      <div className={styles.section__container}>
        <div className={styles.image__container}>
          <Image
            src={doctorImage}
            alt='doctor'
            className={styles.section__image}
          />
        </div>
        <div className={styles.text__container}>
          <h2 className={styles.text__container_heading}>Meet Dr. Ellen</h2>
          <p className={styles.text__container_text}>
            <span className={styles.text__container_text_span}>
              Dr. Ellen Piyevsky, DDS
            </span>
            Lake Mead Dental & Wigwam Dental
          </p>
          <p className={styles.text__container_text}>
            Dr Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas 4 years after graduating and opened the doors of Wigwam
            Dental Care and Lake Mead Dental. Since then, she has been providing
            quality dentistry to every single one of her patients. Her passion
            for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={styles.text__container_text}>
            Dr. Ellen says: "Our mission is to provide our patients with the
            most positive dental experience possible, combined with personalized
            care in a modern, comfortable environment. This is achieved through
            our ongoing commitment to continuing education in the latest dental
            materials and techniques. We cater to the individual patient with
            the utmost concern for their dental health, as well as their overall
            health. We take the time to educate and inform our patients and
            offer treatment options tailored to your individual needs and
            desires.
          </p>
        </div>
      </div>
      <div className={styles.section__container}>
        <div className={styles.image__container}>
          <Image
            src={doctorImage}
            alt='doctor'
            className={styles.section__image}
          />
        </div>
        <div className={styles.text__container}>
          <h2 className={styles.text__container_heading}>Meet Dr. Ellen</h2>
          <p className={styles.text__container_text}>
            <span className={styles.text__container_text_span}>
              Dr. Ellen Piyevsky, DDS
            </span>
            Lake Mead Dental & Wigwam Dental
          </p>
          <p className={styles.text__container_text}>
            Dr Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas 4 years after graduating and opened the doors of Wigwam
            Dental Care and Lake Mead Dental. Since then, she has been providing
            quality dentistry to every single one of her patients. Her passion
            for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={styles.text__container_text}>
            Dr. Ellen says: "Our mission is to provide our patients with the
            most positive dental experience possible, combined with personalized
            care in a modern, comfortable environment. This is achieved through
            our ongoing commitment to continuing education in the latest dental
            materials and techniques. We cater to the individual patient with
            the utmost concern for their dental health, as well as their overall
            health. We take the time to educate and inform our patients and
            offer treatment options tailored to your individual needs and
            desires.
          </p>
        </div>
      </div>
      <div className={styles.section__container}>
        <div className={styles.image__container}>
          <Image
            src={doctorImage}
            alt='doctor'
            className={styles.section__image}
          />
        </div>
        <div className={styles.text__container}>
          <h2 className={styles.text__container_heading}>Meet Dr. Ellen</h2>
          <p className={styles.text__container_text}>
            <span className={styles.text__container_text_span}>
              Dr. Ellen Piyevsky, DDS
            </span>
            Lake Mead Dental & Wigwam Dental
          </p>
          <p className={styles.text__container_text}>
            Dr Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas 4 years after graduating and opened the doors of Wigwam
            Dental Care and Lake Mead Dental. Since then, she has been providing
            quality dentistry to every single one of her patients. Her passion
            for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={styles.text__container_text}>
            Dr. Ellen says: "Our mission is to provide our patients with the
            most positive dental experience possible, combined with personalized
            care in a modern, comfortable environment. This is achieved through
            our ongoing commitment to continuing education in the latest dental
            materials and techniques. We cater to the individual patient with
            the utmost concern for their dental health, as well as their overall
            health. We take the time to educate and inform our patients and
            offer treatment options tailored to your individual needs and
            desires.
          </p>
        </div>
      </div>
    </section>
  );
}
