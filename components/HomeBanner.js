import HomeBannerStyles from '../styles/HomeBanner.module.css';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <>
      <div className={HomeBannerStyles.banner}>
        <div className={HomeBannerStyles.overlay}>
          <div className={HomeBannerStyles.container}>
            <h1 className={HomeBannerStyles.heading}>
              Own a Smile You Love to Share.
            </h1>
            <p className={HomeBannerStyles.text}>
              {`Your Family Dentist In Summerlin, Las Vegas . We're Open During
              Quarantine - We're Here For You!`}
            </p>
            <Link href='/contact-us'>
              <a className={HomeBannerStyles.button}>Contact us</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
