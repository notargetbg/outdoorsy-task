import Head from 'next/head';

import { RentalsProvider } from '../core/contexts/RentalsContext';
import RentalsSearch from '../core/components/containers/RentalsSearch/RentalsSearch';

export default function Home() {
  return (
    <>
      <Head>
        <title>Outdoorsy - Search List</title>
        <meta name='description' content='Outdoorsy rentals search list' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    
      <RentalsProvider>
        <RentalsSearch />
      </RentalsProvider>
    </>
  );
}
