import Head from 'next/head';
import Banner from '../components/Banner/Banner';
import AboutDoctor from '../components/AboutDoctor/AboutDoctor';
import Treatments from '../components/Treatments/Treatments';

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
      <AboutDoctor />
      <Treatments />
    </>
  );
}
