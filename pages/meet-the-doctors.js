import styles from '../styles/MeetTheDoctor.module.css';
import Section from '../components/Section';
import FlexContainer from '../components/FlexContainer';

export default function MeetTheDoctors() {
  return (
    <Section>
      <div className={styles.heading__container}>
        <h2 className={styles.heading}>Meet The Doctors</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          dicta molestiae repudiandae nisi nesciunt cupiditate?
        </p>
      </div>
      <FlexContainer optionalClass={styles.flex__container}></FlexContainer>
      <FlexContainer optionalClass={styles.flex__container}></FlexContainer>
    </Section>
  );
}
