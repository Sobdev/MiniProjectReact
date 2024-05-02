import { useState } from "react"
import ProductRow from "../ProductRow/ProductRow"
import productsData from './../../data/products.json'

import './ProductsList.css'
import { Link } from "react-router-dom"

const ProductsList = () => {

    const [products, setProducts] = useState(productsData)

    const handleProductRemove = (productIdToDelete) => {
        const productsAfterDeletion = products.filter(eachProduct => eachProduct.id != productIdToDelete)
        setProducts(productsAfterDeletion)
    }

    return (
        <div className="ProductsList">
            <h1>Productos</h1>
            <hr />

            <table>

                <thead>
                    <tr>
                        <th>Artículo</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Puntuación</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
<<<<<<< HEAD

=======
>>>>>>> 803cff2b0392447172dbb6a309c2bb2c3634f774
                        products.map(eachProduct => {
                            return (
                                <ProductRow
                                    {...eachProduct}
                                    handleProductRemove={handleProductRemove}
                                    key={eachProduct.id}
                                />
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ProductsList