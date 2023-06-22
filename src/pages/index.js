import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import BannerPrincipal from '@/Components/BannerPrincipal/BannerPrincipal';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vaypp</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" type="image/png" sizes="16x16"  href="favicon.ico" />
      </Head>
        <Navbar />
      <main>
        <BannerPrincipal />
      </main>
      <Footer />
    </>
  );
}
