import Head from 'next/head';
import FAQ from '../components/FAQ/FAQ';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>FAQ | Lake Mead Dental</title>
        <meta
          name='description'
          content='This page answers some of the frequently asked questions'
        />
      </Head>
      <FAQ />
    </>
  );
}
