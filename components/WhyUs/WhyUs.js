import styles from './WhyUs.module.css';

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <h2 className={styles.section__heading}>Why Choose Us</h2>
      <p className={styles.section__text}>
        Many Ways To Better Serve Our Community
      </p>
      <div className={styles.section__container}>
        <div className={styles.section__container_image_main}>
          <div className={styles.section__container_image_left}></div>
          <div className={styles.section__container_image_right}></div>
          <div className={styles.section__container_background}></div>
        </div>
        <ul className={styles.section__container_list}>
          <li className={styles.section__container_list_item}>
            <h3 className={styles.section__container_list_item_heading}>
              Same Day Emergency Appointment
            </h3>
            <p className={styles.section__container_list_item_text}>
              We have after-hours lines. Call our office directly and connect to
              our emergency lines.
            </p>
          </li>
          <li className={styles.section__container_list_item}>
            <h3 className={styles.section__container_list_item_heading}>
              Workers Compensation Cases
            </h3>
            <p className={styles.section__container_list_item_text}>
              Accident at work in Las Vegas or Henderson? We can help you today!
            </p>
          </li>
          <li className={styles.section__container_list_item}>
            <h3 className={styles.section__container_list_item_heading}>
              Cosmetic Dentistry
            </h3>
            <p className={styles.section__container_list_item_text}>
              Elegant White Smiles For a Lifetime
            </p>
          </li>
          <li className={styles.section__container_list_item}>
            <h3 className={styles.section__container_list_item_heading}>
              Same Day Denture Repair
            </h3>
            <p className={styles.section__container_list_item_text}>
              Several types of partial dentures are available to our patients
            </p>
          </li>
          <li className={styles.section__container_list_item}>
            <h3 className={styles.section__container_list_item_heading}>
              Implants
            </h3>
            <p className={styles.section__container_list_item_text}>
              Dental implants are replacement tooth roots made of titanium
            </p>
          </li>
          <li className={styles.section__container_list_item}>
            <h3 className={styles.section__container_list_item_heading}>
              Insurance & Payment Options
            </h3>
            <p className={styles.section__container_list_item_text}>
              We Are Providers For Most Major Insurance Companies.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
