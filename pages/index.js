import Head from 'next/head';
import Link from 'next/link';
import homeStyles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Lake Mead Dental | Home | Best Family Dentists in Summerlin, Las Vegas
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={homeStyles.banner}></div>
    </div>
  );
}
