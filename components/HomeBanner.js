import homeBannerStyles from '../styles/HomeBanner.module.css';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <>
      <div className={homeBannerStyles.banner}>
        <div className={homeBannerStyles.overlay}>
          <div className={homeBannerStyles.container}>
            <h1 className={homeBannerStyles.heading}>
              Own a Smile You Love to Share.
            </h1>
            <p className={homeBannerStyles.text}>
              {`Your Family Dentist In Summerlin, Las Vegas . We're Open During
              Quarantine - We're Here For You!`}
            </p>
            <Link href='/contact-us'>
              <a className={homeBannerStyles.button}>Contact us</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
