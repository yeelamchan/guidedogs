import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HKGDA</title>
      </Head>
<<<<<<< HEAD
      <main className={styles.main}>
=======
      <main className='max-w-screen-xl mx-auto'>
>>>>>>> shop
        <div className={styles.content}>{children}</div>
      </main>
    </>
  )
}
