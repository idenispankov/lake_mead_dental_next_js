import styles from '../styles/FlexContainer.module.css';

export default function FlexContainer({ optionalClass, children }) {
  return (
    <div className={`${styles.container} ${optionalClass}`}>{children}</div>
  );
}
