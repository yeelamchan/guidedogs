import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Page() {
  return (
    <section className="green">
      <style jsx>{`
        div {column-count:2;}

        div > img {max-width:100%}
      `}</style>
      
      <h2>Breeding Program</h2>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2019/09/Puppy-Raiser-whelping.jpg"/>
        <p>
        Since HKGDA’s establishment until 2016, we have been importing puppies from different guide dog schools all over the world to expand the bloodlines of guide dogs in Hong Kong. In 2017, we have started our own breeding program and established our volunteer litter support group.  We are cooperating with guide dog schools worldwide and share breeding data with each other. Until 2020, HKGDA successfully bred 10 litters and 50 puppies locally. ​
        </p>
        <p>
        We are looking for volunteers to become breeding stock holders. For more information, please email info@guidedogs.org.hk.
        </p>
        <div>
          <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/Winci-Wisdom-Eve-Wong-Wifi-1024x683.jpg"/>
          <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/02/BB-Ivy-with-her-V-litter-puppies-1024x684.jpg"/>
        </div>
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
         {/* Add accent color to active link */}
        <div style={{'backgroundColor':'green', 'color':'white'}}><Links>
          <Link href='/services/breeding'>
            <a>Breeding Program</a>
          </Link>
        </Links></div>
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
