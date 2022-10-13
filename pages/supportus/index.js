import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Links from '../../components/links'
import Link from 'next/link'
import Navheader from '../../components/navheader'
export default function Page() {
  return (
    <section className="purple">
      <h2>Volunteer Program</h2>
        <p>Placeholder</p>
    </section>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
        <Navheader/>
      <Sidebar>
       {/* Add accent color to active link */}
        <div style={{'backgroundColor':'purple', 'color':'white'}}><Links>
          <Link href='/supportus'>
            <a>Volunteer Program</a>
          </Link>
        </Links></div>
        <Links>
          <Link href='/services/general'>
            <a>General Volunteering</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/seminar'>
            <a>Guide Dog Seminar Speakers</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/raising'>
            <a>Puppy Raising & Boarder Program</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/donation'>
            <a>Donation and Sponsorship</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/sticker'>
            <a>Welcome Sticker and Donation Box</a>
          </Link>
        </Links>
        <Links>
          <Link href='/services/applications'>
            <a>Applications & Downloads</a>
          </Link>
        </Links>
      </Sidebar>
      <div>{page}</div>
    </Layout>
  )
}
