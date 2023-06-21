import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import Banner from '@/Components/Banner/Banner';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Couto Store</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" type="image/png" sizes="16x16"  href="logo-white.png" />
      </Head>
      <Navbar /> 
      <main>
        <div>
          <Banner />
        </div>
      </main>
      <Footer />
    </>
  );
}
