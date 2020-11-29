import Head from 'next/head';
import Filter from './components/Filter';
import MissionTile from './components/pattern/mission-tile';
import Layout, { siteTitle } from './components/layout.js';

export default function Home({ data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <Filter/>
          { data.map( (mission, key) => {
            return <MissionTile id = { key } data = { mission } />
          })}
        </div>
      </section>
      <section className="devCredits">
        <span>Developed by:</span>
        <a href="https://www.linkedin.com/in/arunkarthic">Arun Roy</a>
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  //Fetch data from the API
  const res = await fetch("https://api.spaceXdata.com/v3/launches?limit=100");
  const data = await res.json();

  return { props: { data } };
}