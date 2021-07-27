import styles from '../styles/Header.module.css';
import Button from './Button';

export default function Header() {
  return (
    // <div className={styles.banner}>Banner</div>
    <div className={styles.header__banner}>
      <div className={styles.header__banner_overlay}>
        <h1 className={styles.header__banner_heading}>
          Own a Smile You Love to Share.
        </h1>
        <p className={styles.header__banner_text}>
          {`Your Family Dentist In Summerlin, Las Vegas . We're Open During
              Quarantine - We're Here For You!`}
        </p>
        <Button
          linkTo='/'
          buttonText='Browse Services'
          customButtonStyles={styles.button}
        />
      </div>
    </div>
  );
}
