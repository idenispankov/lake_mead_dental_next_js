import homeBannerStyles from '../styles/HomeBanner.module.css';
import Button from '../components/Button';

export default function HomeBanner({ linkTo, buttonText }) {
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
            <Button linkTo='/contact-us' buttonText='Contact us' />
          </div>
        </div>
      </div>
    </>
  );
}
