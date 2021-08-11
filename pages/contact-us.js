import ContactPageComponent from '../components/ContactPage/ContactPageComponent';
import Head from 'next/head';

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Lake Mead Dental</title>
        <meta
          name='description'
          content='We are locating at 7481 W Lake Mead blvd. Suite: 100. Las Vegas, NV, 89128 and 2649 Wigwam Pkwy. Suite: 106. Henderson, NV, 89074, you can also contact us via email: lakemeaddental@gmail.com & wigwamdental@gmail.com or by phone: (702) 304 - 1234 & (702) 617-3333. Book your appointment today'
        />
      </Head>
      <ContactPageComponent />
    </>
  );
}
