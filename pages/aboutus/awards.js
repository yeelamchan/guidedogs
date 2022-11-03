import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Index() {
  return (
    <section className='mt-2 overflow-hidden'>
      <h2 className='text-orange-600'>Honour and Awards</h2>
      <h3 className='text-orange-600'>International Guide Dog Federation</h3>
      <img src="https://www.guidedogs.org.hk/wp-content/uploads/2021/03/IGDF.Logo_.Colours.jpg" className='max-w-sm'/>
      <p>
      HKGDA became an accredited member of the International Guide Dog Federation (IGDF) as from June 2018.
      </p>
      <p>
      The accreditation signifies that we are able to meet the most updated and highest international standards for the breeding and training of guide dogs. As a member of IGDF, we are also able to exchange information of guide dogs with other schools globally.
      </p>
      <h3 className='text-orange-600'>Assistance Dogs International</h3>
      <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/01/68248661_2501539039908994_1390522419726254080_n.jpg" className='max-w-sm'/>
      <p>HKGDA has become a member of the Assistance Dogs International (ADI) starting from August 2019. ADI is a worldwide coalition of non-profit programs that train and place Assistance Dogs. By becoming a member of ADI, the Association would establish and promote standards of excellence in all areas of assistance dog acquisition, training and partnerships.</p>
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
      
        <div className='bg-orange-600 text-white'><Link href='/aboutus/awards'>
          <Links>Honour and Awards</Links>
        </Link></div>
      
        <Link href='/aboutus/management'>
          <Links>Management Board Members, Associate Members and Honorary Advisors</Links>
        </Link>
        
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
