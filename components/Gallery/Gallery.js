import MainStyles from '../../styles/MainStyles.module.css';
import styles from './Gallery.module.css';
import Image from 'next/image';
import { useState } from 'react';
import galleryData from '../../data/galleryData';

const GALLERY = {
  interior: 'interior',
  stuff: 'staff',
  treatment: 'treatment',
};

export default function GalleryFunc() {
  const [active, setActive] = useState(GALLERY.treatment);

  const handleInteriorClick = () => {
    setActive('interior');
  };

  const handleStuffClick = () => {
    setActive('staff');
  };

  const handleTreatmentClick = () => {
    setActive('treatment');
  };

  return (
    <section className={styles.section}>
      <h2 className={MainStyles.heading}>Our Gallery</h2>
      <p className={styles.section__text}>Explore Our Gallery</p>
      <ul className={styles.section__list}>
        <li
          onClick={handleTreatmentClick}
          className={`${styles.section__list_item} ${
            active === 'treatment' && styles.active
          }`}
        >
          Treatment
        </li>
        <li
          onClick={handleStuffClick}
          className={`${styles.section__list_item} ${
            active === 'staff' && styles.active
          }`}
        >
          Staff
        </li>
        <li
          onClick={handleInteriorClick}
          className={`${styles.section__list_item} ${
            active === 'interior' && styles.active
          }`}
        >
          Interior
        </li>
      </ul>
      <div className={styles.section__grid_mobile}>
        {galleryData.mobile[active].map(
          ({ id, src, alt, fit, position, width, height }) => (
            <div key={id} className={styles.grid__image_container}>
              <Image
                priority={true}
                src={src}
                alt={alt}
                objectFit={fit}
                objectPosition={position}
                width={width}
                height={height}
                className={styles.section__grid_image}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}
