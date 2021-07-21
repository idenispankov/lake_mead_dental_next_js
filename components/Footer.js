import footerStyles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from '../public/images/facebook_icon.svg';
import instagramIcon from '../public/images/instagram_icon.svg';
import linkedinIcon from '../public/images/linkedin_icon.svg';
import twitterIcon from '../public/images/twitter_icon.svg';

export default function Footer() {
  function getYear() {
    console.log('fullYear');
  }

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <div className={footerStyles.logo__container}>
          <Link href='/'>
            <a className={footerStyles.logo}>
              Lake Mead <span className={footerStyles.logo_span}>Dental</span>
            </a>
          </Link>
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
            <li className={footerStyles.social__item}>
              <a
                className={footerStyles.logo__container_social}
                href='https://facebook.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                <Image
                  className={footerStyles.image}
                  src={twitterIcon}
                  alt='facebook icon'
                  height={25}
                  width={25}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={footerStyles.contact__container}>
          <ul className={footerStyles.contact__list}>
            <li>
              <h3 className={footerStyles.contact__heading}>
                Lake Mead Dental
              </h3>
              <p className={footerStyles.contact__address}>
                7481 W Lake Mead blvd. Suite: 100. Las Vegas, NV, 89128
              </p>
              <p className={footerStyles.contact__phone}>888-888-8888</p>
              <p className={footerStyles.contact__email}>email@email.com</p>
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
              <p className={footerStyles.contact__phone}>888-888-8888</p>
              <p className={footerStyles.contact__email}>email@email.com</p>
            </li>
          </ul>
        </div>

        {/* Contact */}
      </div>

      <div className={footerStyles.copyright__container}>
        <p className={footerStyles.copyright}>
          &copy; 2021. Lake Mead Dental. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
