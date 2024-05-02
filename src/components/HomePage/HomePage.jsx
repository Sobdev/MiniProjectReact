import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductsList from "../ProductsList/ProductsList"
import { Route, Routes } from 'react-router-dom'
import ProductDetailPage from "../ProductDetailPage/ProductDetailPage"
import './HomePage.css'
import NotFoundPage from "../NotFoundPage/NotFoundPage"
import AboutMe from "../AboutMe/AboutMe"
import ProductSelectedDetails from '../ProductSelectedDetails/ProductSelectedDetails'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />
                <Routes>
                    <Route path='/' element={<ProductsList />} />
                    <Route path='/Products' element={<ProductsList />} />
                    <Route path='/ProductSelectedDetails/:productId' element={<ProductSelectedDetails />} />
                    <Route path='/AboutMe' element={<AboutMe />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>

        </div>
    )
}

export default HomePage