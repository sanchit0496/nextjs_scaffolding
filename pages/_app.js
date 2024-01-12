import '../styles/global.css'
import NavBar from "../components/Navbar/Navbar"
import TailwindButton from "../components/TailwindButton/TailwindButton"

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <br></br>
      <TailwindButton>Login</TailwindButton>
    </div>
  )
}
export default App
