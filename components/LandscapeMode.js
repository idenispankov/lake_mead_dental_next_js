import LandscapeModeStyles from '../styles/LandscapeMode.module.css';

export default function LandscapeMode() {
  return (
    <div className={LandscapeModeStyles.container}>
      <h2 className={LandscapeModeStyles.text}>
        Please return you smartphone to portrait mode for better experience
      </h2>
    </div>
  );
}
