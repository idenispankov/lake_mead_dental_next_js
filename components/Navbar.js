import navbarStyles from '../styles/Navbar.module.css';
import phoneIcon from '../public/images/phone_icon.svg';
import mailIcon from '../public/images/mail_icon.svg';
import Image from 'next/image';

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
                848-888-8888
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
      {/* <nav className='header__navbar'>
        <p className='header__logo'>
          Lake Mead <span>Dental</span>
        </p>
      </nav> */}
    </header>
  );
}
