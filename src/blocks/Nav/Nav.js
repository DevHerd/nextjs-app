import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = ({ productLinks }) => {
  return (
    <nav className={styles.Nav}>
      <Link className={styles.Link} href="/">
        Home
      </Link>
      <Link className={styles.Link} href="/products">
        Products
      </Link>
      <Link className={styles.Link} href="/stores">
        Stores
      </Link>
    </nav>
  );
};

export default Nav;
