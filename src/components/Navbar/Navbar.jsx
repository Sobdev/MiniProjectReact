import './NavBar.css'
import ToDo from './../../assets/ToDo.png'

const NavBar = () => {
    return (
        <header className='NavBar'>
            <img src={ToDo} alt="Logo" />
            <p><h1>ToDo</h1></p>
        </header>
    )
}

export default NavBar