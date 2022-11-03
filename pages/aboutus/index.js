import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Index() {
  return (
    <section className="mt-2 overflow-hidden">
      <h2 className='text-orange-600'>About Us</h2>
      <p>
      Hong Kong Guide Dogs Association (HKGDA) was established in 2011, with the aim to provide internationally accredited and professional service dogs, including guide dogs and Animal-Assisted Intervention (AAI) dogs. HKGDA is a registered charitable organization under IRD Section 88 in Hong Kong (Registration Number 91/11219). Upon its establishment, HKGDA has been actively engaging in exploring and preparing the introduction of guide dog services to Hong Kong. In 2018, HKGDA has expanded its services and has started the program of Animal-Assisted Intervention (AAI) to serve a wider scope of people in need.
      </p>
      <p>
      HKGDA became accredited members of the International Guide Dog Federation (IGDF), Assistance Dogs International (ADI) and Animal Assisted Intervention International (AAII) in 2018/19.
      </p>
      <p>
      HKGDA is currently a member of The Community Chest, The Hong Kong Council of Social Service, The Hong Kong Joint Council for People with Disabilities and WiseGiving in Hong Kong. We are also delighted that the Lee Hysan Foundation has become our strategic partner and sponsor, and The Hong Kong Jockey Club and Link Together Initiatives as our major sponsors.
      </p>
      <h2 className='text-orange-600'>Our Vision, Missions and Values</h2>
      <h3 className='text-orange-600'>Vision</h3>
      <p>
      To ensure people with disabilities to live with independence and dignity through the right choice of service dogs.
      </p>
      <h3 className='text-orange-600'>Missions</h3>
      <ul>
        <li>Best Dog</li>
        <li>Quality Training</li>
        <li>Support and Care</li>
        <li>Respect and Inclusion</li>
      </ul>
      <br/>
      <h3 className='text-orange-600'>Values</h3>
      <ul>
        <li>Rights - We respect rights of people with disabilities</li>
        <li>Quality - We aim at the highest quality</li>
        <li>Inclusion - We work for an inclusive society</li>
      </ul>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar>
        {/* Add accent color to active link */}
        <div className='bg-orange-600 text-white'><Link href='/aboutus'>
          <Links>About Us</Links>
        </Link></div>
      
        <Link href='/aboutus/history'>
          <Links>History</Links>
        </Link>
      
        <Link href='/aboutus/awards'>
          <Links>Honour and Awards</Links>
        </Link>
      
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
