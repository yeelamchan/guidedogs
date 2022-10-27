import Layout from '../../../components/product'
import Navheader from '../../../components/navheader'
import fsPromises from 'fs/promises';
import path from 'path'
import { Tab } from '@headlessui/react'
import React, { useState } from 'react';
import Image from 'next/future/image'
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

export function changeImage(selection) {
  this.setState({value: selection.target.value})
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

  return (
  <main>
    <Image src={image}
      width={2000}
      height={2000}
      className="mx-auto sm:float-left max-w-[80%] sm:max-w-sm"
      />
    <section>
      <h2>{props.name}</h2>

      {/* Display prices with styling */}
      <span style={props.onsale ? {"textDecoration": "line-through"} : {"textDecoration": "none"}}>${props.price.old_price}</span>
      <span style={props.onsale ? {"fontWeight": "bold"} : {"display": "none"}}>&nbsp;&nbsp;${props.price.new_price}</span>

      <p>{props?.information?.blurb}</p>

      {/* Display selection list if options exist */}
      <form>
      <div style={props?.type ? {"display": "block"} : {"display": "none"}}>
        <label htmlFor="type">Type&nbsp;&nbsp;</label>
        <select
          id="type"
          name="type"
          disabled={props?.type ? false : true}
          onChange={(e) => {changeImage(e.target.value)}}
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
        <select id="size" name="size" disabled={props?.size ? false : true}>
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
      </form>
    </section>

    {/* show tabs if the information exists */}
    <aside>
      <Tab.Group>
        <Tab.List>
          <Tab disabled={props?.information?.description ? false : true}>Description</Tab>
          <Tab disabled={props?.information?.additional_information ? false : true}>Additional Information</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>{props?.information?.description}</Tab.Panel>
          <Tab.Panel>
            <table>
              {/* Display table row only if additional information exists */}
              <tr style={props?.information?.additional_information?.type ? {} : {"display": "none"}}>
                <td>Types</td>
                <td>{props?.information?.additional_information?.type}</td>
              </tr>
              <tr style={props?.information?.additional_information?.size ? {} : {"display": "none"}}>
                <td>Sizes</td>
                <td>{props?.information?.additional_information?.size}</td>
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
    <Layout>
      <Navheader/>
      {page}
    </Layout>
  )
}