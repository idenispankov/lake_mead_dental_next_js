import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo_blue.png';
import phoneIcon from '../public/images/phone_icon.svg';
import mailIcon from '../public/images/mail_icon.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.contact__info}>
        <p className={styles.contact__info_greeting}>
          Welcome to Lake Mead Dental
        </p>
        <ul className={styles.contact__info_list}>
          <li className={styles.contact__info_list_item}>
            <div className={styles.contact__info_list_image}>
              <Image src={phoneIcon} alt='phone icon' />
            </div>
            <a
              className={styles.contact__info_list_item_link}
              href='tel:7023041234'
            >
              (702) 304 - 1234
            </a>
          </li>
          <li className={styles.contact__info_list_item}>
            <div className={styles.contact__info_list_image}>
              <Image src={mailIcon} alt='mail icon' />
            </div>
            <a
              className={styles.contact__info_list_item_link}
              href='mailto:lakemeaddental@gmail.com'
            >
              lakemeaddental@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.logo}>
            <div className={styles.logo__image}>
              <Image src={logo} alt='logo' />
            </div>
            <p className={styles.logo__text}>
              Lake Mead <span className={styles.logo__text_span}>Dental</span>
            </p>
          </a>
        </Link>
        <div
          className={`${styles.hamburger__menu} ${isOpen && styles.open}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.hamburger__menu_before}></div>
          <div className={styles.hamburger__menu_present}></div>
          <div className={styles.hamburger__menu_after}></div>
        </div>
        <ul className={`${styles.navbar__list} ${isOpen && styles.show}`}>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>Home</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>New Patients</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>Services</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>Meet The Doctors</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>Insurance</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>Gallery</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>Covid 19</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>FAQ</a>
            </Link>
          </li>
          <li className={styles.navbar__list_item}>
            <Link href='/'>
              <a className={styles.navbar__list_link}>Contact us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
