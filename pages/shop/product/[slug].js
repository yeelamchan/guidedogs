import Navheader from '../../../components/navheader'
import fsPromises from 'fs/promises';
import path from 'path'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image'
export async function getStaticPaths() {
  // read products.json by path
  const filePath = path.join(process.cwd(), 'products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  // map each product's slug and create a list of paths
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
  // read products.json by path
  const filePath = path.join(process.cwd(), 'products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  // if page slug matches the slug of the product, return product data
  const productData = objectData.products.find((product) =>
    product.slug === params.slug)

  return {
    props: productData
  }
}

export default function Page(props) {  
  const [image, setImage] = useState(props.image)
  function changeImage(type) {
    if (type === "not_an_option") {
      setImage(props.image)
    } else {
      try {
        setImage(props.type_images[type])
      } catch {
        setImage(props.image)
      }
    }
  }

  const [quantity, setQuantity] = useState(1)

  return (
  <main className='max-w-screen-xl mx-auto px-4'>
    <Head>
      <title>{props.name}</title>
    </Head>
    <Image src={image}
      width={2000}
      height={2000}
      className="mx-auto sm:float-left w-[80%] sm:w-[45%] sm:max-h-[50vh] object-scale-down"
      />
    <section className='p-4 overflow-hidden'>
      <h2>{props.name}</h2>

      {/* Display prices with styling */}
      <span style={props.onsale ? {"textDecoration": "line-through"} : {"textDecoration": "none"}}>${props.price.old_price}</span>
      <span style={props.onsale ? {"fontWeight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${props.price.new_price}</span>

      <p>{props?.information?.blurb}</p>

      {/* Display selection list if options exist */}
      <form  action='/send-data' method='post'>
      <div style={props?.type ? {"display": "block"} : {"display": "none"}} className='pb-2'>
        <label htmlFor="type">Type&nbsp;&nbsp;</label>
        <select
          id="type"
          name="type"
          disabled={props?.type ? false : true}
          onChange={(e) => {changeImage(e.target.value)}}
          className='border w-full md:w-1/2'
        >
          <option value="not_an_option">Choose an option</option>
          {props?.type?.map((type) => (
            <option
              key={type}
              value={type}
            >
              {type}
            </option>
          ))}
        </select>
      </div>

      <div style={props?.size ? {"display": "block"} : {"display": "none"}}>
        <label htmlFor="size">Size&nbsp;&nbsp;&nbsp;</label>
        <select
          id="size"
          name="size"
          disabled={props?.size ? false : true}
          className='border w-full md:w-1/2'>
          <option value="not_an_option">Choose an option</option>
          {props?.size?.map((size) => (
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
    </section>

    {/* show tabs if the information exists */}
    <aside className='clear-both sm:p-4'>
      <Tab.Group>
        <Tab.List className='mb-2 text-center md:text-left'>
          <Tab className='py-2 mr-4 hover:border-t-2 ui-selected:border-t-2 border-solid border-blue-500 transition-all disabled:hidden' disabled={props?.information?.description ? false : true}>Description</Tab>
          <Tab className='py-2 hover:border-t-2 ui-selected:border-t-2 border-solid border-blue-500 transition-all disabled:hidden' disabled={props?.information?.additional_information ? false : true}>Additional Information</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel><p>{props?.information?.description}</p></Tab.Panel>
          <Tab.Panel>
            <table className='w-full'>
              {/* Display table row only if additional information exists */}
              <tr style={props?.information?.additional_information?.type ? {} : {"display": "none"}}>
                <td className='px-2 align-top'>Types</td>
                <td className='px-1 pb-1'><p>{props?.information?.additional_information?.type}</p></td>
              </tr>
              <tr style={props?.information?.additional_information?.size ? {} : {"display": "none"}}>
                <td className='px-2 align-top'>Sizes</td>
                <td className='px-1'>{props?.information?.additional_information?.size}</td>
              </tr>
            </table>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </aside>
  </main>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <>
      <Navheader/>
      {page}
    </>
  )
}