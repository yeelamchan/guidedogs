import Layout from '../../components/layout.js'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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

export default function Page(props) {
  const products = props.products;
  const [modal, setModal] = useState({show: false, data: null})

  async function productInfo(selection) {
    const productData = products.find((productName) =>
    productName.name === selection)
  
    setModal({show: true, data: productData})
    setImage(productData.image)
  }

  const [image, setImage] = useState(modal.data?.image)
  function changeImage(type) {
    if (type === "not_an_option") {
      setImage(modal.data?.image)
    } else {
      try {
        setImage(modal.data?.type_images[type])
      } catch {
        setImage(modal.data?.image)
      }
    }
  }

  const [quantity, setQuantity] = useState(1)
  
  return (
    <main className='max-w-screen-xl mx-auto'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4'>
      {products.map(product =>
        <section key={product.id} className='group'>
          <Link href={`/shop/product/${product.slug}`}>
              <Image src={product.image} width={2000} height={2000} className='h-[70%] w-[80%] object-cover mx-auto'/>
          </Link>
          <button
            key={product.id}
            onClick={() => productInfo(product.name)}
            className='w-full h-8 bg-slate-200 text-center opacity-0 group-hover:opacity-100 relative -top-8 transition-all duration-200'>
            Quick View
          </button>

          <p className='m-0 relative -top-8'>{product.name}</p>

          <span className='relative -top-8' style={product.onsale ? {"textDecoration": "line-through"} : {"textDecoration": "none"}}>${product.price.old_price}</span>
          <span className='relative -top-8' style={product.onsale ? {"fontWeight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${product.price.new_price}</span>
        </section>
      )}
      </div>

      <Dialog
        open={modal.show}
        onClose={() => setModal({show: false})}
        className="fixed h-screen w-screen inset-0 bg-neutral-900/50"
      >
        <Dialog.Panel className="bg-white absolute w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-screen">
          <Image
              src={image}
              width={2000}
              height={2000}
              className='object-fill mx-auto w-full sm:w-3/4 md:w-1/2 object-left-top md:float-left'
            />

          <Dialog.Title className='overflow-hidden pt-4 pl-4'>{modal.data?.name}</Dialog.Title>
          
          <Dialog.Description className='overflow-hidden px-4'>
            <span style={modal.data?.onsale ? {"textDecoration": "line-through"} : {"textDecoration": "none"}}>${modal.data?.price.old_price}</span>
            <span style={modal.data?.onsale ? {"fontWeight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${modal.data?.price.new_price}</span>

            <p>{modal.data?.information?.blurb}</p>
          
          <form>
            <div style={modal.data?.type ? {"display": "block"} : {"display": "none"}}>
              <label htmlFor="type">Type&nbsp;&nbsp;</label>
              <select
                id="type"
                name="type"
                disabled={modal.data?.type ? false : true}
                onChange={(e) => {changeImage(e.target.value)}}
              >
                <option value="not_an_option">Choose an option</option>
                {modal.data?.type?.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div style={modal.data?.size ? {"display": "block"} : {"display": "none"}}>
              <label htmlFor="size">Size&nbsp;&nbsp;&nbsp;</label>
              <select id="size" name="size" disabled={modal.data?.size ? false : true}>
                <option value="not_an_option">Choose an option</option>
                {modal.data?.size?.map((size) => (
                  <option
                    key={size}
                    value={size}
                  >
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className='mt-4'>
              <input type='button' value='-' className='border bg-gray-100 px-2 py-2' onClick={() => quantity != 1 ? setQuantity(quantity - 1) : setQuantity(1)}/>
              <input type="number" id="quantity" name="quantity" value={quantity} inputMode='numeric' className='border w-8 text-center py-2' onChange={(e) => setQuantity(e.target.value)}/>
              <input type='button' value='+' className='border bg-gray-100 px-2 py-2 mr-4' onClick={() => setQuantity(+quantity + 1)}/>

              <button type='submit' className='bg-orange-600 px-4 py-2 font-bold text-white'>Add To Cart</button>
            </div>
          </form>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </main>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
    <Head>
      <title>HKGDA - Shop</title>
    </Head>
      {page}
    </Layout>
  )
}
