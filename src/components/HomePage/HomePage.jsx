import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import StudentsList from "../StudentsList/StudentsList"

import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />
                <StudentsList />
            </main>
        </div>
    )
}

export default HomePage