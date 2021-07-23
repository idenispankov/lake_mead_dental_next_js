import flexContainerStyles from '../styles/FlexContainer.module.css';

export default function FlexContainer({ optionalClass, children }) {
  return (
    <div className={`${flexContainerStyles.container} ${optionalClass}`}>
      {children}
    </div>
  );
}
