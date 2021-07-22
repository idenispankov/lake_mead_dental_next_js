import footerStyles from '../styles/Footer.module.css';
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
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.logo__container}>
          <Link href='/'>
            <a className={footerStyles.logo}>
              {' '}
              <div className={footerStyles.logo__image}>
                <Image
                  src={whiteLogoImage}
                  alt='phone icon'
                  width={40}
                  height={40}
                />
              </div>
              Lake Mead <span className={footerStyles.logo_span}> Dental</span>
            </a>
          </Link>
          <ul className={footerStyles.logo__container_list}>
            <li className={footerStyles.social__item}>
              <a
                className={footerStyles.logo__container_social}
                href='https://www.facebook.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={footerStyles.image}
                  src={facebookIcon}
                  alt='facebook icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li className={footerStyles.social__item}>
              <a
                className={footerStyles.logo__container_social}
                href='https://www.instagram.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={footerStyles.image}
                  src={instagramIcon}
                  alt='instagram icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li className={footerStyles.social__item}>
              <a
                className={footerStyles.logo__container_social}
                href='https://www.linkedin.com/company/lake-mead-dental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={footerStyles.image}
                  src={linkedinIcon}
                  alt='linkedin icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li className={footerStyles.social__item}>
              <a
                className={footerStyles.logo__container_social}
                href='https://twitter.com/lakemeaddental'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={footerStyles.image}
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
        <div className={footerStyles.contact__container}>
          <ul className={footerStyles.contact__list}>
            <li>
              <h2 className={footerStyles.contact__heading}>
                Lake Mead Dental
              </h2>
              <p className={footerStyles.contact__address}>
                7481 W Lake Mead blvd. Suite: 100. Las Vegas, NV, 89128
              </p>
              <a href='tel:7023041234' className={footerStyles.contact__phone}>
                (702) 304 - 1234
              </a>
              <a
                href='mailto:lakemeaddental@gmail.com'
                className={footerStyles.contact__email}
              >
                lakemeaddental@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className={footerStyles.address__container}>
          <ul className={footerStyles.contact__list}>
            <li>
              <h3 className={footerStyles.contact__heading}>Wigwam Dental</h3>
              <p className={footerStyles.contact__address}>
                2649 Wigwam Pkwy. Suite: 106. Henderson, NV, 89074
              </p>
              <a href='tel:7026173333' className={footerStyles.contact__phone}>
                (702) 617-3333
              </a>
              <a
                href='mailto:wigwamdental@gmail.com'
                className={footerStyles.contact__email}
              >
                wigwamdental@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={footerStyles.copyright__container}>
        <p className={footerStyles.copyright}>
          &copy; {copyrightYear}. Lake Mead Dental. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
