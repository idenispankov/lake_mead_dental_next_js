import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import ContactUs from '../ContactUs/ContactUs';
import Testimonials from '../Testimonials/Testimonials';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      {/* <ContactUs /> */}
      <Testimonials />
      <Footer />
    </>
  );
}
