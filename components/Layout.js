import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
