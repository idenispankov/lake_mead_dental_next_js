import styles from '../styles/Button.module.css';
import Link from 'next/link';

export default function Button({ linkTo, buttonText, customButtonStyles }) {
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
