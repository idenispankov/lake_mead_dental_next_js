import Gallery from '../components/Gallery/Gallery';
import Head from 'next/head';

export default function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery | Lake Mead Dental</title>
        <meta
          name='description'
          content='Lake Mead Dental in Summerlin, explore our gallery. Book your appointment today!'
        />
      </Head>
      <Gallery />
    </>
  );
}
