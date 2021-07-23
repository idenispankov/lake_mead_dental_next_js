import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from '../public/images/facebook_icon.svg';
import instagramIcon from '../public/images/instagram_icon.svg';
import linkedinIcon from '../public/images/linkedin_icon.svg';
import twitterIcon from '../public/images/twitter_icon.svg';
import logoImage from '../public/images/logo_blue.png';
import whiteLogoImage from '../public/images/white_logo.png';

export default function Footer() {
  function getYear() {
    let year = new Date().getFullYear();
    return year;
  }

  const copyrightYear = getYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo__container}>
          <Link href='/'>
            <a className={styles.logo}>
              {' '}
              <div className={styles.logo__image}>
                <Image
                  src={whiteLogoImage}
                  alt='phone icon'
                  width={40}
                  height={40}
                />
              </div>
              Lake Mead <span className={styles.logo_span}> Dental</span>
            </a>
          </Link>
          <ul className={styles.logo__container_list}>
            <li className={styles.social__item}>
              <a
                className={styles.logo__container_social}
                href='https://www.facebook.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={styles.image}
                  src={facebookIcon}
                  alt='facebook icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                className={styles.logo__container_social}
                href='https://www.instagram.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={styles.image}
                  src={instagramIcon}
                  alt='instagram icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                className={styles.logo__container_social}
                href='https://www.linkedin.com/company/lake-mead-dental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={styles.image}
                  src={linkedinIcon}
                  alt='linkedin icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li className={styles.social__item}>
              <a
                className={styles.logo__container_social}
                href='https://twitter.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={styles.image}
                  src={twitterIcon}
                  alt='twitter icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className={styles.contact__container}>
          <ul className={styles.contact__list}>
            <li>
              <h2 className={styles.contact__heading}>Lake Mead Dental</h2>
              <p className={styles.contact__address}>
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
            </li>
          </ul>
        </div>
        <div className={styles.address__container}>
          <ul className={styles.contact__list}>
            <li>
              <h3 className={styles.contact__heading}>Wigwam Dental</h3>
              <p className={styles.contact__address}>
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
            </li>
          </ul>
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
