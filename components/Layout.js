import layoutStyles from '../styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
