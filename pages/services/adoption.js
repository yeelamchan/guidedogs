import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Page() {
  return (
    <section className="mt-4">
      <h2 className='text-green-500'>Guide Dogs Adoption</h2>
        <p>Placeholder</p>
    </section>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
        <Sidebar>
        {/* Add accent color to active link */}
        <Link href='/services'>
          <Links>Guide Dogs</Links>
        </Link>
      
        <Link href='/services/breeding'>
          <Links>Breeding Program</Links>
        </Link>
      
        <Link href='/services/fostering'>
          <Links>Puppy Raiser / Boarder / Temporary Home Program</Links>
        </Link>
      
        <Link href='/services/training'>
          <Links>Guide Dog Training</Links>
        </Link>
      
        <Link href='/services/matching'>
          <Links>Matching With User</Links>
        </Link>
      
        <Link href='/services/aftercare'>
          <Links>Aftercare Services</Links>
        </Link>
      
        <div className='bg-green-500 text-white'><Link href='/services/adoption'>
          <Links>Guide Dogs Adoption</Links>
        </Link></div>
      
        <Link href='/services/welfare'>
          <Links>Animal Welfare</Links>
        </Link>
      
        <Link href='/services/education'>
          <Links>Public Education</Links>
        </Link>
      
        <Link href='/services/aai'>
          <Links>Animal Assisted Interventions (AAI)</Links>
        </Link>
      </Sidebar>
      {page}
    </Layout>
  )
}
