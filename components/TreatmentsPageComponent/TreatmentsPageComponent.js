import Image from 'next/image';
import MainStyles from '../../styles/MainStyles.module.css';
import styles from './TreatmentsPageComponent.module.css';
import Treatments from '../../components/Treatments/Treatments';
import drEllen from '../../public/images/treatments_main_1.jpg';

export default function TreatmentsPageComponent() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__container}>
          <div className={styles.heading__container}>
            <h2 className={MainStyles.heading}>Our Treatments</h2>
            <h3 className={styles.section__subheading}>
              Many ways to better serve our Summerlin, Las Vegas Community
            </h3>
            <p className={styles.section__text}>
              We want you to feel like you are part of our family. We strive to
              create a comfortable, personal environment where we get to know
              each and every patient. Every detail of our dental office is
              designed for you, from our friendly dental team to our many
              amenities to make you feel at home.
            </p>
          </div>
          <div className={styles.image__container}>
            <Image
              src={drEllen}
              alt='Doctor Ellen, Blonde woman, wearing glasses, standing and smiling in a light-blue medical uniform'
              className={styles.image}
              priority={true}
            />
          </div>
        </div>
      </section>
      <Treatments />
    </>
  );
}
