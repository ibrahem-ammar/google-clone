import Head from 'next/head'
import Footer from '../components/index/Footer'
import Header from '../components/index/Header'
import Body from '../components/index/Body'


export default function Home() {
  return (
    <div className="flex flex-col items-center  h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Search Using Google" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
    {/* header */}
    <Header />

    {/* body */}
    <Body />
    
    {/* footer */}
    <Footer />

    </div>
  )
}
