import Layout from '../components/layout'
import Navheader from '../components/navheader'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
      <main>
        <div className="carousel">
      <ImageSlider slides={SliderData} />
      </div>
      <div className="row">
        <div className="rowContent">
          <Link href="https://www.guidedogs.org.hk/shop/">
            <a>
              <Image
                priority
                src="/ic_eshop.jpg"
                height={170}
                width={186}
                alt={"IGDF"}
              />
            </a>
          </Link>
          <div className="rowText">E-SHOP</div>
        </div>
        <div className="rowContent">
          <Link href="https://www.guidedogs.org.hk/support-us/#tab_volunteer-program">
            <a>
              <Image
                priority
                src="/ic_donate.jpg"
                height={170}
                width={186}
                alt={"AAI"}
              />
            </a>
          </Link>
          <div className="rowText">DONATE</div>
        </div>
        <div className="rowContent">
          <Link href="https://www.guidedogs.org.hk/support-us/#tab_donation-and-sponsorship">
            <a>
              <Image
                priority
                src="/ic_volunteer.jpg"
                height={170}
                width={186}
                alt={"AAII"}
              />
            </a>
          </Link>
          <div className="rowText">VOLUNTEER</div>
        </div>
      </div>
      <div className="middleContent">
        <h2>Journey of A Guide Dog</h2>
        <p>
          Do you know how a guide dog is trained? Here’s a short clip that
          explains the life of a guide dog and its training stages. Special
          thanks to Link Together Initiatives for sponsoring the video
          production.
        </p>
      </div>
      <div className="videoFrame">
        <iframe
          title="導盲犬的一生 Journey of a Guide Dog"
          width="1020"
          height="574"
          src="https://www.youtube.com/embed/VTZmTK0co5Y?feature=oembed"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""
        ></iframe>
      </div>
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