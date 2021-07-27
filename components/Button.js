import styles from '../styles/Button.module.css';
import Link from 'next/link';

export default function Button({ linkTo, customButtonStyles, buttonText }) {
  return (
    <Link href={`${linkTo}`}>
      <a>
        <button className={`${styles.button} ${customButtonStyles}`}>
          {buttonText}
        </button>
      </a>
    </Link>
  );
}
