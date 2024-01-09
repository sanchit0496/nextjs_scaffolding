import TailwindButton from '../components/TailwindButton/TailwindButton';
import '../styles/global.css'

const App = () => {
    return(
        <div>
            <div className="p-4 bg-blue-500 text-white">Hello, Tailwind!</div>
            <br></br>
            <TailwindButton>Login</TailwindButton>
        </div>
    )
}
export default App;