import Head from 'next/head';
import FAQ from '../components/FAQ/FAQ';

export default function FAQPage() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='This page answers some of the frequently asked questions'
        />
        <title>FAQ | Lake Mead Dental</title>
      </Head>
      <FAQ />
    </>
  );
}
