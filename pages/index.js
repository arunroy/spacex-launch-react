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
        <p>Below are the SpaceX</p>
        <Filter/>
        { data.map( (mission, key) => {
          return <MissionTile id = { key } data = { mission } />
        })}
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  //Fetch data from the API
  const res = await fetch("https://api.spaceXdata.com/v3/launches?limit=5");
  const data = await res.json();

  return { props: { data } };
}