import '../styles/global.css'

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
