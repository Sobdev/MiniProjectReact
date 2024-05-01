import Footer from "../Footer/Footer"
import MobilesList from "../MobilesList/MobilesList"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
// import MobilesRow from "../MobilesRow/MobilesRow"

import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />
                <MobilesList />
            </main>
        </div>
    )
}

export default HomePage