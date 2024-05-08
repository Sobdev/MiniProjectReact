import { Link, useParams } from 'react-router-dom'
import productsData from './../../data/products.json'
import './ProductDetails.css'

const ProductDetails = () => {

    const { product_id } = useParams()

    const foundProduct = productsData.find(elm => elm.id === Number(product_id))

    return (
        <div className="ProductDetails">
            <h1>Detalles de {foundProduct.title}</h1>
            <hr />
            <p>{foundProduct.description}</p>
            <hr />
            <p>Precio {foundProduct.price}</p>
            <p>{foundProduct.stock > 50 ? '🟢 Stock de sobra' : '🔴 Bajo stock'}</p>
            <hr />

            {
                foundProduct.images.map(imageUrl => {
                    return <img src={imageUrl} alt={foundProduct.title} style={{ width: 200 }} />
                })
            }

            <hr />

            <Link to={'/productos/listado'} >Volver a productos</Link>
        </div >
    )
}

export default ProductDetails