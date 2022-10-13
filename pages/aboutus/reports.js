import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Index() {
  return (
    <section className="orange">
        <p>Reports</p>
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
        <Links>
          <Link href='/aboutus/management'>
            <a>Management Board Members, Associate Members and Honorary Advisors</a>
          </Link>
        </Links>
        <Links>
          <Link href='/aboutus/sponsors'>
            <a>Sponsors and Supporters</a>
          </Link>
        </Links>
        <div style={{'backgroundColor':'orange', 'color':'white'}}><Links>
          <Link href='/aboutus/reports'>
            <a>Annual and Financial Report</a>
          </Link>
        </Links></div>
      </Sidebar>
      <div>{page}</div>
    </Layout>
  )
}
