import Head from 'next/head';
import Filter from './components/Filter';
import MissionTile from './components/pattern/mission-tile';
import Layout, { siteTitle } from './components/layout.js';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function getData (launchStatus, landStatus, launchYear) {
    let apiUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
    if(!!launchStatus) apiUrl +=  `&launch_success=${launchStatus}`;
    if(!!landStatus) apiUrl +=  `&land_success=${landStatus}`;
    if(!!launchYear) apiUrl +=  `&launch_year=${launchYear}`;
    console.log(apiUrl);
    const { data, error } = useSWR(apiUrl, fetcher);

    return {
        flightData: data,
        isLoading: !error && !data,
        isError: error
    }
};

export default function Home({ data }) {
  const [ spaceXData, setSpaceXData ] = useState(data); 
  const [ launchStatus, setLaunchStatus ] = useState(null);
  const [ landStatus, setLandStatus ] = useState(null);
  const [ launchYear, setLaunchYear ]  = useState(null);

  const { flightData, isLoading, isError } = getData(launchStatus, landStatus, launchYear);

  useEffect(() => {
    setSpaceXData(flightData);
  });

    return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className='app-container'> 
          <div className='filter-container'>
            <Filter onClickFilter = {(year) => { setLaunchYear(year) }}
                    onLaunchStatusFilter = {(status) => { setLaunchStatus(status) }}
                    onLandStatusFilter = {(status) => { setLandStatus(status) }}/>
          </div>
          <div className='col-container'>
            { spaceXData && spaceXData.map( (mission, key) => {
              return <MissionTile id = { key } data = { mission } />
            })}
          </div>
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