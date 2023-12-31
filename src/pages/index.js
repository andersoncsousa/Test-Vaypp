import Footer from '@/Components/Footer/Footer';
import Navbar from '@/Components/Navbar/Navbar';
import BannerPrincipal from '@/Components/BannerPrincipal/BannerPrincipal';
import Line from '@/Components/Line/Line';
import Head from 'next/head';
import SecondContent from '@/Components/SecondContent/SecondContent';
import ThirdContent from '@/Components/ThirdContent/ThirdContent';
import FourthContent from '@/Components/FourthContent/FourthContent';
import RangeHelp from '@/Components/RangeHelp/RangeHelp';

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
        <SecondContent />
        {/* <Line /> */}
        <ThirdContent />
        {/* <Line /> */}
        <FourthContent />
        <RangeHelp />
      </main>
      <Footer />
    </>
  );
}
