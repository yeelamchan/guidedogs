import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Index() {
  return (
    <section className="mt-2">
        <p>Sponsors</p>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar>
        {/* Add accent color to active link */}
        <Link href='/aboutus'>
          <Links>About Us</Links>
        </Link>
      
        <Link href='/aboutus/history'>
          <Links>History</Links>
        </Link>
      
        <Link href='/aboutus/awards'>
          <Links>Honour and Awards</Links>
        </Link>
      
        <Link href='/aboutus/management'>
          <Links>Management Board Members, Associate Members and Honorary Advisors</Links>
        </Link>
        
        <div className='bg-orange-600 text-white'><Link href='/aboutus/sponsors'>
          <Links>Sponsors and Supporters</Links>
        </Link></div>
        
        <Link href='/aboutus/reports'>
          <Links>Annual and Financial Report</Links>
        </Link>
      </Sidebar>
      <div>{page}</div>
    </Layout>
  )
}
