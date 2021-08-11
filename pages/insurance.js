import Insurance from '../components/Insurance/Insurance';
import Head from 'next/head';

export default function InsurancePage() {
  return (
    <>
      <Head>
        <title>Insurance | Lake Mead Dental</title>
        <meta
          name='description'
          content='Lake Mead Dental in Summerlin is the preferred provider for most insurance plans In Las Vegas & Henderson. We offer 0% in-house financing and accept major credit cards. Book your appointment today!'
        />
      </Head>
      <Insurance />
    </>
  );
}
