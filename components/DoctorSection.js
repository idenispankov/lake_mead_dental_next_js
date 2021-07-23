import styles from '../styles/DoctorSection.module.css';
import Button from './Button';
import Section from '../components/Section';
import FlexContainer from '../components/FlexContainer';

export default function DoctorSection() {
  return (
    <Section>
      <div className={styles.lines__image}></div>
      <div className={styles.dotes__image}></div>
      <FlexContainer>
        <div className={styles.doctor__image}></div>
        <div className={styles.text__container}>
          <h2 className={styles.heading}>Meet Dr. Ellen</h2>
          <p className={styles.text}>
            <span className={styles.text__span}>Dr Ellen Piyevsky, DDS </span>
            Lake Mead Dental & Wigwam Dental
          </p>
          <p className={styles.text}>
            Dr Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas 4 years after graduating and opened the doors of Wigwam
            Dental Care and Lake Mead Dental. Since then, she has been providing
            quality dentistry to every single one of her patients. Her passion
            for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={styles.text}>
            Dr Ellen says: Our mission is to provide our patients with the most
            positive dental experience possible, combined with personalized care
            in a modern, comfortable environment. Learn More...
          </p>
          <Button
            customButtonStyles={styles.button}
            linkTo='/meet-the-doctors'
            buttonText='Meet Our Doctors'
          />
        </div>
      </FlexContainer>
    </Section>
  );
}
