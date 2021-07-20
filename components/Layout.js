import layoutStyles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <header>Navbar</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
