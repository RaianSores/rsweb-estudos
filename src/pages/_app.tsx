import React from 'react';
import Footer from '../components/Footer/Footer'

import '../styles/global-styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      <Footer />
    </>
  )
}

export default MyApp
