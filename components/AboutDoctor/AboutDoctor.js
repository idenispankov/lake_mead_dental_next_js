/* eslint-disable react/no-unescaped-entities */
import styles from './AboutDoctor.module.css';
import Button from '../Button/Button';
import Image from 'next/image';
import doctorImageDesktop from '../../public/images/doctors/dr_ellen.jpg';

export default function MeetDoctor() {
  return (
    <section className={styles.section}>
      <div className={styles.section__container}>
        <span className={styles.section__container_image_dots} />
        <span className={styles.section__container_image_lines} />
        <div className={styles.section__container_image}>
          <Image
            src={doctorImageDesktop}
            alt='Doctor Ellen, Blonde woman, wearing glasses, standing and smiling in a dark dress'
            layout='responsive'
            className={styles.image}
            priority={true}
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
            dentistry and full mouth reconstruction. Learn More...
          </p>
          <Button
            linkTo='/meet-the-doctors'
            buttonText='Meet Our Doctors'
            customButtonStyles={styles.button}
          />
        </div>
      </div>
    </section>
  );
}
