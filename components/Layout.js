import layoutStyles from '../styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={layoutStyles.container}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
