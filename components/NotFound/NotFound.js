import MainStyles from '../../styles/MainStyles.module.css';
import styles from './NotFound.module.css';
import Image from 'next/image';
import image from '../../public/images/not_found.jpg';

export default function NotFound() {
  return (
    <section className={styles.section}>
      <h1 className={MainStyles.heading}>404 Page</h1>
      <div className={styles.image__container}>
        <Image
          src={image}
          alt='dental tools'
          width={700}
          height={300}
          layout='responsive'
          className={styles.image}
        />
      </div>
    </section>
  );
}
