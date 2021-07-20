import ButtonStyles from '../styles/Button.module.css';
import Link from 'next/link';

export default function Button({ buttonText, linkTo }) {
  return (
    <Link href={`${linkTo}`}>
      <a className={ButtonStyles.button} buttonText={buttonText}>
        {buttonText}
      </a>
    </Link>
  );
}
