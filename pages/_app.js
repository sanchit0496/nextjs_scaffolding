import Button from '../components/Button/Button';
import '../styles/global.css'

const App = () => {
    return(
        <div>
            <div className="p-4 bg-blue-500 text-white">Hello, Tailwind!</div>
            <br></br>
            <Button>Login</Button>
        </div>
    )
}
export default App;