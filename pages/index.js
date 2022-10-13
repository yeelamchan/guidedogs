import Layout from '../components/layout'
import Navheader from '../components/navheader'

export default function Page() {
  return (
      <main>
        <p>Placeholder</p>
      </main>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navheader/>
      <div>{page}</div>
      
    </Layout>
  )
}