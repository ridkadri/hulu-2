import Head from 'next/head'
import Header from '../components/Header';
import Navbar from '../components/Nav';


const Home = () => (
  <div>
    <Head>
      <title>Hulu 2.0</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Header/>
      <Navbar/>
     {/**Results */}

  </div>
)

export default Home
