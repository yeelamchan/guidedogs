import Head from 'next/head'


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HKGDA</title>
      </Head>
      <main className='max-w-screen-xl mx-auto px-4'>
        <div>{children}</div>
      </main>
    </>
  )
}
