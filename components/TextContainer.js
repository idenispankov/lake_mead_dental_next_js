import styles from '../styles/TextContainer.module.css';

export default function TextContainer({ children }) {
  return <div className={styles.text__container}>{children}</div>;
}
