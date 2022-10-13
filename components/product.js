import Head from 'next/head'
import styles from './product.module.css'

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
