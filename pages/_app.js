import '../styles/global.css'
import NavBar from "../components/Navbar/Navbar"

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
