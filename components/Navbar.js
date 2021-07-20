import navbarStyles from '../styles/Navbar.module.css';
import phoneIcon from '../public/images/phone_icon.svg';
import mailIcon from '../public/images/mail_icon.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.header__contact}>
        <div className={navbarStyles.header__contact_container}>
          <p className={navbarStyles.header__contact_greeting}>
            Welcome to Lake Mead Dental
          </p>
          <ul className={navbarStyles.header__contact_list}>
            <li className={navbarStyles.header__contact_list_item}>
              <div className={navbarStyles.header__contact_list_image}>
                <Image
                  src={phoneIcon}
                  alt='phone icon'
                  width={16}
                  height={16}
                />
              </div>
              <a
                className={navbarStyles.header__contact_list_item_link}
                href='tel:8888888888'
              >
                888-888-8888
              </a>
            </li>
            <li className={navbarStyles.header__contact_list_item}>
              <div className={navbarStyles.header__contact_list_image}>
                <Image src={mailIcon} alt='mail icon' width={16} height={16} />
              </div>
              <a
                className={navbarStyles.header__contact_list_item_link}
                href='mailto:some@gmail.com'
              >
                email@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <nav className={navbarStyles.header__navbar}>
        <p className={navbarStyles.header__navbar_logo}>
          Lake Mead{' '}
          <span className={navbarStyles.header__navbar_logo_highlight}>
            Dental
          </span>
        </p>
        <ul className={navbarStyles.header__navbar_list}>
          <li>
            <Link href='/'>
              <a className={navbarStyles.header__navbar__list_item}>Home</a>
            </Link>
            <Link href='/new-patients'>
              <a className={navbarStyles.header__navbar__list_item}>
                New Patients
              </a>
            </Link>
            <Link href='services'>
              <a className={navbarStyles.header__navbar__list_item}>Services</a>
            </Link>
            <Link href='meet-the-doctors'>
              <a className={navbarStyles.header__navbar__list_item}>
                Meet The Doctors
              </a>
            </Link>
            <Link href='/insurance'>
              <a className={navbarStyles.header__navbar__list_item}>
                Insurance
              </a>
            </Link>
            <Link href='/gallery'>
              <a className={navbarStyles.header__navbar__list_item}>Gallery</a>
            </Link>
            <Link href='/covid-19'>
              <a className={navbarStyles.header__navbar__list_item}>Covid-19</a>
            </Link>
            <Link href='/faq'>
              <a className={navbarStyles.header__navbar__list_item}>FAQ</a>
            </Link>
            <Link href='/contact-us'>
              <a className={navbarStyles.header__navbar__list_item}>
                Contact us
              </a>
            </Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
