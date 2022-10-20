import Layout from '../../components/shop'
import Navheader from '../../components/navheader'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

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

const styleDialog = {
  position:'fixed',
  'background-color':'grey',
  top: '50%',
  left:'50%',
  transform: 'translate(-50%, -50%)'
}



export default function Page(props) {
  const products = props.products;
  const [isOpen, setIsOpen] = useState(false)
  function productInfo(selection) {

    const productNames = products.map((product) => ({
      name: product.name
    }));
    console.log(productNames)
  
    const productData = productNames.find((productName) =>
    productName.name === selection)
  
      console.log(productData)
    
  }
  
  const title = 'title'
  
  return (
    <main>
      {products.map(product =>
        <section key={product.id}>
          <Link href={`/shop/product/${product.slug}`}>
            <a>
              <img src={product.image}/>
            </a>
          </Link>
          <button onClick={productInfo(product.name)}>Quick View</button>

          <p>{product.name}</p>

          <span style={product.onsale ? {"text-decoration": "line-through"} : {"text-decoration": "none"}}>${product.price.old_price}</span>
          <span style={product.onsale ? {"font-weight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${product.price.new_price}</span>
        </section>
      )}

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        style={styleDialog}
      >
        <Dialog.Panel>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </main>
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
