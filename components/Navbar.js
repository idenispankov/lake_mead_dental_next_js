import { useState } from 'react';
import navbarStyles from '../styles/Navbar.module.css';
import phoneIcon from '../public/images/phone_icon.svg';
import mailIcon from '../public/images/mail_icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from 'react-hamburger-menu';
import LandscapeMode from './LandscapeMode';
import logoImage from '../public/images/logo_blue.png';
import Button from '../components/Button';

export default function Navbar({ linkTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <LandscapeMode />
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
                  href='tel:7023041234'
                >
                  (702) 304 - 1234
                </a>
              </li>
              <li className={navbarStyles.header__contact_list_item}>
                <div className={navbarStyles.header__contact_list_image}>
                  <Image
                    src={mailIcon}
                    alt='mail icon'
                    width={16}
                    height={16}
                  />
                </div>
                <a
                  className={navbarStyles.header__contact_list_item_link}
                  href='mailto:lakemeaddental@gmail.com'
                >
                  lakemeaddental@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav className={navbarStyles.header__navbar}>
          <div className={navbarStyles.header__navbar_container}>
            <Link href='/'>
              <a className={navbarStyles.header__navbar_logo}>
                {' '}
                <div className={navbarStyles.logo__image}>
                  <Image
                    src={logoImage}
                    alt='phone icon'
                    width={40}
                    height={40}
                  />
                </div>
                Lake Mead{' '}
                <span className={navbarStyles.header__navbar_logo_highlight}>
                  Dental
                </span>
              </a>
            </Link>
            <ul className={navbarStyles.header__navbar_list}>
              <li>
                <Link href='/'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/new-patients'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    New Patients
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/services'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/meet-the-doctors'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    Meet The Doctors
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/insurance'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    Insurance
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/gallery'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/covid-19'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    Covid-19
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/faq'>
                  <a className={navbarStyles.header__navbar__list_item_link}>
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Button linkTo={'/contact-us'} buttonText='Contact us' />
              </li>
            </ul>
            {/* Hamburger */}
            <HamburgerMenu
              className={navbarStyles.hamburger}
              isOpen={isOpen}
              menuClicked={handleClick}
              color='#3393f0'
              width={40}
              height={30}
              strokeWidth={4}
              rotate={0}
              borderRadius={10}
              animationDuration={0.5}
            />
          </div>
          {isOpen && (
            <ul className={navbarStyles.hamburger__navbar_list}>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/new-patients'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    New Patients
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/services'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    Services
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/meet-the-doctors'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    Meet The Doctors
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/insurance'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    Insurance
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/gallery'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    Gallery
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/covid-19'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    Covid-19
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/faq'>
                  <a
                    onClick={handleClick}
                    className={navbarStyles.hamburger__navbar__list_item_link}
                  >
                    FAQ
                  </a>
                </Link>
              </li>
              <li className={navbarStyles.hamburger__navbar_list_item}>
                <Link href='/contact-us'>
                  <a
                    onClick={handleClick}
                    className={`${navbarStyles.hamburger__navbar__list_item_link} ${navbarStyles.hamburger__navbar__list_item_contact}`}
                  >
                    Contact us
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}
