import Head from 'next/head';
import TreatmentsPageComponent from '../components/TreatmentsPageComponent/TreatmentsPageComponent';

export default function TreatmentsPage() {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='Visit Lake Mead Dental in Summerlin, Las Vegas, for complete dental services, such as Dental Cleaning, Fillings, Root Canal, Crowns & Bridges, Implants, Veneers, and Dentures. Book Your Appointment Today!'
        />
        <title>Our Treatments | Lake Mead Dental</title>
      </Head>
      <TreatmentsPageComponent />
    </>
  );
}
