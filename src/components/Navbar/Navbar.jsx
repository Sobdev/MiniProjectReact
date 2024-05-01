import reactLogo from './../../assets/react.svg'
import navicon from './../../assets/navicon.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav>
                <div className='buttons'>
                    <img src={navicon} alt="Navicon" className='navicon' />
                    <h1>Students</h1>
                </div>
                <img src={reactLogo} alt="Logotipo" className='logo' />
            </nav>
        </div>
    )
}

export default Navbar