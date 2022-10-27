import Layout from '../../components/shop'
import Navheader from '../../components/navheader'
import Link from 'next/link'
import Image from 'next/future/image'
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
  backgroundColor:'white',
  top: '50%',
  left:'50%',
  transform: 'translate(-50%, -50%)'
  
}



export default function Page(props) {
  const products = props.products;
  const [modal, setModal] = useState({show: false, data: null})
  async function productInfo(selection) {
    const productNames = products.map((product) => ({
      name: product.name
    }));
  
    const productData = products.find((productName) =>
    productName.name === selection)
  
    setModal({show: true, data: productData})
  }
  
  return (
    <main>
      {products.map(product =>
        <section key={product.id}>
          <Link href={`/shop/product/${product.slug}`}>
            <a>
              <img src={product.image}/>
            </a>
          </Link>
          <button key={product.id} onClick={() => productInfo(product.name)}>Quick View</button>

          <p>{product.name}</p>

          <span style={product.onsale ? {"textDecoration": "line-through"} : {"textDecoration": "none"}}>${product.price.old_price}</span>
          <span style={product.onsale ? {"fontWeight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${product.price.new_price}</span>
        </section>
      )}
      <Dialog
        open={modal.show}
        onClose={() => setModal({show: false})}
        className="bg-gray"
      >
        <Dialog.Panel className="mx-auto">
          <Dialog.Title>{modal.data?.name}</Dialog.Title>
          <Image
          src={modal.data?.image}
          width={200}
          height={200}
          />
          <Dialog.Description>
            {modal.data?.information?.blurb}
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
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
