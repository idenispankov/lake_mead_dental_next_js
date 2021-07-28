import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  function getYear() {
    let year = new Date().getFullYear();
    return year;
  }

  const copyrightYear = getYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo_container}>
          <Link href='/'>
            <a className={styles.footer__logo}>
              {' '}
              <div className={styles.footer__logo__image}></div>
              Lake Mead{' '}
              <span className={styles.footer__logo_span}> Dental</span>
            </a>
          </Link>
          <ul className={styles.social__icons_list}>
            <li className={styles.social__icons_list_item}>
              <a
                className={styles.social__icons_list_item_link}
                href='https://www.facebook.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div
                  className={`${styles.social__icons_list_item_icon} ${styles.facebook}`}
                ></div>
              </a>
            </li>
            <li className={styles.social__icons_list_item}>
              <a
                className={styles.social__icons_list_item_link}
                href='https://www.facebook.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div
                  className={`${styles.social__icons_list_item_icon} ${styles.instagram}`}
                ></div>
              </a>
            </li>
            <li className={styles.social__icons_list_item}>
              <a
                className={styles.social__icons_list_item_link}
                href='https://www.facebook.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div
                  className={`${styles.social__icons_list_item_icon} ${styles.linkedin}`}
                ></div>
              </a>
            </li>
            <li className={styles.social__icons_list_item}>
              <a
                className={styles.social__icons_list_item_link}
                href='https://www.facebook.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div
                  className={`${styles.social__icons_list_item_icon} ${styles.twitter}`}
                ></div>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.contact__container}>
          <div className={styles.contact__location}>
            <h2 className={styles.contact__heading}>Lake Mead Dental</h2>
            <p className={styles.contact__text}>
              7481 W Lake Mead blvd. Suite: 100. Las Vegas, NV, 89128
            </p>
            <a href='tel:7023041234' className={styles.contact__phone}>
              (702) 304 - 1234
            </a>
            <a
              href='mailto:lakemeaddental@gmail.com'
              className={styles.contact__email}
            >
              lakemeaddental@gmail.com
            </a>
          </div>
          <div className={styles.contact__location}>
            <h2 className={styles.contact__heading}>Wigwam Dental</h2>
            <p className={styles.contact__text}>
              2649 Wigwam Pkwy. Suite: 106. Henderson, NV, 89074
            </p>
            <a href='tel:7026173333' className={styles.contact__phone}>
              (702) 617-3333
            </a>
            <a
              href='mailto:wigwamdental@gmail.com'
              className={`${styles.contact__email} ${styles.contact_email_last} `}
            >
              wigwamdental@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright__container}>
        <p className={styles.copyright}>
          &copy; {copyrightYear}. Lake Mead Dental. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
