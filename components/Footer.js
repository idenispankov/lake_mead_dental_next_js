import footerStyles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from '../public/images/facebook_icon.svg';
import instagramIcon from '../public/images/instagram_icon.svg';
import linkedinIcon from '../public/images/linkedin_icon.svg';
import link from 'next/link';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.logo__container}>
          <p className={footerStyles.logo}>
            Lake Mead <span className={footerStyles.logo_span}>Dental</span>
          </p>
          <ul className={footerStyles.logo__container_list}>
            <li className={footerStyles.social__item}>
              <a
                className={footerStyles.logo__container_social}
                href='https://facebook.com'
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
                href='https://facebook.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={footerStyles.image}
                  src={instagramIcon}
                  alt='facebook icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
            <li className={footerStyles.social__item}>
              <a
                className={footerStyles.logo__container_social}
                href='https://facebook.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={footerStyles.image}
                  src={linkedinIcon}
                  alt='facebook icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={footerStyles.copyright__container}>
        <p className={footerStyles.copyright}>
          &copy; 2021. Lake Mead Dental. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
