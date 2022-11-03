import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Index() {
  return (
    <section className='mt-2'>
      <style jsx>{`
        td > img{
          width:200px;
          max-width:30vw;
        }
        td > h4, p {
          padding-left:1em;
          vertical-align:top;
        }
      `}</style>
      
      <h2 className='text-orange-600'>Management Board Members</h2>
      <table className='table-auto'>
      <tbody>
        <tr>
          <td><img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/09/Jonathan-Chow-2-300x300.jpg"/></td>
          <td><h4 className='font-bold text-lg'>Chairperson</h4><p>Mr. CHOW Jonathan Edward Chun Chung</p></td>
        </tr>
        <tr>
          <td><img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/05/Kirk-Wong.jpg"/></td>
          <td><h4 className='font-bold text-lg'>Vice-Chairperson</h4><p>Mr. WONG King Wai, Kirk</p></td>
        </tr>
        <tr>
          <td><img src="https://www.guidedogs.org.hk/wp-content/uploads/2019/09/LWP.jpg"/></td>
          <td><h4 className='font-bold text-lg'>Immediate Past Chairperson & Chairperson of Communication and Fund Raising Committee</h4><p>Mr. LAM Wai Pong</p></td>
        </tr>
      </tbody>
      </table>
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
      
        <div className='bg-orange-600 text-white'><Link href='/aboutus/management'>
          <Links>Management Board Members, Associate Members and Honorary Advisors</Links>
        </Link></div>
        
        <Link href='/aboutus/sponsors'>
          <Links>Sponsors and Supporters</Links>
        </Link>
        
        
          <Link href='/aboutus/reports'>
            <Links>Annual and Financial Report</Links>
          </Link>
        
      </Sidebar>
      {page}
    </Layout>
  )
}
