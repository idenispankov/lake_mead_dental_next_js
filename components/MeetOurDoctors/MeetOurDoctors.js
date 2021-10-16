/* eslint-disable react/no-unescaped-entities */
import MainStyles from '../../styles/MainStyles.module.css';
import styles from './MeetOurDoctors.module.css';
import Image from 'next/image';
import drEllen from '../../public/images/doctors/dr_ellen.jpg';
import doctorNikki from '../../public/images/doctors/dr_nikki.jpg';

export default function MeetOurDoctors() {
  return (
    <section className={styles.section}>
      <h1 className={MainStyles.heading}>Meet The Doctors</h1>
      <div className={styles.section__container}>
        <div className={styles.image__container}>
          <Image
            src={drEllen}
            alt='Doctor Ellen, Blonde woman, wearing pink-framed glasses, standing and smiling in a dark dress'
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
            src={doctorNikki}
            alt='Doctor Nikki Norton, Blonde with blu-ish hair woman, wearing white medical long sleve dress, sitting and smiling'
            className={styles.section__image}
          />
        </div>
        <div className={styles.text__container}>
          <h2 className={styles.text__container_heading}>
            Meet Dr. Nikki Norton
          </h2>
          <p className={styles.text__container_text}>
            <span className={styles.text__container_text_span}>
              Dr. Nikki Norton
            </span>
            Lake Mead Dental
          </p>
          <p className={styles.text__container_text}>
            Dr. Nikki Norton was born and raised in Las Vegas. She attended UNLV
            School of Dental Medicine and was the first graduating class, which
            was in 2006. Dr. Norton says that she has always wanted to be a
            dentist and has a cartoon that she drew at the age of four showing
            her taking a tooth out of a man that was in pain and making him feel
            better. That is still her dental philosophy: to make patients feel
            better. “I went into the dental field to help people. Whether you
            are in pain and need relief or embarrassed about your teeth and need
            my help to give you an amazing smile that will help you be more
            confident, I will be that dentist. I will be the one to make you
            feel better.”
          </p>
          <p className={styles.text__container_text}>
            When not working, you will find Dr. Norton with her two dogs always
            by her side. She loves to read and will go nowhere without a book or
            pen. Her Jeeps take her and the pups off-roading, camping, and to
            great hiking places. An avid outdoors girl from infancy, she is just
            as comfortable being outside as in and loves the solitude and beauty
            that you can find in nature.
          </p>
        </div>
      </div>
    </section>
  );
}
