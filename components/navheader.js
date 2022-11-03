import styles from "./navheader.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navheader() {
  return (
    // <nav className={styles.navi}>
    //      <Link href={`/aboutus`}>
    //         <a className={styles.links}>About Us</a>
    //     </Link>

    //     <Link href={`/services`}>
    //         <a className={styles.links}>Services</a>
    //     </Link>

    //     <Link href={`/supportus`}>
    //         <a className={styles.links}>Support Us</a>
    //     </Link>

    //     <Link href={`/news`}>
    //         <a className={styles.links}>What's new</a>
    //     </Link>

    //     <Link href={`/shop`}>
    //         <a className={styles.links}>E-shop</a>
    //     </Link>

    //     <Link href={`/contactus`}>
    //         <a className={styles.links}>Contact Us</a>
    //     </Link>

    // </nav>
    <>
      <div className={styles.navheader}>
        <Link href="/">
          <a>
            <Image
              priority
              src="/HKGDA-Logo_Square.jpg"
              height={130}
              width={130}
              alt={"HKGDA"}
            />
          </a>
        </Link>
        <nav className={styles.nav}>
          <Link href={`/aboutus`}>
            <a className={styles.content}>Abous Us</a>
          </Link>
          <Link href={`/services`}>
            <a className={styles.content}>Services</a>
          </Link>
          <Link href={`/supportus`}>
            <a className={styles.content}>Support Us</a>
          </Link>
          <Link href={`/news`}>
            <a className={styles.content}>What&prime;s new</a>
          </Link>
          <Link href={`/shop`}>
            <a className={styles.content}>E-Shop</a>
          </Link>
          <Link href={`/contactus`}>
            <a className={styles.content}>Contact Us</a>
          </Link>
        </nav>
        <div>
          <Link href="https://www.guidedogs.org.hk/zh-hant/support-us/donation/">
            <a className={styles.donateImg}>
              <Image
                priority
                src="/donate_box.png"
                height={110}
                width={170}
                alt={"donate"}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
