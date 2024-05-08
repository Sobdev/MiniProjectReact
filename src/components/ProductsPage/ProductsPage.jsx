import './ProductsPage.css'
import productsData from './../../data/products.json'
import { useState } from "react"

import ProductsList from '../ProductsList/ProductsList'
import NewProductForm from '../NewProductForm/NewProductForm'

const ProductsPage = () => {

    const [products, setProducts] = useState(productsData)

    const handleProductRemove = productIdToDelete => {
        const productsAfterDeletion = products.filter(eachProduct => eachProduct.id != productIdToDelete)
        setProducts(productsAfterDeletion)
    }

    const handleProductAddition = newProduct => {
        const newProducts = [newProduct, ...products]
        setProducts(newProducts)
    }

    return (
        <div className="ProductsPage">

            <h1>Productos</h1>

            <hr />

            <NewProductForm
                handleProductAddition={handleProductAddition}
            />

            <hr />

            <ProductsList
                products={products}
                handleProductRemove={handleProductRemove}
            />

        </div>
    )
}

export default ProductsPage