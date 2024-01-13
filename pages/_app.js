import '../styles/global.css'
import NavBar from "../components/Navbar/Navbar"
import React from 'react';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <br></br>
    </div>
  )
}
export default App
