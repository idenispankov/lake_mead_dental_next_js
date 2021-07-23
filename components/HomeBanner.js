import styles from '../styles/HomeBanner.module.css';
import Button from '../components/Button';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Own a Smile You Love to Share.</h1>
          <p className={styles.text}>
            {`Your Family Dentist In Summerlin, Las Vegas . We're Open During
              Quarantine - We're Here For You!`}
          </p>
          <Button linkTo='/contact-us' buttonText='Contact us' />
        </div>
      </div>
    </div>
  );
}
