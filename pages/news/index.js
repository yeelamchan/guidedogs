import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import Links from "../../components/links";
import Link from "next/link";
import Navheader from "../../components/navheader";

export default function Index() {
  return (
    <section className="dark aquamarine">
      <h2>sfsfds</h2>
    </section>
  );
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navheader />
      <div className="content">
      <Sidebar>
        <div style={{ "background-color": "#00aca9", 'color': "white",  }}>
          <Links>
            <Link href="/news">
              <a>EVENTS &amp; LATEST</a>
            </Link>
          </Links>
        </div>
        <Links>
          <Link href="/news">
            <a>NEWSLETTER</a>
          </Link>
        </Links>
        <Links>
          <Link href="/news/storybook">
            <a>CHEEKY PAWS STORYBOOK</a>
          </Link>
        </Links>
        <Links>
          <Link href="/news/training">
            <a>HOW TO TRAIN A GUIDE DOG?</a>
          </Link>
        </Links>
        <Links>
          <Link href="/news/aai">
            <a>ANIMAL ASSISTED INTERVENTION DOGS</a>
          </Link>
        </Links>
        <Links>
          <Link href="/news/faq">
            <a>FAQ</a>
          </Link>
        </Links>
      </Sidebar>
      <div>{page}</div>
      </div>
    </Layout>
  );
};
