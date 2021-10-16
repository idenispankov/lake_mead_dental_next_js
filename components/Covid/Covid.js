import styles from './Covid.module.css';
// import MainStyles from '../../styles/MainStyles.module.css';
import Image from 'next/image';
import mainImage from '../../public/images/covid.jpg';

export default function Covid() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.section__image}>
          <Image
            src={mainImage}
            alt='Covid-19 modern sterilization device for patients and stuff rooms'
            layout='responsive'
            className={styles.image}
          />
        </div>
        <h1 className={styles.section__heading}>
          COVID-19 Office Sterilization Protocols
        </h1>
        <p className={styles.section__text}>
          Our patients will experience a sense of well being as they are treated
          with caring competence by staff and doctors who are motivated to
          provide the most current and advanced dental care available today!
        </p>
        <ul className={styles.section__list}>
          <li className={styles.section__list_item}>
            <h2 className={styles.section__list_item_heading}>
              Employee Health Screening:
            </h2>
            <p className={styles.section__list_item_text}>
              All employees and affiliated providers undergo detailed background
              and health history screenings before commencing employment. In
              addition, we strictly enforce sick policies that require employees
              suffering from communicable illnesses to stay home from work until
              they have a written clearance by a physician to return and have
              received supervisor approval. Employees who have traveled to a
              country with a Centers for Disease Control and Prevention (CDC)
              Level 3 Travel Health Notice are required to self-quarantine for
              14 days prior to returning to work.
            </p>
          </li>
          <li className={styles.section__list_item}>
            <h2 className={styles.section__list_item_heading}>
              Patient Health Screening:
            </h2>
            <p className={styles.section__list_item_text}>
              Due to concerns about patient and employee safety, we ask that
              non-emergency patients experiencing flu-like symptoms (fever,
              cough, sore throat, nausea, vomiting, and difficulty breathing)
              and patients who have returned from travel to a country with a CDC
              Level 3 Travel Health Notice in the past 14 days reschedule their
              appointments.
            </p>
          </li>
          <li className={styles.section__list_item}>
            <h2 className={styles.section__list_item_heading}>
              Sterilization Procedures:
            </h2>
            <p className={styles.section__list_item_text}>
              The foundation of our infection control procedures are based on
              requirements established by the CDC that state that all body
              fluids are treated as infectious because patients with blood-borne
              infections can be asymptomatic or unaware that they are infected.
              This includes body fluids in airborne droplets from coughs or
              sneezes. Personal Protective Equipment (PPE) used in our office,
              which includes gowns, eye-protective wear with side protection,
              face shields, masks and gloves, are designed to ensure that no
              blood or body fluids can be passed between staff and patients.
              These items are washed and/or discarded between patients to
              mitigate any patient-to-patient transmission. Strict surface
              sterilization procedures are followed to clean and disinfect all
              operatory surfaces between patients, and after each use, all
              dental instruments are cleaned and heat sterilized in steam
              autoclave machines in individual sterile pouches.
            </p>
          </li>
          <li className={styles.section__list_item}>
            <h2 className={styles.section__list_item_heading}>
              Common Area Disinfecting:
            </h2>
            <p className={styles.section__list_item_text}>
              As a result of the current coronavirus concern, we have taken
              added precautions in the common areas. All magazines and pamphlets
              have been removed. Lobby surfaces and patient restrooms are
              disinfected every 30 minutes. This includes a thorough wipe down
              of all hard surfaces, such as door handles, door knobs, tables,
              chairs, and front office counters with Cavicide, a CDC-approved
              commercial sterilization agent. In addition, the area is sprayed
              with disinfectant, and hand sanitizer is available to all patients
              in the lobby and back office area.
            </p>
          </li>
          <li className={styles.section__list_item}>
            <h2 className={styles.section__list_item_heading}>
              According to the CDC:
            </h2>
            <p className={styles.section__list_item_text}>
              The most important steps we all can take to avoid infection from
              airborne diseases are frequent hand washing with soap and water
              and regular cleansing of highly-used surfaces with disinfectant.
              We recommend that all our patients take these basic precautions.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
