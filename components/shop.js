import Head from 'next/head'
<<<<<<< HEAD
import styles from './layout.module.css'
=======
//import styles from './shop.module.css'
>>>>>>> shop

export default function Layout({ children }) {
  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>HKGDA</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
=======
        <title>HKGDA - Shop</title>
      </Head>
      <main className='max-w-screen-xl mx-auto'>
        <div>{children}</div>
>>>>>>> shop
      </main>
    </>
  )
}
