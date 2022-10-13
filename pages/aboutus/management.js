import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Index() {
  return (
    <section className="orange">
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
      
      <h2>Management Board Members</h2>
      <table>
      <tbody>
        <tr>
          <td><img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/09/Jonathan-Chow-2-300x300.jpg"/></td>
          <td><h4>Chairperson</h4><p>Mr. CHOW Jonathan Edward Chun Chung</p></td>
        </tr>
        <tr>
          <td><img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/05/Kirk-Wong.jpg"/></td>
          <td><h4>Vice-Chairperson</h4><p>Mr. WONG King Wai, Kirk</p></td>
        </tr>
        <tr>
          <td><img src="https://www.guidedogs.org.hk/wp-content/uploads/2019/09/LWP.jpg"/></td>
          <td><h4>Immediate Past Chairperson & Chairperson of Communication and Fund Raising Committee</h4><p>Mr. LAM Wai Pong</p></td>
        </tr>
      </tbody>
      </table>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navheader/>
      <Sidebar>
        <Links>
          <Link href='/aboutus'>
            <a>About Us</a>
          </Link>
        </Links>
        <Links>
          <Link href='/aboutus/history'>
            <a>History</a>
          </Link>
        </Links>
        <Links>
          <Link href='/aboutus/awards'>
            <a>Honour and Awards</a>
          </Link>
        </Links>
        <div style={{'backgroundColor':'orange', 'color':'white'}}><Links>
          <Link href='/aboutus/management'>
            <a>Management Board Members, Associate Members and Honorary Advisors</a>
          </Link>
        </Links></div>
        <Links>
          <Link href='/aboutus/sponsors'>
            <a>Sponsors and Supporters</a>
          </Link>
        </Links>
        <Links>
          <Link href='/aboutus/reports'>
            <a>Annual and Financial Report</a>
          </Link>
        </Links>
      </Sidebar>
      <div>{page}</div>
    </Layout>
  )
}
