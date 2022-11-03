import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Page() {
  return (
    <section className="mt-4 md:overflow-hidden">
      <h2 className='text-green-500'>Guide Dogs</h2>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/DSC08592-683x1024.jpg" alt="使用者及其黃色導盲犬，笑著向前走 User and his yellow guide dog walk forward smiling" className='display-block lg:float-left mx-auto md:mx-0 sm:max-w-xs'/>
        <div className='pt-4 lg:pt-0 lg:pl-4 overflow-hidden'>
        <p>
        Guide dogs are trained by professionals to provide services for the visually impaired to improve their mobility and safety, while acting as their companion. A Guide Dog can lead a visually impaired person to his destination safely, avoiding obstacles and irregularities on the road.
        </p>
        <p>
        HKGDA became accredited members of the International Guide Dog Federation (IGDF), Assistance Dogs International (ADI) and Animal Assisted Intervention International (AAII) in 2018/19.
        </p>
        <p>
        HKGDA’s mission is to offer the visually impaired citizens of Hong Kong the option of using a guide dog as their primary mobility aid. Our services include:
        
        </p>
        <ul>
            <li>Breeding of guide puppies</li>
            <li>Raising and socialization training of guide puppies</li>
            <li>Advanced guide dog training</li>
            <li>Matching trained dogs with accepted guide dog applicants</li>
        </ul></div>
    </section>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar>
        {/* Add accent color to active link */}
        <div className='bg-green-500 text-white'>
          <Link href='/services'>
            <Links>Guide Dogs</Links>
          </Link>
        </div>
        
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
