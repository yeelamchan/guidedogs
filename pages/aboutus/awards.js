import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Index() {
  return (
    <section className="orange">
      <h2>Honour and Awards</h2>
      <h3>International Guide Dog Federation</h3>
      <img src="https://www.guidedogs.org.hk/wp-content/uploads/2021/03/IGDF.Logo_.Colours.jpg"/>
      <p>
      HKGDA became an accredited member of the International Guide Dog Federation (IGDF) as from June 2018.
      </p>
      <p>
      The accreditation signifies that we are able to meet the most updated and highest international standards for the breeding and training of guide dogs. As a member of IGDF, we are also able to exchange information of guide dogs with other schools globally.
      </p>
      <h3>Assistance Dogs International</h3>
      <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/01/68248661_2501539039908994_1390522419726254080_n.jpg"/>
      <p>HKGDA has become a member of the Assistance Dogs International (ADI) starting from August 2019. ADI is a worldwide coalition of non-profit programs that train and place Assistance Dogs. By becoming a member of ADI, the Association would establish and promote standards of excellence in all areas of assistance dog acquisition, training and partnerships.</p>
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
        <div style={{'background-color':'orange', 'color':'white'}}><Links>
          <Link href='/aboutus/awards'>
            <a>Honour and Awards</a>
          </Link>
        </Links></div>
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
