import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
}
