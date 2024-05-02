import './Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <Link to={'/Products'}>Product</Link>
                    </li>
                    <li>
                        <a href="#">Add product</a>
                    </li>
                    <li>
                        <Link to={'/AboutMe'}>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar