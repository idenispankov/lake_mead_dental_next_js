import MainStyles from '../../styles/MainStyles.module.css';
import styles from './Gallery.module.css';
import Image from 'next/image';
import { useState } from 'react';
import galleryData from '../../data/galleryData';

const GALLERY = {
  interior: 'interior',
  exterior: 'exterior',
  treatment: 'treatment',
  patients: 'patients',
};

export default function Gallery() {
  const [active, setActive] = useState(GALLERY.interior);

  const handleInteriorClick = () => {
    setActive('interior');
  };

  const handleExteriorClick = () => {
    setActive('exterior');
  };

  const handleTreatmentClick = () => {
    setActive('treatment');
  };

  const handlePatientsClick = () => {
    setActive('patients');
  };

  return (
    <section className={styles.section}>
      <h2 className={MainStyles.heading}>Our Gallery</h2>
      <p className={styles.section__text}>Explore Our Gallery</p>
      <ul className={styles.section__list}>
        <li
          onClick={handleInteriorClick}
          className={`${styles.section__list_item} ${
            active === 'interior' && styles.active
          }`}
        >
          Interior
        </li>
        <li
          onClick={handleExteriorClick}
          className={`${styles.section__list_item} ${
            active === 'exterior' && styles.active
          }`}
        >
          Exterior
        </li>
        <li
          onClick={handleTreatmentClick}
          className={`${styles.section__list_item} ${
            active === 'treatment' && styles.active
          }`}
        >
          Treatment
        </li>
        <li
          onClick={handlePatientsClick}
          className={`${styles.section__list_item} ${
            active === 'patients' && styles.active
          }`}
        >
          Patients
        </li>
      </ul>
      <div className={styles.section__grid_mobile}>
        {galleryData.mobile[active].map(({ id, src, alt }) => (
          <Image
            key={id}
            src={src}
            alt={alt}
            width={351}
            height={164}
            className={styles.section__grid_image}
          />
        ))}
      </div>
    </section>
  );
}
