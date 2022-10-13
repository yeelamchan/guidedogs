import Head from 'next/head'
import styles from './shop.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HKGDA - Shop</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
    </>
  )
}
