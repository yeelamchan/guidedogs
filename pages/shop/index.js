import Layout from '../../components/shop'
import Navheader from '../../components/navheader'
import Link from 'next/link'

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function Page(props) {
  const products = props.products;
  return (
    <div>
        {products.map(product =>
          <Link href={`/shop/product/${product.slug}`}>
            <a key={product.id}>
              <img src={product.image}/>
              <p>{product.name}</p>
              <span style={product.onsale ? {"text-decoration": "line-through"} : {"text-decoration": "none"}}>${product.price.old_price}</span>
              <span style={product.onsale ? {"font-weight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${product.price.new_price}</span>
            </a>
          </Link>
        )}
    </div>
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
