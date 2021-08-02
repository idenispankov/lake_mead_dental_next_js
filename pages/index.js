import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import AboutDoctor from '../components/AboutDoctor/AboutDoctor';
import Treatments from '../components/Treatments/Treatments';
import WhyUs from '../components/WhyUs/WhyUs';
import MoreAboutUs from '../components/MoreAboutUs/MoreAboutUs';
import ContactUs from '../components/ContactUs/ContactUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Lake Mead Dental | Best Family Dentists in Summerlin, Las Vegas
        </title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <Banner />
      {/* <AboutDoctor /> */}
      {/* <Treatments /> */}
      {/* <WhyUs /> */}
      {/* <MoreAboutUs /> */}
      {/* <ContactUs /> */}
    </>
  );
}
