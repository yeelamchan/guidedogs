import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Index() {
  return (
    <section className="green">
      {/* Add accent color to headings */}
      <style jsx>{`
        @media only screen and (min-width: 768px) {img {
            width: 250px;
            float:left;
        }}

        img {
            display:block;
            margin:auto;
        }

        div {
            overflow:hidden;
            padding-left:1em;
        }
        
        h2, h3 {
          color:green;
        }
      `}</style>
      <h2>Guide Dogs</h2>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/DSC08592-683x1024.jpg" alt="使用者及其黃色導盲犬，笑著向前走 User and his yellow guide dog walk forward smiling"/>
        <div>
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

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
        <Navheader/>
      <Sidebar>
        {/* Add accent color to active link */}
        <div style={{'background-color':'green', 'color':'white'}}><Links>
          <Link href='/services'>
            <a>Guide Dogs</a>
          </Link>
        </Links></div>
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
