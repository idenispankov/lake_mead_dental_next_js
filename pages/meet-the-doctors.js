import styles from '../styles/MeetTheDoctor.module.css';

export default function MeetTheDoctors() {
  return (
    <section className={styles.section}>
      <div className={styles.heading__container}>
        <h2 className={styles.heading}>Meet The Doctors</h2>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          velit quidem reprehenderit eveniet iusto minima.
        </p>
      </div>
      {/* First Doctor */}
      <div className={styles.content__container}>
        <div
          className={`${styles.doctor__image} ${styles.doctor__image_ellen}`}
        ></div>
        <div className={styles.text__container}>
          <h3 className={styles.text__container_heading}>
            Dr. Ellen Piyevsky, DDS
          </h3>
          <p className={styles.text__container_text}>
            Dr. Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas four years after graduating and opened the doors of
            Wigwam Dental Care and Lake Mead Dental. Since then, she has been
            providing quality dentistry to every single one of her patients. Her
            passion for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={styles.text__container_text}>
            Dr. Ellen says: Our mission is to provide our patients with the most
            positive dental experience possible, combined with personalized care
            in a modern, comfortable environment. This is achieved through our
            ongoing commitment to continuing education in the latest dental
            materials and techniques. We cater to the individual patient with
            the utmost concern for their dental health, as well as their overall
            health. We take the time to educate and inform our patients and
            offer treatment options tailored to your individual needs and
            desires.
          </p>
          <p className={styles.text__container_author}>Ellen Piyevsky, DDS</p>
        </div>
      </div>

      {/* Second Doctor */}
      <div
        className={`${styles.content__container} ${styles.content__container_reversed}`}
      >
        <div
          className={`${styles.doctor__image} ${styles.doctor__image_nikki}`}
        ></div>
        <div className={styles.text__container}>
          <h3 className={styles.text__container_heading}>
            Dr. Ellen Piyevsky, DDS
          </h3>
          <p className={styles.text__container_text}>
            Dr. Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas four years after graduating and opened the doors of
            Wigwam Dental Care and Lake Mead Dental. Since then, she has been
            providing quality dentistry to every single one of her patients. Her
            passion for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={styles.text__container_text}>
            Dr. Ellen says: Our mission is to provide our patients with the most
            positive dental experience possible, combined with personalized care
            in a modern, comfortable environment. This is achieved through our
            ongoing commitment to continuing education in the latest dental
            materials and techniques. We cater to the individual patient with
            the utmost concern for their dental health, as well as their overall
            health. We take the time to educate and inform our patients and
            offer treatment options tailored to your individual needs and
            desires.
          </p>
          <p className={styles.text__container_author}>Ellen Piyevsky, DDS</p>
        </div>
      </div>

      {/* Third Doctor */}
      <div className={styles.content__container}>
        <div
          className={`${styles.doctor__image} ${styles.doctor__image_ellen}`}
        ></div>
        <div className={styles.text__container}>
          <h3 className={styles.text__container_heading}>
            Dr. Ellen Piyevsky, DDS
          </h3>
          <p className={styles.text__container_text}>
            Dr. Ellen graduated from USC School of Dentistry in 1995. She moved
            to Las Vegas four years after graduating and opened the doors of
            Wigwam Dental Care and Lake Mead Dental. Since then, she has been
            providing quality dentistry to every single one of her patients. Her
            passion for art and sculpture guides her into her love for cosmetic
            dentistry and full mouth reconstruction.
          </p>
          <p className={styles.text__container_text}>
            Dr. Ellen says: Our mission is to provide our patients with the most
            positive dental experience possible, combined with personalized care
            in a modern, comfortable environment. This is achieved through our
            ongoing commitment to continuing education in the latest dental
            materials and techniques. We cater to the individual patient with
            the utmost concern for their dental health, as well as their overall
            health. We take the time to educate and inform our patients and
            offer treatment options tailored to your individual needs and
            desires.
          </p>
          <p className={styles.text__container_author}>Ellen Piyevsky, DDS</p>
        </div>
      </div>
    </section>
  );
}
