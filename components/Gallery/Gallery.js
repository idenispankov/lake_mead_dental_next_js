import MainStyles from '../../styles/MainStyles.module.css';
import styles from './Gallery.module.css';
import Image from 'next/image';
import { useState } from 'react';
import galleryData from '../../data/galleryData';

export default function Gallery() {
  const [interior, setInterior] = useState(true);
  const [exterior, setExterior] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [patients, setPatience] = useState(false);

  const handleInteriorClick = () => {
    setExterior(false);
    setTreatment(false);
    setPatience(false);
    setInterior(true);
  };

  const handleExteriorClick = () => {
    setTreatment(false);
    setPatience(false);
    setInterior(false);
    setExterior(true);
  };

  const handleTreatmentClick = () => {
    setExterior(false);
    setPatience(false);
    setInterior(false);
    setTreatment(true);
  };

  const handlePatientsClick = () => {
    setExterior(false);
    setTreatment(false);
    setInterior(false);
    setPatience(true);
  };

  return (
    <section className={styles.section}>
      <h2 className={MainStyles.heading}>Our Gallery</h2>
      <p className={styles.section__text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, qui?
      </p>
      <ul className={styles.section__list}>
        <li
          onClick={handleInteriorClick}
          className={`${styles.section__list_item} ${
            interior && styles.active
          }`}
        >
          Interior
        </li>
        <li
          onClick={handleExteriorClick}
          className={`${styles.section__list_item} ${
            exterior && styles.active
          }`}
        >
          Exterior
        </li>
        <li
          onClick={handleTreatmentClick}
          className={`${styles.section__list_item} ${
            treatment && styles.active
          }`}
        >
          Treatment
        </li>
        <li
          onClick={handlePatientsClick}
          className={`${styles.section__list_item} ${
            patients && styles.active
          }`}
        >
          Patients
        </li>
      </ul>
      <div className={styles.section__grid_mobile}>
        {interior &&
          galleryData.mobile.interior.map(({ id, src, alt }) => (
            <Image
              key={id}
              src={src}
              alt={alt}
              width={351}
              height={164}
              className={styles.section__grid_image}
            />
          ))}
        {exterior &&
          galleryData.mobile.exterior.map(({ id, src, alt }) => (
            <Image
              key={id}
              src={src}
              alt={alt}
              width={351}
              height={164}
              className={styles.section__grid_image}
            />
          ))}
        {treatment &&
          galleryData.mobile.treatment.map(({ id, src, alt }) => (
            <Image
              key={id}
              src={src}
              alt={alt}
              width={351}
              height={164}
              className={styles.section__grid_image}
            />
          ))}
        {patients &&
          galleryData.mobile.patients.map(({ id, src, alt }) => (
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
