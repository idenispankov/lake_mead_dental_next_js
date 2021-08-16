import Covid from '../components/Covid/Covid';
import Head from 'next/head';

export default function Covid19() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='These guidelines were created to safeguard against the spread of severely contagious diseases such as tuberculosis and measles, and they are equally effective in managing the spread of influenza and coronavirus.'
        />
        <title>Covid 19 | Lake Mead Dental</title>
      </Head>
      <Covid />
    </>
  );
}
