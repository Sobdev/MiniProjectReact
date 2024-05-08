import reactLogo from './../../assets/react.svg'
import navicon from './../../assets/navicon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <div className='buttons'>
                    <img src={navicon} alt="Navicon" className='navicon' />
                    <Link to={'/'}>
                        <h1>IronShop</h1>
                    </Link>
                </div>
                <img src={reactLogo} alt="Logotipo" className='logo' />
            </nav>
        </div>
    )
}

export default Navbar