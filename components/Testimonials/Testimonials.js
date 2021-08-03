import styles from './Testimonials.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import jamesImage from '../../public/images/testimonial_james.png';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__heading}>Our Happy Clients</h2>
      <p className={styles.section__text}>What clients says about us</p>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        showArrows={false}
      >
        <div className={styles.carousel__item}>
          <div className={styles.carousel__quotes}>&ldquo;</div>
          <div className={styles.image}>
            <Image src={jamesImage} alt='reviewer headshot' />
          </div>
          <div className={styles.text__container}>
            <h3 className={styles.carousel__heading}>James Anderson</h3>
            <p className={styles.carousel__text}>
              Excellent service, the personnel is exclusively professional. The
              dentist and his assistant are great!!!
            </p>
          </div>
        </div>

        <div className={styles.carousel__item}>
          <div className={styles.carousel__quotes}>&ldquo;</div>
          <div className={styles.image}>
            <Image src={jamesImage} alt='reviewer headshot' />
          </div>
          <div className={styles.text__container}>
            <h3 className={styles.carousel__heading}>Kyle Stone</h3>
            <p className={styles.carousel__text}>
              Really nice staff, great cleaning. I will definetly be coming
              back.
            </p>
          </div>
        </div>
        <div className={styles.carousel__item}>
          <div className={styles.carousel__quotes}>&ldquo;</div>
          <div className={styles.image}>
            <Image src={jamesImage} alt='reviewer headshot' />
          </div>
          <div className={styles.text__container}>
            <h3 className={styles.carousel__heading}>Evelyn Otero-Ruiz</h3>
            <p className={styles.carousel__text}>
              I am impressed by the professionalism and quality of work they do.
            </p>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
