import footerStyles from '../styles/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import facebookIcon from '../public/images/facebook_icon.svg';
import instagramIcon from '../public/images/instagram_icon.svg';
import linkedinIcon from '../public/images/linkedin_icon.svg';

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
          </ul>
        </div>

        {/* Navigation */}
        <div className={footerStyles.nav__container}>
          <ul className={footerStyles.nav__container_list}>
            <li>
              <Link href='/'>
                <a className={footerStyles.nav__container_list_link}>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/new-patients'>
                <a className={footerStyles.nav__container_list_link}>
                  New Patients
                </a>
              </Link>
            </li>
            <li>
              <Link href='/services'>
                <a className={footerStyles.nav__container_list_link}>
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href='/meet-the-doctors'>
                <a className={footerStyles.nav__container_list_link}>
                  Meet The Doctors
                </a>
              </Link>
            </li>
            <li>
              <Link href='/insurance'>
                <a className={footerStyles.nav__container_list_link}>
                  Insurance
                </a>
              </Link>
            </li>
            <li>
              <Link href='/gallery'>
                <a className={footerStyles.nav__container_list_link}>Gallery</a>
              </Link>
            </li>
            <li>
              <Link href='/covid-19'>
                <a className={footerStyles.nav__container_list_link}>
                  Covid-19
                </a>
              </Link>
            </li>
            <li>
              <Link href='/faq'>
                <a className={footerStyles.nav__container_list_link}>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className={footerStyles.social__container}>
          <ul className={footerStyles.social__container_list}>
            <li>
              <a
                href='https://facebook.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://facebook.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://facebook.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://facebook.com'
                rel='noreferrer noopener'
                target='_blank'
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className={footerStyles.contact__container}>
          <ul className={footerStyles.contact__container_list}>
            <li>
              <p>7481 W Lake Mead blvd. Suite 100</p>
              <p>Las Vegas, NV, 89128</p>
              <p>888-888-8888</p>
              <p>email@gmail.com</p>
            </li>
            <li>
              <p>7481 W Lake Mead blvd. Suite 100</p>
              <p>Las Vegas, NV, 89128</p>
              <p>888-888-8888</p>
              <p>email@gmail.com</p>
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
