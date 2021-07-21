import landscapeModeStyles from '../styles/LandscapeMode.module.css';

export default function LandscapeMode() {
  return (
    <div className={landscapeModeStyles.container}>
      <h2 className={landscapeModeStyles.text}>
        Please return you smartphone to portrait mode for better experience
      </h2>
    </div>
  );
}
