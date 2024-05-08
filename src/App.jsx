import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import HomePage from './components/HomePage/HomePage'
import ProductsPage from './components/ProductsPage/ProductsPage'
import AboutPage from './components/AboutPage/AboutPage'
import ProductDetails from './components/ProductDetails/ProductDetails'

const App = () => {

  return (
    <div className="App">

      <Navbar />
      <Sidebar />

      <main className="main-content">

        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/productos/listado'} element={<ProductsPage />} />
          <Route path={'/productos/:product_id'} element={<ProductDetails />} />
          <Route path={'/productos/crear'} element={<h1>Formulario</h1>} />
          <Route path={'/sobre-mi'} element={<AboutPage />} />
        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App