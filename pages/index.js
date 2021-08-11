import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import AboutDoctor from '../components/AboutDoctor/AboutDoctor';
import Treatments from '../components/Treatments/Treatments';
import WhyUs from '../components/WhyUs/WhyUs';
import MoreAboutUs from '../components/MoreAboutUs/MoreAboutUs';
import Testimonials from '../components/Testimonials/Testimonials';
import ContactUs from '../components/ContactUs/ContactUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Lake Mead Dental | Best Family Dentists in Summerlin, Las Vegas
        </title>
        <meta
          name='description'
          content='We welcome you to Lake Mead Dental, your family dentist in the heart of Summerlin, Las Vegas. We offer same-day emergency appointments, denture repair, extended hours, and in-house financing. Call Us Now!'
        />
      </Head>
      <Banner />
      <AboutDoctor />
      <Treatments />
      <WhyUs />
      <MoreAboutUs />
      <Testimonials />
      <ContactUs />
    </>
  );
}
