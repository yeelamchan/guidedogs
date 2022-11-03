import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Page() {
  return (
    <section className="mt-4 overflow-hidden">      
      <h2 className='text-green-500'>Breeding Program</h2>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2019/09/Puppy-Raiser-whelping.jpg" className='pb-4 mx-auto'/>
        <p>
        Since HKGDA’s establishment until 2016, we have been importing puppies from different guide dog schools all over the world to expand the bloodlines of guide dogs in Hong Kong. In 2017, we have started our own breeding program and established our volunteer litter support group.  We are cooperating with guide dog schools worldwide and share breeding data with each other. Until 2020, HKGDA successfully bred 10 litters and 50 puppies locally. ​
        </p>
        <p>
        We are looking for volunteers to become breeding stock holders. For more information, please email info@guidedogs.org.hk.
        </p>
        <div className='grid grid-cols-2 gap-8'>
          <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/Winci-Wisdom-Eve-Wong-Wifi-1024x683.jpg"/>
          <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/BB-Ivy-with-her-V-litter-puppies-1024x684.jpg"/>
        </div>
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
      
        <div className='bg-green-500 text-white'><Link href='/services/breeding'>
          <Links>Breeding Program</Links>
        </Link></div>
      
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
      
        <Link href='/services/adoption'>
          <Links>Guide Dogs Adoption</Links>
        </Link>
      
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
