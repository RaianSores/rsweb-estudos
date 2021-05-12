import Head from 'next/head'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mindset | Technology</title>
      </Head>
      <Navbar />
      <div>
      </div>
      
      <Footer />   
    </div>
  )
}