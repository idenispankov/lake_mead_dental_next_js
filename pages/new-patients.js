import NewPatients from '../components/NewPatiens/NewPatients';
import Head from 'next/head';

export default function NewPatientsPage() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='We’re now accepting new patients in Summerlin, Las Vegas. We offer extended hours for your convenience. Book your appointment today!'
        />
        <title>New Patients | Lake Mead Dental</title>
      </Head>
      <NewPatients />
    </>
  );
}
