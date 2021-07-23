import homeDoctorStyles from '../styles/HomeDoctor.module.css';
import Button from '../components/Button';

export default function HomeDoctor({ linkTo, buttonText, customButtonStyles }) {
  return (
    <section className={homeDoctorStyles.section}>
      <div className={homeDoctorStyles.lines__image}></div>
      <div className={homeDoctorStyles.dotes__image}></div>
      <div className={homeDoctorStyles.container}>
        <div className={homeDoctorStyles.doctor__image}></div>
        <div className={homeDoctorStyles.text__container}>
          <h2 className={homeDoctorStyles.heading}>Meet Dr. Ellen</h2>
          <p className={homeDoctorStyles.text}>
            <span className={homeDoctorStyles.text__span}>
              Dr Ellen Piyevsky, DDS{' '}
            </span>
            Lake Mead Dental & Wigwam Dental
          </p>
          <p className={homeDoctorStyles.text}>
            Dr Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas 4 years after graduating and opened the doors of Wigwam
            Dental Care and Lake Mead Dental. Since then, she has been providing
            quality dentistry to every single one of her patients. Her passion
            for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={homeDoctorStyles.text}>
            Dr Ellen says: Our mission is to provide our patients with the most
            positive dental experience possible, combined with personalized care
            in a modern, comfortable environment. Learn More...
          </p>
          <Button
            customButtonStyles={homeDoctorStyles.button}
            linkTo='/meet-the-doctors'
            buttonText='Meet Our Doctors'
          />
        </div>
      </div>
    </section>
  );
}
