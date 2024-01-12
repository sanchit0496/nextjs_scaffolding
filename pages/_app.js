import TailwindButton from '../components/TailwindButton/TailwindButton';
import '../styles/global.css'
import NavBar from '../components/Navbar/Navbar';

const App = ({Component, pageProps}) => {
    return(
        <div>
            <NavBar />
            <Component {...pageProps} />
            <br></br>
            <TailwindButton>Login</TailwindButton>
        </div>
    )
}
export default App;