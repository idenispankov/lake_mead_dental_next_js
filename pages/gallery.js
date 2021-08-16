import Gallery from '../components/Gallery/Gallery';
import Head from 'next/head';

export default function GalleryPage() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Lake Mead Dental in Summerlin, explore our gallery. Book your appointment today!'
        />
        <title>Gallery | Lake Mead Dental</title>
      </Head>
      <Gallery />
    </>
  );
}
