import Head from 'next/head'
import Link from 'next/link'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>HKGDA</title>
      </Head>
      
      <main className='max-w-screen-xl mx-auto px-4'>
        <header>
          <h1 className='text-blue-500 text-7xl text-center'>
            <Link href="/">
              HKGDA
            </Link>
          </h1>
          <nav className='flex flex-wrap flex-row p-4 justify-center'>
            <Link href={`/aboutus`} className='bg-gray-500 px-5 py-4 text-white font-bold hover:underline'>
                About Us
            </Link>

            <Link href={`/services`} className='bg-gray-500 px-5 py-4 text-white font-bold hover:underline'>
                Services
            </Link>

            <Link href={`/supportus`} className='bg-gray-500 px-5 py-4 text-white font-bold hover:underline'>
                Support Us
            </Link>

            <Link href={`/news`} className='bg-gray-500 px-5 py-4 text-white font-bold hover:underline'>
                What's new
            </Link>

            <Link href={`/shop`} className='bg-gray-500 px-5 py-4 text-white font-bold hover:underline'>
                E-shop
            </Link>

            <Link href={`/contactus`} className='bg-gray-500 px-5 py-4 text-white font-bold hover:underline'>
                Contact Us
            </Link>
          </nav>
        </header>
        {children}
      </main>
    </>
  )
}
