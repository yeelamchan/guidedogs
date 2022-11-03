import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Page() {
  return (
    <section className="mt-4">
      <h2 className='text-purple-500'>Volunteer Program</h2>
        <p>Placeholder</p>
    </section>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar>
       {/* Add accent color to active link */}
        <div className='bg-purple-500 text-white'>
          <Link href='/supportus'>
            <Links>Volunteer Program</Links>
          </Link>
        </div>
        
          <Link href='/services/general'>
            <Links>General Volunteering</Links>
          </Link>
        
        
          <Link href='/services/seminar'>
            <Links>Guide Dog Seminar Speakers</Links>
          </Link>
        
        
          <Link href='/services/raising'>
            <Links>Puppy Raising & Boarder Program</Links>
          </Link>
        
        
          <Link href='/services/donation'>
            <Links>Donation and Sponsorship</Links>
          </Link>
        
        
          <Link href='/services/sticker'>
            <Links>Welcome Sticker and Donation Box</Links>
          </Link>
        
        
          <Link href='/services/applications'>
            <Links>Applications & Downloads</Links>
          </Link>
        
      </Sidebar>
      {page}
    </Layout>
  )
}
