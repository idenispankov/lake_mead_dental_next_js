import styles from '../styles/Layout.module.css';
import Header from '../components/Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
