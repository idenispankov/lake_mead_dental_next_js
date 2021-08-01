import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
