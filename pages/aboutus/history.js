import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Index() {
  return (
    <section className="orange">

      <h2>History</h2>
      <p>
        Service animals and guide dogs have been referenced as early as the mid-16th  century. However, the first guide dog training school was established during World War I, to aid German military veterans who lost their vision as a result of the war. Interest in service dogs had become globally widespread thanks to Dorothy Eustis and Morris Frank, who trained the first four guide dogs in the UK. In 1934, the Guide Dogs for the Blind Association began operation in the UK, while the Seeing-Eye Program was kickstarted in the US soon after.
      </p>
      <p>
        The Hong Kong Guide Dog Association is the first institution in Hong Kong’s history to provide guide dog services. In the 1970s, two guide dogs were introduced to two visually impaired persons in Hong Kong by the sponsorship of a foreign institution. However due to the lack of local assistance in Hong Kong at that time, guide dogs were no longer seen by Hong Kong people after two guide dogs had passed away as a result of traffic accident and natural causes respectively.
      </p>
      <p>
        Luke Gosling OAM, MHR who was elected as the Federal Government (House of Representatives) as the Australian Labor Party Member for Solomon – Darwin & Palmerston in the Northern Territory, first assisted Guide Dogs Victoria when he was four years of age.
      </p>
      <p>
        The photo below is Luke saying goodbye to yellow female guide dog Winta before she headed off for her new life as one of the first guide dogs in Hong Kong in 1975. The Guide Dog Instructor (in checked pants) is Luke’s proud dad John.
      </p>
      <figure>
        <img src="https://www.guidedogs.org.hk/wp-content/uploads/2020/09/17015813_1356418367754406_8895513629618830718_o.jpg" alt="A child kneeling in front of a dog with a guide dog's harness."/>
        <figcaption>Photo shared by the Gosling family</figcaption>
    </figure>
      
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navheader/>
      <Sidebar>
        <Links>
          <Link href='/aboutus'>
            <a>About Us</a>
          </Link>
        </Links>
        <div style={{'background-color':'orange', 'color':'white'}}><Links>
          <Link href='/aboutus/history'>
            <a>History</a>
          </Link>
        </Links></div>
        <Links>
          <Link href='/aboutus/awards'>
            <a>Honour and Awards</a>
          </Link>
        </Links>
        <Links>
          <Link href='/aboutus/management'>
            <a>Management Board Members, Associate Members and Honorary Advisors</a>
          </Link>
        </Links>
        <Links>
          <Link href='/aboutus/sponsors'>
            <a>Sponsors and Supporters</a>
          </Link>
        </Links>
        <Links>
          <Link href='/aboutus/reports'>
            <a>Annual and Financial Report</a>
          </Link>
        </Links>
      </Sidebar>
      <div>{page}</div>
    </Layout>
  )
}
