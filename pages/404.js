import NotFound from '../components/NotFound/NotFound';
import Head from 'next/head';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 | Not Found | Lake Mead Dental</title>
        <meta
          name='description'
          content='404 page, with footer and navbar but no content '
        />
      </Head>
      <NotFound />
    </>
  );
}
