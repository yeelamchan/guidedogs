import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Page() {
  return (
    <section className="green">
      <h2>Guide Dogs Adoption</h2>
        <p>Placeholder</p>
    </section>
  )
}

Page.getLayout = function getLayout(page) {
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
        <Links>
          <Link href='/services/fostering'>
            <a>Puppy Raiser / Boarder / Temporary Home Program</a>
          </Link>
        </Links>
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
        {/* Add accent color to active link */}
        <div style={{'backgroundColor':'green', 'color':'white'}}><Links>
          <Link href='/services/adoption'>
            <a>Guide Dogs Adoption</a>
          </Link>
        </Links></div>
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
