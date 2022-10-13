import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Index() {
  return (
    <section className="green">
      <h2>Puppy Raiser / Boarder / Temporary Home Program</h2>
        <p>Puppy raisers and boarders play significant roles for puppies and for HKGDA. They are volunteer roles that require commitment, time and dedication, however, the reward in the end can be tremendous and fulfilling as the volunteers get to be a part of the service dog’s life.​</p>
        <p>Our Puppy Raising Program is separated into 2 stages: Puppy Raiser and Boarder. The requirements, trainings and volunteering period for each stage varies. Temporary home families are also important as they act as volunteer backups.</p>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/21055356_1536008969795344_5938615856101546963_o.jpg"/>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/26731617_1670223526373887_7920939019853532666_n.jpg"/>
        <p>Below are descriptions of each dog raising stage to help volunteers decide which program is most suitable for them. </p>

        <h3>Puppy Raiser</h3>
        <p>A puppy raiser’s volunteering period will be 12-16 months of time. Puppies at 8 weeks old will be brought home by puppy raisers to provide care for him/her until they reach approximately 14 months old. Aside from basic care, Puppy raisers will also provide socialization training (such as adapting to people, other dogs/animals, environment, etc.), basic obedience training, and toilet training (at a specific time and place).</p>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
        <Navheader/>
      <Sidebar>
       <Links>
          <Link href='/services'>
            <a>Guide Dogs</a>
          </Link>
        </Links>
         <Links>
          <Link href='/services/breeding'>
            <a>Breeding Program</a>
          </Link>
        </Links>
        {/* Add accent color to active link */}
        <div style={{'background-color':'green', 'color':'white'}}><Links>
          <Link href='/services/fostering'>
            <a>Puppy Raiser / Boarder / Temporary Home Program</a>
          </Link>
        </Links></div>
        <Links>
          <Link href='/services/training'>
            <a>Guide Dog Training</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/matching'>
            <a>Matching With User</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/aftercare'>
            <a>Aftercare Services</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/adoption'>
            <a>Guide Dogs Adoption</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/welfare'>
            <a>Animal Welfare</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/education'>
            <a>Public Education</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/aai'>
            <a>Animal Assisted Interventions (AAI)</a>
          </Link>
        </Links>
      </Sidebar>
      <div>{page}</div>
    </Layout>
  )
}
