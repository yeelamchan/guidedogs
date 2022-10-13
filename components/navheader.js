import styles from './navheader.module.css'
import Link from 'next/link'
export default function Navheader() {
  return (
    <nav className={styles.navi}>
        <Link href={`/aboutus`}>
            <a className={styles.links}>About Us</a>
        </Link>

        
        <Link href={`/services`}>
            <a className={styles.links}>Services</a>
        </Link>
        

        
        <Link href={`/supportus`}>
            <a className={styles.links}>Support Us</a>
        </Link>
        

        
        <Link href={`/news`}>
            <a className={styles.links}>What's new</a>
        </Link>
        

        
        <Link href={`/shop`}>
            <a className={styles.links}>E-shop</a>
        </Link>
        

        
        <Link href={`/contactus`}>
            <a className={styles.links}>Contact Us</a>
        </Link>
        
    </nav>
  )
}
