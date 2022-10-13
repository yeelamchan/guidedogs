import Layout from '../../components/layout'
import Navheader from '../../components/navheader'
export default function Page() {
  return (
    <section className="orange">
      
    </section>
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
