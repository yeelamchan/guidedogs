import Layout from '../../../components/product'
import Navheader from '../../../components/navheader'
import fsPromises from 'fs/promises';
import path from 'path'

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const paths = objectData.products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false
  };
}

// Fetching data from the JSON file
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  const productData = objectData.products.find((product) =>
    product.slug === params.slug)

  return {
    props: productData
  }
}

export default function Page(props) {
  return (
    <section>
      <img src={props.image}/>
      <div className="info">
        <h4>{props.name}</h4>
        <span style={props.onsale ? {"text-decoration": "line-through"} : {"text-decoration": "none"}}>${props.price.old_price}</span>
        <span style={props.onsale ? {"font-weight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${props.price.new_price}</span>
      </div>
    </section>
  )
}



Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navheader/>
      {page}
    </Layout>
  )
}