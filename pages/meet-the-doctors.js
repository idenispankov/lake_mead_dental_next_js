import Head from 'next/head';
import MeetOurDoctors from '../components/MeetOurDoctors/MeetOurDoctors';

export default function MeetTheDoctorsPage() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Meet our Doctors at Lake Mead Dental. Dr. Ellen Piyevsky DDS and Dr. Nikki Norton DMD are here to provide a high quality of work in a friendly environment. Book your appointment today!'
        />
        <title>Meet Our Doctors | Lake Mead Dental</title>
      </Head>
      <MeetOurDoctors />
    </>
  );
}
