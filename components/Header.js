import { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo_blue.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href='/'>
          <a className={styles.logo}>
            <div className={styles.logo__image}>
              <Image
                src={logo}
                alt='logo'
                // width={26}
                // height={26}
                className={styles.logo__image}
              />
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
