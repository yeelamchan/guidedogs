import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HKGDA</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">
            HKGDA
          </Link>
        </h1>
        <div className={styles.content}>{children}</div>
      </main>
    </>
  )
}
