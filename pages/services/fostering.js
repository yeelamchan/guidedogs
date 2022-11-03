import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
export default function Page() {
  return (
    <section className="mt-4 overflow-hidden">
      <h2 className='text-green-500'>Puppy Raiser / Boarder / Temporary Home Program</h2>
        <p>Puppy raisers and boarders play significant roles for puppies and for HKGDA. They are volunteer roles that require commitment, time and dedication, however, the reward in the end can be tremendous and fulfilling as the volunteers get to be a part of the service dog’s life.​</p>
        <p>Our Puppy Raising Program is separated into 2 stages: Puppy Raiser and Boarder. The requirements, trainings and volunteering period for each stage varies. Temporary home families are also important as they act as volunteer backups.</p>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/21055356_1536008969795344_5938615856101546963_o.jpg" className='max-w-md mx-auto'/>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/26731617_1670223526373887_7920939019853532666_n.jpg" className='py-4 max-w-md mx-auto'/>
        <p>Below are descriptions of each dog raising stage to help volunteers decide which program is most suitable for them. </p>

        <h3 className='text-green-500'>Puppy Raiser</h3>
        <p>A puppy raiser’s volunteering period will be 12-16 months of time. Puppies at 8 weeks old will be brought home by puppy raisers to provide care for him/her until they reach approximately 14 months old. Aside from basic care, Puppy raisers will also provide socialization training (such as adapting to people, other dogs/animals, environment, etc.), basic obedience training, and toilet training (at a specific time and place).</p>
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
      
        <div className='bg-green-500 text-white'><Link href='/services/fostering'>
          <Links>Puppy Raiser / Boarder / Temporary Home Program</Links>
        </Link></div>
      
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
