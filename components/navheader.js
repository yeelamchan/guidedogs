import styles from './navheader.module.css'
import Link from 'next/link'
export default function Navheader() {
  return (

    <header>
      <h1 className={styles.title}>
        <Link href="/">
          HKGDA
        </Link>
      </h1>
      <nav className={styles.navi}>
        <Link href={`/aboutus`} className={styles.links}>
            About Us
        </Link>

        <Link href={`/services`} className={styles.links}>
            Services
        </Link>

        <Link href={`/supportus`} className={styles.links}>
            Support Us
        </Link>

        <Link href={`/news`} className={styles.links}>
            What's new
        </Link>

        <Link href={`/shop`} className={styles.links}>
            E-shop
        </Link>

        <Link href={`/contactus`} className={styles.links}>
            Contact Us
        </Link>
      </nav>
    </header>
  )
}
