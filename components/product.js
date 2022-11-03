import Head from 'next/head'
<<<<<<< HEAD
import styles from './layout.module.css'
=======
import styles from './product.module.css'
>>>>>>> shop

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HKGDA</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
    </>
  )
}
