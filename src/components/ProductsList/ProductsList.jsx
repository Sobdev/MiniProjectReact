import ProductRow from "../ProductRow/ProductRow"

import './ProductsList.css'

const ProductsList = ({ products, handleProductRemove }) => {

    return (
        <div className="ProductsList">

            <table>

                <thead>
                    <tr>
                        <th>Artículo</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Puntuación</th>
                        <th>Detalles</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
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