import link from 'next/link';
import Link from 'next/link';
import buttonStyles from '../styles/Button.module.css';

export default function Button({ linkTo, buttonText, customButtonStyles }) {
  return (
    <Link href={`${linkTo}`}>
      <a>
        <button className={`${buttonStyles.button} ${customButtonStyles}`}>
          {buttonText}
        </button>
      </a>
    </Link>
  );
}
