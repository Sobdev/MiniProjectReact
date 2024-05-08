import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Bienvend@ a la weg</h1>
            <hr />
            <Link to={'/productos/listado'} >Ver productos</Link>
        </div >
    )
}

export default HomePage