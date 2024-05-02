import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Add product</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar